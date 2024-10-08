import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/pages/Contact.jsx";
import Products from "./components/pages/Products.jsx";
import Error from "./components/Error.jsx";
import Login from "./components/pages/Login.jsx";
import Register from "./components/pages/Register.jsx";
import { UserProvider } from "./contexts/UserContext.jsx";
import ProtectedRoute from "./components/auth/ProtectedRoute.jsx";

//Escribimos en objetos el path y el element a utilizar para crear las rutas
//Con errorElement decidimos como se mostrará el error cuando suceda
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/productos",
        element: <Products />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/contacto",
    element: <Contact />,
  },
]);

//El RouterProvider maneja el listado de rutas
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={routes} />
    </UserProvider>
  </StrictMode>
);
