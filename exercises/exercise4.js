// Crie uma Enum que represente os pontos cardeais: Norte, Leste, Sul e Oeste. Seu valor deve ser a primeira letra do nome do ponto cardial.
var cardinalPoints;
(function (cardinalPoints) {
    cardinalPoints["north"] = "N";
    cardinalPoints["south"] = "S";
    cardinalPoints["east"] = "E";
    cardinalPoints["west"] = "W";
})(cardinalPoints || (cardinalPoints = {}));
var goToSouth = cardinalPoints.south;
console.log(goToSouth);
var bringMeToWest = cardinalPoints["west"];
console.log(bringMeToWest);
