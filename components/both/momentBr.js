var moment = require('moment-timezone')
MomentBr = (date) => {
    if(date instanceof Date){ //Se for passada uma data em javascript, retorna um moment BR
        return moment(date).tz("America/Sao_Paulo")
    } else{
        return moment().tz("America/Sao_Paulo")
    }

}