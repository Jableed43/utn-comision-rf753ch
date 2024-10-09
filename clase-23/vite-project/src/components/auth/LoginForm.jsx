import { useContext, useEffect, useState } from "react";
import { getUsers } from "../API/users/getUsers";
import { UserContext } from "../../contexts/UserContext";

function LoginForm() {
  //Creo tres constantes una para cada exportacion
  const { user, handleLogin, handleLogout } = useContext(UserContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  //Este error nos permite mostrarle mensajes al usuario en la ui
  const [error, setError] = useState("");

  const [users, setUsers] = useState([]);

  //No podemos enviar el formulario si uno de los campos está vacio
  const emptyFields = formData.email === "" || formData.password === "";

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  //Traemos los usuarios para comparar nuestros datos con lo que llega por formulario
  const getAllUsers = async () => {
    try {
      const fetchedUsers = await getUsers();
      setUsers(fetchedUsers);
    } catch (error) {
      console.error(error);
    }
  };

  //Realiza el llamado a la api para traer los usuarios cuando la pagina de carga
  useEffect(() => {
    getAllUsers();
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    //Con find buscamos el usuario del listado de usuarios que coincida
    //Con el email y password pasados por formulario
    const loggedUser = users.find(
      user =>
        user.email === formData.email && user.password === formData.password
    );

    if (loggedUser) {
      handleLogin(loggedUser);
      setError("Loggeado correctamente");
    } else {
      setError("Nombre de usuario o contraseña incorrectos");
    }
  };

  return (
    <form className="formLayout" onSubmit={handleSubmit}>
      {user ? <button onClick={handleLogout}> Logout </button> : <></>}
      <h4 className="formTitle">Login de usuario</h4>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        onChange={handleChange}
        name="email"
        value={formData.email}
      />

      <label htmlFor="password">Ingrese su contraseña</label>
      <input
        type="password"
        onChange={handleChange}
        name="password"
        value={formData.password}
      />
      {error && <p> {error} </p>}
      <div className="formButtonContainer">
        <button type="submit" disabled={emptyFields}>
          Enviar
        </button>
        <button type="reset">Borrar</button>
      </div>
      <p>
        ¿No tienes cuenta? <a href="/register">registrate</a>
      </p>
    </form>
  );
}

export default LoginForm;
