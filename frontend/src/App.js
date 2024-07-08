import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <input placeholder="username" type="text" />
      <input placeholder="password" type="password" />
      <div>
        <button>Register</button>
        <button>Login</button>
      </div>
    </div>
  );
}
