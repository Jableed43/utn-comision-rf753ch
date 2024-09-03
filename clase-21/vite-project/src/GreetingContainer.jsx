import Greeting from "./Greeting";
import PropTypes from "prop-types";

function GreetingContainer({ names }) {
  return (
    <div>
      {names.map(nameItem => (
        <Greeting
          key={nameItem.id}
          name={nameItem.nombre}
          lastname={nameItem.apellido}
          id={nameItem.id}
        />
      ))}
    </div>
  );
}

// Definimos la prop
GreetingContainer.propTypes = {
  names: PropTypes.array.isRequired,
};

export default GreetingContainer;
