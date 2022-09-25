// Crie uma Enum que represente as ações: salvar, imprimir, abrir, visualizar e fechar. Seu valor deve ser do tipo inteiro.
var actions;
(function (actions) {
    actions[actions["save"] = 1] = "save";
    actions[actions["print"] = 2] = "print";
    actions[actions["open"] = 3] = "open";
    actions[actions["view"] = 4] = "view";
    actions[actions["close"] = 5] = "close";
})(actions || (actions = {}));
var getClose = actions['close'];
console.log(getClose);
var openSomething = actions[3];
console.log(openSomething);
