/* eslint-disable react/prop-types */
import React, { createContext, useState, useEffect } from "react";
import bcrypt from "bcryptjs";

// Crear el contexto
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Cargar usuario de localStorage cuando la app se monta
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Registro
  const register = async (email, password) => {
    // Hashear la contraseña antes de guardarla
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { email, password: hashedPassword };

    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
  };

  // Login
  const login = async (email, password) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser) {
      const passwordMatch = await bcrypt.compare(password, storedUser.password);

      // Verificar si la contraseña hasheada coincide con la ingresada
      if (storedUser.email === email && passwordMatch) {
        setUser(storedUser);
        console.log("Login exitoso");
      } else {
        console.error("Credenciales incorrectas");
      }
    }
  };

  // Logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
