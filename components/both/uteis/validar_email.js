export {validar_email}

var validar_email = (field, alert) => {
    if(!field){
        if(alert) {
            alert('Informe o e-mail')
        }
        return
    }
    let usuario = field.substring(0, field.indexOf("@"));
    let dominio = field.substring(field.indexOf("@") + 1, field.length);

    if ((usuario.length >= 1) &&
        (dominio.length >= 3) &&
        (usuario.search("@") === -1) &&
        (dominio.search("@") === -1) &&
        (usuario.search(" ") === -1) &&
        (dominio.search(" ") === -1) &&
        (dominio.search(".") !== -1) &&
        (dominio.indexOf(".") >= 1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
        return true
    } else{
        if(alert){
            window.alert('E-mail inválido')
            return false
        } else{
            return false
        }
    }
}