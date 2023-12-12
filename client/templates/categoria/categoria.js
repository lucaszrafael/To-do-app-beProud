import "./categoria.html"

Template.categoria.helpers({
    "categoria": () => {
        let categoriaId = GetParam('categoriaId')
        return Categorias.findOne({_id: categoriaId})
    },
    "tarefas": () => {
        let categoriaId = GetParam('categoriaId')
        return Tarefas.find({categoriaId: categoriaId})
    },
});

Template.categoria.events({
    "click .tarefa": (event, template) => {
        let elemId = GetIdFromEvent(event)
        Go("tarefa", {tarefaId: elemId})
    },
    "click #btn_editar": function (event, template) {
        let categoriaId = GetParam('categoriaId')
        Go("editar_categoria", {categoriaId: categoriaId})
    },
    "click #btn_remover": function (event, template) {
        let c = window.confirm("Deseja realmente remover esta categoria?")
        if (!c) return

        let categoriaId = GetParam('categoriaId')
        Categorias.remove({_id: categoriaId})
        Go("home")
        Meteor.setTimeout(() => {
            window.alert("Categoria removida com sucesso!")
        }, 500)
    },
});

Template.categoria.onRendered(function () {


});

Template.categoria.onCreated(function () {


});

Template.categoria.onDestroyed(function () {

});