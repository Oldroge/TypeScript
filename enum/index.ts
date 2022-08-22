enum StudentStatus {
    Active = 1,
    Inactive,
    Paused
}
// Por padrão o enum ele se inicia no valor 0, para não dar problemas de conflito de informação com o banco de dados, inicializamos a primeira chave com o valor 1, e somente isso é necessário para o enum entender que as demais serão posteriores ao número 1.

let newStudentStatus: number = StudentStatus.Inactive; // referenciamos um enum usando EnumName.Value
console.log(newStudentStatus); //saída: 1


// Enum aceita o acesso aos dados de ambas as direções, ou seja, tanto de chave valor, quanto de valor para chave, exemplo:

enum StatusCodes {
    OK = 200,
    BadRequest = 400,
    Unauthorized,
    PaymentRequired,
    Forbidden,
    NotFound,
  }
  
  const ok = StatusCodes.OK;
  const indiceOk = StatusCodes["OK"];
  const stringBadRequest = StatusCodes[400];
  
  console.log(ok); //saída: 200
  console.log(indiceOk); //saída: 200
  console.log(stringBadRequest); //saída: BadRequest

//   Pode ser também de diferentes tipos sendo o string o mais comum:
enum directionsGamePad {
    UP = "UP",
    DOWN = "DOWN",
    LEFT = "LEFT",
    RIGTH = "RIGHT",
  }
