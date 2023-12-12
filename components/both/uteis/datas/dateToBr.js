var moment = require('moment-timezone')
//Converte uma data para a data do Brasil
DateToBr = (date) => {
    return moment(date).tz("America/Sao_Paulo").format('HH:mm DD/MM/YY')
    console.log('OXI')
}