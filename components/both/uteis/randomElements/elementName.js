RandomElementName = function(){
    var requestsNames = [
        "Sanduiche",
        'Batata',
        'Lanche',
        'Cebola',
        'Hot-dog',
        'Salada',
        'Carne',
        'Ovo'
    ]
    var requestSubstantives = [
        // 'Incrível',
        // 'Espetacular',
        // 'Inesquecível',
        'Crocante',
        // 'Acessível',
        'Vegan'
    ]
    var randomName = requestsNames[RandomNumber(0, requestsNames.length - 1)]
    return randomName
}
