function operacionAsincronica() {
  return new Promise((resolve, reject) => {
    const exito = false;
    if (exito) {
      resolve("La operacion fue exitosa");
    } else {
      reject("La operacion ha fallado");
    }
  });
}

operacionAsincronica()
  .then(response => {
    console.log("response", response);
  })
  .catch(error => {
    console.log(error);
  });

async function ejemploAsincronico() {
  try {
    const resultado = await operacionAsincronica();
    console.log(resultado);
  } catch (error) {
    console.log("error: ", error);
  }
}

ejemploAsincronico();

console.log("fuera de la operación asincronica");
