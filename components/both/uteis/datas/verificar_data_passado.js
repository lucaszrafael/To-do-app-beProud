var moment = require('moment');

export {verificar_data_passado}

/**
 * Verifica se uma determinada data é futura, limitando a 50 anos
 * @param data
 * @param texto_vazio (Texto para informar quando o campo não tiver sido preenchido)
 * @param texto_erro (Texto para notificar o usuário em caso de erro)
 */
var verificar_data_passado = (data, texto_vazio, texto_erro) => {
    if(!texto_vazio) throw `Informe o texto de quando o campo nao for informado`
    if(!texto_erro) throw `Informe o texto que deve aparecer quando a data for incompativel`
    console.log(data)
    if(!data){
        window.alert(texto_vazio)
        throw texto_vazio
    }
    //Verifica se os dias e meses estão adequados


    let m_data = moment(data, 'YYYY-MM-DD')
    let m_limite = moment().subtract(1, 'years')
    if (m_data.isBefore(moment().add(1, 'days')) && m_data.isAfter(m_limite)){
        return true
    } else{
        window.alert(texto_erro)
        throw texto_erro
    }
}