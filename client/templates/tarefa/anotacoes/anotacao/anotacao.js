import "./anotacao.html"

Template.anotacao.helpers({
    "anotacao": () => {
        return Anotacoes.findOne({_id: GetParam('anotacaoId')})
    },
});

Template.anotacao.events({
    "submit #form_anotacao": (event, template) => {
        event.preventDefault()

        let texto = $("#texto").val()
        if(!texto) {
            window.alert("Digite uma anotação")
            return
        }

        let anotacaoId = GetParam('anotacaoId')
        let anotacao = Anotacoes.findOne({_id: anotacaoId})


        let result = Anotacoes.update({_id: anotacaoId}, {$set: {texto: texto}})
        if(result){
            $("#anotacao").val("")
            Go("tarefa", {tarefaId: anotacao.tarefaId})
        }
    },

});

Template.anotacao.onRendered(function () {


});

Template.anotacao.onCreated(function () {


});

Template.anotacao.onDestroyed(function () {

});