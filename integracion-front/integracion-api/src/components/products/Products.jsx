import { useCallback, useEffect, useState } from "react";
import useFetchProduct from "../../hooks/product/useFetchProduct";
import useDeleteProduct from "../../hooks/product/useDeleteProduct";
import { Link, useNavigate } from "react-router-dom";
import "../../App.css";
import CreateProduct from "./CreateProduct";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { statusTranslations } from "./statusTranslate";

function Products() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  const navigate = useNavigate();
  const { deleteProduct, error } = useDeleteProduct();
  const { fetchProduct, done } = useFetchProduct();

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

  const handleDelete = async (id) => {
    await deleteProduct(id); // Eliminar producto
    fetchProductsCallback(); // Refrescar lista después de eliminar
  };

  const handleEdit = (product) => {
    setEditingProduct(product); // Solo establece el producto a editar
  };

  return (
    <section>
      <Button variant="contained" color="primary" onClick={handleGoBack} style={{ marginBottom: "16px" }}>
        Volver Atrás
      </Button>
      <Link to="/create-product" style={{ textDecoration: "none" }}>
        <Button variant="contained" color="secondary" style={{ marginBottom: "16px" }}>
          Crear producto nuevo
        </Button>
      </Link>
      <h2>Productos</h2>

      {/* Si estamos editando un producto, mostrar el formulario de edición */}
      {editingProduct && <CreateProduct productToEdit={editingProduct} />}

      {/* Tabla de productos */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, border: "solid black" }} aria-label="product table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Nombre</TableCell>
              <TableCell align="center">Precio</TableCell>
              <TableCell align="center">Descripción</TableCell>
              <TableCell align="center">Categoría</TableCell>
              <TableCell align="center">Estado</TableCell>
              <TableCell align="center">Destacado</TableCell>
              <TableCell align="center">Stock</TableCell>
              <TableCell align="center">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} align="center">
                  No hay productos
                </TableCell>
              </TableRow>
            ) : (
              products.map((product) => (
                <TableRow key={product._id}>
                  <TableCell align="center">{product.name}</TableCell>
                  <TableCell align="center">{product.price}</TableCell>
                  <TableCell align="center">{product.description}</TableCell>
                  <TableCell align="center">{product.category?.name || "Sin categoría"}</TableCell>
                  <TableCell align="center">{statusTranslations[product.status] || product.status}</TableCell>
                  <TableCell align="center">{product.highlighted ? "Sí" : "No"}</TableCell>
                  <TableCell align="center">{product.stock}</TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      onClick={() => handleEdit(product)}
                      style={{ marginRight: "8px" }}
                    >
                      Editar
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      size="small"
                      onClick={() => handleDelete(product._id)}
                    >
                      Eliminar
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {error && <p style={{ color: "red" }}>Error: {error}</p>}
    </section>
  );
}

export default Products;
