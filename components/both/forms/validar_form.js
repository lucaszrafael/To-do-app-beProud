var moment = require('moment-timezone')

/**
 * //Valida um único campo. Pode ser usado em Blur ou em outros métodos, tanto no Client quanto no Server
 * @param form
 * @param field_name
 * @param field_type
 * @param field_value
 * @param form_data (Recebe os dados do formulário)
 * @returns {boolean}
 */
ValidarFormCampo = (form, field_name, field_type, field_value, form_data) => {


    console.log('Validando campo: ' + field_name)

    //Retorna o campo do formulário a ser validado
    let form_field = _.find(form.fields, (f) => {
        if(f.name === field_name){
            return f
        }
    })

    //Pego os dados de validação do campo
    let validation = form_field.validation


    //Valida o checkbox
    // console.log(`field_type`)
    // console.log(field_type)
    if(field_type === 'checkbox'){
        // console.log(`FIELD`)
        // console.log(field_name)
        // console.log(`FORM`)
        // console.log(form)
        //Se não for opcional, verifica se pelo menos uma opção foi escolhida
        if(validation.optional === false && field_value.length === 0){
            let msg = FormsMessages({_id: 'min_one_option', label: form_field.label}) //Pega a mensagem de erro
            if (Meteor.isClient){
                $("#alert_" + field_name).html(msg).show() //Apresenta
            }
            throw new Meteor.Error(msg)
        }
    }

    if(form_field.type === "html_area") return



    //Verifica se é obrigatório
    if(!validation.optional && !field_value){
        let msg = FormsMessages({_id: 'required', label: form_field.label}) //Pega a mensagem de erro
        if (Meteor.isClient){
            $("#alert_" + field_name).html(msg).show() //Apresenta
        }
        throw new Meteor.Error(msg)
    }
    //Verifica se o tipo do dado confere
    console.log(`field_value`)
    console.log(field_value)

    //
    // if(!Match.test(field_value, validation.type)){
    //
    //        let msg = FormsMessages({_id: 'type', label: form_field.label}) //Pega a mensagem de erro
    //
    //     if (Meteor.isClient){
    //         $("#alert_" + field_name).html(msg).show() //Apresenta
    //     }
    //     throw new Meteor.Error(msg)
    // }

    //Valida se o tipo for e-mail
    if(field_type === "email"){
        let result = EmailValidation(field_value)
        if(!result){

            let msg = FormsMessages({_id: 'email_invalid'}) //Pega a mensagem de erro

            if (Meteor.isClient){
                $("#alert_" + field_name).html(msg).show() //Apresenta
            }
            throw new Meteor.Error(msg)

        }
    }

    //Valida se o tipo for CEP
    if(field_type === "cep"){

        //Limpa o CEP
        field_value = field_value.replace("-", "")

        if(field_value.length !== 8){
            let msg = "CEP inválido"
            if (Meteor.isClient){
                $("#alert_" + field_name).html(msg).show() //Apresenta
            }
            throw new Meteor.Error(msg)
        }
    }

    //Verifica se tem a quantidade mínima e máxima exigida
    if(field_value && field_value.length < validation.min){
        let msg = FormsMessages({_id: 'min_required', label: form_field.label}) //Pega a mensagem de erro

        if (Meteor.isClient){
            $("#alert_" + field_name).html(msg).show() //Apresenta
        }
        throw new Meteor.Error(msg)

    }
    if(field_value && field_value.length > validation.max){
        let msg = FormsMessages({_id: 'max_required', label: form_field.label}) //Pega a mensagem de erro

        if (Meteor.isClient){
            $("#alert_" + field_name).html(msg).show() //Apresenta
        }
        throw new Meteor.Error(msg)
    }

    //No final, faz a validação do custom, que deve conter sempre um
    //throw new Meteor.Error(msg) como resultado de erro
    if(validation.custom){
        try {
            validation.custom(field_name, field_value, form_data)
        } catch (error) {
            if (Meteor.isClient){
                $("#alert_" + field_name).html(error.error).show() //Apresenta
            }
            throw new Meteor.Error(error.error)
        }
    }




    if (Meteor.isClient){
        $("#alert_" + field_name).hide() //Apresenta
    }

    return true


}

/**
 * Valida todos os campos na submissão. Pode e deve ser usado tanto no client quanto no server
 * @param form
 * @param data
 * @returns {*}
 */
ValidarFormTodosCampos = (form, data) => {
    console.log('-----------------------------------')
    console.log('Iniciando validação de todos os campos: ' + moment().format("HH:mm:ss DD/MM/YY"))
    console.log('-----------------------------------')

    let fields = form.fields //Captura os campos

    try {
        //Percorre todos os campos
        _.each(fields, (f) => {
            let input = _.find(data, (input) => {
                return input.name === f.name
            })

            //Se o tipo do campo for upload, ignora
            if(f.type === 'file') return



            //Valida o campo específico
            ValidarFormCampo(form, f.name, f.type, input.value, data)

        })
    } catch (error) {
        throw new Meteor.Error(error.error)
    }

    return true


}



function EmailValidation(enteredEmail) {

    let usuario = enteredEmail.substring(0, enteredEmail.indexOf("@"));
    let dominio = enteredEmail.substring(enteredEmail.indexOf("@")+ 1, enteredEmail.length);

    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
        return true
    }
    else{
        console.error("E-mail inválido")
        return false
    }
}