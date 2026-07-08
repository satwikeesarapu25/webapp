import React, { useState } from "react";
import "./Registration.css";

export default function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    alert(`Registration submitted: ${name} (${email})`
}
  }

  return (
    <div className="container registration">
      <h1>Create account</h1>

      <form onSubmit={onSubmit}>
        <div className="field">
          <label>Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} required />
        </div>

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

        <button type="submit" disabled={!name || !email || !password}>Register</button>
      </form>

      <p className="helper">Demo UI only (no backend yet).</p>
    </div>
  );
}
