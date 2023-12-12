//Executa uma função se é servidor
IsServer = function (func) {
    if (Meteor.isServer) {
        func()
    }
}