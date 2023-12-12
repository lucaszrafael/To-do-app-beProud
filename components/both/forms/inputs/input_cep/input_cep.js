import "./input_cep.html"

Template.input_cep.helpers({
    "validation": () => {
        console.log(Template.currentData())
    }
});
Template.input_cep.events({
    "keyup .input": function (event, template) {

        let input_name = Template.currentData().name
        let input_id = $(event.target).attr("id")

        if(input_id === input_name){ //Se for o campo respectivo

            $("#alert_" + input_name).hide()//oculta o campo

            //Se o campo CEP for válido, puxa os dados do endereço da API e lançar na Session para preencher os demais campos automaticamente
            let value = $(event.target).val()
            //Limpa o CEP
            value = value.replace("-", "")
            if(value.length === 8){
                Meteor.call("verifica_cep", value, (err, res) => {

                    if(res.data.erro !== "true"){
                        console.log('Dados do endereço')
                        var endereco = {
                            logradouro: res.data.logradouro,
                            bairro: res.data.bairro,
                            cidade: res.data.localidade,
                            uf: res.data.uf,
                            cep: res.data.cep
                        }

                        Session.set('dados_endereco', endereco)
                        console.log(endereco)
                    } else{
                        let msg = 'Nenhum endereço encontrado neste CEP'
                        $("#alert_" + input_name).html(msg).show()
                        console.error(msg)
                    }


                })
            }
        }
    }
});
Template.input_cep.onRendered(function () {
    //Coloca máscara no campo
    let input_name = Template.currentData().name
    $('#' + input_name).mask("00000-000");
});
Template.input_cep.onCreated(function () {


});

Template.input_cep.onDestroyed(function () {

});