DifferenceDates = function(date1, date2){
    var difference = Math.abs(date1 - date2); //diferença em milésimos e positivo
    var day = 1000*60*60*24; // milésimos de segundo correspondente a um dia
    var total = Math.round(difference/day); //valor total de dias arredondado
    return total;
}

