import { createBrowserRouter } from "react-router-dom"
import Home from "./components/Home"
import Register from "./components/Register"

export const router = createBrowserRouter([

    {
        path: "/",
        element: <Home /> ,
    },
    {
        path: "/register",
        element:  <Register />
    }

])