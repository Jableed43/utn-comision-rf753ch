import { useState } from "react";

function useDeleteCategory() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const initialUrl = `${import.meta.env.VITE_BACKEND_ENDPOINT}category/delete`;

  const deleteCategory = async (id) => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token-utn");
      const response = await fetch(`${initialUrl}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        setError("Error al eliminar la categoría");
      }
    } catch (error) {
      setError(error, "Error de conexión");
    } finally {
      setLoading(false);
    }
  };

  return { deleteCategory, loading, error };
}

export default useDeleteCategory;
