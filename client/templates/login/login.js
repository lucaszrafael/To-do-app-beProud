import "./login.html"

Template.login.helpers({
    "helper": () => {
        return
    },
});

Template.login.events({
    "click #btn_cadastro": (event, template) => {
        event.stopPropagation()
        console.log("click")
        Go("cadastro")
    },
    "submit #form_login": function (event, template) {
        event.preventDefault();
        let email = $('#email').val();
        let password = $('#senha').val();

        //Valida se os campos estão preenchidos
        if (email === '' || password === '') {
            window.alert('Preencha todos os campos');
            return
        }


        Meteor.loginWithPassword(email, password, (error) => {
            if (error) {
                window.alert("Usuário ou senha incorretos")
            } else {
                Router.go('home');
            }
        });
    },
});

Template.login.onRendered(function () {


});

Template.login.onCreated(function () {


});

Template.login.onDestroyed(function () {

});