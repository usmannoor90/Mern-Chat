import React from "react";
import "../../styling/accountstyling/login.css";
import axios from "axios";

function AuthPage({ onAuth }) {
  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];
    try {
      axios
        .post(` http://localhost:3300/authenticate`, { username: value })
        .then((res) => {
          console.log(res);
          onAuth({ ...res.data, secret: value });
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome 👋</div>

        <div className="form-subtitle">Set a username to get started</div>

        <div className="auth">
          <div className="auth-label">Username</div>
          <input className="auth-input" name="username" />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
}

export default AuthPage;
