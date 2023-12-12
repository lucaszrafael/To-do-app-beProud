import "./input_select.html"

Template.input_select.helpers({
    //Retorna o item selecionado
    "selected": () => {
        let selectedOption = Template.parentData(1).selectedOption
        let d = this.Blaze.getData()

        if(selectedOption === d.value){
            return "selected"
        }
    },
    "disabled": () => {
        let disabled = Template.instance().data.disabled
        if(disabled === true){
            return "disabled"
        }
    }
});
Template.input_select.events({
    "click #id": function (event, template) {

    }
});
Template.input_select.onRendered(function () {


});
Template.input_select.onCreated(function () {


});

Template.input_select.onDestroyed(function () {

});