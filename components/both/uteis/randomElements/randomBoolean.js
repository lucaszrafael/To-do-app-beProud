RandomBoolean = function () {
    let random = Math.floor(Math.random() * 2)
    if(random === 0){
        return false
    } else{
        return true
    }
}