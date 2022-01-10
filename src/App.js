import './App.css';
import CartItem from './Components/Cart/CartItem';
import CustomerDetails from './MainPage/CustomerDetails/CustomerDetails';
import HomePage from './MainPage/HomePage/HomePage';
import Orderplaced from './MainPage/Orderplaced/Orderplaced';
import Router from './Router/Router';


function App() {
  return (
    <div className="App">
     {/* <Router/> */}
     <CartItem/>
     {/* <Orderplaced/> */}
     {/* <CustomerDetails/> */}
    </div>
  );
}

export default App;
