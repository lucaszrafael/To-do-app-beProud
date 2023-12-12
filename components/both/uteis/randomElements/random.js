
//Returna true ou false aleatoriamente
RandomTrueOrFalse = function () {
    var randomNumber = RandomNumber(1,2)
    if(randomNumber == 1){
        return true
    } else{
        return false
    }
}

RandomPhone = function () {
    return  '(' + RandomNumber(10, 99) + ') ' +  RandomNumber(1000,9999) +'-'+ RandomNumber(1000,9999)
}
RandomCelPhone = function () {
    return  '(' + RandomNumber(10, 99) + ') 9' +  RandomNumber(1000,9999) +'-'+ RandomNumber(1000,9999)
}