import "./layout_interno.html"

Template.layout_interno.helpers({
    "helper": () => {
        return
    },
});

Template.layout_interno.events({
    "click #btn_home": (event, template) => {
        Go("home")
    },
    "click #btn_sair": (event, template) => {
        Meteor.logout()
        Go("login")
    },
});

Template.layout_interno.onRendered(function () {

});

Template.layout_interno.onCreated(function () {

});

Template.layout_interno.onDestroyed(function () {

});