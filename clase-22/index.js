//Array de frutas
const fruits = ["apple", "banana", "cherry", "pear", "strawberry"];

// Podemos acceder a n elemento de un array
fruits[0];

//Destructuracion de un array
//El mismo orden en que se destructura, es el mismo orden de los elementos
//Por lo tanto las constantes y los indices del array coinciden
const [firstFruit, secondFruit, thirdFruit] = fruits;

console.log(firstFruit); // 'apple'
console.log(secondFruit); // 'banana'
console.log(thirdFruit);

//Destructuracion de objetos:
// { clave: valor }

const persona = {
  nombre: "juan",
  apellido: "lopez",
  edad: 28,
  profesion: "desarrollador",
  direccion: {
    ciudad: "mar del plata",
    pais: "argentina",
  },
};

//En este caso destructuramos a partir de la key que queremos del objeto
const { edad } = persona;

console.log(edad);

//Podemos renombrar las variables durante la destructuracion

const { nombre: nombreCompleto, apellido, profesion: trabajo } = persona;

console.log(nombreCompleto);
console.log(trabajo);

//Concatenar

const fullName = `${nombreCompleto} ${apellido}`;

console.log(fullName);

//Destructurar un objeto anidado
const {
  direccion: { ciudad, pais },
} = persona;

console.log(ciudad);
console.log(pais);

//Extra:
//La destructuracion de un string sigue el orden de los indices igual que un array

const palabra = "Hola";

const [primeraLetra, segundaLetra] = palabra;

console.log(primeraLetra, segundaLetra);
