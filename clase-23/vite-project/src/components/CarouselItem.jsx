import PropTypes from "prop-types";

const CarouselItem = ({ active, image, title, description }) => {
  return (
    <div
      className={`carousel-item ${active ? "active" : ""}`}
      data-bs-interval="5000"
    >
      <img src={image} className="d-block w-100" alt={title} />
      <div className="carousel-caption d-none d-md-block">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  active: PropTypes.bool.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CarouselItem;
