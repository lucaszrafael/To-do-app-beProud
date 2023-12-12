var moment = require('moment-timezone')

//Retorna uma data aleatória, mas que pode receber determinado mês e ano
RandomDate = function (year, month) {
    var date
    month -= 1 //Retira um mês para dar o formato convencional
    if(!month || !year){
        //Retorna uma data totalmente aleatória
        date = new Date(RandomNumber(1990, 2016),RandomNumber(1, 12),RandomNumber(1, 31),RandomNumber(1, 24),RandomNumber(1, 60),RandomNumber(1, 60))
    }
    if(!month && year){
        //Retorna uma data aleatória de um determinado ano
        date = new Date(year,RandomNumber(0, 11),RandomNumber(1, 31),RandomNumber(1, 24),RandomNumber(1, 60),RandomNumber(1, 60))
    }
    if(month && year){
        //Retorna uma data aleatória de um determinado ano
        date = new Date(year,month,RandomNumber(1, 31),RandomNumber(1, 24),RandomNumber(1, 60),RandomNumber(1, 60))
    }
    return date
}

//Retorna uma data aleatória com data mínima e máxima, no seguinte formato: Date
RandomDateMinMax = function (min, max) {
    var minData = moment(min, "DD/MM/YYYY")
    var maxData = moment(max, "DD/MM/YYYY")
    //Trato os erros
    if(minData.year() > maxData.year()){
        throw new Meteor.Error("A data mínima deve ser menor que a data máxima")
    }

    var randomYear = RandomNumber(minData.year(), maxData.year())
    // console.log("Year: " + randomYear);
    var randomMonth = function(){
        //Se o ano máximo for igual ao ano mínimo, compara os meses
        if(minData.year() == maxData.year()){
            return RandomNumber(minData.month(), maxData.month())
        }
        //Se o ano mínimo for menor que o ano máximo, apenas não deixa ultrapassar dezembro
        if (minData.year() < maxData.year()) {
            return RandomNumber(minData.month(), 11)
        }
    }
    // console.log("Month: " + randomMonth());

    var randomDay = function(){
        //Se o mês máximo for igual ao mês mínimo, compara os dias do mês
        if(minData.month() == maxData.month()){
            return RandomNumber(minData.date(), maxData.date())
        }
        if(randomMonth() == minData.month()){
            //Se o mês aleatório for igual ao mês mínimo, retorna um dia aleatório no mínimo do dia passado
            return RandomNumber(minData.date(), 30)
        }
        //Se não for o mesmo mês, retorna qualquer dia
        return RandomNumber(minData.date(), 30)

    }
    // console.log("Day: " + randomDay());
    // console.log("Year: " + randomYear);
    // console.log("Month: " + randomMonth());
    // console.log("Day: " + randomDay());
    //Retorna uma data aleatória
    var randomDate = new Date(randomYear, randomMonth(), randomDay())
    // console.log(randomDate);
    return randomDate
}