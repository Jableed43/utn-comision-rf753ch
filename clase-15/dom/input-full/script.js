document.addEventListener("DOMContentLoaded", function () {
  // Elementos del HTML
  var textoInput = document.querySelector("#textoInput");
  var colorInput = document.querySelector("#colorInput");
  var fontSizeInput = document.querySelector("#fontSizeInput");
  var textDecorationSelect = document.querySelector("#textDecorationSelect");
  var fontFamilySelect = document.querySelector("#fontFamilySelect");
  var textAlignSelect = document.querySelector("#textAlignSelect");
  var letterSpacingInput = document.querySelector("#letterSpacingInput");
  var boldCheckbox = document.querySelector("#boldCheckbox");
  var italicCheckbox = document.querySelector("#italicCheckbox");
  var uppercaseCheckbox = document.querySelector("#uppercaseCheckbox");
  var lowercaseCheckbox = document.querySelector("#lowercaseCheckbox");
  var resultado = document.querySelector("#resultado");

  // Crear funciones
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

  function actualizarDecoracion() {
    resultado.style.textDecoration = textDecorationSelect.value;
  }

  function actualizarFontFamily() {
    resultado.style.fontFamily = fontFamilySelect.value;
  }

  function actualizarTextAlign() {
    resultado.style.textAlign = textAlignSelect.value;
  }

  function actualizarLetterSpacing() {
    const letterSpacing = `${letterSpacingInput.value}px`;
    resultado.style.letterSpacing = letterSpacing;
  }

  function actualizarBold() {
    resultado.style.fontWeight = boldCheckbox.checked ? "bold" : "normal";
  }

  function actualizarItalic() {
    resultado.style.fontStyle = italicCheckbox.checked ? "italic" : "normal";
  }

  function actualizarUppercase() {
    if (uppercaseCheckbox.checked) {
      resultado.style.textTransform = "uppercase";
      lowercaseCheckbox.checked = false; // Desactivar la opción contraria
    } else {
      resultado.style.textTransform = "none";
    }
  }

  function actualizarLowercase() {
    if (lowercaseCheckbox.checked) {
      resultado.style.textTransform = "lowercase";
      uppercaseCheckbox.checked = false; // Desactivar la opción contraria
    } else {
      resultado.style.textTransform = "none";
    }
  }

  // Eventos
  textoInput.addEventListener("input", actualizarTexto);
  colorInput.addEventListener("input", actualizarColor);
  fontSizeInput.addEventListener("input", actualizarFontSize);
  textDecorationSelect.addEventListener("change", actualizarDecoracion);
  fontFamilySelect.addEventListener("change", actualizarFontFamily);
  textAlignSelect.addEventListener("change", actualizarTextAlign);
  letterSpacingInput.addEventListener("input", actualizarLetterSpacing);
  boldCheckbox.addEventListener("change", actualizarBold);
  italicCheckbox.addEventListener("change", actualizarItalic);
  uppercaseCheckbox.addEventListener("change", actualizarUppercase);
  lowercaseCheckbox.addEventListener("change", actualizarLowercase);
});
