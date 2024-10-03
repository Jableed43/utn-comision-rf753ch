import React, { useContext, useState } from "react";
import AuthContext from "./AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
