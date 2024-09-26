import "../public/css/style.css";
import Header from "./components/layout/Header";
import Carousel from "./components/Carousel";
import CardContainer from "./components/CardContainer";
import ServiceWrapper from "./components/ServiceWrapper";
import GalleryContainer from "./components/GalleryContainer";
import Footer from "./components/layout/Footer";
import Characters from "./components/API/Characters";

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

  const cards = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyn81odcLDYoL-PhmWKLvglAdGeHrmQpybcA&s",
      title: "Card title 1",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      buttonTitle: "Action",
      imageAlt: "texto alternativo",
    },
    {
      title: "Card title 2",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      buttonTitle: "Action",
      buttonColor: "violet",
      imageAlt: "texto alternativo",
    },
    {
      title: "Card title 3",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      buttonTitle: "Action",
      imageAlt: "texto alternativo",
    },
    {
      title: "Card title 4",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      buttonTitle: "Action",
      buttonColor: "red",
      imageAlt: "texto alternativo",
    },
  ];

  const services = [
    {
      title: "Transporte Ferroviario",
      description:
        "Ofrecemos servicios de transporte ferroviario seguro y eficiente a través de toda la región.",
      imgSrc: "./img/playa.jpg",
      titleColor: "#ff5733",
    },
    {
      title: "Transporte Aéreo",
      description:
        "Nuestro servicio de transporte aéreo ofrece conexiones rápidas y confiables a nivel internacional.",
      imgSrc: "./img/playa.jpg",
      titleColor: "#ff5733",
    },
    {
      title: "Transporte Marítimo",
      description:
        "Soluciones de transporte marítimo para envíos de gran volumen a través de rutas internacionales.",
      imgSrc: "./img/playa.jpg",
      titleColor: "#0056b3",
    },
    {
      title: "Logística y Almacenamiento",
      description:
        "Gestionamos el almacenamiento y distribución de mercancías con altos estándares de seguridad.",
      imgSrc: "./img/playa.jpg",
      titleColor: "#8a2be2",
    },
    {
      title: "Transporte Terrestre",
      description:
        "Soluciones de transporte terrestre para envíos locales y nacionales con la mejor eficiencia.",
      imgSrc: "./img/playa.jpg",
      titleColor: "#ffcc00",
    },
    {
      title: "Consultoría en Logística",
      description:
        "Ofrecemos consultoría especializada para optimizar sus operaciones logísticas y de transporte.",
      imgSrc: "./img/playa.jpg",
      titleColor: "#d2691e",
    },
    {
      title: "Transporte de Carga Pesada",
      description:
        "Servicios especializados en el transporte de cargas de gran tamaño y peso, con seguridad garantizada.",
      imgSrc: "./img/playa.jpg",
      titleColor: "#1e90ff",
    },
    {
      title: "Transporte de Mercancías Peligrosas",
      description:
        "Manejo seguro de mercancías peligrosas, cumpliendo con todas las regulaciones internacionales.",
      imgSrc: "./img/playa.jpg",
      titleColor: "#dc143c",
    },
  ];

  const gallery = [
    "./img/playa.jpg",
    "./img/playa.jpg",
    "./img/playa.jpg",
    "./img/playa.jpg",
    "./img/playa.jpg",
    "./img/playa.jpg",
    "./img/playa.jpg",
    "./img/playa.jpg",
    "./img/playa.jpg",
    "./img/playa.jpg",
  ];

  const links = [
    { url: "/about", name: "Acerca de nosotros" },
    { url: "/contact", name: "Contacto" },
    { url: "/privacy", name: "Politica de privacidad" },
    { url: "/terms", name: "Terminos de servicio" },
  ];

  const social = [
    {
      url: "https://facebook.com",
      image: "https://img.icons8.com/ios-filled/50/000000/facebook--v1.png",
      name: "Facebook",
    },
    {
      url: "https://twitter.com",
      image: "https://img.icons8.com/ios-filled/50/000000/twitter.png",
      name: "Twitter",
    },
    {
      url: "https://instagram.com",
      image: "https://img.icons8.com/ios-filled/50/000000/instagram-new.png",
      name: "Instagram",
    },
    {
      url: "https://linkedin.com",
      image: "https://img.icons8.com/ios-filled/50/000000/linkedin.png",
      name: "LinkedIn",
    },
  ];

  return (
    <>
      <Header
        brandUrl="#"
        navLinks={navLinks}
        dropdownOptions={dropdownOptions}
        dropdownTitle="Más opciones"
      />
      <Carousel slides={slides} />
      <Characters />
      <CardContainer cards={cards} />
      <ServiceWrapper services={services} />
      <GalleryContainer images={gallery} title="Galeria de imagenes" />
      <Footer links={links} socials={social} />
    </>
  );
}

export default App;
