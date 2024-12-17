import { useCallback, useEffect, useState } from "react"
import useFetchProduct from "../../hooks/product/useFetchProduct"

function Products() {
    const [ products, setProducts ] = useState([])

  const { fetchProduct, done } = useFetchProduct()

     const fetchProductsCallback = useCallback(async () => {
      if(!done){
        const data = await fetchProduct()
        setProducts(data)
      }
    }, [fetchProduct, done])
  
      useEffect(() => {
        fetchProductsCallback()
      }, [fetchProductsCallback])

  return (
    <div>
      <h2>Productos</h2>
       { products.length === 0 ? <p>No hay productos</p> : (products.map(product => (
        <div key={product._id} style={{ border: 'solid black' }} >
            <p> Nombre: {product.name} </p>
            <p> Precio: {product.price} </p>
            <p> Descripcion: {product.description} </p>
            <p> Status: {product.status} </p>
            { product.category ? (<p> Categoria:  {product.category.name} </p>) : <></> }
            { product.highlighted == true ? (<p> Producto destacado </p>) : <></> }
            <p> Stock disponible {product.stock} </p>
        </div>
       ) )) }

    </div>
  )
}

export default Products
