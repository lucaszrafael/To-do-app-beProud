//Retorna se o usuário está logado e se tem uma empresa associada a ele

IsCompany = function(){
    if(Meteor.userId()){
        let user = Meteor.users.findOne({_id: Meteor.userId()})
        if(user){
            //Checa se o usuário tem a role rh
            if(Roles.userIsInRole(user, 'rh')){
                //Se não tiver empresa associada, redireciona para a página de cadastro da empresa
                if(!user.profile.empresaId){
                    console.log("Usuário não tem empresa associada")
                    Go("cadastro_empresa_rh")
                } else{ //Se tiver, retorna true
                    return true
                }
            } else{
                Go("home")
                Meteor.logout()
                alert("Acesso restrito a empresas. Faça o login com uma conta de empresa ou na área pessoal.")
            }
        } else{
            Go("login_rh")
        }
    } else{
        Go("login_rh")
    }

}