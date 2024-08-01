let fruta = "manzana";

//Definir un array y los valores de sus indices
let lista = ["utn", "javascript", true, 22, [1, 2, 3, 4], fruta];

//Leer el indice 0 del array
console.log(lista[0]);

//Leer un array dentro de otro
console.log(lista[4][2]);

//Si buscamos un indice por fuera del alcance da como resultado undefined
console.log(lista[10]);

console.log("largo:", lista.length);

// Si tenés una condición que revisa la existencia de un array
// Y este llega vacío la condición es válida
var frutas = [];

if (frutas) {
  console.log("frutas:", frutas.length);
}

// [] -> truthy
var frutas = ["mango"];

//si frutas existe, entonces mostrame el largo
if (frutas.length > 0) {
  console.log("frutas:", frutas.length);
}

//Los strings tambien tienen length, ya que son cadenas de caracteres
var mandarina = "mandarina";
console.log(mandarina.length);

//caso de uso, contraseña

var contraseña = "mandarina";

if (contraseña.length > 6 && contraseña.length < 15) {
  console.log("contraseña valida");
} else {
  console.log(
    "La contraseña debe poseer un minimo de 6 caracteres y un maximo de 15"
  );
}

//funciones nativas

//push - Añade un elemento o más, al final del array y retorna el largo.

let autos = [];
console.log(autos);
autos.push("lamborghini");
console.log(
  autos.push(
    "fiat",
    "pininfarina",
    "volvo",
    "shelby cobra",
    "mercedes benz",
    "lada",
    "citroen",
    "peugeot"
  )
);
console.log(autos);

//Pop - elimina el ultimo valor de un array y lo retorna.

console.log(autos.pop());
console.log(autos);

//Splice - elimina un valor o un intervalo de valores
//parametros: start - desde donde empieza a borrar/ deleteCount - cuantos borra

console.log("Autos eliminados:", autos.splice(0, 1));
console.log(autos);

//unshift - inserta elementos al inicio del array, retorna el nuevo listado

console.log(autos.unshift("alfa romeo", "BMW", "pagani", "honda"));
console.log(autos);

//shift - elimina el elemento que se encuentra al inicio del array, retorna los elementos eliminados

console.log(autos.shift());
console.log(autos);

//indexOf - Retorna el índice de un array en el que se encuentra un elemento

console.log(autos.indexOf("shelb cobra"));
console.log(autos[6]);

// -1 -> truthy

let bmw = autos.indexOf("BMW");
console.log(bmw);

console.log(autos[bmw]);
