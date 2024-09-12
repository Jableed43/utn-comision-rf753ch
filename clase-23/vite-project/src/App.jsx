import "../public/css/style.css";
import Header from "./components/layout/Header";
import logo from "../public/img/aerolinea.png";
import Carousel from "./components/Carousel";

function App() {
  const navLinks = [
    { name: "Home", url: "#" },
    { name: "Productos", url: "#" },
    { name: "Escribinos", url: "#" },
    { name: "Novedades", url: "#" },
  ];

  const dropdownOptions = [
    { name: "Action 1", url: "#" },
    { name: "Action 2", url: "#" },
    { name: "Action 3", url: "#" },
  ];

  const slides = [
    {
      image: "./img/gatitos.png",
      title: "Michis",
      description: "Aguanten los michis.",
      alt: "Gatos",
    },
    {
      image: "./img/f1.webp",
      title: "Formula 1",
      description: "¿Existirá la formula 2?",
      alt: "Formula 1",
    },
    {
      image: "./img/playa.jpg",
      title: "Vacaciones",
      description: "Cada vez falta menos.",
      alt: "Playa",
    },
  ];

  return (
    <>
      <Header
        imageSrc={logo}
        brandUrl="#"
        imageAlt="Logo Aerolinea"
        navLinks={navLinks}
        dropdownOptions={dropdownOptions}
        dropdownTitle="Más opciones"
      />
      <Carousel slides={slides} />
    </>
  );
}

export default App;
