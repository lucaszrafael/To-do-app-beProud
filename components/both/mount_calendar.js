//Traz uma array com todos os dias dentro de um determinado período
//Para cada dia, tras um dado chamado amount que armazena uma quantidade.
//Inicializa zerado para ser usado como comparação em diagramas e gráficos
//Armazena uma array de elementos ao dia
var moment = require('moment-timezone')

MountCalendar = {}

MountCalendar.days = function(minYear, maxYear){
    var days = []
    for (var year = minYear; year <= maxYear; year++) {
        // console.log(year);
        for (var month = 0; month <= 11; month++) {
            // console.log('--------------');
            var monthDays = daysInMonth(month, year)
            for (var day = 1; day <= monthDays; day++) {
                // console.log(' ');
                // console.log('Antes: ' + day + '/' + month + '/' + year);
                var date = moment({year: year, month: month, day: day})
                days.push({date: date.toDate(), date_label: date.format('DD/MM/YYYY')})
            }
        }
    }
    //Retorna todos os dias com os elementos zerados, prontos para serem preenchidos
    return days
}

//Gera um calendário mensal dos anos passados
MountCalendar.months = function(minYear, maxYear){
    if (!minYear) throw new Meteor.Error("Informe o ano mínimo.")
    if(!maxYear) throw new Meteor.Error("Informe o ano máximo.")

    let months = []
    for (var y = minYear; y <= maxYear; y++) {
        for (var m = 0; m <= 11; m++) {
            //Pega o primeiro dia do mês do ano
            let date = moment().date(1).month(m).year(y).hours(0).minutes(0).seconds(0)
            //Adiciona a data na array
            months.push({date: date.toDate(), date_label: date.format("MM/YYYY")})
        }
    }
    return months
}

//Retorna a quantidade de dias em um mês de um ano
function daysInMonth(month,year) {
    var result = new Date(year, month + 1, 0).getDate();
    // console.log('Mês: ' + month);
    // console.log('Ano: ' + year);
    // console.log('Resultado: ' + result);
    return result
}