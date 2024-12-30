import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './auth/AuthProvider';

function Login() {
  const { login, error } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [showPassword, setShowPassword] = useState(false); // Estado para alternar visibilidad de contraseña

  const handleLogin = async (e) => {
    e.preventDefault();
    const success = await login(form);
    console.log(success);
    if (success) {
      navigate("/home");
    }
  };

  const handleNoUser = () => {
    navigate("/register");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
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

          <div style={{ position: "relative" }}>
            <label htmlFor="password">Password</label>
            <input
              type={showPassword ? "text" : "password"} // Cambia entre texto y contraseña
              name="password"
              required
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              style={{ paddingRight: "2rem" }} // Espacio para el botón de visibilidad
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? "🙈" : "👁️"} {/* Ícono de alternancia */}
            </button>
          </div>

          <button type="submit">Login</button>
        </form>

        {error && <p style={{ color: "red" }}>Error: {error}</p>}
      </section>
    </>
  );
}

export default Login;
