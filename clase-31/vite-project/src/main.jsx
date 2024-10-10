import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Productos from "./pages/Productos.jsx";
import Contacto from "./pages/Contacto.jsx";
import Home from "./pages/Home.jsx";
//De react router dom necesitamos,
//crear las rutas a traves de createBrowserRouter
//proveer las rutas a la aplicacion con RouterProvider

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/productos",
    element: <Productos />,
  },
  {
    path: "/contacto",
    element: <Contacto />,
  },
]);

//acá es donde se empieza a renderizar el proyecto en react
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
