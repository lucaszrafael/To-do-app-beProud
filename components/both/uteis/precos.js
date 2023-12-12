
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

//Converte Dolar para Real.
DolarToRealString = function(valor){
    valor = valor.toFixed(2)
    // valor = valor.toFixed(2) //Limita o valor a duas casas decimais

    if(valor == null || valor == 0) return "R$ 0,00"

//Inverte um valor em Dólar, float para Real, retornando uma String
    var inteiro = null, decimal = null, c = null, j = null;
    var aux = new Array();

    valor = valor.toString()

    c = valor.indexOf(".",0);
    //encontrou o ponto na string
    if(c > 0){
        //separa as partes em inteiro e decimal
        inteiro = valor.substring(0,c);
        decimal = valor.substring(c+1,valor.length);
    }else{
        inteiro = valor;
    }

    //pega a parte inteiro de 3 em 3 partes
    for (j = inteiro.length, c = 0; j > 0; j-=3, c++){
        aux[c]=inteiro.substring(j-3,j);
    }

    //percorre a string acrescentando os pontos
    inteiro = "";
    for(c = aux.length-1; c >= 0; c--){
        inteiro += aux[c]+'.';
    }
    //retirando o ultimo ponto e finalizando a parte inteiro

    inteiro = inteiro.substring(0,inteiro.length-1);

    decimal = parseInt(decimal);
    if(isNaN(decimal)){
        decimal = "00";
    }else{
        decimal = "" + decimal;
        if(decimal.length === 1){
            decimal = decimal+"0";
        }
    }


    valor = "R$ "+inteiro +"," + decimal;
    valor = valor.replace('-.','-')     //Corrigindo o bug de número negativo com centenas, que coloca um "ponto". É uma improvisação
    valor = valor.replace('R$ -', '-R$ ')

    return valor;
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