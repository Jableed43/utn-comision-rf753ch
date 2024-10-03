import React, { useContext, useState } from "react";
import AuthContext from "./AuthContext";

const Register = () => {
  const { register } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    register(email, password);
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
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
