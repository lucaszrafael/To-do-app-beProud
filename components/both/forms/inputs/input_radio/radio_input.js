import "./radio_input.html"

Template.radio_input.helpers({
    //Retorna o item selecionado
    "checkedOption": () => {
        let checkedOption = Template.parentData(1).checkedOption

        let d = this.Blaze.getData()
        if(checkedOption === d.value){
            return "checked"
        }
    },
    "class": () => {
        return Template.parentData(1).class
    },
    "name": () => {
        if(Template.parentData(1)){
            return Template.parentData(1).name
        } else{
            return RandomNumber()
        }
    },
});
Template.radio_input.events({
    //Seta o radio button como checked caso o usuário clicar na label
    "click .form-check-label": function (event, template) {
        let data = $(event.target).data('radio-value') //Pega o valor do radio na label
        $("[value=" + data +"]").prop("checked", true) //Pega o radio pelo valor e seta como checked
    }
});
Template.radio_input.onRendered(function () {


});
Template.radio_input.onCreated(function () {


});

Template.radio_input.onDestroyed(function () {

});