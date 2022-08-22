// Crie uma Enum que represente as cores do arco-íris. Seu valor deve ser o nome das cores em português.
var rainbowColors;
(function (rainbowColors) {
    rainbowColors["red"] = "vermelho";
    rainbowColors["orange"] = "laranja";
    rainbowColors["yellow"] = "amarelo";
    rainbowColors["green"] = "verde";
    rainbowColors["blue"] = "azul";
    rainbowColors["indigo"] = "anil";
    rainbowColors["violet"] = "violeta";
})(rainbowColors || (rainbowColors = {}));
;
var getBlueColor = rainbowColors.blue;
console.log(getBlueColor);
var getIndigoByKey = rainbowColors['anil'];
console.log(getIndigoByKey);
