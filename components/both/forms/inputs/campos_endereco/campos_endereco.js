import "./campos_endereco.html"

Template.campos_endereco.helpers({
    //Retorna uma array com label e value de todos os estados chamando a função do servidor
    "estadoOptions": () => {
        return Get_estados()
    },
    "cidadeOptions": () => {
        let estado = Session.get("estado")
        return Get_cidades_estado(estado)
    },
    //Se a cidade estiver setada, retorna o valor
    "cidade": () => {
        let c = Template.parentData(0).cidade
        console.log(c, "cidade")
        return c
    }
});
Template.campos_endereco.events({
    //Ao alterar o campo estado, atualiza a lista de cidades a partir da collections LocationCollection
    'change #estado': function(event) {
        var estado = $('#estado').val();
        Session.set("estado", estado);
    },
    //No evento de soltar a tecla do campo CEP, busca o endereço no servidor
    'keyup #cep': function(event) {
        var cep = $('#cep').val();

        //Se o CEP não tiver 8 caracteres, retorna
        if (cep.length !== 9) return
        AlertaSucesso("Buscando endereço...")


        Meteor.call('verifica_cep', cep, function(error, result) {
            if (error) {
                AlertaErro(error.reason)
            } else {

                result = result.data
                console.log(result, "result")
                Session.set("estado", result.uf)
                //Aguarda 1 segundo para atualizar a lista de cidades
                Meteor.setTimeout(function() {
                    $('#logradouro').val(result.logradouro)
                    $('#bairro').val(result.bairro)
                    //Altera a opção escolhida no select do estado
                    $('#estado').val(result.uf)
                    $('#cep').val(result.cep)
                    $('#cidade').val(result.localidade)
                    AlertaSucesso("Endereço encontrado!")
                }, 500)


            }
        })
    }
});
Template.campos_endereco.onRendered(function () {

    //Se o estado estiver setado, seta o valor do campo estado
    Tracker.autorun(function() {
        if(Session.get("estado")){
            $('#estado').val(Session.get("estado"))

            let c = Template.parentData(0).cidade
            //Se a cidade estiver setada, seta o valor do campo select cidade
            if (c) {
                $('#cidade').val(c)
            }
        }
    })


    //Formata o campo CEP
    $('#cep').mask('00000-000');
});
Template.campos_endereco.onCreated(function () {
    //Checa se no template tem o estado
    if (this.data && this.data.estado) {
        //Se tiver, seta a variável estado com o valor do template
        Session.set("estado", this.data.estado);
    }
    //Subcreve a collection LocationCollection
    Meteor.subscribe("LocationCollection");
});

Template.campos_endereco.onDestroyed(function () {

});