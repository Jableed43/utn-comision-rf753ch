import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../App.css";
import useFetchProduct from "../../hooks/product/useFetchProduct";
import useDeleteProduct from "../../hooks/product/useDeleteProduct";
import CreateProduct from "./CreateProduct";
import { statusTranslations } from "./statusTranslate";

function Products() {
    const navigate = useNavigate();
    const { products, fetchProduct, error: fetchError, loading: loadingProducts } = useFetchProduct();
    const { deleteProduct, error: deleteError, loading: loadingDelete } = useDeleteProduct();
    const [localProducts, setLocalProducts] = useState([]); // Local product list
    const [editingProduct, setEditingProduct] = useState(null);

    // Fetch products initially or if they are not available locally
    useEffect(() => {
        if (products && products.length) {
            setLocalProducts(products); // Use fetched products
        } else {
            fetchProduct(); // Fetch products if not available
        }
    }, [products, fetchProduct]);

    const handleGoBack = () => {
        navigate(-1);
    };

    const handleDelete = async (id) => {
        const success = await deleteProduct(id); // Delete from API
        if (success) {
            setLocalProducts(localProducts.filter((product) => product._id !== id)); // Update local list
        }
    };

    const handleEdit = (product) => {
        setEditingProduct(product); // Set product to edit
    };

    return (
        <section>
            <button onClick={handleGoBack}>Go Back</button>
            <Link to="/create-product">Create New Product</Link>
            <h2>Products</h2>

            {editingProduct && <CreateProduct productToEdit={editingProduct} updateProductList={setLocalProducts} />}

            <div className="product-container">
                {loadingProducts && <p>Loading products...</p>}

                {fetchError && <p style={{ color: "red" }}>Error: {fetchError}</p>}

                {!loadingProducts && localProducts.length > 0 && (
                    localProducts.map((product) => (
                        <div
                            key={product._id}
                            style={{
                                border: "solid black",
                                margin: 10,
                                padding: 10,
                                textAlign: "center",
                            }}
                        >
                            <p>Name: {product.name}</p>
                            <p>Price: {product.price}</p>
                            <p>Description: {product.description}</p>
                            <p>Status: {statusTranslations[product.status] || product.status}</p>
                            {product.category && <p>Category: {product.category.name}</p>}
                            {product.highlighted && <p>Featured Product</p>}
                            <p>Available Stock: {product.stock}</p>
                            <button onClick={() => handleEdit(product)}>Edit</button>
                            <button onClick={() => handleDelete(product._id)} disabled={loadingDelete}>
                                {loadingDelete ? "Deleting..." : "Delete"}
                            </button>
                        </div>
                    ))
                )}

                {!loadingProducts && localProducts.length === 0 && !fetchError && (
                    <p>No products available.</p>
                )}

                {deleteError && <p style={{ color: "red" }}>Error deleting: {deleteError}</p>}
            </div>
        </section>
    );
}

export default Products;
