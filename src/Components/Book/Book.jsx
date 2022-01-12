import React from 'react'
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import './Book.css';
import UserService from "../../Service/UserService";
import { useHistory } from "react-router-dom";


const userService = new UserService();

function Book(props) {
const[addBook,setAddBook] = React.useState([])
const [quantity, setQuantity] = React.useState(0);
const [cartItemId, setCartItemId] = React.useState("");
const [getWishlistId, setGetWishlistId] =React.useState([]);


console.log(props.book.book);
  const OpenHomePage = () => {
    // props.openBook(true)
    
}

const bookId = (id) =>{
  console.log(id);
  userService.AddToCart(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_cart_item/${id}`)
  .then((response) => {
   showCartItems()
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
}

const showCartItems = () => {
  userService.GetCartItems("https://bookstore.incubation.bridgelabz.com/bookstore_user/get_cart_items")
    .then((res) => {
      console.log(res);
      let filterArray = res.data.result.filter(function (cart) {
        if (props.book.book._id === cart.product_id._id) {
          setQuantity(cart.quantityToBuy);
          setCartItemId(cart._id);
          console.log(cart.product_id._id);
          return cart;
        }
      });
      console.log(filterArray);
      setAddBook(filterArray);

    })
    .catch((error) => {
      console.log(error);
    });
};

const handleIncrement = () => {
  
  let data = {
    "quantityToBuy": quantity + 1,
  };
  userService.CartItemQuantity(`https://bookstore.incubation.bridgelabz.com/bookstore_user/cart_item_quantity/${cartItemId}`, data)
    .then((response) => {
      console.log(response);
     showCartItems();
    })
    .catch((error) => {
      console.error(error);
    });
};

const handleDecrement = () => {
  
  let data = {
    quantityToBuy: quantity - 1,
  };
  userService.CartItemQuantity(`https://bookstore.incubation.bridgelabz.com/bookstore_user/cart_item_quantity/${cartItemId}`,data)
    .then((response) => {
      console.log(response);
      showCartItems();

    })
    .catch((error) => {
      console.error(error);
    });
};
const addToWishlist = (id) => {
 userService.AddToWishList(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_wish_list/${id}`)
    .then((response) => {
      console.log(response);
      displayWishlistItems();
    })
    .catch((error) => {
      console.log(error);
    });
};
const displayWishlistItems = () => {
  userService.GetWishList("https://bookstore.incubation.bridgelabz.com/bookstore_user/get_wishlist_items")
    .then((response) => {
      console.log(response);
      let filterWishlistArray = response.data.result.filter(function (
        wishlist
      ) {
        if (props.book.book._id === wishlist.product_id._id) {
          console.log(wishlist.product_id._id);
          return wishlist;
        }
      });
      setGetWishlistId(filterWishlistArray);
    })
    .catch((error) => {
      console.log(error);
    });
};
  


React.useEffect(() => {
  showCartItems();
  displayWishlistItems();
}, [quantity]);

    return (
        <div>
      <h5 style={{ paddingRight:"1160px" }} >
        <span style={{ color: "gray" }} onClick={OpenHomePage}> Home </span>
      </h5>
      <div className="Book-Container">
        <div className="leftside-BookIcon">
          <div className="img1"></div>
          <div className="img2"></div>
        </div>
        <div className="mainBookcardContainer">
          <div className="bookContainerWithbtn">
            <div className="bookCardImg">
              <div className="bookImg"></div>
            </div>
            <div className="Button-Addto">
            {addBook.length === 0 ? (
                <Button
                 style={{
                    backgroundColor: "#A03037",
                    width: "100px",
                    height: "40px",
                  }}
                  onClick={()=>bookId(props.book.book._id)}
                  variant="contained"
                >
                  ADD TO BAG
                </Button>
                 ) : (
                  <div direction="row" spacing={1}>
                  <button
                    className="minus-icon"
                    id={props.book.book._id}
                    onClick={handleDecrement}
                    style={{
                      width: "30px",
                      height: "25px",
                      background: "#FAFAFA 0% 0% no-repeat padding-box",
                      border: "2px solid #DBDBDB",
                      opacity: "1",
                      marginTop: "5px",
                    }}
                  >
                    -
                  </button>
                  <button
                    sx={{
                      width: 40,
                      height: 30,
                      color: "black",
                      fontSize: "15px",
                      background: "#FAFAFA 0% 0% no-repeat padding-box",
                      border: "1px solid #DBDBDB",
                    }}
                    variant="square"
                  >
                    {quantity}
                  </button>
                  <button
                    id={props.book.book._id}
                    onClick={handleIncrement}
                    className="plus-icon"
                    id="plus"
                    style={{
                      width: "30px",
                      height: "25px",
                      background: "#FAFAFA 0% 0% no-repeat padding-box",
                      border: "1px solid #DBDBDB",
                      opacity: "1",
                      marginTop: "3px",
                    }}
                  >
                    +
                  </button>
                </div>)}
              <div>
              {getWishlistId.length !== 0 ? (
                <Button
                  fullWidth
                  style={{
                    color: "black",
                    borderColor: "#878787",
                    marginBottom: "30px",
                    width: "150px",
                    height: "40px",
                  }}
                  variant="outlined"
                >
                  Added To Wishlist
                </Button>
              ) : (
                <Button
                  fullWidth
                  style={{
                    backgroundColor: "#333333",
                    marginBottom: "30px",
                    width: "150px",
                    height: "40px",
                  }}
                  variant="contained"
                  onClick={addToWishlist}
                >
                  Wishlist
                </Button>
              )}
              </div>
            </div>
          </div>
        
          <div className="bookDetailsContainer">
            <div className="bookNameText">
              <h2 >{props.book.book.bookName}</h2>
            </div>
            <div style={{ color: "gray" ,paddingRight:"450px", fontSize:"20px",paddingBottom:"15px" }}>by {props.book.book.author}</div>
            <div>
              <span
                style={{
                  backgroundColor: "green",
                  width: "60px",
                  color: "white",
                  
                }}
              >
                4.5*
              </span>
              <span style={{ color: "gray",paddingRight:"15px" }}>(30)</span>
            </div>
            <div>
              <span style={{ width: "50px" }}>
                <b>Rs {props.book.book.price}</b>
              </span>
              <del style={{ color: "gray" }}> Rs 1700</del>
            </div>

            <div className="bookDetails" style={{ color: "gray" }}>
              <hr />
              <h4>Book Detail</h4>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              mollitia ipsam delectus perferendis provident. Error repudiandae
              omnis delectus inventore, cupiditate ullam nulla illum harum
              quibusdam ut recusandae eos voluptatem.
              <hr />
            </div>

            <div className="customerFeedback">
              <h3>Customer Feedback</h3>
              <div className="ratingContainer">
                <div className="rating">
                  <Typography component="legend">Overall Rating</Typography>
                  <input type="text" className="inputFeedback" />
                </div>
                <Button
                  variant="contained"
                  
                >
                  Submit
                </Button>
              </div>
              <div className="customerRatingContain">
                <div className="customerRating">
                  <p>
                    Amazing book
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Book
