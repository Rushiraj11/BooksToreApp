import React from "react";
import UserService from "../../Service/UserService";
import Book from "../Book/Book";
import "./Bookcard.css";
const userService = new UserService();



export default function Bookcard() {
  const [books, setBooks] = React.useState([]);
  const[select,setSelect] =React.useState();

  
  console.log("books",books);
  const getAllBooks = () => {
    userService.GetBooks("https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book")
      .then((res) => {
        setBooks(res.data.result)
        console.log("getbook", res.data.result);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

 React.useEffect(() => {
    getAllBooks();
  }, []);

const changeHandle=(event,id)=>{
  console.log("book");
  setSelect(event.target.value);
  

}

  return (
    <div>
      <div className="BookCardContainer" >
      {books.map((book,index) => (
        <div key={index} className="Books-Container" value={select} onClick={changeHandle}>
          <div className="Image-Container1">
            <div className="Image-Card"></div>
          </div>
          <div className="Book-TextContent">
            <div className="BookName-Text">
              <h3>{book.bookName}</h3>
            </div>
            <div style={{ color: "gray"}}>by {book.author}</div>
            <div>
              <span
                style={{
                  backgroundColor: "green",
                  color: "white",
                }}
              >
                4.3*
              </span>
              <span style={{ color: "gray" }}>(30)</span>
            </div>
            <div>
              <span style={{ width: "50px" }}>
                <b>Rs {book.price}</b>
              </span>
              <del style={{ color: "gray" }}> Rs 1700</del>
            </div>
            </div>
        </div>
      ))} 
      </div>
    </div>
  );
}
