// Tipos de variables

// Declarar: Crear la variable
// Asignar: Otorgar un valor a la variable

//VAR: Se puede reasignar, se puede redeclarar
var variable;

variable = "juan";
console.log(variable);

variable = "pedro";
console.log(variable);

variable = 10;
console.log(variable);

var variable = 1000;

//LET: Se puede reasignar, no se puede redeclarar
let variable2;

variable2 = "mono";
variable2 = "jaula";
variable2 = 2;

//CONST: No se puede reasignar, no se puede redeclarar
const variable3 = "zapatilla";
console.log(variable3);

//Global
let x = 100;
console.log(x);

//Scope de var
// Implementacion - Definicion de funcion
function varScope() {
  //cree una variable x
  let x = 10;
  //Condicional if
  if (true) {
    //bloque de codigo
    x = 20;
    console.log(x);
  }
  console.log(x);
}

//Llamado de funcion - Ejecucion
varScope();

//block-scoped - se encuentra encerrado en un contexto
//global-scoped - se encuentra suelto

//Scope de let
//Te genera diferentes variables locales con diferentes valores e identidad
let y = 100;
console.log(y);
function letScope() {
  let y = 1;
  if (true) {
    let y = 2;
    console.log(y);
  }
  console.log(y);
}

letScope();

//Const: Puede generar variables locales y globales. No redefine ni redeclara.
const z = 101;
console.log(z);
function constScope() {
  const z = 11;
  if (true) {
    const z = 22;
    console.log(z);
  }
  console.log(z);
}

constScope();
