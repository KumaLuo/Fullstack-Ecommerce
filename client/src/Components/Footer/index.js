import { TbTruckDelivery, TbMilk } from "react-icons/tb";
import { PiSealPercent, PiCurrencyCircleDollar } from "react-icons/pi";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";
import { IoMailOutline } from "react-icons/io5";
import Button from '@mui/material/Button';


const Footer = () => {
    return (
        <footer>
            <section className="newsletterSection mt-3 d-flex align-items-center">
                <div className="container">
                    <div className="row">

                        <div className="col-md-5">
                            <div className="newsletter">
                                <p className="mb-1 text-white" >$20 discount for your first order</p>
                                <h3 className="text-white mb-3">Join our newsletter and get...</h3>
                                <p className="text-light">Join our email subscription now to get updates on promotions and coupons.</p>

                                <form className="d-flex align-items-center justify-content-center">
                                    <IoMailOutline />
                                    <input type="email" className="form-control" placeholder="Your email address" />
                                    <Button className="btn btn-primary">Subscribe</Button>
                                </form>
                            </div>
                        </div>

                        <div className="col-md-7 align-items-end d-flex justify-content-end">
                            <div className="newsIcon">
                                <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/coupon.png" alt="product" />

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <div className="iconBoxes">
                <div className="container">
                    <div className="row iconInfo  d-flex algin-items-center">
                        <div className="col-md-3 col-sm-6 d-flex justify-content-center align-items-center">
                            <TbMilk />
                            <span>Everyday fresh products</span>
                        </div>
                        <div className="col-md-3 col-sm-6 d-flex justify-content-center align-items-center">
                            <TbTruckDelivery />
                            <span>Free delivery for order over $70</span>
                        </div>
                        <div className="col-md-3 col-sm-6 d-flex justify-content-center align-items-center">
                            <PiSealPercent />
                            <span>Daily Mega Discounts</span>
                        </div>
                        <div className="col-md-3 col-sm-6 d-flex justify-content-center align-items-center">
                            <PiCurrencyCircleDollar />
                            <span >Best price on the market</span>
                        </div>


                    </div>

                </div>
            </div>

            <div className="widgets">
                <div className="container d-flex align-items-center justify-content-center">
                    <div className="row w-100">
                        <div className="col-five">
                            <h4>FRUIT & VEGETABLES</h4>
                            <ul>
                                <li><Link>Fresh Vegetables</Link></li>
                                <li><Link>Herbs & Seasonings</Link></li>
                                <li><Link>Fresh Fruits</Link></li>
                                <li><Link>Cuts & Sprouts</Link></li>
                                <li><Link>Exotic Fruits & Veggies</Link></li>
                                <li><Link>Packaged Produce</Link></li>
                                <li><Link>Party Trays</Link></li>
                            </ul>

                        </div>

                        <div className="col-five">
                            <h4>Breakfast & Dairy</h4>
                            <ul>
                                <li><Link>Milk & Flavoured Milk</Link></li>
                                <li><Link>Butter and Margarine</Link></li>
                                <li><Link>Cheese</Link></li>
                                <li><Link>Eggs Substitutes</Link></li>
                                <li><Link>Honey</Link></li>
                                <li><Link>Marmalades</Link></li>
                                <li><Link>Sour Cream and Dips</Link></li>
                                <li><Link>Yogurt</Link></li>
                            </ul>

                        </div>

                        <div className="col-five">
                            <h4>Meat & Seafood</h4>
                            <ul>
                                <li><Link>Breakfast Sausage</Link></li>
                                <li><Link>Dinner Sausage</Link></li>
                                <li><Link>Beef</Link></li>
                                <li><Link>Chicken</Link></li>
                                <li><Link>Sliced Deli Meat</Link></li>
                                <li><Link>Shrimp</Link></li>
                                <li><Link>Wild Caught Fillets</Link></li>
                                <li><Link>Crab and Shellfish</Link></li>
                                <li><Link>Farm Raised Fillets</Link></li>
                            </ul>

                        </div>

                        <div className="col-five">
                            <h4>Beverages</h4>
                            <ul>
                                <li><Link>Water</Link></li>
                                <li><Link>Sparkling Water</Link></li>
                                <li><Link>Soda & Pop</Link></li>
                                <li><Link>Coffee</Link></li>
                                <li><Link>Milk & Plant-Based Milk</Link></li>
                                <li><Link>Tea & Kombucha</Link></li>
                                <li><Link>Drink Boxes & Pouches</Link></li>
                                <li><Link>Craft Beer</Link></li>
                                <li><Link>Wine</Link></li>
                            </ul>

                        </div>

                        <div className="col-five">
                            <h4>Breads & Bakery</h4>
                            <ul>
                                <li><Link>Milk & Flavoured Milk</Link></li>
                                <li><Link>Butter and Margarine</Link></li>
                                <li><Link>Cheese</Link></li>
                                <li><Link>Eggs Substitutes</Link></li>
                                <li><Link>Honey</Link></li>
                                <li><Link>Marmalades</Link></li>
                                <li><Link>Sour Cream and Dips</Link></li>
                                <li><Link>Yogurt</Link></li>
                            </ul>

                        </div>

                    </div>
                </div>
            </div>

            <div className="contacts">
                <div className="container d-flex align-items-ceeter justify-content-end">
                    <div className="col-left flex-grow-1 d-flex align-items-center justify-content-start">
                        <div className="phoneIcon align-items-center justify-content-center d-flex">
                            <FiPhoneCall />
                        </div>

                        <div className="phone">
                            <h6>1 12345678</h6>
                            <span>Working 8:00 - 22:00</span>
                        </div>

                    </div>

                    <div className="col-right d-flex justify-content-end align-items-center text-right">

                        <div className="comment align-items-center mr-3">
                            <h6>Download App on Mobile :</h6>
                            <span>15% discount on your first purchase</span>
                        </div>

                        <a href="https://play.google.com/store/apps" className="mr-1"><img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/google-play.png" alt="google"></img></a>
                        <a href="https://www.apple.com/app-store/"><img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/app-store.png" alt="apple"></img></a>

                        <ul className="list-inline d-flex align-items-center mb-0 ml-3">
                            <li className="list-inline-item"><a href="https://www.facebook.com/"><FaFacebookF /></a></li>
                            <li className="list-inline-item"><a href="https://twitter.com/"><FaTwitter /></a></li>
                            <li className="list-inline-item"><a href="https://www.instagram.com/"><FaInstagram /></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footerBottom">
                <div className="container d-flex align-items-center">
                    <p className="copyright mb-0">Copyright 2025 © Bacola WordPress Theme. All rights reserved. Powered by KlbTheme.</p>

                    <ul className="list-inline d-flex align-items-center mb-0 ml-auto">
                        <li className="list-inline-item"><Link>Privacy Policy</Link></li>
                        <li className="list-inline-item"><Link>Terms & Conditions</Link></li>
                        <li className="list-inline-item"><Link>Cookie</Link></li>
                    </ul>

                    <a href="#" className="ml-3"><img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/payments.jpg" alt="payment"></img></a>

                </div>
            </div>
        </footer>
    );
}

export default Footer;