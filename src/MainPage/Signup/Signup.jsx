import React from 'react'
import UserService from '../../Service/UserService';
import "./Signup.css";
const userService = new UserService();


function Signup() {
  const [signUp, setSignUp] = React.useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
  });

  const changeHandle = (e) => {
    setSignUp({
      ...signUp,
      [e.target.name]: e.target.value,
    });
  };

  const onSignup =() => {
    userService.Signup("https://bookstore.incubation.bridgelabz.com/bookstore_user/registration",signUp)
    .then((res) => {
      console.log("login response", res.data);
    
    })
    .catch((err) => {
      console.warn(err);
    });
  }
  
  return (
    <div className="SContainer">
        <input
          className="inputClass"
          type="text"
          placeholder="Full Name"
          name="fullName"
          value={signUp.fullName}
          onChange={(e) =>changeHandle(e)}
        />
        <input
          className="inputClass"
          type="text"
          placeholder="Email"
          name="email"
          value={signUp.email}
          onChange={(e) =>changeHandle(e)}
        />
        <input
          className="inputClass"
          type="password"
          placeholder="Password"
          name="password"
          value={signUp.password}
          onChange={(e) =>changeHandle(e)}
        />
        <input
          className="inputClass"
          type="text"
          placeholder="Mobile Number"
          name="phone"
          value={signUp.phone}
          onChange={(e) =>changeHandle(e)}
        />
        <button className="signUp-Button" onClick={onSignup}>Signup</button>
    </div>
  );
}

export default Signup
