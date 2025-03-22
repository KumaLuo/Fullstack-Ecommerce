import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Home from './Pages/Home';
import Header from './Components/Header';
import Navigation from './Components/Navigation';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Navigation/>

      <Routes>
        <Route path="/" exact={true} element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
