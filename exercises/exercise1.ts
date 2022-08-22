// Crie uma Enum que represente os dias da semana. Seu valor deve ser o número do dia.
enum weekDays {
    segundaFeira = 1,
    terçaFeira = 2,
    quartaFeira = 3,
    quintaFeira = 4,
    sextaFeira = 5,
    sabado = 6,
    domingo = 7
}

let getFriday = weekDays.sextaFeira;
console.log(getFriday);

let getSundayByNum = weekDays[7];
console.log(getSundayByNum);