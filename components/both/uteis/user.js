//Traz os dados do usuário logado
User = function (){
    if (UserId()) {
        return Meteor.users.findOne(UserId())
    } else{
        return 
    }
}

//Apresenta o Id de um usuário, indiferente se é pelo server ou client
UserId = function (){
   return Meteor.userId()
}
