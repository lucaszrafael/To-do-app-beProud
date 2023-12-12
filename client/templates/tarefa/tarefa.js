import "./tarefa.html"
import moment from 'moment'
import '/client/templates/tarefa/anotacoes/anotacoes.js'
import '/client/templates/tarefa/cronometro/cronometro.js'
import '/client/templates/tarefa/checklists/checklists.js'

Template.tarefa.helpers({
    "tarefa": () => {
        let tarefa = Tarefas.findOne({_id: Router.current().params.tarefaId})

        if(!tarefa) return

        tarefa.prazo = moment(tarefa.prazo).format("DD/MM/YYYY")

        if(tarefa.lembrete){
            tarefa.lembrete = moment(tarefa.lembrete).format("YYYY-MM-DD")
        }
        return tarefa
    },

});

Template.tarefa.events({
    "click .btn_favoritar": function (event, template) {
        let tarefaId = GetParam('tarefaId')
        let tarefa = Tarefas.findOne({_id: tarefaId})
        Tarefas.update({_id: tarefaId}, {$set: {prioridade: !tarefa.prioridade}})
    },
    "submit #form_lembrete": function (event, template) {
        event.preventDefault()
        let data = $("#data_lembrete").val()
        if(!data){
            let result = Tarefas.update({_id: Router.current().params.tarefaId}, {$unset: {lembrete: ""}})

            if(result){
                window.alert("Lembrete removido")
            }
        }
        if(data){

            data = moment(data, "YYYY-MM-DD").toDate()

            //Checa se a data é maior que a data atual
            let hoje = moment().startOf('day')
            if(moment(data).isBefore(hoje)){
                window.alert("O lembrete não pode ser menor que a data atual")
                return
            }

            let result = Tarefas.update({_id: Router.current().params.tarefaId}, {$set: {lembrete: data}})
            if(result){
                window.alert("Lembrete adicionado")
            }
        }

    },
    "click .remover_tarefa": function (event, template) {
        let c = window.confirm("Deseja realmente remover esta tarefa?")
        if (!c) return

        let tarefaId = GetParam('tarefaId')
        Go("home")

        Meteor.setTimeout(() => {
            Tarefas.remove({_id: tarefaId})
            window.alert("Tarefa removida")
        }, 500)
    },
    "keyup #pesquisa_notas": (event, template) => {
        let pesquisa = $("#pesquisa_notas").val()
        console.log(pesquisa)
    },

    "click .btn_editar": function (event, template) {
        let tarefaId = GetParam('tarefaId')
        Go("editar_tarefa", {tarefaId: tarefaId})
    },
});

Template.tarefa.onRendered(function () {


});

Template.tarefa.onCreated(function () {


});

Template.tarefa.onDestroyed(function () {

});