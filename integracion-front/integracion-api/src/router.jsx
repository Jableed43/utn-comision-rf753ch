import { createBrowserRouter } from "react-router-dom"
import Home from "./components/Home"
import Register from "./components/Register"
import CreateProduct from "./components/products/CreateProduct"
import ProtectedRoute from "./components/auth/ProtectedRoute"

export const router = createBrowserRouter([

    {
        path: "/",
        element: <Home /> ,
    },
    {
        path: "/register",
        element:  <Register />
    },
    {
        path: "/createProduct",
        element: (
          <ProtectedRoute>
            <CreateProduct />
          </ProtectedRoute>
        ),
      },

])