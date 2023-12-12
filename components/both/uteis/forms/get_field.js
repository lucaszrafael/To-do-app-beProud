export {Get_field}
/**
 *
 *
 */
var Get_field = (name) => {
    let campo = $('[name=' + name + ']').val()
    return campo
}