import "./anotacoes.html"
import moment from 'moment'

Template.anotacoes.helpers({
    "anotacoes": () => {
        let tarefaId = GetParam('tarefaId')

        let regex = new RegExp(Session.get("pesquisa_notas"), "i")

        if(Session.get("pesquisa_notas")){
            return Anotacoes.find({tarefaId: tarefaId, texto: regex}).map((anotacao) => {
                anotacao.createdAt = moment(anotacao.createdAt).format("HH:mm DD/MM/YYYY")
                return anotacao
            })
        } else{
            return Anotacoes.find({tarefaId: tarefaId}).map((anotacao) => {
                anotacao.createdAt = moment(anotacao.createdAt).format("HH:mm DD/MM/YYYY")
                return anotacao
            })
        }

    },
});

Template.anotacoes.events({
    "submit #form_anotacao": (event, template) => {
        event.preventDefault()
        let tarefaId = GetParam('tarefaId')
        let anotacao = $("#anotacao").val()
        if(!anotacao) {
            window.alert("Digite uma anotação")
            return
        }

        let result = Anotacoes.insert({tarefaId: tarefaId, texto: anotacao})
        if(result){
            $("#anotacao").val("")
        }

    },
    "click .editar_nota": function (event, template) {
        let elemId = GetIdFromEvent(event)
        Go("anotacao", {anotacaoId: elemId})
    },
    "click .remover_nota": function (event, template) {
        let c = window.confirm("Deseja realmente remover esta anotação?")
        if (!c) return

        let elemId = GetIdFromEvent(event)

        console.log(elemId)

        let result = Anotacoes.remove({_id: elemId})

        if(result){
            Meteor.setTimeout(() => {
                window.alert("Anotação removida")
            }, 500)
        } else{
            window.alert("Erro ao remover anotação")
        }
    },
    "keyup #pesquisa_notas": function (event, template) {
        let pesquisa = $("#pesquisa_notas").val()
        Session.set("pesquisa_notas", pesquisa)
    },
});

Template.anotacoes.onRendered(function () {


});

Template.anotacoes.onCreated(function () {


});

Template.anotacoes.onDestroyed(function () {

});