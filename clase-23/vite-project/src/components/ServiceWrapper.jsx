import ServiceItem from "./ServiceItem";
import PropTypes from "prop-types";

function ServiceWrapper({ services }) {
  return (
    <section className="services">
      <h2>Servicios</h2>
      {services.map((service, index) => (
        <ServiceItem
          key={index}
          description={service.description}
          image={service.imgSrc}
          title={service.title}
          titleColor={service.titleColor}
          even={index % 2 === 0}
        />
      ))}
    </section>
  );
}

ServiceWrapper.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      imgSrc: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      titleColor: PropTypes.string,
      color: PropTypes.string,
    })
  ).isRequired,
};

export default ServiceWrapper;
