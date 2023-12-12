//Gera um substantivo para um produto relacionado à feira para ajudar na criaçaõ de produtos aleatórios para popular o banco de dados

RandomProductNoun = function () {
    var nouns = [
        'próximo do centro',
        'na zona leste',
        'na zona sul',
        'na zona oeste',
        'no centro',
        'no Tatuapé',
        'na Guilhermina',
        'na Penha',
        'na Vila Matilde',
        'na Vila Olímpia',
        'em Moema',
        'em Perdizes',
    ]
    return RandomItem(nouns)
}