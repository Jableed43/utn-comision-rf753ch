let array = [
  "fiat",
  "pininfarina",
  "volvo",
  "shelby cobra",
  "mercedes benz",
  "lada",
  "citroen",
  "peugeot",
];
//FOR - por x cantidad
//valor inicial: 0; mientras indice sea menor al largo del array; incrementa 1
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  console.log({ element, index });
}

console.log("-------");
//valor inicial: largo del array -1; mientras indice sea mayor o igual a 0; decrementa 1
for (let index = array.length - 1; index >= 0; index--) {
  const element = array[index];
  console.log({ element, index });
}

//while - mientras
let numero = 0;
while (numero < 20) {
  console.log(numero++);
}

//forEach - por cada elemento

let mascotas = [
  "lagartija",
  "cobra",
  "cabra",
  "pastor aleman",
  "gato calico",
  "firulais",
  "erizo",
  "mapache",
  "rino blanco",
];
//funcion flecha
mascotas.forEach(mascota => console.log(mascota));

//funcion normal
mascotas.forEach(function (mascota) {
  console.log(mascota);
});

//Map - Ejecuta una funcion por cada item y su salida es un array nuevo modificado.
let numeros = [1, 2, 3, 4, 5];

let resultado = numeros.map(function (numero) {
  return numero * 2;
});

console.log(resultado);

function triple(num) {
  return num * 3;
}

//funcion flecha con llamado de funcion como parametro (callback)
let resultadoTriple = numeros.map(numero => triple(numero));
console.log(resultadoTriple);

//Filter : Muestra todas las coincidencias según condición

let numerosRandom = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 22, 23, 44, 57, 43, 11, 94];

//filtrar numeros pares
let numPares = numerosRandom.filter(num => num % 2 === 0);

//filtrar numeros impares
let numImpares = numerosRandom.filter(num => num % 2 !== 0);

console.log(numPares);
//Reutilizar resultados
let divididos = numPares.map(num => num / 2);
console.log(divididos);

//Buscar numeros mayores/menores
console.log(numerosRandom.filter(num => num > 15));

//Buscar items con un largo de caracteres mayor a cinco
console.log(mascotas.filter(mascota => mascota.length > 5));
// Filtrar todos los elementos que sean "mapache", genera un array con el resultado
console.log(mascotas.filter(mascota => mascota === "mapache"));

//Find - Trae el primer resultado que coincide con condición

// Va a encontrar la primera coincidencia que sea "mapache"
console.log(mascotas.find(mascota => mascota === "mapache"));

let numParesF = numerosRandom.find(num => num % 2 === 0);
console.log(numParesF);
