// Crie uma Enum que represente as ações: salvar, imprimir, abrir, visualizar e fechar. Seu valor deve ser do tipo inteiro.
enum actions {
    save = 1,
    print,
    open,
    view,
    close
}

const getClose = actions['close'];
console.log(getClose);

const openSomething = actions[3];
console.log(openSomething);
