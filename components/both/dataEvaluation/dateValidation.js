var moment = require('moment-timezone')

ValidationTools.TreatDateToMoment = function(value){
    var values = value.split("/")
    var year = parseInt(values[2])
    var month = parseInt(values[1])
    var day = parseInt(values[0])
    if(month > 12 || day > 31 || year > 2050){
        return false
    } else{
        return moment(value, "DD/MM/YYYY")
    }
}

//Verifica se a data não é menor que a data atual
ValidationTools.TreatDateToMinToday = function(date){
    //Verifica se a data é válida
    date = ValidationTools.TreatDateToMoment(date)
    if(!date){
        return false
    }
    var now = MomentBr()
    //Verifica se a data passada não é inferior, em cadeia, começando pelo ano até o dia
    if (date.year() < now.year()) {
        return false
    }
    //Se for o mesmo ano, mas com o mês inferior ao atual, retorna falso
    if(date.year() == now.year()){
        if (date.month() < now.month()) return false
    }
    //Se for o mesmo mês, com o dia escolhido inferior ao dia atual, retorna falso
    if (date.year() == now.year() && date.month() == now.month()) {
        if (date.date() < now.date()) return false

    }

    //Retorna a data se tudo estiver ok
    return date

}