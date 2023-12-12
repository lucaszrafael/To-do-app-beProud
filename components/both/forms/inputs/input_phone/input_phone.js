import "./input_phone.html"

Template.input_phone.helpers({
    "validation": () => {
        console.log()
    }
});
Template.input_phone.events({
    "click #id": function (event, template) {

    }
});
Template.input_phone.onRendered(function () {
    //Coloca máscara no telefone
    let input_name = Template.currentData().name
    $('#' + input_name).mask('(00) 00000-0000');
});
Template.input_phone.onCreated(function () {


});

Template.input_phone.onDestroyed(function () {

});