// Crie uma Enum que represente os pontos cardeais: Norte, Leste, Sul e Oeste. Seu valor deve ser a primeira letra do nome do ponto cardial.
enum cardinalPoints {
    north = 'N',
    south = 'S',
    east = 'E',
    west = 'W'
}

const goToSouth = cardinalPoints.south;
console.log(goToSouth);

const bringMeToWest = cardinalPoints["west"];
console.log(bringMeToWest);
