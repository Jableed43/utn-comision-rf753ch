import { useEffect, useState } from "react";
import useCreateProduct from "../../hooks/product/useCreateProduct";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import useEditProduct from "../../hooks/product/useEditProduct";
import useFetchCategory from "../../hooks/category/useFetchCategory";
import useFetchStatus from "../../hooks/product/useFetchStatus";
import { statusTranslations } from "./statusTranslate"

function CreateProduct({ productToEdit }) {
    const { createProduct } = useCreateProduct()
    const navigate = useNavigate()
    const { editProduct } = useEditProduct()
  const { categories, error: categoryError, fetchCategory, done: categoriesLoaded } = useFetchCategory()
  const { status, error: statusError, fetchStatus, done: statusLoaded } = useFetchStatus()

  const [form, setForm] = useState({
    name: "",
    price: 0,
    profitRate: 1.21,
    description: "",
    status: "AVAILABLE",
    category: "",
    highlighted: false,
    quantity: 0,
  });

  useEffect(() => {
    if(!categoriesLoaded){
      fetchCategory()
    }
  }, [categoriesLoaded, fetchCategory])

  useEffect(() => {
    if(!statusLoaded){
      fetchStatus()
    }
  }, [statusLoaded, fetchStatus])

  useEffect( () => {
    if(productToEdit){
      const normalizedProduct = {
        ...productToEdit,
        category: productToEdit.category?._id || "",
      }
      setForm(normalizedProduct)
    }
  }, [productToEdit] )

  const handleSubmit = async (e) => {
    e.preventDefault()
    //espera dos segundos antes de redirigir
    if(!productToEdit){
    await createProduct(form)
    setTimeout( () => {
      navigate(-1)
    }, 2000 )
  }
  editProduct(productToEdit._id, form)
  }

  return (
    <section>
      { productToEdit ? <h2>Editar producto</h2> : <h2>Crear producto</h2> }
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
          <label htmlFor="status">Product Status</label>
          <select
            name="status"
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value })}
            required
          >
            <option value="" disabled>
              Select Status
            </option>
            {status.map((status) => (
              <option key={status} value={status}>
                {/* Si queremos traducir los status que nos manda la api */}
                { statusTranslations[status] || status }
              </option>
            ))}
          </select>
          { statusError && ( <p style={{ color: 'red' }} > Error cargando opciones de estado  </p> ) }
        </div>

        <div>
          <label htmlFor="category">Product Category</label>
          <select
            name="category"
            value={form.category || ""}
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
          { categoryError && ( <p style={{ color: 'red' }}> Error al cargar las categorias: {categoryError} </p> ) }
        </div>

        <div>
          <label htmlFor="highlighted">¿Is your product highLighted?</label>
          <input
            type="checkbox"
            name="highlighted"
            checked={form.highlighted}
            // checked={form.highlighted}
            onChange={(e) => setForm({ ...form, highlighted: e.target.checked })}
          />
        </div>

        <div>
          <label htmlFor="quantity">Available quantity</label>
          <input
            type="number"
            name="quantity"
            required
            value={form.quantity}
            onChange={(e) => setForm({ ...form, quantity: Number(e.target.value) })}
          />
        </div>

            <button type="submit"> { productToEdit ? "Editar" : "Crear" } </button>

      </form>
    </section>
  );
}

export default CreateProduct;


CreateProduct.propTypes = {
  productToEdit: PropTypes.object,
};