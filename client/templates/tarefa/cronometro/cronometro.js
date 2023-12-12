import "./cronometro.html"
import moment from 'moment'

Template.cronometro.helpers({
    "atividade_ativa": () => {
        let tarefaId = GetParam('tarefaId')
        let atividade = AtividadesTarefas.findOne({tarefaId: tarefaId, ativa: true})
        if(!atividade) return
        return atividade
    },
    "dedicacao": () => {
        let tarefaId = GetParam('tarefaId')
        //Faz a soma de todas as atividades da tarefa
        let atividades = AtividadesTarefas.find({tarefaId: tarefaId}).fetch()
        console.log("atividades", atividades)
        let total = 0
        atividades.forEach((atividade) => {
            if(atividade.endedAt){
                let endedAt = moment(atividade.endedAt)
                let diferenca = moment.duration(endedAt.diff(atividade.createdAt));
                total += diferenca.asMinutes()
            }
        })
        console.log("total", total)
        //Converte o total em horas e minutos
        let horas = Math.floor(total / 60);
        let minutos = Math.floor(total % 60);
        let segundos = Math.floor((total - Math.floor(total)) * 60);
        let tempoFormatado = `${horas}h ${minutos}m ${segundos}s`;
        return tempoFormatado
    },
});

Template.cronometro.events({
    "click #btn_iniciar_cronometro": (event, template) => {
        let tarefaId = GetParam('tarefaId')
        //Cria uma nova atividade
        let atividadeId = AtividadesTarefas.insert({tarefaId: tarefaId, createdAt: new Date(), ativa: true})
    },
    "click #btn_parar_cronometro": (event, template) => {
        let elemId = GetIdFromEvent(event)
        //Cria uma nova atividade
        AtividadesTarefas.update({_id: elemId}, {$set: {ativa: false, endedAt: new Date()}})
    },
});

Template.cronometro.onRendered(function () {
    //Atualiza o cronometro a cada segundo na div #tempo_cronometro com os segundos que se passaram desde a criação da atividade no formato 00:00:00, apresentando os segundos, minutos e horas
    let tarefaId = GetParam('tarefaId')
    Meteor.setInterval(() => {
        let atividade = AtividadesTarefas.findOne({ tarefaId: tarefaId, ativa: true });
        if (!atividade) return;

        let agora = moment();
        let diferenca = moment.duration(agora.diff(atividade.createdAt));
        let horas = pad(diferenca.hours());
        let minutos = pad(diferenca.minutes());
        let segundos = pad(diferenca.seconds());

        let tempoFormatado = `${horas}:${minutos}:${segundos}`;
        $("#tempo_cronometro").text(tempoFormatado);
    }, 100);

    function pad(valor) {
        return valor < 10 ? '0' + valor : valor;
    }

});

Template.cronometro.onCreated(function () {


});

Template.cronometro.onDestroyed(function () {

});