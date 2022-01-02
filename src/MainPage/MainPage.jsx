import React from "react";
import Login from "./Login/Login";
import "./MainPage.css";
import Signup from "./Signup/Signup";
import Image1 from "../Assets/Image1.png"



function MainPage() {
const[update,setUpdate]=React.useState(true)

const handleOnClick = () => {
  setUpdate(!update);
  
};
  
  return (
    <div className="main-Container">
      <div className="Container1">
        <div className="Image-Container">
            <img className="Image"
              src={Image1}
              width="245px"
              height="245px"
            />
          <div className="mainText">ONLINE BOOK SHOPPING</div>
        </div>
        <div className="Container2">
          <div className="Container3">
          <div className="Textbox">  <span
                className="login-signup-text"
                onClick={() => handleOnClick()}
              >
                LOGIN
              </span>
              <span
                className="login-signup-text" 
                onClick={() => handleOnClick()}
              >
                SIGNUP
              </span>
            </div>
            <div className="LoginSignup-container">
              {update ? <Login /> : <Signup />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
