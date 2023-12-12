//Executa uma função se estiver iniciando

Startup = function(func){
    Meteor.startup(() => {
        func()
    })
}