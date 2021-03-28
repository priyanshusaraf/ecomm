import React from "react";
import "./Login.css";
function Login() {
  return (
    <div className="login">
      <h1>Login</h1>
      <form className="login__form">
        <input type="text" placeholder="Enter Name" />
        <input type="email" placeholder="Enter Email" />
        <div className="login__buttons">
          <button className="login__button">SignUp</button>
          <button className="login__button">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
