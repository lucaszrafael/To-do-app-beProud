//Executa uma função se é servidor
IsClient = function (func) {
    if (Meteor.isClient) {
        func()
    }
}