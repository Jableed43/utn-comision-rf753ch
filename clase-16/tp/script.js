document
  .getElementById("card-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Traer valores del formulario 5 datos
    const title = document.getElementById("card-title").value;
    const description = document.getElementById("card-description").value;
    const imageUrl =
      document.getElementById("card-image").value ||
      "https://picsum.photos/200";
    const bgColor = document.getElementById("card-bg-color").value;
    const borderColor = document.getElementById("card-border-color").value;

    // Mostrar por consola valores del formulario
    console.log({
      title: title,
      description: description,
      imageUrl: imageUrl,
      bgColor: bgColor,
      borderColor: borderColor,
    });

    // Crear nueva card
    const cardContainer = document.getElementById("cards-container");
    const newCard = document.createElement("div");
    newCard.className = "card";
    newCard.style.backgroundColor = bgColor;
    newCard.style.borderColor = borderColor;

    //Maquetar la card
    newCard.innerHTML = `
        <img src="${imageUrl}" alt="Card Image">
        <div class="card-content">
            <p>${title}</p>
            <p>${description}</p>
        </div>
    `;

    //Añadir la nueva card al contenedor
    cardContainer.appendChild(newCard);

    //Limpiar campos del formulario
    document.getElementById("card-form").reset();
  });
