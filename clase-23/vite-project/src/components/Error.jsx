import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  console.error({ error });
  //StatusText: estado del error
  //Message: descripcion del mensaje
  //Status: codigo de error
  return (
    <div>
      <h1> Error </h1>
      <p> Lo sentimos un error inesperado ha ocurrido </p>
      <p> {error.statusText || error.message} </p>
      <p> {error.status ? `Error del tipo: ${error.status}` : ""} </p>
    </div>
  );
}

export default Error;
