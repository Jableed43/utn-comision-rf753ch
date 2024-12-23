import { useState, useEffect } from "react";
import useFetchCategory from "../../hooks/category/useFetchCategory";
import useCreateProduct from "../../hooks/product/useCreateProduct";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import useEditProduct from "../../hooks/product/useEditProduct";
import useFetchStatus from "../../hooks/product/useFetchStatus";
import { statusTranslations } from "./status";

function CreateProduct({ productToEdit, onProductUpdated }) { // Recibe el callback onProductUpdated
  const { createProduct } = useCreateProduct();
  const { editProduct } = useEditProduct();

  const navigate = useNavigate();

  const {
    categories,
    error: categoryError,
    fetchCategory,
    done: categoriesLoaded,
  } = useFetchCategory();

  const {
    statusOptions,
    error: statusError,
    fetchStatus,
    done: statusLoaded,
  } = useFetchStatus();

  const [form, setForm] = useState({
    name: "",
    price: 0,
    profitRate: 1.21,
    description: "",
    status: "AVAILABLE",
    category: "",
    highlighted: false,
    stock: 0,
  });

  // Cargar categorías solo una vez al montar el componente
  useEffect(() => {
    if (!categoriesLoaded) {
      fetchCategory(); // Llamar a `fetchCategory` solo si las categorías no están cargadas
    }
  }, [categoriesLoaded, fetchCategory]);

  // Cargar estados solo una vez al montar el componente
  useEffect(() => {
    if (!statusLoaded) {
      fetchStatus(); // Llamar a `fetchStatus` solo si los estados no están cargados
    }
  }, [statusLoaded, fetchStatus]);

  // Sincronizar el formulario con `productToEdit`
  useEffect(() => {
    if (productToEdit) {
      setForm({
        ...productToEdit,
        category: productToEdit.category?._id || "",
      });
    }
  }, [productToEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!productToEdit) {
      // Crear nuevo producto
      await createProduct(form);
      if (onProductUpdated) {
      onProductUpdated();  // Solo llamar a onProductUpdated si existe
    }
      navigate("/products")
      console.log('navigate')
    } else {
      // Editar producto
      await editProduct(productToEdit._id, form);
      if (onProductUpdated) {
      onProductUpdated();  // Solo llamar a onProductUpdated si existe
    }
    }
  };

  return (
    <section>
      {productToEdit ? <h2>Editar producto</h2> : <h2>Crear producto</h2>}
      <br />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Product Name</label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            required
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="profitRate">Profit rate</label>
          <input
            type="number"
            name="profitRate"
            value={form.profitRate}
            onChange={(e) => setForm({ ...form, profitRate: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="description">Product description</label>
          <input
            type="text"
            name="description"
            required
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="status">Estado del Producto</label>
          <select
            name="status"
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value })}
            required
          >
            <option value="" disabled>
              Seleccionar Estado
            </option>
            {statusOptions.map((status) => (
              <option key={status} value={status}>
                {statusTranslations[status] || status}
              </option>
            ))}
          </select>
          {statusError && (
            <p style={{ color: "red" }}>
              Error cargando opciones de estado: {statusError}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="category">Product Category</label>
          <select
            name="category"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          >
            <option value="" disabled>
              Select Category
            </option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name.toLowerCase()}
              </option>
            ))}
          </select>
          {categoryError && (
            <p style={{ color: "red" }}>
              Error loading categories: {categoryError}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="highlighted">¿Is your product highlighted?</label>
          <input
            type="checkbox"
            name="highlighted"
            checked={form.highlighted}
            onChange={(e) => setForm({ ...form, highlighted: e.target.checked })}
          />
        </div>

        <div>
          <label htmlFor="stock">Available Stock</label>
          <input
            type="number"
            name="stock"
            required
            value={form.stock}
            onChange={(e) => setForm({ ...form, stock: Number(e.target.value) })}
          />
        </div>

        <button type="submit">{productToEdit ? "Editar" : "Crear"}</button>
      </form>
    </section>
  );
}

export default CreateProduct;

CreateProduct.propTypes = {
  productToEdit: PropTypes.object,
  onProductUpdated: PropTypes.func.isRequired, // Asegúrate de que `onProductUpdated` sea obligatorio
};
