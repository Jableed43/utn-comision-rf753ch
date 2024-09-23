/* eslint-disable react/no-unescaped-entities */
import PropTypes from "prop-types";
import batman from "../../public/img/batman.png";

function Card({
  image = batman,
  imageAlt,
  title,
  description,
  buttonTitle,
  action,
  buttonColor,
}) {
  return (
    <div className="card" style={{ width: "18 rem" }}>
      <img
        src={image}
        className="card-img-top"
        alt={imageAlt}
        style={{ width: "100%", height: "200px" }}
      />
      <div className="card-body">
        <h5 className="card-title"> {title} </h5>
        <p className="card-text">{description}</p>
        <button
          //Creamos una prop accionable
          onClick={action}
          className="btn btn-primary"
          style={{ backgroundColor: buttonColor }}
        >
          {buttonTitle}
        </button>
      </div>
    </div>
  );
}

//Tipado de props
Card.propTypes = {
  image: PropTypes.string,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  buttonColor: PropTypes.string,
};

export default Card;
