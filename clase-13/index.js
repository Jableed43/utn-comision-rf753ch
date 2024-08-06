//Funciones

//Funcion nombrada - declarada
function suma(a, b) {
  return a + b;
}

//el retorno genera la salida de datos de tu función
//solo hay un retorno por bloque de código
//retorno finaliza la operación

// Llamado y uso function()
let resultadoSuma = suma(2, 4);
console.log(resultadoSuma + 200);

//Funcion anonima
let resta = function (a, b) {
  return a - b;
};

console.log(resta(6, 2));

//Funciones flecha

//Version 1 - sin nombre, no lleva palabra Function, no lleva return ni llaves ya que la flecha cumple el papel
const multiplicar = (a, b) => a * b;
console.log(multiplicar(2, 8));

//Version 2 - sin nombre, sin Function, lleva llaves y return
const division = (a, b) => {
  return a / b;
};
