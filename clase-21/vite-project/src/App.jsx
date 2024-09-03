import GreetingContainer from "./GreetingContainer";

function App() {
  const nombres = [
    {
      nombre: "juan",
      apellido: "lopez",
      id: 1,
    },
    {
      nombre: "javier",
      apellido: "gonzalez",
      id: 2,
    },
    { nombre: "alan", apellido: "gutierrez", id: 3 },
    {
      nombre: "gabriel",
      apellido: "marquez",
      id: 4,
    },
  ];

  return <GreetingContainer names={nombres} />;
}

export default App;
