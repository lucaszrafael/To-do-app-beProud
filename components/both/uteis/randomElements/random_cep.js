export {RandomCEP}
//Gera um endereço aleatorio
var RandomCEP = () => {
    return RandomItem(enderecos)
}



var enderecos = [
    //São Paulo
    {cep: "08010-010", logradouro: "Rua Arlindo Colaço", bairro: "São Miguel Paulista", cidade: "São Paulo", estado: "SP", numero: RandomNumber(1,200)},
    {cep: "03984-150", logradouro: "Rua Salgo", bairro: "Jardim Planalto", cidade: "São Paulo", estado: "SP", numero: RandomNumber(1,200)},
    {cep: "05136-020", logradouro: "Avenida Marginal", bairro: "Jardim Santo Elias", cidade: "São Paulo", estado: "SP", numero: RandomNumber(1,200)},
    {cep: "03373-125", logradouro: "Rua Joaquim da Silva", bairro: "Chácara Mafalda", cidade: "São Paulo", estado: "SP", numero: RandomNumber(1,200)},
    {cep: "05126-010", logradouro: "Rua João Batista Botelho", bairro: "Parque São Domingos", cidade: "São Paulo", estado: "SP", numero: RandomNumber(1,200)},
    {cep: "02991-970", logradouro: "Estrada das Taipas 2975", bairro: "Jardim Rincão", cidade: "São Paulo", estado: "SP", numero: RandomNumber(1,200)},
    {cep: "02077-027", logradouro: "Rua Lázara da Silva Jimenes", bairro: "Vila Leonor", cidade: "São Paulo", estado: "SP", numero: RandomNumber(1,200)},
    {cep: "03726-140", logradouro: "Rua Monsenhor Anacleto Coutinho", bairro: "Engenheiro Goulart", cidade: "São Paulo", estado: "SP", numero: RandomNumber(1,200)},
    {cep: "04097-970", logradouro: "Avenida Pedro Álvares Cabral 201", bairro: "Parque Ibirapuera", cidade: "São Paulo", estado: "SP", numero: RandomNumber(1,200)},
    {cep: "08061-390", logradouro: "Rua Rosa-da-Turquia", bairro: "Jardim Pedro José Nunes", cidade: "São Paulo", estado: "SP", numero: RandomNumber(1,200)},
    {cep: "05596-060", logradouro: "Rua Tiugibe Inoue", bairro: "Cidade dos Bandeirantes", cidade: "São Paulo", estado: "SP", numero: RandomNumber(1,200)},
    {cep: "02998-260", logradouro: "Rua Henrique Salvatori", bairro: "Conjunto City Jaraguá", cidade: "São Paulo", estado: "SP", numero: RandomNumber(1,200)},
    {cep: "05011-002", logradouro: "Rua Wanderley", bairro: "Perdizes", cidade: "São Paulo", estado: "SP", numero: RandomNumber(1,200)},
    {cep: "05459-000", logradouro: "Rua Alberto Faria", bairro: "Alto de Pinheiros", cidade: "São Paulo", estado: "SP", numero: RandomNumber(1,200)},
    {cep: "08382-460", logradouro: "Travessa Alfredo Ceschiatti", bairro: "Recanto Verde do Sol", cidade: "São Paulo", estado: "SP", numero: RandomNumber(1,200)},
    {cep: "04125-090", logradouro: "Rua Cardoso Franco", bairro: "Vila Firmiano Pinto", cidade: "São Paulo", estado: "SP", numero: RandomNumber(1,200)},
    {cep: "04384-130", logradouro: "Rua Valango", bairro: "Jardim Jabaquara", cidade: "São Paulo", estado: "SP", numero: RandomNumber(1,200)},
    {cep: "02137-013", logradouro: "Rua Eugênio Giraldoni", bairro: "Jardim Japão", cidade: "São Paulo", estado: "SP", numero: RandomNumber(1,200)},
    {cep: "02324-050", logradouro: "Rua Odilon Dantas Cortez", bairro: "Jardim Cristina", cidade: "São Paulo", estado: "SP", numero: RandomNumber(1,200)},
    {cep: "04038-031", logradouro: "Rua Borges Lagoa", bairro: "Vila Clementino", cidade: "São Paulo", estado: "SP", numero: RandomNumber(1,200)},
    {cep: "01455-030", logradouro: "Rua Sabuji", bairro: "Jardim Europa", cidade: "São Paulo", estado: "SP", numero: RandomNumber(1,200)},
    {cep: "05776-340", logradouro: "Rua Camasati", bairro: "Vila Franca", cidade: "São Paulo", estado: "SP", numero: RandomNumber(1,200)},
    {cep: "05818-360", logradouro: "Avenida Tomás do Vale", bairro: "Jardim Vergueiro", cidade: "São Paulo", estado: "SP", numero: RandomNumber(1,200)},
    {cep: "04065-004", logradouro: "Avenida Ceci", bairro: "Planalto Paulista", cidade: "São Paulo", estado: "SP", numero: RandomNumber(1,200)},
    {cep: "05209-090", logradouro: "Travessa Jasmim do Campo", bairro: "Conjunto Habitacional Recanto dos Humildes", cidade: "São Paulo", estado: "SP", numero: RandomNumber(1,200)},
    {cep: "03389-110", logradouro: "Praça Frei Leandro do Sacramento", bairro: "Vila Primavera", cidade: "São Paulo", estado: "SP", numero: RandomNumber(1,200)},
    {cep: "03618-040", logradouro: "Rua Rio Dourado", bairro: "Vila Marieta", cidade: "São Paulo", estado: "SP", numero: RandomNumber(1,200)},
    //Santos
    {cep: "11010-230", logradouro: "Rua Antônio Prado", bairro: "Centro", cidade: "Santos", estado: "SP", numero: RandomNumber(1,200)},
    {cep: "11013-280", logradouro: "Avenida Francisco Ribeiro", bairro: "Docas", cidade: "Santos", estado: "SP", numero: RandomNumber(1,200)},
    {cep: "11082-100", logradouro: "Avenida Santo Antônio do Valongo", bairro: "Morro São Bento", cidade: "Santos", estado: "SP", numero: RandomNumber(1,200)},
    {cep: "11013-190", logradouro: "Praça Patriarca José Bonifácio", bairro: "Centro", cidade: "Santos", estado: "SP", numero: RandomNumber(1,200)},
    {cep: "11085-260", logradouro: "Rua Ubatuba", bairro: "Chico de Paula", cidade: "Santos", estado: "SP", numero: RandomNumber(1,200)},
    {cep: "11010-360", logradouro: "Praça Manoel de Almeida", bairro: "Valongo", cidade: "Santos", estado: "SP", numero: RandomNumber(1,200)},
    {cep: "11087-480", logradouro: "Rua Antônio Gracioso", bairro: "Castelo", cidade: "Santos", estado: "SP", numero: RandomNumber(1,200)},
    {cep: "11065-922", logradouro: "Praça dos Expedicionários 10", bairro: "Gonzaga", cidade: "Santos", estado: "SP", numero: RandomNumber(1,200)},
    {cep: "11085-395", logradouro: "Travessa Vila Nova", bairro: "Chico de Paula", cidade: "Santos", estado: "SP", numero: RandomNumber(1,200)},
    {cep: "11013-922", logradouro: "Praça República 87", bairro: "Centro", cidade: "Santos", estado: "SP", numero: RandomNumber(1,200)},
    {cep: "11081-420", logradouro: "Viela B", bairro: "Morro São Bento", cidade: "Santos", estado: "SP", numero: RandomNumber(1,200)},
    {cep: "11065-902", logradouro: "Rua Euclides da Cunha 241", bairro: "José Menino", cidade: "Santos", estado: "SP", numero: RandomNumber(1,200)},
    {cep: "11088-006", logradouro: "Rua F", bairro: "Rádio Clube", cidade: "Santos", estado: "SP", numero: RandomNumber(1,200)},
    {cep: "11088-260", logradouro: "Praça Marechal Eurico Gaspar Dutra", bairro: "Rádio Clube", cidade: "Santos", estado: "SP", numero: RandomNumber(1,200)},
    {cep: "11065-750", logradouro: "Rua Sete", bairro: "José Menino", cidade: "Santos", estado: "SP", numero: RandomNumber(1,200)},
    {cep: "11045-040", logradouro: "Rua Doutor Cezário da Motta", bairro: "Boqueirão", cidade: "Santos", estado: "SP", numero: RandomNumber(1,200)},
    {cep: "11089-000", logradouro: "Avenida Jovino de Mello", bairro: "Santa Maria", cidade: "Santos", estado: "SP", numero: RandomNumber(1,200)},
    {cep: "11050-310", logradouro: "Rua Comendador Martins", bairro: "Encruzilhada", cidade: "Santos", estado: "SP", numero: RandomNumber(1,200)},
    {cep: "Encruzilhada", logradouro: "Vila Gema", bairro: "Vila Progresso", cidade: "Santos", estado: "SP", numero: RandomNumber(1,200)},

]