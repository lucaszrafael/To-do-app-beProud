SomSucesso = function(){
    let sound = new buzz.sound("/sounds/accomplished.ogg")
    sound.play()
}

SomErro = function(){
    let sound = new buzz.sound("/sounds/system-fault.ogg")
    sound.play()
}

SomNovaInformacao = function(){
    let sound = new buzz.sound("/sounds/stairs.ogg")
    sound.play()
}


SomSemInformacao = function(){
    let sound = new buzz.sound("/sounds/your-turn.ogg")
    sound.play()
}

SomSaida= function(){
    let sound = new buzz.sound("/sounds/case-closed.ogg")
    sound.play()
}