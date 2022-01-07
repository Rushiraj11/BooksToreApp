import React from "react";
import Book from "../Components/Book/Book";
import CartItem from "../Components/Cart/CartItem";
import HomePage from "../MainPage/HomePage/HomePage";
import MainPage from "../MainPage/MainPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/HomePage" component={HomePage} />
          <Route exact path="/HomePage/Book" component={Book} />
          <Route exact path="/HomePage/book/Cart" component={CartItem} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Router;
