import "/client/lib/jquery.maskMoney.min.js"
import "./input_price.html"

Template.input_price.helpers({
    "validation": () => {
    }
});
Template.input_price.events({
    "click #id": function (event, template) {

    }
});
Template.input_price.onRendered(function () {
    //Coloca máscara no campo
    let input_name = Template.currentData().name
    $('.' + input_name).maskMoney({prefix:'R$ ', allowNegative: true, thousands:'.', decimal:',', affixesStay: true});
});
Template.input_price.onCreated(function () {


});

Template.input_price.onDestroyed(function () {

});