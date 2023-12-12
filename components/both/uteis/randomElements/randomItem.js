//Retorna um item aleatório de uma array passada
RandomItem = function(array){
    var item = array[RandomNumber(0, array.length - 1)]
    return item
}