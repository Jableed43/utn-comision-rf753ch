import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetchCategory from "../../hooks/category/useFetchCategory";
import useDeleteCategory from "../../hooks/category/useDeleteCategory";

function Categories() {
    const { categories, fetchCategory, loading: loadingCategories, error: fetchError } = useFetchCategory();
    const { deleteCategory, loading: loadingDelete, error: deleteError } = useDeleteCategory();
    
    // Estado local para mantener las categorías actualizadas
    const [localCategories, setLocalCategories] = useState([]);

    // Efecto para obtener categorías al inicio
    useEffect(() => {
        // Si las categorías están disponibles, las actualizamos
        if (categories && categories.length) {
            setLocalCategories(categories);
        } else {
            fetchCategory(); // Si no hay categorías, las cargamos
        }
    }, [categories, fetchCategory]);

    // Función para manejar la eliminación de una categoría
    const handleDelete = async (id) => {
        await deleteCategory(id); // Eliminar desde la API
        setLocalCategories(localCategories.filter((category) => category._id !== id)); // Actualizar lista local
    };

    return (
        <div>
            <br />
            <Link to="/category-create">Crear categoría</Link>
            <br />

            {/* Estado de carga al obtener categorías */}
            {loadingCategories && <p>Cargando categorías...</p>}

            {/* Error al cargar categorías */}
            {fetchError && <p style={{ color: "red" }}>{fetchError.message || fetchError}</p>}

            {/* Lista de categorías */}
            {!loadingCategories && localCategories.length > 0 && (
                localCategories.map((category) => (
                    <div
                        key={category._id}
                        style={{
                            border: "1px solid black",
                            display: "inline-block",
                            margin: 10,
                            width: 120,
                            height: 120,
                            padding: 8,
                            textAlign: "center",
                        }}
                    >
                        <p>{category.name}</p>
                        <button
                            onClick={() => handleDelete(category._id)}
                            disabled={loadingDelete} // Desactiva el botón si se está eliminando
                        >
                            {loadingDelete ? "Borrando..." : "Borrar"}
                        </button>
                    </div>
                ))
            )}

            {/* Mensaje si no hay categorías */}
            {!loadingCategories && localCategories.length === 0 && (
                <p>No hay categorías disponibles.</p>
            )}

            {/* Error al eliminar una categoría */}
            {deleteError && <p style={{ color: "red" }}>{deleteError}</p>}
        </div>
    );
}

export default Categories;

