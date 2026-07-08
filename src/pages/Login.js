import React, { useState } from "react";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    alert(`Login submitted: ${email}`);
  }

  return (
    <div className="container login">
      <h1>Login</h1>

      <form onSubmit={onSubmit}>
        <div className="field">
          <label>Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
          />
        </div>

        <div className="field">
          <label>Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
          />
        </div>

        <button type="submit" disabled={!email||!password}>Sign in</button>
      </form>

      <p className="helper">Demo UI only (no backend yet).</p>
    </div>
  );
}
