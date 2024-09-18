import ServiceItem from "./ServiceItem";
import PropTypes from "prop-types";

const ServiceWrapper = ({ services }) => {
  return (
    <section className="services">
      <h2>Servicios</h2>
      {services.map((service, index) => (
        <ServiceItem
          key={index}
          title={service.title}
          description={service.description}
          imgSrc={service.imgSrc}
          titleColor={service.titleColor}
          hrColor={service.hrColor}
          borderColor={service.borderColor}
          even={index % 2 === 1}
        />
      ))}
    </section>
  );
};

ServiceWrapper.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      imgSrc: PropTypes.string.isRequired,
      titleColor: PropTypes.string,
      hrColor: PropTypes.string,
      borderColor: PropTypes.string,
    })
  ).isRequired,
};

export default ServiceWrapper;
