import { useState, useCallback } from "react";

function useFetchProduct() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [done, setDone] = useState(false);
    const [loading, setLoading] = useState(false);
    const initialUrl = `${import.meta.env.VITE_BACKEND_ENDPOINT}product/get`;

    const fetchProduct = useCallback(async () => {
        if (loading || done) return; // Evita llamados múltiples
        setLoading(true);

        try {
            const token = localStorage.getItem("token-utn");
            const response = await fetch(initialUrl, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.status === 204) {
                // No hay productos
                setProducts([]);
                setDone(true);
                setError(null); // Limpia errores previos
            } else if (response.ok) {
                const data = await response.json();
                setProducts(data);
                setDone(true);
            } else {
                // Manejo de errores de estado no 200
                const errorText = response.statusText || "Error al obtener productos";
                setError(errorText);
                setDone(false); // Permitir reintento
            }
        } catch (error) {
            console.error(error);
            setError("Error al conectar con el servidor");
            setDone(false);
        } finally {
            setLoading(false); // Asegura que el loading siempre se desactiva
        }
    }, [done, loading, initialUrl]);

    return { products, fetchProduct, error, done, loading };
}

export default useFetchProduct;
