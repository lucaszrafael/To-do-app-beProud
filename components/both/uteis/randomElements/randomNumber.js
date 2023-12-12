//Retorna um número aletório a partir de um número mínimo e máximo
RandomNumber = function(min, max){
    var number = Math.floor(Math.random() * (max - min + 1)) + min;
    //Obs. Adiciono 1 no máximo para retornar ele.
    // console.log("Min: " + min + ". Max: " + max + ". Resultado: " + number);
    return number
}