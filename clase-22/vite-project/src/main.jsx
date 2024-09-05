import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Reducer from "./components/Reducer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Reducer />
  </StrictMode>
);
