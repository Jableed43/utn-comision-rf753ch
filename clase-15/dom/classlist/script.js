//Genero una funcion que maneja a otras / Añadir escucha de eventos
// DOMContentLoaded Espera que se cargue el contenido en el dom
document.addEventListener("DOMContentLoaded", function () {
  //Traer elementos con selectores
  const titulo = document.querySelector(".titulo");
  const parrafo = document.querySelector(".texto");
  const input = document.querySelector(".input-texto");

  // Definir funciones que modifican clases de los elementos

  function agregarBold() {
    parrafo.classList.add("black");
  }

  function quitarBold() {
    parrafo.classList.remove("black");
  }

  function actualizarTexto() {
    parrafo.textContent = input.value;
  }

  // Toggle, permite prendido-apagado
  titulo.addEventListener("click", () => {
    titulo.classList.toggle("red");
  });

  // Escuchamos eventos y aplicamos los estilos

  parrafo.addEventListener("mouseover", agregarBold);
  parrafo.addEventListener("mouseout", quitarBold);

  input.addEventListener("input", actualizarTexto);
});
