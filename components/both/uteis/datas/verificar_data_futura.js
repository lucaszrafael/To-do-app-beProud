var moment = require('moment');

export {verificar_data_futura}

/**
 * Verifica se uma determinada data é futura, limitando a 50 anos
 * @param data
 * @param erro_function (Recebe uma função para ser executada em caso de erro)
 */
var verificar_data_futura = (data, erro_function) => {

    let now = moment().format('YYYY-MM-DD')
    let m_data = moment(data, 'YYYY-MM-DD')
    let m_limite = moment().add(50, 'years')
    if (m_data.isSameOrAfter(moment(now, 'YYYY-MM-DD')) && m_data.isBefore(m_limite)){
        return true
    } else{
        erro_function()
    }
}