import "./home.html"
import moment from 'moment'

Template.home.helpers({
    "tarefas_prioridade": () => {
        return Tarefas.find({prioridade: true})
    },
    "categorias": () => {
        return Categorias.find()
    },
    //Retorna as tarefas que estão com o campo "lembrete" preenchido
    "lembretes": () => {
        //Pega os lembretes que não são nulos e que seja do dia atual, nem antes nem depois

        let tarefas = Tarefas.find({lembrete: {
            $ne: null,
            $lte: new Date(),
        }
        }).map((tarefa) => {
            tarefa.lembrete = moment(tarefa.lembrete).format("DD/MM/YYYY")
            return tarefa
        })
        return tarefas
    },
});

Template.home.events({
    "click .categoria": (event, template) => {
        let elemId = GetIdFromEvent(event)
        Go("categoria", {categoriaId: elemId})
    },
    "click .tarefa": function (event, template) {
        let elemId = GetIdFromEvent(event)
        Go("tarefa", {tarefaId: elemId})
    },
    "click #btn_cadastrar_tarefa": function (event, template) {
        Go("cadastrar_tarefa")
    },
});

Template.home.onRendered(function () {


});

Template.home.onCreated(function () {


});

Template.home.onDestroyed(function () {

});