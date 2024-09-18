import PropTypes from "prop-types";

const ServiceItem = ({
  title,
  titleColor,
  hrColor,
  description,
  imgSrc,
  borderColor,
  even,
}) => {
  return (
    <article
      className={`services-container ${even ? "even-card" : ""}`}
      style={{ borderColor: borderColor }}
    >
      <div>
        <h3 style={{ color: titleColor }}>{title}</h3>
        <hr style={{ background: hrColor }} />
        <p>{description}</p>
      </div>
      <img src={imgSrc} alt={title} />
    </article>
  );
};

ServiceItem.propTypes = {
  title: PropTypes.string.isRequired,
  titleColor: PropTypes.string,
  hrColor: PropTypes.string,
  services: PropTypes.array.isRequired,
  description: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  borderColor: PropTypes.string,
  even: PropTypes.bool.isRequired,
};

export default ServiceItem;
