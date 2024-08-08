//1. Acceder al tercer elemento de un array y asignarle un nuevo valor
let frutas = ["manzana", "pera", "frutilla", "uva"];
console.log(frutas[2]);
frutas[2] = "mandarina";
console.log(frutas[2]);

//2. Agregar un nuevo elemento al final de un array
frutas.push("higo");
console.log(frutas);

//3. Usar funcion nativa para duplicar todos los elementos de un array de numeros
//map

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var doble = numeros.map(numero => numero * 2);
console.log(doble);

//forEach

//Inicializamos un array, donde vamos a guardar los resultados
var doble = [];
// a diferencia del map, este no genera un array con resultados
numeros.forEach(numero => {
  doble.push(numero * 2);
});
console.log(doble);

//for

var doble = [];
for (let i = 0; i < numeros.length; i++) {
  doble.push(numeros[i] * 2);
}

for (let i = 0; i < numeros.length; i++) {
  doble[i] = numeros[i] * 2;
}

console.log("con for", doble);

//4. Usar funcion nativa para obtener los numeros pares de un array
let pares = numeros.filter(numero => numero % 2 === 0);

console.log(pares);

numeros.filter(function (numero) {
  return numero % 2 === 0;
});

function buscaPar(numeros) {
  let resultado = numeros.filter(numero => numero % 2 === 0);
  console.log("buscaPar", resultado);
  return resultado;
}

buscaPar(numeros);

//5. Acceder al segundo y cuarto elemento de un array y combinarlos en una nueva cadena (Concatenación)

let combinados = "Mis frutas favoritas son " + frutas[1] + " y " + frutas[3];

let combina2 = `Mis frutas favoritas son ${frutas[1]} y ${frutas[3]}`;
console.log(combinados);

function saludo(nombre) {
  console.log(`¡Hola ${nombre}!`);
}

saludo("Pedro");

//6. Usar funcion forEach para calcular la suma de todos los elementos de un array

//inicializar un acumulador
let resultado = 0;

numeros.forEach(numero => (resultado = resultado + numero));
// numeros.forEach(numero => (resultado += numero));

console.log(resultado);

//7. Escribir una función que devuelve la tabla de multiplicar (1-10) del numero que el usuario teclee, con ciclo for. La salida debe ser un array de numeros.

function tablaMultiplicar(numero) {
  let tabla = [];
  for (let i = 1; i <= 10; i++) {
    tabla.push(numero * i);
    console.log(`${i} x ${numero} es ${i * numero}`);
  }
  console.log("fuera", tabla);
}

tablaMultiplicar(5);
tablaMultiplicar(10);
