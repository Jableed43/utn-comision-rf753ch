//dentro del fetch armamos la peticion
//con stringify convertimos objetos de js a json
export async function addUser(user, urlBase) {
  try {
    const response = await fetch(urlBase, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      //sirve como retorno, finaliza la ejecucion
      throw new Error("Error en la solicitud");
    }

    //.json() convierte json a objeto de js
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
