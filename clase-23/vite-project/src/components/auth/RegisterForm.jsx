import { useState } from "react";
import { addUser } from "../API/users/addUser";

const apiUrl = import.meta.env.VITE_BASE_URL_USERS;

function RegisterForm() {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    gender: "",
    password: "",
  });
  // ... llamado spread operator
  function handleChange(e) {
    // email: "sdkjas@gmail.com"
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  }

  function sendUser(e) {
    //previene comportamiento por defecto del form, que es refrescar una vez se realiza submit
    e.preventDefault();
    addUser(formData, apiUrl);
  }
  console.log(apiUrl);
  return (
    <form className="formLayout" onSubmit={sendUser}>
      <h4 className="formTitle">Registro de usuario</h4>

      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <label htmlFor="firstName">Nombre</label>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />

      <label htmlFor="lastName">Apellido</label>
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />

      <label htmlFor="gender">Sexo</label>
      <select name="gender" value={formData.gender} onChange={handleChange}>
        <option value="#" selected>
          Seleccione Genero
        </option>
        <option value="M">Masculino</option>
        <option value="F">Femenino</option>
        <option value="NB">No binario</option>
        <option value="O">Otro</option>
      </select>

      <label htmlFor="password">Cree su contraseña</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />

      <div className="formButtonContainer">
        <button type="submit">Enviar</button>
        <button type="reset">Borrar</button>
      </div>

      <p>
        ¿Ya tienes cuenta? <a href="/login">¡Ingresá!</a>
      </p>
    </form>
  );
}

export default RegisterForm;
