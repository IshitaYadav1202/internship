import React, { useState } from "react";

// Modal for login/register
const AuthModal = ({ onAuth }) => {
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    onAuth({ email, password, mode });
  };

  return (
    <div className="auth-modal">
      <h2>{mode === "login" ? "Login" : "Register"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit">{mode === "login" ? "Login" : "Register"}</button>
      </form>
      <button onClick={() => setMode(mode === "login" ? "register" : "login")}>
        {mode === "login" ? "Or Register" : "Or Login"}
      </button>
    </div>
  );
};

export default AuthModal;

