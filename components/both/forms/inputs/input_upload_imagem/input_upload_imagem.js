import "./input_upload_imagem.html"

Template.input_upload_imagem.helpers({
    "helper": () => {

    }
});
Template.input_upload_imagem.events({
    "click #btn_upload_imagem": (event,template) => {
        let d = template.data
        console.log(d)
        Modal.show('modal_upload_image', {title: d.modalTitle, content: d.modalContent, after: d.modalAfter})
    },
});
Template.input_upload_imagem.onRendered(function () {


});
Template.input_upload_imagem.onCreated(function () {


});

Template.input_upload_imagem.onDestroyed(function () {

});