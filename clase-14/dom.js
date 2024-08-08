let elementoH1 = document.querySelectorAll("h1");
console.log(elementoH1);

function nodeList() {
  elementoH1.forEach(elemento => {
    console.log(elemento.innerHTML);
  });
}

nodeList();

//Clases
//QuerySelector es generico, permite clases, ids y tags
document.querySelector(".miClase");
document.querySelectorAll(".miClase");
document.getElementsByClassName("miClase");

//Id
document.querySelector("#subtitulo");
document.getElementById("subtitulo");

//Tags
document.querySelector("div");
document.getElementsByTagName("div");

let titulo = document.querySelector("h1");
titulo.style.color = "red";

const hoverTarget = document.querySelector(".hover-target");
const parrafo = document.querySelector(".initial-style");

hoverTarget.addEventListener("mouseenter", () => {
  parrafo.style.color = "white";
  parrafo.style.backgroundColor = "black";
  parrafo.style.fontSize = "24px";
  parrafo.style.fontWeight = "bold";
  parrafo.style.padding = "10px";
  parrafo.style.borderRadius = "5px";
  parrafo.style.transform = "scale(1.1)";
});

hoverTarget.addEventListener("mouseleave", () => {
  parrafo.style.color = "";
  parrafo.style.backgroundColor = "";
  parrafo.style.fontSize = "";
  parrafo.style.fontWeight = "";
  parrafo.style.padding = "";
  parrafo.style.borderRadius = "";
  parrafo.style.transform = "";
});
