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
    "click .remover_item": function (event, template) {
        let elemId = GetIdFromEvent(event)
        let c = window.confirm("Deseja realmente remover este item?")
        if (!c) return
        let result = CheckListsTarefas.remove({_id: elemId})
        if(result){
            console.log("Checklist removido")
        }

    },
    "click .checklist": function (event, template) {
        let elemId = GetIdFromEvent(event)
        let check = CheckListsTarefas.findOne({_id: elemId})

        CheckListsTarefas.update({_id: elemId}, {$set: {checked: !check.checked}})

    },
    "submit #form_checklist": (event, template) => {
        event.preventDefault()
        let titulo = $("#titulo").val()
        if(!titulo){
            window.alert("O título não pode ser vazio")
            return
        }

        let tarefaId = GetParam('tarefaId')
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