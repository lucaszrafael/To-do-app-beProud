//Função para redirecionar o usuário para um link interno. Força o scroll para o topo.
Go = (route_name, data)=>{
    //Faz scroll animado para o topo da página
    $('html').animate({scrollTop: 0}, 100);
    Router.go(route_name, data)
}