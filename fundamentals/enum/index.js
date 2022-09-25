var StudentStatus;
(function (StudentStatus) {
    StudentStatus[StudentStatus["Active"] = 1] = "Active";
    StudentStatus[StudentStatus["Inactive"] = 2] = "Inactive";
    StudentStatus[StudentStatus["Paused"] = 3] = "Paused";
})(StudentStatus || (StudentStatus = {}));
// Por padrão o enum ele se inicia no valor 0, para não dar problemas de conflito de informação com o banco de dados, inicializamos a primeira chave com o valor 1, e somente isso é necessário para o enum entender que as demais serão posteriores ao número 1.
var newStudentStatus = StudentStatus.Inactive; // referenciamos um enum usando EnumName.Value
console.log(newStudentStatus); //saída: 1
// Enum aceita o acesso aos dados de ambas as direções, ou seja, tanto de chave valor, quanto de valor para chave, exemplo:
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["OK"] = 200] = "OK";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
    StatusCodes[StatusCodes["Unauthorized"] = 401] = "Unauthorized";
    StatusCodes[StatusCodes["PaymentRequired"] = 402] = "PaymentRequired";
    StatusCodes[StatusCodes["Forbidden"] = 403] = "Forbidden";
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
})(StatusCodes || (StatusCodes = {}));
var ok = StatusCodes.OK;
var indiceOk = StatusCodes["OK"];
var stringBadRequest = StatusCodes[400];
console.log(ok); //saída: 200
console.log(indiceOk); //saída: 200
console.log(stringBadRequest); //saída: BadRequest
//   Pode ser também de diferentes tipos sendo o string o mais comum:
var directionsGamePad;
(function (directionsGamePad) {
    directionsGamePad["UP"] = "UP";
    directionsGamePad["DOWN"] = "DOWN";
    directionsGamePad["LEFT"] = "LEFT";
    directionsGamePad["RIGTH"] = "RIGHT";
})(directionsGamePad || (directionsGamePad = {}));
