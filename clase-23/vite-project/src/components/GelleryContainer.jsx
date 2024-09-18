import PropTypes from "prop-types";
import GalleryItem from "./GalleryItem";

function GelleryContainer({ title, images }) {
  return (
    <section className="galeria">
      <h2>{title}</h2>
      <div className="galeria-container">
        {images.map((image, index) => (
          <GalleryItem image={image} key={index} />
        ))}
      </div>
    </section>
  );
}

GelleryContainer.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  title: PropTypes.string,
};

export default GelleryContainer;
