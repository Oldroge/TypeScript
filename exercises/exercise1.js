// Crie uma Enum que represente os dias da semana. Seu valor deve ser o número do dia.
var weekDays;
(function (weekDays) {
    weekDays[weekDays["segundaFeira"] = 1] = "segundaFeira";
    weekDays[weekDays["ter\u00E7aFeira"] = 2] = "ter\u00E7aFeira";
    weekDays[weekDays["quartaFeira"] = 3] = "quartaFeira";
    weekDays[weekDays["quintaFeira"] = 4] = "quintaFeira";
    weekDays[weekDays["sextaFeira"] = 5] = "sextaFeira";
    weekDays[weekDays["sabado"] = 6] = "sabado";
    weekDays[weekDays["domingo"] = 7] = "domingo";
})(weekDays || (weekDays = {}));
var getFriday = weekDays.sextaFeira;
console.log(getFriday);
var getSundayByNum = weekDays[7];
console.log(getSundayByNum);
