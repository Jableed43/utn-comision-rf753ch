import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth/AuthProvider.jsx";

function Login() {
  const { login, error } = useAuth(); // Accede a login y error del contexto
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    const success = await login(form); // Llama a la función login del contexto
    if (success) {
      navigate("/"); // Redirige al usuario al home si el login es exitoso
    }
  };

  const handleNoUser = () => {
    navigate("/register");
  };

  return (
    <section className="formContainer">
      <h2>Login</h2>
      <p>
        ¿No posees usuario?{" "}
        <span
          style={{ color: "blue", cursor: "pointer" }}
          onClick={handleNoUser}
        >
          ¡Crealo!
        </span>
      </p>
      <br />
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            required
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </div>

        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
    </section>
  );
}

export default Login;
