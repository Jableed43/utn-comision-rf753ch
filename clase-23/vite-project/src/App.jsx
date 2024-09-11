import "../public/css/style.css";
import Header from "./components/Header";
import logo from "../public/img/aerolinea.png";
import "./App.css";
import Carousel from "./components/Carousel";
import CardContainer from "./components/CardContainer";
import ServiceWrapper from "./components/ServiceWrapper";

function App() {
  const navLinks = [
    { name: "Home", url: "#" },
    { name: "Features", url: "#" },
    { name: "Pricing", url: "#" },
  ];

  const dropdownOptions = [
    { name: "Action", url: "#" },
    { name: "Another action", url: "#" },
    { name: "Something else here", url: "#" },
  ];

  const slides = [
    {
      image: "./img/gatitos.png",
      title: "Michis",
      description: "Aguanten los michis.",
    },
    {
      image: "./img/f1.webp",
      title: "Formula 1",
      description: "¿Existirá la formula 2?",
    },
    {
      image: "./img/playa.jpg",
      title: "Vacaciones",
      description: "Cada vez falta menos.",
    },
  ];

  const cards = [
    {
      image: "./img/batman.png",
      title: "Card title 1",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      buttonText: "Go somewhere",
    },
    {
      image: "./img/batman.png",
      title: "Card title 2",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      buttonText: "Go somewhere",
    },
    {
      image: "./img/batman.png",
      title: "Card title 3",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      buttonText: "Go somewhere",
    },
    {
      image: "./img/batman.png",
      title: "Card title 4",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      buttonText: "Go somewhere",
    },
  ];

  const services = [
    {
      title: "Transporte Ferroviario",
      description:
        "Ofrecemos servicios de transporte ferroviario seguro y eficiente a través de toda la región.",
      imgSrc: "./img/playa.jpg",
      titleColor: "#17b056",
      hrColor: "#17b056",
      borderColor: "black",
    },
    {
      title: "Transporte Aéreo",
      description:
        "Nuestro servicio de transporte aéreo ofrece conexiones rápidas y confiables a nivel internacional.",
      imgSrc: "./img/playa.jpg",
      titleColor: "#ff5733",
      hrColor: "#ff5733",
      borderColor: "gray",
    },
    {
      title: "Transporte Marítimo",
      description:
        "Soluciones de transporte marítimo para envíos de gran volumen a través de rutas internacionales.",
      imgSrc: "./img/playa.jpg",
      titleColor: "#0056b3",
      hrColor: "#0056b3",
      borderColor: "navy",
    },
    {
      title: "Logística y Almacenamiento",
      description:
        "Gestionamos el almacenamiento y distribución de mercancías con altos estándares de seguridad.",
      imgSrc: "./img/playa.jpg",
      titleColor: "#8a2be2",
      hrColor: "#8a2be2",
      borderColor: "purple",
    },
    {
      title: "Transporte Terrestre",
      description:
        "Soluciones de transporte terrestre para envíos locales y nacionales con la mejor eficiencia.",
      imgSrc: "./img/playa.jpg",
      titleColor: "#ffcc00",
      hrColor: "#ffcc00",
      borderColor: "orange",
    },
    {
      title: "Consultoría en Logística",
      description:
        "Ofrecemos consultoría especializada para optimizar sus operaciones logísticas y de transporte.",
      imgSrc: "./img/playa.jpg",
      titleColor: "#d2691e",
      hrColor: "#d2691e",
      borderColor: "brown",
    },
    {
      title: "Transporte de Carga Pesada",
      description:
        "Servicios especializados en el transporte de cargas de gran tamaño y peso, con seguridad garantizada.",
      imgSrc: "./img/playa.jpg",
      titleColor: "#1e90ff",
      hrColor: "#1e90ff",
      borderColor: "blue",
    },
    {
      title: "Transporte de Mercancías Peligrosas",
      description:
        "Manejo seguro de mercancías peligrosas, cumpliendo con todas las regulaciones internacionales.",
      imgSrc: "./img/playa.jpg",
      titleColor: "#dc143c",
      hrColor: "#dc143c",
      borderColor: "red",
    },
  ];

  return (
    <>
      <Header
        navLinks={navLinks}
        dropdownOptions={dropdownOptions}
        dropdownTitle={"Dropdown"}
        brandHref={"#"}
        brandImage={logo}
      />
      <Carousel slides={slides} />
      <CardContainer cards={cards} />
      <ServiceWrapper services={services} />
    </>
  );
}

export default App;
