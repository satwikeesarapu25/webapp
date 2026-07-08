import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="container home">
      <h1>Home</h1>
      <p>Welcome to the webapp.</p>

      <div className="card">
        <h2>Next steps</h2>
        <ul>
          <li>Add routing (React Router)</li>
          <li>Connect login/registration to an API</li>
          <li>Protect routes</li>
        </ul>
      </div>
    </div>
  );
}
