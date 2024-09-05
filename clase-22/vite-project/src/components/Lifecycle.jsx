import { useEffect, useState } from "react";

function Lifecycle() {
  //Define el estado count y define el dispatch modifica el valor de count
  const [count, setCount] = useState(0);

  //Funciones
  const handleIncrement = () => {
    //Resolvemos la operacion
    var resultado = count + 1;
    //Asignamos valor al estado
    setCount(resultado);
  };

  const handleDecrement = () => {
    var resultado = count - 1;
    setCount(resultado);
  };

  useEffect(() => {
    //Se ejecuta cuando se monta el componente
    console.log("Componente montado");

    return () => {
      //Logica de limpieza, libera recursos, eliminar elementos del dom
      //Limpiar inputs de formulario, etc...
      console.log("Componente desmontado");
    };
  }, []);
  //Array de dependencias, si está vacio el efecto se ejecuta al montar el componente
  //Si no está: el efecto se ejecuta cuando se monta y actualiza

  useEffect(() => {
    console.log("componente actualizado", count);
  }, [count]);
  //Se ejecuta cada vez que count cambia

  return (
    <div>
      <p>Contador {count} </p>
      <button onClick={handleIncrement}>Incrementar</button>
      <button onClick={handleDecrement}>Disminuir</button>
    </div>
  );
}

export default Lifecycle;
