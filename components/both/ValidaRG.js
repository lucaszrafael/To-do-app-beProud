//Função para validar o RG
ValidaRG = function (rg) {
    var exp = new RegExp("^[0-9]{2}.[0-9]{3}.[0-9]{3}-[0-9]{1}$");
    return exp.test(rg);
}