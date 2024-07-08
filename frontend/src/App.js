import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [username, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const onRegister = () => {
    alert("register clicked");
  };
  const onLogin = () => {
    alert("login clicked");
  };

  return (
    <div className="container">
      <input
        placeholder="username"
        type="text"
        onChange={(event) => setUserName(event.target.value)}
      />
      <p>{username}</p>
      <input
        placeholder="password"
        type="password"
        onChange={(event) => setPassWord(event.target.value)}
      />
      <p>{password}</p>
      <div>
        <button onClick={onRegister}>Register</button>
        <button onClick={onLogin}>Login</button>
      </div>
    </div>
  );
}
