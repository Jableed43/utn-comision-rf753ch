import { useState, useCallback } from "react";

function useFetchCategory() {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);
    const [done, setDone] = useState(false);
    const [loading, setLoading] = useState(false);
    const initialUrl = `${import.meta.env.VITE_BACKEND_ENDPOINT}category/get`;

    const fetchCategory = useCallback(async () => {
        if (loading || done) return; // Evita llamados innecesarios
        setLoading(true);

        try {
            const token = localStorage.getItem("token-utn");
            const response = await fetch(initialUrl, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.status === 204) {
                // No hay contenido: actualiza estado
                setCategories([]);
                setDone(true);
                setError(null); // Limpia errores
            } else if (response.ok) {
                const data = await response.json();
                setCategories(data);
                setDone(true);
            } else {
                const errorText = response.statusText || "Error al cargar categorías";
                setError(errorText);
                setDone(false); // Permite reintentos si falla
            }
        } catch (error) {
            setError(error, "Error al conectar con el servidor");
            setDone(false); // Permite reintentos si falla
        } finally {
            setLoading(false); // Asegura que loading siempre se desactiva
        }
    }, [done, loading, initialUrl]);

    return { categories, error, fetchCategory, done, loading };
}

export default useFetchCategory;
