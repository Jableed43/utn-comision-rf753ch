import { useCallback, useEffect, useState } from "react";
import useFetchProduct from "../../hooks/product/useFetchProduct";
import useDeleteProduct from "../../hooks/product/useDeleteProduct";
import useCreatePurchase from "../../hooks/purchase/useCreatePurchase"; // Importar el nuevo hook
import { Link, useNavigate } from "react-router-dom";
import "../../App.css";
import CreateProduct from "./CreateProduct";
import { statusTranslations } from "./statusTranslate";
import { useAuth } from "../auth/AuthProvider";

function Products() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  const navigate = useNavigate();
  const { deleteProduct, error } = useDeleteProduct();
  const { fetchProduct, done } = useFetchProduct();
  const { createPurchase } = useCreatePurchase(); // Usar el hook
  const { user } = useAuth(); // Obtener datos del cliente autenticado
  const realUser = localStorage.getItem('user')
  console.log(user)

  const fetchProductsCallback = useCallback(async () => {
    if (!done) {
      const data = await fetchProduct();
      setProducts(data);
    }
  }, [fetchProduct, done]);

  useEffect(() => {
    fetchProductsCallback();
  }, [fetchProductsCallback]);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleDelete = (id) => {
    deleteProduct(id);
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  const handlePurchase = async (product) => {
    try {
      console.log({user})
      if (!realUser) {
        alert("Debes estar autenticado para realizar una compra.");
        return;
      }

      const purchaseData = {
        clientId: user.id, // ID del cliente autenticado
        itemId: product._id, // ID del producto
        merchantId: "merch-id", // ID del vendedor
        price: product.price, // Precio del producto
      };

      const purchaseId = await createPurchase(purchaseData); // Usar el hook para crear la compra
      alert(`Compra realizada con éxito. ID de la compra: ${purchaseId}`);
    } catch (error) {
      console.error("Error al realizar la compra:", error);
      alert("Hubo un error al realizar la compra. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <section>
      <button onClick={handleGoBack}>Volver Atrás</button>
      <Link to="/create-product">Crear producto nuevo</Link>
      <h2>Productos</h2>

      {editingProduct && <CreateProduct productToEdit={editingProduct} />}

      <div className="product-container">
        {!products ? (
          <p>No hay productos</p>
        ) : (
          products.map((product) => (
            <div key={product._id} style={{ border: "solid black" }}>
              <p>Nombre: {product.name}</p>
              <p>Precio: {product.price}</p>
              <p>Descripción: {product.description}</p>
              <p>Status: {statusTranslations[product.status] || product.status}</p>
              {product.category ? (
                <p>Categoría: {product.category.name}</p>
              ) : null}
              {product.highlighted === true ? (
                <p>Producto destacado</p>
              ) : null}
              <p>Stock disponible: {product.stock}</p>
              <button onClick={() => handleEdit(product)}>Editar</button>
              <button onClick={() => handleDelete(product._id)}>Eliminar</button>
              <button onClick={() => handlePurchase(product)}>Comprar</button>
            </div>
          ))
        )}
      </div>

      {error && <p style={{ color: "red" }}>Error: {error}</p>}
    </section>
  );
}

export default Products;
