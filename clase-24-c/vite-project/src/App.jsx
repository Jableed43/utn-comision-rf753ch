import React, { useContext } from "react";
import AuthContext, { AuthProvider } from "./components/AuthContext";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      {user ? (
        <div>
          <h1>Bienvenido, {user.email}</h1>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Login</h2>
          <Login />
          <h2>Registro</h2>
          <Register />
        </div>
      )}
    </div>
  );
};

export const AppWrapper = () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);
