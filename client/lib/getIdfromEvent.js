//Pega um id de um evento de um template. Facilita demais.
GetIdFromEvent = function (event) {
    return event.currentTarget.getAttribute('data-id');
}

