import { useEffect, useState } from "react";
import useCreateProduct from "../../hooks/product/useCreateProduct";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import useEditProduct from "../../hooks/product/useEditProduct";
import useFetchCategory from "../../hooks/category/useFetchCategory";
import useFetchStatus from "../../hooks/product/useFetchStatus";
import { statusTranslations } from "./statusTranslate";

function CreateProduct({ productToEdit, updateProductList }) {
  const { createProduct } = useCreateProduct();
  const navigate = useNavigate();
  const { editProduct } = useEditProduct();
  const { categories, error: categoryError, fetchCategory, done: categoriesLoaded } = useFetchCategory();
  const { status, error: statusError, fetchStatus, done: statusLoaded } = useFetchStatus();

  const [form, setForm] = useState({
    name: "",
    price: 0,
    profitRate: 1.21,
    description: "",
    status: "AVAILABLE",
    category: { _id: "", name: "" }, // Inicializamos con un objeto vacío
    highlighted: false,
    stock: 0,
  });

  // Cargar categorías
  useEffect(() => {
    if (!categoriesLoaded) {
      fetchCategory();
    }
  }, [categoriesLoaded, fetchCategory]);

  // Cargar opciones de estado
  useEffect(() => {
    if (!statusLoaded) {
      fetchStatus();
    }
  }, [statusLoaded, fetchStatus]);

  // Establecer el estado del formulario cuando se edita un producto
  useEffect(() => {
    if (productToEdit && categoriesLoaded) {
      const category = productToEdit.category ? { 
        _id: productToEdit.category._id, 
        name: productToEdit.category.name 
      } : { _id: "", name: "" }; // Asegúrate de que la categoría esté bien definida

      setForm({
        name: productToEdit.name,
        price: productToEdit.price,
        profitRate: productToEdit.profitRate,
        description: productToEdit.description,
        status: productToEdit.status,
        category: category, // Guarda tanto el id como el name
        highlighted: productToEdit.highlighted,
        stock: productToEdit.stock,
      });
    }
  }, [productToEdit, categoriesLoaded]);

  useEffect(() => {
    console.log("Form state:", form); // Verifica si la categoría se está actualizando
  }, [form]);

  // Manejar el submit del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!productToEdit) {
      await createProduct(form);
      setTimeout(() => {
        navigate(-1);
      }, 2000);
    } else {
      const success = await editProduct(productToEdit._id, form);
      if (success) {
        updateProductList((prevProducts) =>
          prevProducts.map((product) =>
            product._id === productToEdit._id ? { ...product, ...form } : product
          )
        );
      }
    }
  };

  // Manejo del cambio de categoría
  const handleInputChange = (e) => {
    const { name, type, checked, value } = e.target;
  
    if (type === "checkbox") {
      // Convertir el valor del checkbox en un booleano
      setForm((prevForm) => ({
        ...prevForm,
        [name]: checked, // Si está checked, será true, si no, false
      }));
    } else {
      setForm((prevForm) => ({
        ...prevForm,
        [name]: value,
      }));
    }
  };
  

  const handleCategoryChange = (e) => {
    const selectedCategory = categories.find(cat => cat._id === e.target.value); // Encuentra la categoría completa
    setForm((prevForm) => ({
      ...prevForm,
      category: selectedCategory, // Actualiza tanto el id como el name
    }));
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
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            required
            value={form.price}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="profitRate">Profit rate</label>
          <input
            type="number"
            name="profitRate"
            value={form.profitRate}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="description">Product description</label>
          <input
            type="text"
            name="description"
            required
            value={form.description}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="status">Product Status</label>
          <select
            name="status"
            value={form.status}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>
              Select Status
            </option>
            {status.map((status) => (
              <option key={status} value={status}>
                {statusTranslations[status] || status}
              </option>
            ))}
          </select>
          {statusError && <p style={{ color: 'red' }}>Error cargando opciones de estado</p>}
        </div>

        <div>
          <label htmlFor="category">Product Category</label>
          <select
            name="category"
            value={form.category._id || ""} // Usa el _id de la categoría
            onChange={handleCategoryChange}
            required
          >
            <option value="" disabled>
              Select Category
            </option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name.toLowerCase()} {/* Muestra el name de la categoría */}
              </option>
            ))}
          </select>
          {categoryError && <p style={{ color: 'red' }}>Error al cargar las categorias: {categoryError}</p>}
        </div>

        <div>
          <label htmlFor="highlighted">¿Is your product highLighted?</label>
          <input
            type="checkbox"
            name="highlighted"
            checked={form.highlighted}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="stock">Available Stock</label>
          <input
            type="number"
            name="stock"
            required
            value={form.stock}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit">{productToEdit ? "Editar" : "Crear"}</button>
      </form>
    </section>
  );
}

CreateProduct.propTypes = {
  productToEdit: PropTypes.object,
  updateProductList: PropTypes.func,
};

export default CreateProduct;
