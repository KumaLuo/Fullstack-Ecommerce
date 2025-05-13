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
  const cartItems = [
    {
      id: 1,
      name: "All Natural Italian-Style Chicken Meatballs",
      image: ["https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg",
        "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-47.jpg",
        "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35.jpg"
      ],
      price: 7.25,
      quantity: 1,
    },
    {
      id: 2,
      name: "Field Roast Chao Cheese Creamy Original",
      image: ["https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-46.jpg",
        "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-46.jpg"
      ],
      price: 19.5,
      quantity: 2,
    },
    {
      id: 3,
      name: "Blue Diamond Almonds Lightly Salted",
      image: ["https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-59.jpg",
        "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-33.jpg"
      ],
      price: 10.58,
      quantity: 3,
    },
    {
      id: 4,
      name: "Nestle Original Coffee-Mate Coffee Creamer",
      image: ["https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-32.jpg",
        "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-27.jpg",
        "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image4-1.jpg"
      ],
      price: 11.99,
      quantity: 4,
    },
  ];

  const [cart, setCart] = useState(cartItems);

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem => cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  }

  const removeFromCart = (item) => {
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
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.filter(cartItem => cartItem.id !== item.id));
    }
  }

  const clearCart = () => {
    setCart([]);
  }

  const hasCartItem = (item) => {
    return cart.some(cartItem => cartItem.id === item.id);
  }

  const getCartItemQuantity = (item) => {
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
        </Routes>

        <Footer />
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };