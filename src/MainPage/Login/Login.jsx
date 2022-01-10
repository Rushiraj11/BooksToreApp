import React from "react";
import UserService from "../../Service/UserService";
import "./Login.css";
import { useHistory } from "react-router-dom";
const userService = new UserService();

const emailregex =
  /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/;
const passwordRegex =
  /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

function Login() {
  const [login, setLogin] = React.useState({
    email: "",
    password: "",
  });
  const [emailerror, setEmailError] = React.useState(false);
  const [passworderror, setPasswordError] = React.useState(false);

  const history = useHistory();
  const changeHandle = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const onLogin = () => {

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
  return (
    <div className="Container">
      <input
        className="input"
        type="text"
        placeholder="Email"
        name="email"
        value={login.email}
        onChange={(e) => changeHandle(e)}
      />
      <input
        className="input"
        type="text"
        placeholder="Password"
        name="password"
        value={login.password}
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
