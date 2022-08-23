// Material exercises:

export function greeter(name: string): string {
    return `Olá ${name}!`;
}

export function personAge(name: string, age: number): string {
    return `${name} tem ${age} anos!`;
}

export function add(x: number, y: number): number {
    return x + y;
}

export function sumArray(numbers: number[]): number {
    return numbers.reduce(add, 0);
}

export function triangle(base: number, height: number): number {
    return (base * height) / 2;
}

export function square(side: number): number {
    return side ** 2;
}

export function rectangle(base: number, height: number): number {
    return base * height;
}

// Exercises by Me:
// 1. Crie uma nova função para calcular a área de um losango. A área do losango é dada pelo resultado da multiplicação da diagonal maior (D) pela diagonal menor (d) dividido por dois. (D * d) / 2
// Calcule a área de um losango que tem D = 32cm e d = 18cm;
// Calcule a área de um losango que tem D = 200cm e d = 50cm;
// Calcule a área de um losango que tem D = 75cm e d = 25cm.

export function calculateRhombusArea(D: number, d: number): number {
    return (D * d) / 2;
}

// 2. Crie uma nova função para calcular a área de um trapézio. A área do trapézio é dada pelo produto da altura (h) com a soma da base maior (B) e a base menor (b) dividido por dois. ((B + b) * h) / 2
// Calcule a área de um trapézio que tem B = 100cm, b = 70cm e altura = 50cm;
// Calcule a área de um trapézio que tem B = 75cm, b = 50cm e altura = 35cm;
// Calcule a área de um trapézio que tem B = 150cm, b = 120cm e altura = 80cm.

export function calculateTrapezoideArea(B: number, b: number, h: number): number {
    return ((B + b) * h) / 2;
}

// 3. Crie uma nova função para calcular a área de um círculo. A área do círculo de raio r é encontrada multiplicando o raio ao quadrado pelo número irracional ℼ (em geral utilizamos ℼ = 3,14). ℼ * r²
// Calcule a área de um círculo de raio igual 25cm;
// Calcule a área de um círculo de raio igual 100cm;
// Calcule a área de um círculo de raio igual 12,5cm.
export function circleArea(r: number): number {
    const pi = 3.14;
    return pi * Math.pow(r, 2);
}