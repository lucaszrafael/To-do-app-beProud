/**
 * Classe para gerar formulários
 * @param formId
 *
 * this.fields = [
 *             {
 *                 type: "cep", name: "cep", label: "CEP", placeholder: "Informe o CEP",
 *                 validation: {
 *                     optional: false,
 *                     type: String,
 *                     //mask: "(99) 99999-9999",
 *                     min: 2,
 *                     max: 30,
 *                     //No custom é possivel validar qualquer coisa,
 *                     custom: (field_name, field_value, form_data) => {
 *
 *                     }
 *                 },
 *             },
 *             ]
 */



GerarForm = class {
    constructor(formId, fields, buttons) {
        this.formId = formId
        this.validateOnBlur = true
        this.fields = fields
        this.buttons = buttons
    }

    //Adiciona campos ao formulário
    adicionar_campos(campos) {
        _.each(campos, (c) => {
            this.fields.push(c)
        })
    }
}