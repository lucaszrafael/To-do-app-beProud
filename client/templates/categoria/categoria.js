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
    //Captura o evento de click para o link de tarefa
    "click .tarefa": (event, template) => {
        let elemId = GetIdFromEvent(event)

        //Redireciona para a página de tarefa
        Go("tarefa", {tarefaId: elemId})
    },
    //Captura o evento de click para o botão de editar a categoria
    "click #btn_editar": function (event, template) {
        let categoriaId = GetParam('categoriaId')
        Go("editar_categoria", {categoriaId: categoriaId})
    },
    //Captura o evento de click para o botão de remover a categoria
    "click #btn_remover": function (event, template) {
        //Confirma se o usuário deseja remover a categoria
        let c = window.confirm("Deseja realmente remover esta categoria?")
        if (!c) return

        //Obtém o id da categoria
        let categoriaId = GetParam('categoriaId')
        Categorias.remove({_id: categoriaId}) //Remove a categoria
        Go("home") //Redireciona para a página inicial
        //Exibe uma mensagem de sucesso
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