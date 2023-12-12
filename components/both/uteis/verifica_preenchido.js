export { verificar_preenchido }

/***
 *
 * @param dado
 * @param msg
 * @returns {boolean}
 */
var verificar_preenchido = (dado, msg) => {
    if(!dado){
        window.alert(msg)
        throw msg
    } else{
        return true
    }
}