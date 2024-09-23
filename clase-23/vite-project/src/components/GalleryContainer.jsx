import GalleryItem from "./GalleryItem";
import PropTypes from "prop-types";

function GalleryContainer({ title, images }) {
  return (
    <section className="galeria">
      <h2>{title}</h2>
      <div className="galeria-container">
        {images.map((image, index) => (
          <GalleryItem key={index} image={image} />
        ))}
      </div>
    </section>
  );
}

GalleryContainer.propTypes = {
  title: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default GalleryContainer;
