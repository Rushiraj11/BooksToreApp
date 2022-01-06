import React from "react";
import Image11 from "../../Assets/Image 11.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Header from "../Header/Header";
import "./CartItem.css";

function CartItem(props) {
  const [cartItems, setCartItems] = React.useState([]);

  return (
    <div>
      <Header />
      <h3 style={{ marginRight:"75vw" }}>
        <span style={{ color: "gray" }}> Home/ </span> My cart
      </h3>

      <div className="myCartContainer">
        <div className="textAndLocationContain">
          <h3>My cart(1)</h3>
        </div>
        {cartItems.map((cart, index) => (
          <div className="bookImgAddDetails" key={index}>
            <div className="bookImgDiv"></div>
            <div className="bookDetailsDiv text">
              <b>{cart.product_id.bookName}</b>
              <p>{cart.product_id.author}</p>
              <span style={{ width: "50px" }}>
                <b> {cart.product_id.price}</b>
              </span>
              <del style={{ color: "gray" }}> Rs 2000</del>
              <div className="addRemoveCartItems">
                <button className="sub">-</button>
                <button className="value" id={cart._id}>
                  {cart.quantityToBuy}
                </button>
                <button className="add">+</button>
                <Button className="remove">Remove</Button>
              </div>
            </div>
          </div>
        ))}

        <div className="placeOrderBtn">
          <Button
            variant="contained"
            color="primary"
            style={{ float: "right" }}
          >
            Place order
          </Button>
        </div>
      </div>
      <div className="addressOrderDetailContainer">
        <div className="txt">Address Details</div>
      </div>

      <div className="addressOrderDetailContainer">
        <h4 className="txt">Order Summery</h4>

        <div className="orderSummeryContainer">
          <p className="txt-order">Order Summery</p>
          {cartItems.map((cart, index) => (
            <div className="bookImgAddDetails" key={index}>
              <div className="bookImgDiv"></div>
              <div className="bookDetailsDiv text">
                <b>{cart.product_id.bookName}</b>
                <p>{cart.product_id.author}</p>
                <span style={{ width: "50px" }}>
                  <b> {cart.product_id.price}</b>
                </span>
                <del style={{ color: "gray" }}> Rs 2000</del>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CartItem;
