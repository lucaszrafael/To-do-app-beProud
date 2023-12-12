import "./gera_form.html"
import {check} from "meteor/check";
import "/components/both/forms/validar_form.js"
import "/components/both/forms/inputs/input_select/input_select.js"

/**
 * Gera um determinado formulário com base no objeto de form recebido.
 *
 * Ex.:
 *
 * Form = {
 *     formId: "form_contato",
 *     validateOnBlur: true,
 *     btn_label: "Enviar",
 *     btn_width: "100%",
 *     fields: [
 *         {type: "text", name: "nome", label: "Nome", placeholder: "Informe seu nome",
 *             validation:{
 *                 optional: false,
 *                 type: String,
 *                 min: 2,
 *                 max: 30,
 *                 //No custom é possivel validar qualquer coisa,
 *                 custom: (field_name, field_value) => {
 *                 }
 *             }}
 *     ]}
 *
 * Caso quiser dar um valor especifico para um campo de edição, usar o seguinte código:
 * ObjetoFormFormulario.fields[0].value = "Valor do campo" //Seta o valor do campo. 0 é a posição do campo no formulário
 *
 * Sempre que for um formulário de edição, adicionar "editar" no objeto do formulário no helper
 * ex.:  form(){
 *     ObjetoFormFormulario
 *     Object.assign(ObjetoFormFormulario,{editar: true})
 *     return ObjetoFormFormulario
 * }
 */


Template.gera_form.helpers({
    "phone": () => {
        if (Template.currentData().type === "phone"){
            return true
        }
    },
    "text": () => {
        if (Template.currentData().type === "text"){
            return true
        }
    },
    "data": () => {
        if (Template.currentData().type === "data"){
            return true
        }
    },
    "price": () => {
        if (Template.currentData().type === "price"){
            return true
        }
    },
    "email": () => {
        if (Template.currentData().type === "email"){
            return true
        }
    },
    "textarea": () => {
        if (Template.currentData().type === "textarea"){
            return true
        }
    },
    "select": () => {
        if (Template.currentData().type === "select"){
            return true
        }
    },
    "password": () => {
        if (Template.currentData().type === "password"){
            return true
        }
    },
    "html_area": () => {
        if (Template.currentData().type === "html_area"){
            return true
        }
    },
    "file": () => {
        if (Template.currentData().type === "file"){
            return true
        }
    },
    "cep": () => {
        if (Template.currentData().type === "cep"){
            return true
        }
    },
    "radio": () => {
        if (Template.currentData().type === "radio"){
            return true
        }
    },
    "checkbox": () => {
        if (Template.currentData().type === "checkbox"){
            return true
        }
    },

});
Template.gera_form.events({
    "submit .form": function (event, template) {

        event.preventDefault()
        let form = Template.currentData()

        let formId = $(event.target).attr("id")

        //Por conta de estar esperando a submissão de uma classe, verifica se está controlando o formulário respectivo à submissão
        if(form.formId !== formId) return;

        //Pega os dados de todos os campos do formulario
        let fields = Template.currentData().fields
        let data_validation = [] //Armazena os dados no formato de validação
        let doc = [] //Armazena os dados para uso posterior
        _.each(fields, (f) => {

            if(f.type === "radio"){
                doc[f.name] = $("[name='" + f.name + "']:checked").val()
                data_validation.push({name: f.name, value: doc[f.name]})
                console.log(doc[f.name])
            } else if(f.type === "checkbox"){
                let array = []
                $.each($("input[name=" + f.name + "]:checked"), function(){
                    array.push($(this).val());
                });

                doc[f.name] = array
                data_validation.push({name: f.name, value: array})
            } else{
                doc[f.name] = $("#" + f.name).val()
                data_validation.push({name: f.name, value: $("#" + f.name).val()})
            }


        })

        //Faz a validação
        try {
            var result = ValidarFormTodosCampos(form, data_validation)
        } catch (error) {
            console.error(error.error)
        } finally {
            if(result === true){

                let promise = new Promise((resolve, reject) => {


                    //Verifica se há campo do tipo file. Se tiver, faz o upload
                    let have_file = _.find(fields, (f) => {
                        if (f.type === "file") {
                            return f
                        }
                    });

                    if(!have_file){
                        resolve(doc)
                    } else{
                        //Caso contrário, retorna

                        for (var i = 0; i < fields.length; i++){
                            let f = fields[i]
                            if(f.type === "file"){
                                upload_file(f.name).then((value) => {

                                    doc[f.name] = value
                                    if(i === fields.length){
                                        resolve(doc) //Caso dê certo
                                    }
                                })

                            }

                        }
                    }


                    // reject(throw new Error("Erro")) //Caso dê erro
                })

                var template = Template.currentData()

                promise.then((value) => {
                    if(value){
                        //Se o objeto do form não tiver nenhum botão associado, chamada a função OnSubmit
                        if(!template.buttons){

                            template.onSubmit(doc)
                        } else{
                            //Caso contrário, chama a função do botão que tiver o tipo submit
                            // let buttons_submit = $("[type='submit']") //Pega todos os botões com submit
                            //
                            //
                            // console.log($("[type='submit']"))
                            let buttons = template.buttons

                            let submit_button = _.find(buttons, (b) => {
                                if(b.type === "submit"){
                                    return b
                                }

                            })
                            submit_button.function(doc)

                        }
                    }

                })





            }
        }


    },

    //Faz as validações Blur do campo respectivo ao blur
    "blur .input": (event) => {

        let form = Template.currentData()
        if(!form.validateOnBlur) return

        //Pega as configurações do campo
        let field_name = $(event.target).attr("name");

        let field_value = $(event.target).val()

        //Pega os dados de todos os campos do formulario e a configuração do campo
        var config;
        let fields = Template.currentData().fields
        let data = []

        _.each(fields, (f) => {
            data.push({name: f.name, value: $("#" + f.name).val()})
            if(f.name == field_name){
                config = f //Pega a config do campo
            }
        })
        //O tipo do campo configurado não for html_area, valida
        let field_type = config.type
        if(field_type !== "html_area"){ //
            ValidarFormCampo(form, field_name, config.type, field_value, data)
        }
    },
});



Template.gera_form.onRendered(function () {

});
Template.gera_form.onCreated(function () {


});

Template.gera_form.onDestroyed(function () {

});

function upload_file (input_name){
    let files = $("#" + input_name)[0].files

    console.log('Files')
    console.log(files)

    if (files && files[0]) {
        // We upload only one file, in case
        // multiple files were selected
        const upload = Images.insert({
            file: files[0],
            chunkSize: 'dynamic'
        }, false);

        let promise = new Promise((resolve, reject) => {

            upload.on('start', function () {
                // Session.set(input_name, this)
            });


            upload.on('end', function (error, fileObj) {
                if (error) {
                    reject(new Meteor.Error(error)) //Caso dê erro
                } else {
                    //Atualiza a logo no profile do usuário
                    resolve(fileObj._id) //Caso dê certo

                }
                // Session.set(input_name, false)
            });



        })

        upload.start();

        return promise.then((value)=> {
            return value
        })

        // console.log('Imagem Id')
        // console.log(imagemId)
        // return imagemId

    }
}



