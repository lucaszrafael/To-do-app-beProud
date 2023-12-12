import "./info.html"

Template.elem_info.helpers({
    "capitalize": function () {
        let c = Template.instance().data
        if(c.capitalize === false){
            return ""
        } else{
            return  'capitalize'
        }
    }
});
Template.elem_info.events({
    "click #id": function (event, template) {

    }
});
Template.elem_info.onRendered(function () {


});
Template.elem_info.onCreated(function () {


});

Template.elem_info.onDestroyed(function () {

});