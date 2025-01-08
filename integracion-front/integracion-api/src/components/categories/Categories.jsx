import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Card, CardContent, Typography, Grid2 } from "@mui/material";
import { Delete as DeleteIcon, Add as AddIcon } from "@mui/icons-material";
import useFetchCategory from "../../hooks/category/useFetchCategory";
import useDeleteCategory from "../../hooks/category/useDeleteCategory";
import GoBackButton from "../layout/GoBackButton";
import Layout from "../layout/Layout";

function Categories() {
  const { categories, fetchCategory, loading: loadingCategories, error: fetchError } = useFetchCategory();
  const { deleteCategory, loading: loadingDelete, error: deleteError } = useDeleteCategory();
  const [localCategories, setLocalCategories] = useState([]);

  useEffect(() => {
    if (categories && categories.length) {
      setLocalCategories(categories);
    } else {
      fetchCategory();
    }
  }, [categories, fetchCategory]);

  const handleDelete = async (id) => {
    await deleteCategory(id);
    setLocalCategories(localCategories.filter((category) => category._id !== id));
  };

  return (
    <Layout>
    <Box sx={{ p: 3 }}>
      <GoBackButton sx={{ position: "absolute", left: 0 }} />

      <Button
        variant="contained"
        startIcon={<AddIcon />}
        component={Link}
        to="/category-create"
        sx={{ m: 4 }}
      >
        Crear categoría
      </Button>

      {loadingCategories && <Typography>Cargando categorías...</Typography>}

      {fetchError && (
        <Typography color="error">{fetchError.message || "Error al cargar las categorías."}</Typography>
      )}

      {!loadingCategories && localCategories.length > 0 && (
        <Grid2 container spacing={2}>
          {localCategories.map((category) => (
            <Grid2 item xs={12} sm={6} md={4} lg={3} key={category._id}>
              <Card sx={{ textAlign: "center", p: 2 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {category.name}
                  </Typography>
                  <Button
                    variant="outlined"
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={() => handleDelete(category._id)}
                    disabled={loadingDelete}
                  >
                    {loadingDelete ? "Borrando..." : "Borrar"}
                  </Button>
                </CardContent>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      )}

      {!loadingCategories && localCategories.length === 0 && (
        <Typography>No hay categorías disponibles.</Typography>
      )}

      {deleteError && (
        <Typography color="error" sx={{ mt: 2 }}>
          {deleteError}
        </Typography>
      )}
    </Box>
    </Layout>
  );
}

export default Categories;
