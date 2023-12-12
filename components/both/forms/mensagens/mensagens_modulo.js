import "./mensagens_modulo.html"
import "/modules/forms/notificacoes/mensagens_modulo.js"

Template.mensagens_modulo.helpers({
    "mensagens": () => {
        return [
            {userId: "123123ddf", userLabel: "Você", data: "13:30 03/06/22", mensagem: "Lorem ipsum dolor asimet"},
            {userId: "123123ddf", userLabel: "Você", data: "13:30 03/06/22", mensagem: "Lorem ipsum dolor asimet"},
        ]
    }
});
Template.mensagens_modulo.events({
    "click #id": function (event, template) {
        event.preventDefault()

    },
});
Template.mensagens_modulo.onRendered(function () {


});
Template.mensagens_modulo.onCreated(function () {


});

Template.mensagens_modulo.onDestroyed(function () {

});