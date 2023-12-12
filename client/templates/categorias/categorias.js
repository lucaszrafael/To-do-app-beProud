import "./categorias.html"

Template.categorias.helpers({
    "categorias": () => {
        return Categorias.find().fetch()
    },
});

Template.categorias.events({
    "click #btnX": (event, template) => {

    },

});

Template.categorias.onRendered(function () {


});

Template.categorias.onCreated(function () {


});

Template.categorias.onDestroyed(function () {

});