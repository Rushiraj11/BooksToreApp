import React from "react";
import "./Login.css";
function Login() {
 
 
  return (
    <div className="Container">
      <input
        className="input"
        type="text"
        placeholder="Email"
        name="email"
      />
      <input
        className="input"
        type="text"
        placeholder="Password"
        name="password"
      />
      <button className="login" >
        Login
      </button>
      <div className="ORBtn">OR</div>
      <div className="text">
        <div className="ftxt">Facebook</div>
        <div className="gtxt">Google</div>
      </div>
    </div>
  );
}

export default Login;
