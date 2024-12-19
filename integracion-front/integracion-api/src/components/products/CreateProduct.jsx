import { useEffect, useState } from "react";
import useCreateProduct from "../../hooks/product/useCreateProduct";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import useEditProduct from "../../hooks/product/useEditProduct";

const statusEnum = ["AVAILABLE", "NOT AVAILABLE", "DISCONTINUED"];

// nice to have : traer categorias

const productCategories = [
  {
    _id: "6747a0c51882eb0c02be520c",
    name: "calzado",
  },
  {
    _id: "6747a9766ad4687d2a6fb0bd",
    name: "herramientas",
  },
];

function CreateProduct({ productToEdit }) {
    const { createProduct } = useCreateProduct()
    const navigate = useNavigate()
    const { editProduct } = useEditProduct()
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

  useEffect( () => {
    if(productToEdit){
      setForm(productToEdit)
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
          <label htmlFor="profit">Profit rate</label>
          <input
            type="number"
            name="profit"
            value={form.profit}
            onChange={(e) => setForm({ ...form, profit: e.target.value })}
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
            {statusEnum.map((status) => (
              <option key={status} value={status}>
                {status.toLowerCase()}
              </option>
            ))}
          </select>
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
            {productCategories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name.toLowerCase()}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="highlighted">¿Is your product highLighted?</label>
          <input
            type="checkbox"
            name="highlighted"
            value={form.highlighted}
            // checked={form.highlighted}
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

            <button type="submit"> { productToEdit ? "Editar" : "Crear" } </button>

      </form>
    </section>
  );
}

export default CreateProduct;


CreateProduct.propTypes = {
  productToEdit: PropTypes.object,
};