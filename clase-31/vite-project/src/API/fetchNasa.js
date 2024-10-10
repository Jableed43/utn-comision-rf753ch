//Esta funcion hace el llamado a la api y retorna la respuesta
//Llamado a la api lo hacemos a traves de fetch
//Definimos la funcion como asincronica porque solicito informacion a una api
async function fetchNasa(count) {
  try {
    if (count) {
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=icG6JnrcSkQVt5Mn481Nv0yGWaFTZNw5IsI0ZuCA&count=${count}`
      );
      //necesitamos generar una espera con await para que llegue la info

      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }
      //Convertimos la respuesta de json a obj de js
      const data = await response.json();
      console.log(data);
      return data;
    }
    return [];
  } catch (error) {
    console.error(error);
  }
}

export default fetchNasa;
