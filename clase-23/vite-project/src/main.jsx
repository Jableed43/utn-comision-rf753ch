import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact.jsx";
import Products from "./components/Products.jsx";
import Error from "./components/Error.jsx";

//Escribimos en objetos el path y el element a utilizar para crear las rutas
//Con errorElement decidimos como se mostrará el error cuando suceda
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/contacto",
    element: <Contact />,
  },
  {
    path: "/productos",
    element: <Products />,
  },
]);

//El RouterProvider maneja el listado de rutas
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
