import "./anotacao.html"

Template.anotacao.helpers({
    "anotacao": () => {
        return Anotacoes.findOne({_id: GetParam('anotacaoId')})
    },
});

Template.anotacao.events({
    //Captura o evento de submit do formulário de anotação
    "submit #form_anotacao": (event, template) => {
        event.preventDefault() //Evita que o formulário seja enviado

        //Obtém o valor do campo de anotação
        let texto = $("#texto").val()
        if(!texto) {
            window.alert("Digite uma anotação")
            return
        }

        //Obtém o id da anotação
        let anotacaoId = GetParam('anotacaoId')
        let anotacao = Anotacoes.findOne({_id: anotacaoId})

        //Atualiza a anotação no banco de dados
        let result = Anotacoes.update({_id: anotacaoId}, {$set: {texto: texto}})
        if(result){
            $("#anotacao").val("") //Limpa o campo de anotação
            //Redireciona para a página de tarefa
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