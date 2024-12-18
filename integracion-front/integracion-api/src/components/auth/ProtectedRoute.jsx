/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider.jsx"; // Importa tu contexto

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
