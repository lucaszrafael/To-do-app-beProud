//Retorna um estado aleatório de um determinado comprador
RandomStatus = function(){
    var status = [
        "Ativo",
        "Avaliação",
        "Suspenso",
        "Aprovado",
        "Reprovado",
        "Bloqueado",
        "Cancelado"
    ]
    return status[RandomNumber(0, status.length)]
}