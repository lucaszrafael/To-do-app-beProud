import "./input_textarea.html"

Template.input_textarea.helpers({
    "rows": () => {
        let r = Template.currentData().rows
        if(!r){
            return "5"
        }
    },
    "cols": () => {
        let c = Template.currentData().cols
        if(!c){
            return "3"
        }
    }
});
Template.input_textarea.events({
    "click #id": function (event, template) {

    }
});
Template.input_textarea.onRendered(function () {


});
Template.input_textarea.onCreated(function () {


});

Template.input_textarea.onDestroyed(function () {

});