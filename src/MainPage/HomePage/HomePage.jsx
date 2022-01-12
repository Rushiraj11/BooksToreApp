import React from "react";
import Bookcard from "../../Components/BookCards/Bookcard";
import Header from "../../Components/Header/Header";
import "./HomePage.css";

function HomePage() {
  return (
    <div>
      <Header />
      <div className="HomePage-container">
        <div className="bookHeaderContainer">
          <div className="bookHeadTitle">
          </div>
        </div>
        <Bookcard />
      </div>
    </div>
  );
}

export default HomePage;
