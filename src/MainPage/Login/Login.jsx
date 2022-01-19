import React from "react";
import UserService from "../../Service/UserService";
import "./Login.css";
import { useHistory } from "react-router-dom";
import TextField from '@mui/material/TextField';
const userService = new UserService();

const EmailRegex =
  /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/;
const PasswordRegex =
  /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{5,}$/;

function Login() {
  const [login, setLogin] = React.useState({
    email: "",
    password: "",
  });
  const [emailerror, setEmailError] = React.useState(false)
  const [passworderror, setPasswordError] = React.useState(false)
  const [htEmail, setHTEmail] = React.useState(' ');
	const [htPassword, setHTPassword] = React.useState(' ');



  const history = useHistory();
  const changeHandle = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };


  const onLogin = () => {
    if (EmailRegex.test(login.email)) {
      setEmailError(false);
      setHTEmail(' ');
  } else {
      setEmailError(true);
      setHTEmail('Enter valid email');
  }

  if (PasswordRegex.test(login.password)) {
      setPasswordError(false);
      setHTPassword(' ');
  } else {
      setPasswordError(true)
      setHTPassword('Enter valid password');
  }
  if (EmailRegex.test(login.email) && PasswordRegex.test(login.password)) {
    console.log(EmailRegex.test(login.email) && PasswordRegex.test(login.password));

      userService
        .Login(
          "https://bookstore.incubation.bridgelabz.com/bookstore_user/login",
          login
        )
        .then((res) => {
          localStorage.setItem("token", res.data.result.accessToken);
          console.log("login response", res.data);
          history.push("/HomePage");
        })
        .catch((err) => {
          console.warn(err);
        });
    
  };
}
  return (
    <div className="Container">
      <div className='login-username-container' style={{width:"100%"}}>
      <TextField
        className="input"
        type="text"
        placeholder="Email"
        name="email"
        size="medium"
        margin="dense"
        value={login.email}
        onChange={(e) => changeHandle(e)}
         error={emailerror}
         helperText={htEmail}
      /></div>
      <TextField
        className="input"
        type="text"
        placeholder="Password"
        name="password"
        size="medium"
        margin="dense"
        value={login.password}
         error={passworderror}
         helperText={htPassword}
        onChange={(e) => changeHandle(e)}
      />
      <button className="login" onClick={onLogin}>
        Login
      </button>
      <div className="ORtext">OR</div>
      <div className="text">
        <div className="text1">Facebook</div>
        <div className="text2">Google</div>
      </div>
    </div>
  );
}

export default Login;
