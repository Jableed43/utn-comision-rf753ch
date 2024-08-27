import { useState } from "react";

function App() {
  //Estados
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [resultado, setResultado] = useState(0);

  //funcion que hace las cuentas
  const handleOperation = operation => {
    if (operation === "dividir") {
      if (num1 < num2) {
        console.log("No puede dividir un numero mayor al numero menor");
      }
    }
    switch (operation) {
      case "suma":
        setResultado(num1 + num2);
        break;

      case "resta":
        setResultado(num1 - num2);
        break;

      case "multiplicar":
        setResultado(num1 * num2);
        break;

      case "dividir":
        setResultado(num1 / num2);
        break;

      default:
        setResultado(0);
        break;
    }
  };

  return (
    <div>
      <label>Numero 1</label>
      <input
        type="number"
        onChange={evento => setNum1(Number(evento.target.value))}
      />

      <label>Numero 2</label>
      <input
        type="number"
        onChange={evento => setNum2(Number(evento.target.value))}
      />

      <button onClick={() => handleOperation("suma")}>Suma</button>
      <button onClick={() => handleOperation("resta")}>Resta</button>
      <button onClick={() => handleOperation("multiplicar")}>
        Multiplicar
      </button>
      <button onClick={() => handleOperation("dividir")}>Dividir</button>

      <div>
        <label>Resultado</label>
        <br />
        <span>{resultado}</span>
      </div>
    </div>
  );
}

export default App;
