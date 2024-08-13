document.addEventListener("DOMContentLoaded", function () {
  // Elementos del DOM
  const counterDisplay = document.querySelector("#counter");
  const incrementButton = document.querySelector("#increment");
  const decrementButton = document.querySelector("#decrement");
  const colorBox = document.querySelector("#colorBox");
  const generateColorButton = document.querySelector("#generateColor");
  const toggleThemeButton = document.querySelector("#toggleTheme");
  const body = document.body;

  // Estado inicial
  let count = 0;

  // Funciones
  function updateCounter() {
    counterDisplay.textContent = count;
  }

  function incrementCounter() {
    count++;
    updateCounter();
  }

  function decrementCounter() {
    count--;
    updateCounter();
  }

  function generateRandomColor() {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    colorBox.style.backgroundColor = randomColor;
  }

  function toggleTheme() {
    if (body.classList.contains("light-mode")) {
      body.classList.remove("light-mode");
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
      body.classList.add("light-mode");
    }
  }

  // Eventos
  incrementButton.addEventListener("click", incrementCounter);
  decrementButton.addEventListener("click", decrementCounter);
  generateColorButton.addEventListener("click", generateRandomColor);
  toggleThemeButton.addEventListener("click", toggleTheme);

  // Inicializar el contador
  updateCounter();
});
