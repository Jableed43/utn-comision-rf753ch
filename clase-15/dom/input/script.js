document.addEventListener("DOMContentLoaded", function () {
  //Capturar los elementos del html
  const textoInput = document.querySelector("#textoInput");
  const colorInput = document.querySelector("#colorInput");
  const fontSizeInput = document.querySelector("#fontSizeInput");
  const resultado = document.querySelector("#resultado");

  //Crear funciones
  function actualizarTexto() {
    const texto = textoInput.value;
    resultado.textContent = texto;
  }

  function actualizarColor() {
    const color = colorInput.value;
    resultado.style.color = color;
  }

  function actualizarFontSize() {
    const fontSize = `${fontSizeInput.value}px`;
    resultado.style.fontSize = fontSize;
  }

  //Eventos
  textoInput.addEventListener("input", actualizarTexto);
  colorInput.addEventListener("input", actualizarColor);
  fontSizeInput.addEventListener("input", actualizarFontSize);
});
