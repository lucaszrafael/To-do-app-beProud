import "./input_porcentagem.html"

Template.input_porcentagem.helpers({
    "helper": () => {

    }
});
Template.input_porcentagem.events({
    "click #id": function (event, template) {
        event.preventDefault()
    },
});
Template.input_porcentagem.onRendered(function () {
    //Coloca máscara no campo
    let input_name = Template.currentData().name

    $('#' + input_name).keyup(function() {


        //Se há %%, troca para apenas %
        let value = $('#' + input_name).val()
        value = value.replace("%%", "%")
        $('#' + input_name).val(value)

        //Obter o primeiro caractere digitado
        var temp = $(this).val().charAt(0);
        //Verificar se o primeiro caractere inserido é '-'
        if (temp == '-'){
            //Aplica a máscara para números negativos
            $('#' + input_name).mask("-99,99%");
        }
        //Verificar se o primeiro caractere inserido é número
        else if (temp.charAt(0).match(/\d/)){
            //Aplica a máscara para números positivos
            $('#' + input_name).mask("99,99%");

        }
        //Caso o primeiro caractere inserido seja um caractere inválido limpa o value do campo
        else {
            $('#' + input_name).val('');
        }
    });

});
Template.input_porcentagem.onCreated(function () {


});

Template.input_porcentagem.onDestroyed(function () {

});