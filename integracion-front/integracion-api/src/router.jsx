import { createBrowserRouter } from "react-router-dom"
import Home from "./components/Home"
import Register from "./components/Register"
import Login from "./components/Login"
import CreateProduct from "./components/products/CreateProduct"
import ProtectedRoute from "./components/auth/ProtectedRoute"
import Users from "./components/admin/Users"
import Products from "./components/products/Products"

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
                <CreateProduct />
        )
    },
    {
        path: "/users",
        element: (
            <ProtectedRoute>
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
    }

])