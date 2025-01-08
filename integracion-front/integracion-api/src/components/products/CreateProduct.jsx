import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import useCreateProduct from "../../hooks/product/useCreateProduct";
import useEditProduct from "../../hooks/product/useEditProduct";
import useFetchCategory from "../../hooks/category/useFetchCategory";
import useFetchStatus from "../../hooks/product/useFetchStatus";
import { statusTranslations } from "../../utils/translations";
import {
  Box,
  Button,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  FormControlLabel,
  Checkbox,
  Grid2,
  Typography,
  Alert,
} from "@mui/material";

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
    category: { _id: "", name: "" },
    highlighted: false,
    stock: 0,
  });

  useEffect(() => {
    if (!categoriesLoaded) {
      fetchCategory();
    }
  }, [categoriesLoaded, fetchCategory]);

  useEffect(() => {
    if (!statusLoaded) {
      fetchStatus();
    }
  }, [statusLoaded, fetchStatus]);

  useEffect(() => {
    if (productToEdit && categoriesLoaded) {
      const category = productToEdit.category
        ? { _id: productToEdit.category._id, name: productToEdit.category.name }
        : { _id: "", name: "" };
      setForm({
        name: productToEdit.name,
        price: productToEdit.price,
        profitRate: productToEdit.profitRate,
        description: productToEdit.description,
        status: productToEdit.status,
        category: category,
        highlighted: productToEdit.highlighted,
        stock: productToEdit.stock,
      });
    }
  }, [productToEdit, categoriesLoaded]);

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

  const handleInputChange = (e) => {
    const { name, type, checked, value } = e.target;
    if (type === "checkbox") {
      setForm((prevForm) => ({ ...prevForm, [name]: checked }));
    } else {
      setForm((prevForm) => ({ ...prevForm, [name]: value }));
    }
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = categories.find((cat) => cat._id === e.target.value);
    setForm((prevForm) => ({ ...prevForm, category: selectedCategory }));
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        {productToEdit ? "Edit Product" : "Create Product"}
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid2 container spacing={3}>
          <Grid2 item xs={12} sm={6}>
            <TextField
              label="Product Name"
              name="name"
              required
              fullWidth
              value={form.name}
              onChange={handleInputChange}
            />
          </Grid2>

          <Grid2 item xs={12} sm={6}>
            <TextField
              label="Price"
              name="price"
              type="number"
              required
              fullWidth
              value={form.price}
              onChange={handleInputChange}
            />
          </Grid2>

          <Grid2 item xs={12} sm={6}>
            <TextField
              label="Profit Rate"
              name="profitRate"
              type="number"
              fullWidth
              value={form.profitRate}
              onChange={handleInputChange}
            />
          </Grid2>

          <Grid2 item xs={12}>
            <TextField
              label="Product Description"
              name="description"
              required
              fullWidth
              value={form.description}
              onChange={handleInputChange}
            />
          </Grid2>

          <Grid2 item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Product Status</InputLabel>
              <Select
                name="status"
                value={form.status}
                onChange={handleInputChange}
                required
              >
                <MenuItem value="" disabled>
                  Select Status
                </MenuItem>
                {status.map((status) => (
                  <MenuItem key={status} value={status}>
                    {statusTranslations[status] || status}
                  </MenuItem>
                ))}
              </Select>
              {statusError && (
                <Alert severity="error">Error loading status options</Alert>
              )}
            </FormControl>
          </Grid2>

          <Grid2 item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Product Category</InputLabel>
              <Select
                name="category"
                value={form.category._id || ""}
                onChange={handleCategoryChange}
                required
              >
                <MenuItem value="" disabled>
                  Select Category
                </MenuItem>
                {categories.map((category) => (
                  <MenuItem key={category._id} value={category._id}>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
              {categoryError && (
                <Alert severity="error">Error loading categories: {categoryError}</Alert>
              )}
            </FormControl>
          </Grid2>

          <Grid2 item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  name="highlighted"
                  checked={form.highlighted}
                  onChange={handleInputChange}
                />
              }
              label="Is the product highlighted?"
            />
          </Grid2>

          <Grid2 item xs={12} sm={6}>
            <TextField
              label="Available Stock"
              name="stock"
              type="number"
              required
              fullWidth
              value={form.stock}
              onChange={handleInputChange}
            />
          </Grid2>

          <Grid2 item xs={12}>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              {productToEdit ? "Edit Product" : "Create Product"}
            </Button>
          </Grid2>
        </Grid2>
      </form>
    </Box>
  );
}

CreateProduct.propTypes = {
  productToEdit: PropTypes.object,
  updateProductList: PropTypes.func,
};

export default CreateProduct;
