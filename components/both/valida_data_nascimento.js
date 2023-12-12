import moment from "moment/moment";

//Receba a data no seguinte formato Validar_Data_Nascimento("YYYY-MM-DD")
Validar_Data_Nascimento = (data) => {
    if (moment(data, "YYYY-MM-DD", true).isValid()) {
        var data_nasc = moment(data, "YYYY-MM-DD");
        var idade = moment().diff(data_nasc, 'years');
        if (idade >= 16 && idade <= 100) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}