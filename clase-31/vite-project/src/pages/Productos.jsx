import fetchNasa from "../API/fetchNasa";
import Page from "../Page";
import { useEffect, useState } from "react";

function Productos() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const fetchedData = await fetchNasa(20);
      setData(fetchedData);
    } catch (error) {
      console.error(error);
    }
  };

  //Array de dependencias:
  useEffect(() => {
    getData();
  }, []);

  return (
    <Page>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>Productos</div>
        {data.length === 0 ? (
          <p>Cargando...</p>
        ) : (
          data.map((dataItem, index) => (
            <div
              key={index}
              style={{
                maxWidth: "80vw",
              }}
            >
              <h1>{dataItem.title}</h1>
              <p>{dataItem.date}</p>
              <p>{dataItem.explanation}</p>
              <img
                src={dataItem.hdurl}
                alt="imagen nasa"
                style={{ width: "100%" }}
              />
            </div>
          ))
        )}
      </section>
    </Page>
  );
}

export default Productos;
