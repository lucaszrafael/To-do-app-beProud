import "./editar_categoria.html"

Template.editar_categoria.helpers({
    "titulo": () => {
        let categoriaId = GetParam('categoriaId')
        let categoria = Categorias.findOne({_id: categoriaId})
        return categoria.titulo
    },
});

Template.editar_categoria.events({
    "submit #form_categoria": (event, template) => {
        event.preventDefault()

        let form = {
            titulo: $("#titulo").val()
        }

        if(!form.titulo){
            window.alert("O título é obrigatório")
            return
        }

        let categoriaId = GetParam('categoriaId')
        Categorias.update({_id: categoriaId}, {$set: {titulo: form.titulo}})
        Go("categoria", {categoriaId: categoriaId})
    },

});

Template.editar_categoria.onRendered(function () {


});

Template.editar_categoria.onCreated(function () {


});

Template.editar_categoria.onDestroyed(function () {

});