import React from "react";
import Book from "../Components/Book/Book";
import CartItem from "../Components/Cart/CartItem";
import HomePage from "../MainPage/HomePage/HomePage";
import MainPage from "../MainPage/MainPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Orderplaced from "../MainPage/Orderplaced/Orderplaced";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/HomePage" component={HomePage} />
          <Route exact path="/HomePage/Book" component={Book} />
          <Route exact path="/HomePage/Book/Cart" component={CartItem} />
          <Route exact path="/HomePage/Book/Cart/Orderplaced" component={Orderplaced} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Router;
