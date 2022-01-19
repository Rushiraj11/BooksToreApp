import React from "react";
import { connect } from "react-redux";
import { fetchBooks } from "../../Redux/Actions";
import UserService from "../../Service/UserService";
import Book from "../Book/Book";
import "./Bookcard.css";

const userService = new UserService();



function Bookcard(props) {
  const [books, setBooks] = React.useState([]);
  const[select,setSelect] =React.useState(false);
  const[currentBook , setCurrentBook] = React.useState({});

console.log(props);  
  console.log("books",books);
  const getAllBooks = () => {
    props.dispatch(fetchBooks())
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

  
// to open selected book
const changeview =(book)=>{
  setCurrentBook({...currentBook,book})
  setSelect(!select) 
  
}

  return (
    <div>
      <div className="BookCardContainer" >
     {select ? <Book book={currentBook}/>  : 
      books.map((book,index) => (
        <div key={index} className="Books-Container" value={select}  >
          <div className="Image-Container1"onClick={()=>changeview(book)}>
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

const mapStateToProps = (state) => {
	return {
		books: state.bookReducer.books,
	};
};

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		fetchBooks: () => dispatch(fetchBooks()),
// 	};
// };

export default connect(mapStateToProps)(Bookcard)
