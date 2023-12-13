import "./checklists.html"

Template.checklists.helpers({
    "checklists": () => {
        let tarefaId = GetParam('tarefaId')

        return CheckListsTarefas.find({tarefaId: tarefaId}).map((item) => {
            if(item.checked){
                item.is_checked = "checked"
            }
            return item
        })

    },
});

Template.checklists.events({
    //Lida com o evento de click no botão de remover item
    "click .remover_item": function (event, template) {
        let elemId = GetIdFromEvent(event)
        let c = window.confirm("Deseja realmente remover este item?")
        if (!c) return
        let result = CheckListsTarefas.remove({_id: elemId})
        if(result){
            console.log("Checklist removido")
        }

    },
    //Lida com o evento de click no botão de marcar item como feito
    "click .checklist": function (event, template) {
        let elemId = GetIdFromEvent(event)
        let check = CheckListsTarefas.findOne({_id: elemId})

        CheckListsTarefas.update({_id: elemId}, {$set: {checked: !check.checked}})

    },
    //Lida com o evento de submit do formulário de checklist
    "submit #form_checklist": (event, template) => {
        event.preventDefault() //Evita que o formulário seja enviado
        let titulo = $("#titulo").val() //Obtém o valor do campo de título
        //Checa se o título é vazio
        if(!titulo){
            window.alert("O título não pode ser vazio")
            return
        }

        //Obtém o id da tarefa
        let tarefaId = GetParam('tarefaId')
        //Insere o checklist no banco de dados
        let result = CheckListsTarefas.insert({titulo: titulo, tarefaId: tarefaId, checked: false})
        if(result){
            $("#titulo").val("")
            console.log("Checklist inserido")
        }

    },

});

Template.checklists.onRendered(function () {


});

Template.checklists.onCreated(function () {


});

Template.checklists.onDestroyed(function () {

});