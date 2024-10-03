import "../public/css/style.css";
import Carousel from "./components/Carousel";
import CardContainer from "./components/CardContainer";
import ServiceWrapper from "./components/ServiceWrapper";
import GalleryContainer from "./components/GalleryContainer";
import Page from "./components/layout/page";
import { cards, gallery, services, slideData } from "./data/data";

function App() {
  return (
    <>
      <Page>
        <Carousel slides={slideData} />
        <CardContainer cards={cards} />
        <ServiceWrapper services={services} />
        <GalleryContainer images={gallery} title="Galeria de imagenes" />
      </Page>
    </>
  );
}

export default App;
