import "./form_tarefa.html"
import moment from 'moment'

Template.form_tarefa.helpers({
    "categoriaOptions": () => {
        return Categorias.find().map((categoria) => {
            return {
                label: categoria.titulo,
                value: categoria._id
            }
        })
    },
    "tarefa": () => {
        let tarefaId = GetParam('tarefaId')
        let t = Tarefas.findOne({_id: tarefaId})
        if(!t) return

        t.prazo = moment(t.prazo).format("YYYY-MM-DD")
        return t
    },
    "local": () => {
        let local ={
            latitude: Session.get("latitude"),
            longitude: Session.get("longitude")
        }

        console.log("local", local)

        return local
    },
});

Template.form_tarefa.events({
    //Captura o evento de submit do formulário de tarefa
    "submit #form_tarefa": (event, template) => {
        event.preventDefault()

        //Cria um objeto com os dados do formulário
        let form = {
            titulo: $("#titulo").val(),
            descricao: $("#descricao").val(),
            categoriaId: $("#categoria").val(),
            prazo: $("#prazo").val(),
            nova_categoria: $("#nova_categoria").val(),
            local: {
                latitude: Session.get("latitude"),
                longitude: Session.get("longitude")
            }
        }

        //Checa se o título é vazio
        if(!form.titulo){
            window.alert("O título é obrigatório")
            return
        }

        //Checa se a categoria é vazia
        if(!form.categoriaId && !form.nova_categoria){
            window.alert("Selecione uma categoria ou digite uma nova")
            return
        }
        //Se o usuário digitou uma nova categoria, cria a categoria
        if(form.nova_categoria){
            //Checa se a categoria já existe
            let categoria = Categorias.findOne({titulo: form.nova_categoria})
            if(categoria){
                form.categoriaId = categoria._id
            } else{
                form.categoriaId = Categorias.insert({titulo: form.nova_categoria})
            }
        }

        if(form.prazo){
            form.prazo = moment(form.prazo, "YYYY-MM-DD").toDate()
        }

        //Checa se o prazo é maior que a data atual
        let hoje = moment().startOf('day')
        if(moment(form.prazo).isBefore(hoje)){
            window.alert("O prazo não pode ser menor que a data atual")
            return
        }

        let route = Router.current().route.getName()

        if(route === "editar_tarefa"){
            let tarefaId = GetParam('tarefaId')
            Tarefas.update({_id: tarefaId}, {$set: form})
            Router.go("tarefa", {tarefaId: tarefaId})

        } else{
            let tarefaId = Tarefas.insert(form)
            Router.go("tarefa", {tarefaId: tarefaId})
        }
    },
});

Template.form_tarefa.onRendered(function () {


});

Template.form_tarefa.onCreated(function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {

            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;

            Session.set("latitude", latitude)
            Session.set("longitude", longitude)



        }, function(error) {
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    console.error("Usuário negou a solicitação de geolocalização.");
                    break;
                case error.POSITION_UNAVAILABLE:
                    console.error("Informações de localização não disponíveis.");
                    break;
                case error.TIMEOUT:
                    console.error("A solicitação de geolocalização expirou.");
                    break;
                case error.UNKNOWN_ERROR:
                    console.error("Ocorreu um erro desconhecido ao obter a localização.");
                    break;
            }
        });
    } else {
        console.error("Geolocalização não é suportada neste navegador.");
    }

});

Template.form_tarefa.onDestroyed(function () {

});