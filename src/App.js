import './App.css';
import CartItem from './Components/Cart/CartItem';
import CustomerDetails from './MainPage/CustomerDetails/CustomerDetails';
import HomePage from './MainPage/HomePage/HomePage';
import Orderplaced from './MainPage/Orderplaced/Orderplaced';
import Router from './Router/Router';
import { Provider } from 'react-redux';
import Wishlist from './Components/Wishlist/Wishlist';
import store from './Redux/Store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
     <Router/>
     </Provider>
     {/* <Wishlist/> */}
    </div>
  );
}

export default App;
