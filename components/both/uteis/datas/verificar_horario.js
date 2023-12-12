export {verificar_horario}

/**
 *
 * @param horario (Horário no formato 00:00)
 * @param texto_vazio (Texto para informar quando o campo não tiver sido preenchido)
 * @param function_erro (Função para ser acionada em caso de erro)
 */

var verificar_horario = (horario, function_erro) => {

    let array = horario.split(":")
    let horas = parseInt(array[0])
    let minutos = parseInt(array[1])

    if(minutos > 60){
        function_erro()
    }
    if(horas > 24){
        function_erro()
    }
    return true
}