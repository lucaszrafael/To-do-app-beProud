ConversorPrecos = function(preco){
    var cString = preco.toString();
    var replace =  cString.replaceAll(".", ",").replaceAll(",",".");
    return "R$ " + replace;
};
FloatToString = function(preco){
    /********************************************************************/
    /* Transformo um float em um string */
    /********************************************************************/
    var cString = preco.toString();
    return cString.replaceAll(".", ",");

};

//Converte Dolar para Real. Lembre-se de passar um valor com 2 casas decimais. Ex.: valor.toFixed(2)
DolarToRealString = function(valor){
    const valorReal = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return valorReal;
}
RealToDolarString = function(price){
    if(!price) return
    //Inverte um valor Real para Dólar, padrão do javascript, retornando o valor em String
    price = price.replaceAll(".",""); //Retiro os pontos, que são desnecessários
    price = price.replaceAll(",", "."); //Troco a vírgula pelo ponto
    return price;
};
RealToDolarFloat = function(price){
    if(!price) return 0
    //Inverte um valor Real para Dólar, padrão do javascript, retornando o valor em String
    price = price.replace("R$ ", "")

    price = price.replaceAll(".",""); //Retiro os pontos, que são desnecessários

    price = price.replaceAll(",", "."); //Troco a vírgula pelo ponto
    return parseFloat(price);
}
PrecoFloat = function(preco){
    /********************************************************************/
    /* Transformo uma string em um float */
    /********************************************************************/
    //Verifico se o preço já não está em float
    preco = preco.replaceAll(".",",").replaceAll(",",".");
    return parseFloat(preco); //Transformo a string em um float

}