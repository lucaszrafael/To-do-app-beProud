
IsAdmin = function(userId){
    if (userId) {
        //Se for passado o user Id, verifica se o Id indicado é admin
        return Roles.userIsInRole(userId, ['super-admin', 'admin'])
    } else {
        //Senão verifica se o usuário logado em questão é admin
        return Roles.userIsInRole(Meteor.userId(), ['super-admin', 'admin'])
    }
}
