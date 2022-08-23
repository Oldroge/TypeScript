// Crie uma Enum que represente as cores do arco-íris. Seu valor deve ser o nome das cores em português.

enum rainbowColors {
    red = 'vermelho',
    orange = 'laranja',
    yellow = 'amarelo',
    green = 'verde',
    blue = 'azul',
    indigo = 'anil',
    violet = 'violeta'
};

const getBlueColor = rainbowColors.blue;
console.log(getBlueColor);

const getIndigoByKey = rainbowColors['indigo'];
console.log(getIndigoByKey);