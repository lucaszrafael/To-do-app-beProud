//Valida se as horas estão no formato HH:mm, se são válidas e se não ultrapassam 24 horas. utilize moment. Não utilizar a função isSameOrBefore.
Valida_Hora =  function (hora) {
    //Checa se a hora está no formato HH:mm
    if (!hora.match(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/)) {
        return false
    }
    //Checa se a hora é válida
    if (!moment(hora, "HH:mm").isValid()) {
        return false
    }
    //Checa se a hora ultrapassa 24 horas
    if (moment(hora, "HH:mm").isAfter(moment("24:00", "HH:mm"))) {
        return false
    }
    return true
}