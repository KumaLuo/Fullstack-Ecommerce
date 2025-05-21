import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Home from './Pages/Home';
import Header from './Components/Header';
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import Footer from './Components/Footer';
import Listing from './Pages/Listing';
import ProductDetails from './Pages/ProductDetails';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';

const MyContext = createContext();

function App() {

  useEffect(() => {
    getLocations("https://countriesnow.space/api/v0.1/countries");
  }, []);

  const getLocations = async (url) => {

    try {
      const response = await axios.get(url);
      setLocationList(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  const [locationList, setLocationList] = useState([]);
  const [location, setLocation] = useState('Australia');

  const values = { locationList, location, setLocation };


  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    if (cart.length === 0) {
      setCart([{ ...item, quantity: 1 }]);
      return;
    }
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem => cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  }

  const removeFromCart = (item) => {
    if (cart.length === 0) {
      return;
    }
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      if (existingItem.quantity > 1) {
        setCart(cart.map(cartItem => cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem));
      } else {
        setCart(cart.filter(cartItem => cartItem.id !== item.id));
      }
    }
  }
  const clearCartItem = (item) => {
    if (cart.length === 0) {
      return;
    }
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.filter(cartItem => cartItem.id !== item.id));
    }
  }

  const clearCart = () => {
    setCart([]);
  }

  const hasCartItem = (item) => {
    if (cart.length === 0) {
      return false;
    }
    return cart.some(cartItem => cartItem.id === item.id);
  }

  const getCartItemQuantity = (item) => {
    if (cart.length === 0) {
      return 0;
    }
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    return existingItem ? existingItem.quantity : 0;
  }

  const cartValues = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    clearCartItem,
    hasCartItem,
    getCartItemQuantity,
  }
  return (
    <BrowserRouter>
      <MyContext.Provider value={{ values, cartValues }}>
        <Header />

        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/cat" exact={true} element={<Listing />} />
          <Route path='/products/:id' exact={true} element={<ProductDetails />} />
          <Route path='/cart' exact={true} element={<Cart />} />
          <Route path="/checkout" exact={true} element={<Checkout />} />
        </Routes>

        <Footer />
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };