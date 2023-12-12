// //Na própria string, faz a substituaçao de todos os padrões
String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};