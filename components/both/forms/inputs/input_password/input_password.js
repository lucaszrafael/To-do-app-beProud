import "./input_password.html"

Template.input_password.helpers({
    "new_password": () => {
        if(Template.currentData().data.new_password){
            return 'autocomplete="new-password"'
        }
    },
    "validation": () => {
        console.log(Template.currentData())
    }
});
Template.input_password.events({
    "click #id": function (event, template) {

    }
});
Template.input_password.onRendered(function () {
    //Coloca máscara no telefone
    let input_name = Template.currentData().name
    let mask = Template.currentData().mask
    console.log(mask)
    if(mask){
        $('#' + input_name).mask(mask);
    }
});
Template.input_password.onCreated(function () {


});

Template.input_password.onDestroyed(function () {

});