import "./input_email.html"

Template.input_email.helpers({
    "disabled": () => {
        let disabled = Template.instance().data.disabled
        if(disabled === true){
            return "disabled"
        }
    }
});
Template.input_email.events({
    "click #id": function (event, template) {

    }
});
Template.input_email.onRendered(function () {


});
Template.input_email.onCreated(function () {


});

Template.input_email.onDestroyed(function () {

});