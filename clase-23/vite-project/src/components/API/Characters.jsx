import { useEffect, useState } from "react";

function Characters() {
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = () => {
    //llamado a la api
    //response.json permite transformar de formato json a objeto de js
    //Esto nos permite usar funciones en nuestra data, iterar y mapear.
    //Fetch hace un GET - verbos HTTP
    fetch("https://rickandmortyapi.com/api/character")
      .then(response => response.json())
      .then(data => setCharacters(data.results))
      .catch(error => console.log(error));
  };

  useEffect(() => {
    //Se ejecuta el fetch cuando se renderiza la pagina
    fetchCharacters();
  }, []);

  return (
    <>
      <div>
        {characters.map((character, index) => (
          <div key={index}>
            <p>{character.name}</p>
            <img src={character.image} alt="image" />
          </div>
        ))}
      </div>
    </>
  );
}

export default Characters;
