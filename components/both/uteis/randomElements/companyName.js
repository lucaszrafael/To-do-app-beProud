//Retorna um nome aleatório de empresa
RandomCompanyName = function(){
    var firstName = [
        'Buffet',
        'Restaurante',
        'Bar',
        'Comida',
        'Lanches',
        'Balada',
        'Festa',
        'Coma',
        'Sabor',
        'Lanche',
        'Silva',
        'Super',
        'Mega',
        'Delicia',
    ]
    var secondname = [
        '& Cia',
        'Super',
        'VIP',
        'TOP',
        'Grill',
        'Bem',
        'Corp',
        'Ultra',
    ]
    return RandomItem(firstName) + " " + RandomItem(secondname)
}