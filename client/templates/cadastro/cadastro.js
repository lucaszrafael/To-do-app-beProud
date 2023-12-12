import "./cadastro.html"

Template.cadastro.helpers({
    "helper": () => {
        return
    },
});

Template.cadastro.events({
    "submit #form_cadastro": (event, template) => {
        event.preventDefault()
        let form = {
            "email": $("#email").val(),
            "senha": $("#senha").val(),
            "confirm_senha": $("#confirm_senha").val()
        }

        //Valida se os campos estão preenchidos
        if (form.email === '' || form.senha === '') {
            alert('Preencha todos os campos');
            return;
        }

        //Valida se as senhas são iguais
        if (form.senha !== form.confirm_senha) {
            window.alert('As senhas não são iguais')
            return
        }

        //Cria o usuário
        Accounts.createUser({email: form.email, password: form.senha}, function(error) {
            if (error) {
                console.log(error.reason);
            } else {
                Router.go('home');
            }
        })
    }
});

Template.cadastro.onRendered(function () {


});

Template.cadastro.onCreated(function () {


});

Template.cadastro.onDestroyed(function () {

});