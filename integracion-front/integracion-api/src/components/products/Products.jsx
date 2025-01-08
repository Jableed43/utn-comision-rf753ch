import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import useFetchProduct from "../../hooks/product/useFetchProduct";
import useDeleteProduct from "../../hooks/product/useDeleteProduct";
import CreateProduct from "./CreateProduct";
import { statusTranslations } from "../../utils/translations";
import { useAuth } from "../auth/AuthProvider";
import useFetchPurchases from "../../hooks/purchases/useFetchPurchases";
import useCreatePurchase from "../../hooks/purchases/useCreatePurchase";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
  CircularProgress,
  Grid2,
  Alert,
} from "@mui/material";
import Layout from "../layout/Layout";
import GoBackButton from "../layout/GoBackButton";

function Products() {
  const { products, fetchProduct, error: fetchError, loading: loadingProducts } = useFetchProduct();
  const { deleteProduct, error: deleteError, loading: loadingDelete } = useDeleteProduct();
  const [localProducts, setLocalProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const { userRole, isAuthenticated } = useAuth();
  const { purchases } = useFetchPurchases();
  const { createPurchase } = useCreatePurchase();
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (products && products.length) {
      setLocalProducts(products);
    } else {
      fetchProduct();
    }
  }, [products, fetchProduct, purchases]);


  const handleDelete = async (id) => {
    const success = await deleteProduct(id);
    if (success) {
      setLocalProducts(localProducts.filter((product) => product._id !== id));
    }
  };

  const handleEdit = (product) => setEditingProduct(product);

  const handlePurchase = async (product) => {
    if (!isAuthenticated) return;

    try {
      const purchaseData = {
        clientId: userId,
        productId: product._id,
        merchantId: "merchantId-placeholder",
        purchasedAt: Date.now(),
        quantity: 1,
      };

      const purchaseId = await createPurchase(purchaseData);
      alert("Purchase successful! ID: " + purchaseId);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
    <Box sx={{ p: 3 }}>
      <GoBackButton sx={{ position: "absolute", left: 0 }} />
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        {userRole === "MERCHANT" && (
          <Button variant="contained" component={Link} to="/create-product">
            Create New Product
          </Button>
        )}
      </Box>

      <Typography variant="h4" align="center" gutterBottom>
        Products
      </Typography>

      {editingProduct && (
        <CreateProduct productToEdit={editingProduct} updateProductList={setLocalProducts} />
      )}

      <Grid2 container spacing={3}>
        {loadingProducts && (
          <Box sx={{ width: "100%", display: "flex", justifyContent: "center", mt: 3 }}>
            <CircularProgress />
          </Box>
        )}

        {fetchError && (
          <Grid2 item xs={12}>
            <Alert severity="error">Error: {fetchError}</Alert>
          </Grid2>
        )}

        {!loadingProducts &&
          localProducts.map((product) => (
            <Grid2 item xs={12} sm={6} md={4} key={product._id}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {product.name}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Price:</strong> ${product.price}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Description:</strong> {product.description}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Status:</strong> {statusTranslations[product.status] || product.status}
                  </Typography>
                  {product.category && (
                    <Typography variant="body2">
                      <strong>Category:</strong> {product.category.name}
                    </Typography>
                  )}
                  {product.highlighted && (
                    <Typography variant="body2" color="primary">
                      Featured Product
                    </Typography>
                  )}
                  <Typography variant="body2">
                    <strong>Available Stock:</strong> {product.stock}
                  </Typography>
                </CardContent>

                <CardActions sx={{ justifyContent: "center" }} >
                  {userRole !== "CLIENT" && (
                    <>
                      <Button size="small" onClick={() => handleEdit(product)}>
                        Edit
                      </Button>
                      <Button
                        size="small"
                        color="error"
                        onClick={() => handleDelete(product._id)}
                        disabled={loadingDelete}
                      >
                        {loadingDelete ? "Deleting..." : "Delete"}
                      </Button>
                    </>
                  )}
                  {userRole === "CLIENT" && (
                    <Button size="small" color="primary" onClick={() => handlePurchase(product)}>
                      Buy
                    </Button>
                  )}
                </CardActions>
              </Card>
            </Grid2>
          ))}

        {!loadingProducts && localProducts.length === 0 && !fetchError && (
          <Grid2 item xs={12}>
            <Typography variant="body1" align="center">
              No products available.
            </Typography>
          </Grid2>
        )}

        {deleteError && (
          <Grid2 item xs={12}>
            <Alert severity="error">Error deleting: {deleteError}</Alert>
          </Grid2>
        )}
      </Grid2>
    </Box>
    </Layout>
  );
}

export default Products;
