//GERA UM CEP ALEATÓRIO
RandomCEP = function () {
    const firstNumbers = RandomNumber(10000, 99999)
    const lastNumbers = RandomNumber(100,999)
    return firstNumbers + "-" + lastNumbers
}