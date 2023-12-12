import "./check_input.html"

Template.check_input.helpers({
    //Retorna o item selecionado
    // "checkedOption": () => {
    //     let checkedOption = Template.parentData(1).checkedOption
    //
    //     let d = this.Blaze.getData()
    //     if(checkedOption === d.value){
    //         return "checked"
    //     }
    //
    // },
    //Retorna se o item está checked ou não
    "checked": () => {
        let checked = Template.parentData(0).checked
        if(checked){
            return "checked"
        }
    },

    "class": () => {
        return Template.parentData(1).class
    },
    "name": () => {
        if(Template.parentData(1)){
            return Template.parentData(1).name
        } else{
            return RandomNumber()
        }
    },

});
Template.check_input.events({
    //Seta o check button como checked caso o usuário clicar na label
    "click .form-check-label": function (event, template) {
        // let data = $(event.target).data('check-value') //Pega o valor do check na label
        // console.log(data)
        // $("[value=" + data +"]").prop("checked", !data) //Pega o check pelo valor e seta como checked
    }
});
Template.check_input.onRendered(function () {
    //Pega o valor do check checkedOption passado pelo template
    let checkedOption = Template.parentData(0).checkedOption

    //Checa a opção passada no check
    $("[value=" + checkedOption +"]").prop("checked", true)
    

});
Template.check_input.onCreated(function () {


});

Template.check_input.onDestroyed(function () {

});