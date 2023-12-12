// Função para fazer o scroll até uma div com um determinado id
ScrollTo = (id) => {
    // Obtém a div com o id #contato
    const contato = document.querySelector(id);

    //Pega a posição da div em relação ao topo da página
    const distancia = contato.offsetTop;

    // Faz o scroll até a div
    window.scrollTo({
        top: distancia,
        behavior: "smooth",
    });
}