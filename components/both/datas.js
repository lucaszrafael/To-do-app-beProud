var moment = require('moment-timezone')

//Retorna a data e hora no modelo brasileiro
FullDateConversor = function(date){
    if(date){
        return HourConversor(date) + " " + DateConversor(date);
    } else{
        return null;
    }
}

DateConversor = function(date){
    if(date != null) {
        var myDate = new Date(date);
        var day = myDate.getDate();
        var myDateString = ('0' + day).slice(-2) + '/'
            + ('0' + (myDate.getMonth() + 1)).slice(-2) + '/'
            + myDate.getFullYear();
        return myDateString
    } else{
        return null;
    }
}

//Converte uma hora, inserindo 0s na frente
HourConversor = function(date){
    if(date != null){
        var hourString = ('0'+ date.getHours()).slice(-2) + ':' +
            ('0'+ date.getMinutes()).slice(-2);
        return hourString;
    } else{
        return null
    }
}
DateYesterday = function(date){
    var d = new Date(date);
    var day = d.getDate() - 1;
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    return day + "/" + month + "/" + year;
}
//Retorna o dia da semana no formado brasileiro
//Recebe uma variável de 0 a 6 para retornar o dia da semana
DayOfWeekBr = function (day) {
    switch (day) {
        case 0:
            return 'Domingo'
            break;
        case 1:
            return 'Segunda-feira'
            break;
        case 2:
            return 'Terça-feira'
            break;
        case 3:
            return 'Quarta-feira'
            break;
        case 4:
            return 'Quinta-feira'
            break;
        case 5:
            return 'Sexta-feira'
            break;
        case 6:
            return 'Sábado'
            break;
    }
}
//Verifica se a data é anterior e se é valida. Recebe neste padrão XX/XX/XXXX.
DataIsBefore = function (data) {
    let data_split = data.split('/')
    let dia = parseInt(data_split[0])
    let mes = parseInt(data_split[1])
    let ano = parseInt(data_split[2])

    let now = MomentBr()
    let data_moment = moment(data, 'DD/MM/YYYY')

    //Verifica se a data é válida
    console.log(data_moment.format('DD/YY/YYYY'))
    if (data_moment.format('DD/YY/YYYY') == 'Invalid Date') {
        return  false
    }


    if (ano < 1970) {
        return false
    }


    if (dia > 31) {
        return false
    }
    if (mes > 12) {
        return false
    }
    if (data_moment.isAfter(now)) {
        return false
    }
    return  true
}