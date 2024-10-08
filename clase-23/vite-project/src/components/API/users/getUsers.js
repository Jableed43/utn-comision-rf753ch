//dentro del fetch armamos la peticion
//con stringify convertimos objetos de js a json
const apiUrl = import.meta.env.VITE_BASE_URL_USERS;

export async function getUsers() {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      //sirve como retorno, finaliza la ejecucion
      throw new Error("Error en la solicitud");
    }

    //.json() convierte json a objeto de js
    const data = await response.json();
    //Retornamos los usuarios
    return data;
  } catch (error) {
    console.log(error);
  }
}
