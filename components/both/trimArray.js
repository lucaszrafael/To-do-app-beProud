//Remove elementos duplicados da array, inclusive elementos vazios
TrimArray = (array) => {
    array = [...new Set(array)]; //Remove os elementos duplicados
    array = array.filter(function (el) { //Remove os elementos vazios
        return el != null;
    });
    return array
}