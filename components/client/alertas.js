import "/components/client/sounds.js"


AlertaErro = function (msg) {
     Bert.alert(msg, "danger");

 }

AlertaSucesso = function (msg) {
    // Bert.alert(msg, "success", "growl-top-right");
    Bert.alert(msg, "success");
}