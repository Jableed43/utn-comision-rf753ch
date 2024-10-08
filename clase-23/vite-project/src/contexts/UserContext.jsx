/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

//Este contexto está relacionado a la sesion del usuario
function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  //Permite de entrada tener el usuario seteado en el estado
  useEffect(() => {
    //getItem permite leer el valor en sessionStorage
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      //Lo paso de objeto a json para almacenarlo
      setUser(JSON.parse(storedUser));
    }
  }, []);

  //Login - crear una sesion

  const handleLogin = loggedInUser => {
    setUser(loggedInUser);
    //set item permite guardar y crear un nuevo valor dentro del sessionStorage
    sessionStorage.setItem("user", JSON.stringify(loggedInUser));
  };

  //Logout - destruir una sesion
  const handleLogout = () => {
    setUser(null);
    //set item permite guardar y crear un nuevo valor dentro del sessionStorage
    sessionStorage.removeItem("user");
  };

  return (
    <UserContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
