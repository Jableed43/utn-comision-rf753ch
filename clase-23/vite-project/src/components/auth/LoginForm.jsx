function LoginForm() {
  return (
    <form className="formLayout">
      <h4 className="formTitle">Login de usuario</h4>

      <label htmlFor="email">Email</label>
      <input type="email" name="email" />

      <label htmlFor="password">Ingrese su contraseña</label>
      <input type="password" name="password" />

      <div className="formButtonContainer">
        <button type="submit">Enviar</button>
        <button type="reset">Borrar</button>
      </div>
    </form>
  );
}

export default LoginForm;
