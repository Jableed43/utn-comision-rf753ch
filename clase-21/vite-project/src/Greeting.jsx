import PropTypes from "prop-types";

// function Greeting(props) {
//   return <h1>Hola, {props.name}!</h1>;
// }

function Greeting({ name, lastname, id }) {
  return <h1>Hola, {`${lastname} ${name}, tu id es: ${id}`}!</h1>;
}

//Generar tipado de las props

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Greeting;
