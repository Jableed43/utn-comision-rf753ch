const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

//Esta funcion hace un peticion a un servidor a traves de fetch, por lo tanto es asincronica
//async se coloca antes de "function"
const fetchCharacters = async function (url) {
  try {
    //peticion get al servidor
    let response = await fetch(url);
    //Convertimos la respuesta en JSON convirtiendola en objeto de js y la retornamos
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

const initialUrl = "https://rickandmortyapi.com/api/character";

//Caso de uso
async function ejemplo() {
  try {
    const resultado = await fetchCharacters(initialUrl);
    //Filtro para buscar un personaje que contenga la palabra Rick en su nombre
    console.log(
      resultado.results.filter(character => character.name.includes("Rick"))
    );
  } catch (error) {
    console.error(error);
  }
}

//Ejecucion
ejemplo();
