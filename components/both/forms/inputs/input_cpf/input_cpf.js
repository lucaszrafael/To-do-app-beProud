import "./input_cpf.html"

Template.input_cpf.helpers({
    "disabled": () => {
        let disabled = Template.instance().data.disabled
        if(disabled === true){
            return "disabled"
        }
    }
});
Template.input_cpf.events({
    "click #id": function (event, template) {
    }
});
Template.input_cpf.onRendered(function () {
    //Coloca máscara no campo com o formato de CPFD
    let input_name = Template.currentData().name
    $('#' + input_name).mask("000.000.000-00")

});
Template.input_cpf.onCreated(function () {


});

Template.input_cpf.onDestroyed(function () {

});