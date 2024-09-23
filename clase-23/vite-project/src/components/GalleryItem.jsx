import PropTypes from "prop-types";

function GalleryItem({ image }) {
  return (
    <article className="galeria-img-container">
      <img src={image} alt="Imagen Galeria" />
    </article>
  );
}

GalleryItem.propTypes = {
  image: PropTypes.string.isRequired,
};

export default GalleryItem;
