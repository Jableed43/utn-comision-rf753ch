// tablaMultiplicar.js
function tablaMultiplicar(numero) {
  let tabla = [];
  for (let i = 1; i <= 10; i++) {
    tabla.push(numero * i);
    console.log(`${i} x ${numero} es ${i * numero}`);
  }
  console.log("fuera", tabla);
}

// Capturamos los argumentos de la línea de comandos
const args = process.argv.slice(2);

if (args.length > 0) {
  const numero = parseInt(args[0], 10);
  if (!isNaN(numero)) {
    tablaMultiplicar(numero);
  } else {
    console.log("Por favor, proporciona un número válido como argumento.");
  }
} else {
  console.log("Por favor, proporciona un número como argumento.");
}
