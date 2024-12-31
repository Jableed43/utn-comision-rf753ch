import { useCallback, useEffect, useState } from "react"
import useFetchProduct from "../../hooks/product/useFetchProduct"
import useDeleteProduct from "../../hooks/product/useDeleteProduct"
import { Link, useNavigate } from "react-router-dom"
import "../../App.css"
import CreateProduct from "./CreateProduct"
import { statusTranslations } from "./statusTranslate"
//nice to have: refetch

function Products() {
  const [products, setProducts] = useState([])
  const [editingProduct, setEditingProduct] = useState(null)

  const navigate = useNavigate()
  const { deleteProduct, error } = useDeleteProduct()

  const { fetchProduct, done } = useFetchProduct()

  const fetchProductsCallback = useCallback(async () => {
    if (!done) {
      const data = await fetchProduct()
      setProducts(data)
    }
  }, [fetchProduct, done])

  useEffect(() => {
    fetchProductsCallback()
  }, [fetchProductsCallback])

  const handleGoBack = () => {
    navigate(-1)
  }

  const handleDelete = (id) => {
    deleteProduct(id)
  }

  const handleEdit = (product) => {
    setEditingProduct(product)
  }


  return (
    <section>

      <button onClick={handleGoBack} >Volver Atras</button>
      <Link to="/create-product"> Crear producto nuevo </Link>
      <h2>Productos</h2>

      {editingProduct && <CreateProduct productToEdit={editingProduct} /> }

      <div className="product-container">
      {products.length === 0 ? <p>No hay productos</p> : (products.map(product => (
        <div key={product._id} style={{ border: 'solid black' }} >
          <p> Nombre: {product.name} </p>
          <p> Precio: {product.price} </p>
          <p> Descripcion: {product.description} </p>
          <p> Status: {statusTranslations[product.status] || product.status} </p>
          {product.category ? (<p> Categoria:  {product.category.name} </p>) : <></>}
          {product.highlighted == true ? (<p> Producto destacado </p>) : <></>}
          <p> Stock disponible {product.stock} </p>
          <button onClick={ () => handleEdit(product)} >Editar</button>
          <button onClick={ () => handleDelete(product._id) } >Eliminar</button>
        </div>
      )))}
      </div>

      { error && <p style={{color: 'red'}}> Error {error} </p> }

    </section>
  )
}

export default Products
