import "./form_tarefa.html"
import moment from 'moment'

Template.form_tarefa.helpers({
    "categoriaOptions": () => {
        return Categorias.find().map((categoria) => {
            return {
                label: categoria.titulo,
                value: categoria._id
            }
        })
    },
    "tarefa": () => {
        let tarefaId = GetParam('tarefaId')
        let t = Tarefas.findOne({_id: tarefaId})
        if(!t) return

        t.prazo = moment(t.prazo).format("YYYY-MM-DD")
        return t
    },
});

Template.form_tarefa.events({
    "submit #form_tarefa": (event, template) => {
        event.preventDefault()

        let form = {
            titulo: $("#titulo").val(),
            descricao: $("#descricao").val(),
            categoriaId: $("#categoria").val(),
            prazo: $("#prazo").val(),
            nova_categoria: $("#nova_categoria").val()
        }

        if(!form.titulo){
            window.alert("O título é obrigatório")
            return
        }

        if(!form.categoriaId && !form.nova_categoria){
            window.alert("Selecione uma categoria ou digite uma nova")
            return
        }

        if(form.nova_categoria){
            //Checa se a categoria já existe
            let categoria = Categorias.findOne({titulo: form.nova_categoria})
            if(categoria){
                form.categoriaId = categoria._id
            } else{
                form.categoriaId = Categorias.insert({titulo: form.nova_categoria})
            }
        }

        if(form.prazo){
            form.prazo = moment(form.prazo, "YYYY-MM-DD").toDate()
        }

        //Checa se o prazo é maior que a data atual
        let hoje = moment().startOf('day')
        if(moment(form.prazo).isBefore(hoje)){
            window.alert("O prazo não pode ser menor que a data atual")
            return
        }

        let route = Router.current().route.getName()

        if(route === "editar_tarefa"){
            let tarefaId = GetParam('tarefaId')
            Tarefas.update({_id: tarefaId}, {$set: form})
            Router.go("tarefa", {tarefaId: tarefaId})

        } else{
            let tarefaId = Tarefas.insert(form)
            Router.go("tarefa", {tarefaId: tarefaId})
        }
    },
});

Template.form_tarefa.onRendered(function () {


});

Template.form_tarefa.onCreated(function () {


});

Template.form_tarefa.onDestroyed(function () {

});