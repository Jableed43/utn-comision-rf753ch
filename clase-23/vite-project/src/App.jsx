import "../public/css/style.css";
import Header from "./components/layout/Header";
import Carousel from "./components/Carousel";
import CardContainer from "./components/CardContainer";

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

  return (
    <>
      <Header
        brandUrl="#"
        navLinks={navLinks}
        dropdownOptions={dropdownOptions}
        dropdownTitle="Más opciones"
      />
      <Carousel slides={slides} />
      <CardContainer cards={cards} />
    </>
  );
}

export default App;
