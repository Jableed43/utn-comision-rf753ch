import PropTypes from "prop-types";

function ServiceItem({ image, title, description, titleColor, color, even }) {
  return (
    <article className={`services-container ${even ? "even-card" : ""}`}>
      <div>
        <h3 style={{ color: titleColor }}>{title}</h3>
        <hr style={{ backgroundColor: titleColor }} />
        <p style={{ color: color }}> {description}</p>
      </div>
      <img src={image} alt="Imagen Servicio" />
    </article>
  );
}

ServiceItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  titleColor: PropTypes.string,
  color: PropTypes.string,
  even: PropTypes.bool,
};

export default ServiceItem;
