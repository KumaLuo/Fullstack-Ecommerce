import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Home from './Pages/Home';
import Header from './Components/Header';
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import Footer from './Components/Footer';
import Listing from './Pages/Listing';

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
  return (
    <BrowserRouter>
      <MyContext.Provider value={{ values }}>
        <Header />

        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/cat/:id" exact={true} element={<Listing />} />
        </Routes>

        <Footer />
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };