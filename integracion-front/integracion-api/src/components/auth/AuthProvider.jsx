/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";
import useLoginUser from "../../hooks/user/useLoginUser";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { loginUser, error } = useLoginUser(); // Usa el hook aquí
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Obtener el estado inicial desde localStorage
    return localStorage.getItem("token-utn") !== null;
  });

  const login = async (formData) => {
    const success = await loginUser(formData);

    if (success) {
      setIsAuthenticated(true); // Cambia el estado de autenticación
    } else {
      console.error("Error de autenticación:", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token-utn"); // Elimina el token
    setIsAuthenticated(false); // Cambia el estado de autenticación
  };

  useEffect(() => {
    // Opcional: Sincronizar estado de autenticación con localStorage
    if (!isAuthenticated) {
      localStorage.removeItem("token-utn");
    }
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
