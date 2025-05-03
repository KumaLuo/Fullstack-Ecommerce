import logo from '../../assets/images/bacola-logo.png';
import { Link } from 'react-router-dom';
import CountryDropdown from './CountryDropdown';
import SearchBar from './SearchBar';
import Button from '@mui/material/Button';
import { FiUser } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import { useContext } from 'react';
import { MyContext } from '../../App';
import Navigation from '../Navigation';
import Switchers from './Switchers';
import SwiperTextBanner from './SwiperTextBanner';
import FloatingCart from '../FloatingCart';


const Header = () => {

    const context = useContext(MyContext);

    return (
        <>
            <div className="headerwrapper">
                <div className="top-strip bg-blue">
                    <div className="container">
                        <p className="mb-0 mt-0 text-center">Due to the <b> COVID 19 </b>  epidemic,
                            orders maybe processed with a slight delay</p>
                    </div>
                </div>

                <div className="header-top bg-white">
                    <div className="container align-items-center d-flex justify-content-between">
                        <div className='column-left d-flex align-items-center justify-content-start'>
                            <nav>
                                <ul className="align-items-center list-inline mb-0">
                                    <li className='list-inline-item'><Link to="/about">About Us</Link></li>
                                    <li className='list-inline-item'><Link to="/shop">My Account</Link></li>
                                    <li className='list-inline-item'><Link to="/blog">Wishlist</Link></li>
                                    <li className='list-inline-item'><Link to="/contact">Order Tracking</Link></li>
                                </ul>
                            </nav>
                        </div>

                        <div className='column-center d-flex align-items-center justify-content-center flex-grow-1'>
                            <SwiperTextBanner />
                        </div>

                        <div className='column-right d-flex align-items-center justify-content-end ml-3'>
                            <div className='text-content pr-2'>
                                Need Help? Call Us: <a href="tel:+61112345678">+61 1 12345678</a>
                            </div>

                            <Switchers />
                        </div>


                    </div>
                </div>

                <header className="header">
                    <div className="container">
                        <div className="row">

                            <div className="logowrapper d-flex align-items-center col-sm-2">
                                <Link to="/"> <img src={logo} alt="Logo" /> </Link>
                            </div>

                            <div className="col-sm-10 d-flex align-items-center part2">


                                {context.values.locationList.length !== 0 && <CountryDropdown />}

                                <SearchBar />

                                <div className="part3 d-flex align-items-center ml-auto">
                                    <Button className='user-icon mr-3'><FiUser /></Button>

                                    <div className="cartTab ml-auto d-flex align-items-center">
                                        <span className='price'>$0.00</span>
                                        <div className="position-relative ml-3">
                                            <Button className='user-icon'><IoBagOutline /></Button>
                                            <span className="count d-flex align-items-center justify-content-center">0</span>
                                            <FloatingCart />
                                        </div>
                                    </div>

                                </div>

                            </div>


                        </div>
                    </div>
                </header>

                <Navigation />
            </div>
        </>
    );
};

export default Header;