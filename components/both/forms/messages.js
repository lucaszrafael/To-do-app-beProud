/**
 * Retorna uma mensagem de erro baseado em um id de mensagem e um label
 * Recebe uma config baseado em {_id: "codigo_mensagem", label: "Label do campo" (opcional), lang: "pt"}
 * @param config
 * @returns {*}
 * @constructor
 */
FormsMessages = (config) => {
    if(!config._id) new Error("Informe o Id da mensagem")
    if(!config.lang) config.lang = "pt" //Define portugues como a linguagem padrão

    var formsMessages = [
        {
            _id: "required",
            results: {
                pt: 'O campo "' + config.label + '" é obrigatório.'
            }
        },
        {
            _id: "min_required",
            results: {
                pt: 'O campo "' + config.label + '" precisa de mais caracteres.'
            }
        },
        {
            _id: "max_required",
            results: {
                pt: 'O campo "' + config.label + '" alcançou o limite de caracteres.'
            }
        },
        {
            _id: "type",
            results: {
                pt: 'O tipo do campo "' + config.label + '" deve ser outro.'
            }
        },
        {
            _id: "email_invalid",
            results: {
                pt: 'E-mail inválido.'
            }
        },
        {
            _id: "min_one_option",
            results: {
                pt: 'Escolha pelo menos uma opção.'
            }
        },
    ]

    let msg = _.find(formsMessages, (m) => {
        return m._id === config._id
    })

    let result;
    if(config.lang === "pt"){
        result = msg.results.pt
    }

    return result
}