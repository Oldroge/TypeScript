"use strict";
// Material exercises:
Object.defineProperty(exports, "__esModule", { value: true });
exports.circleArea = exports.calculateTrapezoideArea = exports.calculateRhombusArea = exports.rectangle = exports.square = exports.triangle = exports.sumArray = exports.add = exports.personAge = exports.greeter = void 0;
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
// 2. Crie uma nova função para calcular a área de um trapézio. A área do trapézio é dada pelo produto da altura (h) com a soma da base maior (B) e a base menor (b) dividido por dois. ((B + b) * h) / 2
// Calcule a área de um trapézio que tem B = 100cm, b = 70cm e altura = 50cm;
// Calcule a área de um trapézio que tem B = 75cm, b = 50cm e altura = 35cm;
// Calcule a área de um trapézio que tem B = 150cm, b = 120cm e altura = 80cm.
function calculateTrapezoideArea(B, b, h) {
    return ((B + b) * h) / 2;
}
exports.calculateTrapezoideArea = calculateTrapezoideArea;
// 3. Crie uma nova função para calcular a área de um círculo. A área do círculo de raio r é encontrada multiplicando o raio ao quadrado pelo número irracional ℼ (em geral utilizamos ℼ = 3,14). ℼ * r²
// Calcule a área de um círculo de raio igual 25cm;
// Calcule a área de um círculo de raio igual 100cm;
// Calcule a área de um círculo de raio igual 12,5cm.
function circleArea(r) {
    const pi = 3.14;
    return pi * Math.pow(r, 2);
}
exports.circleArea = circleArea;
