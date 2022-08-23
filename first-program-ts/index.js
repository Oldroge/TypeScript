var idade = 30;
idade = 'trinta';
// Por inferência o typescript entende que o valor da variável 'idade' é 30, um number. No caso ele não permite que ao reatribuir a variável, seja com outro tipo, neste caso string.

// Já o JavaScript, ele já aceita, como visto, não aparece erro após compilado o programa, percebendo a necessidade do typescript.
