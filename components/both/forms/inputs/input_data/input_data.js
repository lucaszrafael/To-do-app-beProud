import "./input_data.html"


Template.input_data.helpers({
    "disabled": () => {
        let disabled = Template.instance().data.disabled
        if(disabled === true){
            return "disabled"
        }
    }
});
Template.input_data.events({
    "click #id": function (event, template) {
    }
});
Template.input_data.onRendered(function () {
    //Coloca máscara no campo
    let input_name = Template.currentData().name
    if(Template.currentData().validation){
        let mask = Template.currentData().validation.mask

        if(mask){
            $('#' + input_name).mask(mask);
        }
    }

});
Template.input_data.onCreated(function () {


});

Template.input_data.onDestroyed(function () {

});