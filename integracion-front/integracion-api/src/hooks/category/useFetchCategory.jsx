import { useState } from "react";

function useFetchCategory() {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // Agregamos estado de carga
  const [done, setDone] = useState(false); // Estado para saber si ya se completó

  const fetchCategory = async () => {
    if (loading || done) return; // Evitar nuevos llamados si ya está en proceso o ya se completó
    setLoading(true); // Iniciar carga
    try {
      const token = localStorage.getItem("token-utn");
      const response = await fetch("http://localhost:3000/api/category/get", {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setCategories(data);
        setDone(true); // Marcamos que ya se completó la solicitud
      } else {
        setError("Error al cargar categorías");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false); // Terminamos la carga, no importa si fue exitoso o fallido
    }
  };

  return {
    categories,
    error,
    fetchCategory,
    done,
  };
}

export default useFetchCategory;
