let flag = true; // o compilador irá inferir o tipo boolean
const numberPI = 3.1416; // o compilador irá inferir o tipo number
let message = "Hello World!"; // o compilador irá inferir o tipo string

// Com a inferencia de valor, a variável irá assumir o tipo de acordo com o valor inserido no momento da declaração, quando declarado por exemplo, um valor booleano, implicitamente o TS entende que a variável é de tipo boolean e não aceitará valor de um tipo diferente para atribuí-la.