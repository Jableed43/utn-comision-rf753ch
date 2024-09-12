import PropTypes from "prop-types";

//intervalo, img src, img alt, titulo y descripcion

function CarouselItem({
  interval,
  imageSrc,
  imageAlt,
  itemTitle,
  itemDescription,
  active,
}) {
  return (
    <div
      className={`carousel-item ${active ? "active" : ""} `}
      data-bs-interval={interval}
    >
      <img src={imageSrc} className="d-block w-100" alt={imageAlt} />
      <div className="carousel-caption d-none d-md-block">
        <h5> {itemTitle} </h5>
        <p> {itemDescription} </p>
      </div>
    </div>
  );
}

CarouselItem.propTypes = {
  interval: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  itemTitle: PropTypes.string.isRequired,
  itemDescription: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};

export default CarouselItem;
