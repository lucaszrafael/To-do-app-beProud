// Extrai um JSON de uma string
ExtractJson = function (string) {
    // string.replace(/(\r\n|\n|\r|\s+)/gm, '');
    // string.replace(/'```json\\n' \+/g, '') // Remove '```json\n' +
    // string.replace(/'/g, ''); // Remove as aspas simples
    // const jsonObject = JSON.parse(string);
    //
    // return jsonObject
    // Encontre o início e o fim do JSON
    let start = string.indexOf("{");
    let end = string.lastIndexOf("}") + 1; // Adicione 1 para incluir o caractere de fechamento

// Extraia o JSON
    let jsonText = string.substring(start, end);

// Agora você pode usar JSON.parse para converter o texto JSON em um objeto
    let jsonObj;
    try {
        jsonObj = JSON.parse(jsonText);
        return jsonObj
    } catch (e) {
        console.error("O texto extraído não é um JSON válido: ", jsonText);
    }


    // const regex = /{.*?}/; // Expressão regular para encontrar o JSON
    //
    // const match = string.match(regex);
    // if (match) {
    //     const jsonString = match[0];
    //     const jsonObject = JSON.parse(jsonString);
    //     return jsonObject
    // } else {
    //     console.log('Nenhum JSON encontrado na string');
    // }
}