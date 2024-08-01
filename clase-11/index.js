//OPERADORES LOGICOS
let llueve = false;
let barrio = true;
let escuela = true;
let club = false;

//!llueve AND ( los del barrio AND ( los del club OR los de la escuela ) )
// Tenemos nuestra primera condicion que es ideal
if (!llueve && barrio && (club || escuela)) {
  console.log("La fiesta se hace en una cancha");
  // Tenemos una condicion alternativa
} else if (llueve && barrio && (club || escuela)) {
  console.log("La fiesta se hace en mi casa");
  // Si el resto no se cumple, esta condición se cumple
} else {
  console.log("No hay fiesta");
}

//OPERADORES DE COMPARACION
// No confundir con = ya que este sirve para asignar valores
// Igual a (==) Solo compara el valor
console.log(2 == "2");

// Comparación estricta - Igual a (===) Compara valor y tipo de valor.
console.log(2 === "2");

// Distinto a (!=) Solo compara valor
console.log(2 != "2");

// Distinto a (!==) Compara valor y tipo.
console.log(2 !== "2");

// Mayor a (>) // Menor a (<)
console.log(2 > 5);
console.log(2 < 5);

// Mayor o igual a (>=) // Menor o igual a (<=)
console.log(2 >= 5);
console.log(2 <= 5);

//Al incluir el = en la comparación incluye el numero que se compara
//  n <= 5
//  5 4 3 2 1 0 . . .

//  n < 5
//  4 3 2 1 0 . . .

let num = 4;

//Typeof te devuelve el tipo de dato del valor. En este caso lo usamos para validar.
if (typeof num === "number") {
  if (num >= 5) {
    console.log("Num es mayor o igual a 5");
  } else {
    console.log("Num es menor a 5");
  }
} else {
  console.log("Ingrese un dato numerico");
}

if (typeof num === "number" && num >= 5) {
  console.log("Num es mayor o igual a 5");
} else {
  console.log("Num es menor a 5");
}

//If ternario
// condicion ? si se cumple : bloque si se cumple else
typeof num === "number" && num >= 5
  ? console.log("Num es mayor o igual a 5")
  : console.log("Num es menor a 5");

//Switch

let dia = 5;

switch (dia) {
  case 1:
    console.log("Hoy es lunes");
    break;

  case 2:
    console.log("Hoy es martes");
    break;

  case 3:
    console.log("Hoy es miercoles");
    break;

  default:
    console.log("Numero de dia invalido");
    break;
}
