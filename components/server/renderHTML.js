/**
 * Renderiza um html da pasta private no servidor
 * @param filepath
 * @param doc
 * @constructor
 */
RenderHTML = (filepath, doc_array) => {
    var html = Assets.getText(filepath);
    _.each(doc_array, (data) => {
        html.replaceAll
    })

}
