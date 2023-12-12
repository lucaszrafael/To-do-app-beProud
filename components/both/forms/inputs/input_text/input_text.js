import "./input_text.html"

Template.input_text.helpers({
    "disabled": () => {
        let disabled = Template.instance().data.disabled
        if(disabled === true){
            return "disabled"
        }
    }
});
Template.input_text.events({
    "click #id": function (event, template) {
    }
});
Template.input_text.onRendered(function () {
    //Coloca máscara no campo
    let input_name = Template.currentData().name
    if(Template.currentData().validation){
        let mask = Template.currentData().validation.mask

        if(mask){
            $('#' + input_name).mask(mask);
        }
    }

});
Template.input_text.onCreated(function () {


});

Template.input_text.onDestroyed(function () {

});