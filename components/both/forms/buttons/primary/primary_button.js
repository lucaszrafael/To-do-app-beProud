import "./primary_button.html"

Template.primary_button.helpers({
    "helper": () => {

    }
});
Template.primary_button.events({
    "click #id": function (event, template) {
        event.preventDefault()
    },
});
Template.primary_button.onRendered(function () {


});
Template.primary_button.onCreated(function () {


});

Template.primary_button.onDestroyed(function () {

});