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
import UserService from "../../Service/UserService";
import CustomerDetails from "../../MainPage/CustomerDetails/CustomerDetails";
import { useHistory } from "react-router-dom";
const userService = new UserService();

function CartItem() {
  const [cartItems, setCartItems] = React.useState([]);
  const [openAddress, setOpenAddress] = React.useState(false);
  const [openOrderSummery, setOpenOrderSummery] = React.useState(false);
  const history = useHistory();

  const getAllCartItems = () => {
    userService
      .GetCartItems(
        "https://bookstore.incubation.bridgelabz.com/bookstore_user/get_cart_items"
      )
      .then((response) => {
        console.log("getCartItems", response.data.result);
        setCartItems(response.data.result);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  const decrementCartItem = (cartId) => {
    console.log("decrimented items", cartId);
    cartItems.map((item) => {
      if (item._id === cartId) {
        upadateQuantity(cartId, item.quantityToBuy - 1);
      } else {
        return item;
      }
    });
  };

  const upadateQuantity = (cartItemId, quantity1) => {
    let obj = { quantityToBuy: quantity1 };
    userService
      .CartItemQuantity(
        `https://bookstore.incubation.bridgelabz.com/bookstore_user/cart_item_quantity/${cartItemId}`,
        obj
      )
      .then((response) => {
        console.log("quantity", response.data.message);
        getAllCartItems();
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  const incrementCartItem = (cartId) => {
    cartItems.map((cartitem) => {
      if (cartitem._id === cartId) {
        upadateQuantity(cartId, cartitem.quantityToBuy + 1);
      } else {
        return cartitem;
      }
    });
  };
  console.log("cartItems", cartItems);

  const deleteCartItems = (cartItemId) => {
    userService
      .RemoveCartItems(
        `https://bookstore.incubation.bridgelabz.com/bookstore_user/remove_cart_item/${cartItemId}`
      )
      .then((response) => {
        console.log(response.data.message);
        getAllCartItems();
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  const orderPlaced = () => {
    setOpenAddress(!openAddress);
  };

  const continueOrder = () => {
    setOpenOrderSummery(!openOrderSummery);
  };

  const checkoutOrder = () => {
    let array_ordered_books = [];

    cartItems.map((element) => {
      let ordered_book = {
        product_id: element._id,
        product_name: element.product_id.bookName,
        product_quantity: element.quantityToBuy,
        product_price: element.product_id.price,
      };
      return array_ordered_books.push(ordered_book);
    });

    let orderObj = {
      orders: array_ordered_books,
    };
    userService
      .TakeOrder(
        "https://bookstore.incubation.bridgelabz.com/bookstore_user/add/order",orderObj)
      .then((response) => {
        console.log(response.data.message, "order items", response.data.result);
        history.push("/Homepage/Book/Cart/Orderplaced");
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  React.useEffect(() => {
    getAllCartItems();
  }, []);

  return (
    <div>
      <Header />
      <h3 style={{ marginLeft: "8%" }}>
        <span style={{ color: "gray" }}> Home/ </span> My cart
      </h3>

      <div className="myCartContainer">
        <div className="textAndLocationContain">
          <h3>My cart(1)</h3>
          <select className="selectLocationFeild">
            <option value="location">Use current location</option>
          </select>
        </div>
        {cartItems.map((product, index) => (
          <div className="bookImgAddDetails" key={index}>
            <div className="bookImgDiv"></div>
            <div className="bookDetailsDiv-text">
              <b>{product.product_id.bookName}</b>
              <p>by {product.product_id.author}</p>
              <div>
                {" "}
                <span style={{ width: "90px" }}>
                  <b>Rs {product.product_id.price}</b>
                </span>
                <del style={{ color: "gray" }}> Rs 2000</del>
              </div>
              <div className="addRemoveCartItems">
                <button
                  className="sub"
                  onClick={() => decrementCartItem(product._id)}
                >
                  -
                </button>
                <button className="value" id={product._id}>
                  {product.quantityToBuy}
                </button>
                <button
                  className="add"
                  onClick={() => incrementCartItem(product._id)}
                >
                  +
                </button>
                <button
                  className="remove"
                  onClick={() => deleteCartItems(product._id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
        {cartItems.length >= 1 ? (
          <div className="placeOrderBtn">
            <Button
              variant="contained"
              color="primary"
              style={{ float: "right" }}
              onClick={orderPlaced}
            >
              Place order
            </Button>
          </div>
        ) : null}
      </div>
      <div className="addressOrderDetailContainer1">
        {!openAddress ? (
          <div className="txt">Address Details</div>
        ) : (
          <CustomerDetails continueOrder={continueOrder} />
        )}
      </div>

      <div className="OrderDetailContainer2">
        {!openOrderSummery ? (
          <h4 className="txt">Order Summery</h4>
        ) : (
          <div className="orderSummeryContainer">
            <p className="txt">Order Summery</p>
            {cartItems.map((product, index) => (
              <div className="bookImgAddDetails" key={index}>
                <div className="bookImgDiv"></div>
                <div className="bookDetailsDiv-text">
                  <b>{product.product_id.bookName}</b>
                  <p>by {product.product_id.author}</p>
                  <span style={{ width: "50px" }}>
                    <b>Rs {product.product_id.price}</b>
                  </span>
                  <del style={{ color: "gray" }}> Rs 2000</del>
                </div>
              </div>
            ))}
            <div className="checkout-btn">
              <Button
                variant="contained"
                color="primary"
                onClick={checkoutOrder}
              >
                Checkout
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartItem;
