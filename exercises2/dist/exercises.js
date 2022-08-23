"use strict";
// Material exercises:
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateRhombusArea = exports.rectangle = exports.square = exports.triangle = exports.sumArray = exports.add = exports.personAge = exports.greeter = void 0;
function greeter(name) {
    return `Olá ${name}!`;
}
exports.greeter = greeter;
function personAge(name, age) {
    return `${name} tem ${age} anos!`;
}
exports.personAge = personAge;
function add(x, y) {
    return x + y;
}
exports.add = add;
function sumArray(numbers) {
    return numbers.reduce(add, 0);
}
exports.sumArray = sumArray;
function triangle(base, height) {
    return (base * height) / 2;
}
exports.triangle = triangle;
function square(side) {
    return side ** 2;
}
exports.square = square;
function rectangle(base, height) {
    return base * height;
}
exports.rectangle = rectangle;
// Exercises by Me:
// 1. Crie uma nova função para calcular a área de um losango. A área do losango é dada pelo resultado da multiplicação da diagonal maior (D) pela diagonal menor (d) dividido por dois. (D * d) / 2
// Calcule a área de um losango que tem D = 32cm e d = 18cm;
// Calcule a área de um losango que tem D = 200cm e d = 50cm;
// Calcule a área de um losango que tem D = 75cm e d = 25cm.
function calculateRhombusArea(D, d) {
    return (D * d) / 2;
}
exports.calculateRhombusArea = calculateRhombusArea;
