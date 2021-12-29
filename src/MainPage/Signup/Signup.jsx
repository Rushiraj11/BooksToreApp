import React from 'react'
import "./Signup.css";
function Signup() {

  return (
    <div className="Container">
        <input
          className="inputClass"
          type="text"
          placeholder="Full Name"
          name="fullName"
        />
        <input
          className="inputClass"
          type="text"
          placeholder="Email"
          name="email"
        />
        <input
          className="inputClass"
          type="text"
          placeholder="Password"
          name="password"
        />
        <input
          className="inputClass"
          type="text"
          placeholder="Mobile Number"
          name="phone"
        />
        <button className="signUpBtn" >Signup</button>
    </div>
  );
}

export default Signup
