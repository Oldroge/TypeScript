"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Exercise = __importStar(require("./exercises"));
// Answers by material:
console.log("========ANSWERS BY MATERIAL===========");
console.log(Exercise.greeter("Maria"));
console.log(Exercise.personAge("Maria", 40));
console.log(`A soma do array é igual a ${Exercise.sumArray([3, 6, 9])}`);
console.log(`Triângulo de base 10cm e altura 25cm: ${Exercise.triangle(10, 25)}cm²`);
console.log(`Triângulo de base 5cm e altura 30cm: ${Exercise.triangle(5, 30)}cm²`);
console.log(`Triângulo de base 100cm e altura 200cm: ${Exercise.triangle(100, 200)}cm²`);
console.log(`Quadrado de lado 10cm: ${Exercise.square(10)}cm²`);
console.log(`Quadrado de lado 5cm: ${Exercise.square(5)}cm²`);
console.log(`Quadrado de lado 100cm: ${Exercise.square(100)}cm²`);
console.log(`Retângulo de base 10cm e altura 25cm: ${Exercise.rectangle(10, 25)}cm²`);
console.log(`Retângulo de base 5cm e altura 30cm: ${Exercise.rectangle(5, 30)}cm²`);
console.log(`Retângulo de base 100cm e altura 200cm: ${Exercise.rectangle(100, 200)}cm²`);
// Answers by me:
console.log("========ANSWERS BY ME===========");
// Exercise 1, results:
console.log(`A área do losangulo entre D: 32cm e d: 18cm é: ${Exercise.calculateRhombusArea(32, 18)}cm²`);
console.log(`A área do losangulo entre D: 200cm e d: 50cm é: ${Exercise.calculateRhombusArea(200, 50)}cm²`);
console.log(`A área do losangulo entre D: 75cm e d: 25cm é: ${Exercise.calculateRhombusArea(75, 25)}cm²`);
// Exercise2, results:
console.log(`A área do trapezoide com base com B: 100cm, b: 70cm e h: 50cm é: ${Exercise.calculateTrapezoideArea(100, 70, 50)}`);
console.log(`A área do trapezoide com base com B: 75cm, b: 50cm e h: 35cm é: ${Exercise.calculateTrapezoideArea(75, 50, 35)}`);
console.log(`A área do trapezoide com base com B: 150cm, b: 120cm e h: 80cm é: ${Exercise.calculateTrapezoideArea(150, 120, 80)}`);
// exercise 3, response:
console.log(`A area do circulo com r: 25cm é: ${Exercise.circleArea(25)}`);
console.log(`A area do circulo com r: 100cm é: ${Exercise.circleArea(100)}`);
console.log(`A area do circulo com r: 12,5cm é: ${Exercise.circleArea(12.5)}`);
