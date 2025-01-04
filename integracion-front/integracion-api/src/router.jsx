import { createBrowserRouter } from "react-router-dom"
import Home from "./components/Home"
import Register from "./components/Register"
import Login from "./components/Login"
import CreateProduct from "./components/products/CreateProduct"
import ProtectedRoute from "./components/auth/ProtectedRoute"
import Users from "./components/admin/Users"
import Products from "./components/products/Products"
import NotFound from "./components/NotFound"
import Categories from "./components/categories/Categories"
import CreateCategory from "./components/categories/CreateCategory"

export const router = createBrowserRouter([

    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/home",
        element: (
            <ProtectedRoute>
                <Home />
            </ProtectedRoute>
        ),
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/create-product",
        element: (
            <ProtectedRoute allowedRoles={["MERCHANT"]}>
                <CreateProduct />
            </ProtectedRoute>
        )
    },
    {
        path: "/users",
        element: (
            <ProtectedRoute allowedRoles={["ADMIN"]}>
                <Users />
            </ProtectedRoute>
        )
    },
    {
        path: "/products",
        element: (
            <ProtectedRoute>
                <Products />
            </ProtectedRoute>
        )
    },
    {
        path: "/categories",
        element: (
            <ProtectedRoute>
                <Categories />
            </ProtectedRoute>
        )
    },
    {
        path: "/category-create",
        element: (
            <ProtectedRoute>
                <CreateCategory />
            </ProtectedRoute>
        )
    },
    {
        path: "*",
        element: <NotFound />
    }
])