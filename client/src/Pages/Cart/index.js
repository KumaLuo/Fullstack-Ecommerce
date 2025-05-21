import React, { useEffect, useContext, useState } from 'react';
import { MyContext } from '../../App';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { GoTrash } from "react-icons/go";
import EmptyCartIcon from '../../Components/EmptyCartIcon';

const Cart = () => {

    const context = useContext(MyContext);

    const cartItems = context.cartValues.cart;


    const totalPrice = cartItems ? cartItems.reduce((acc, item) => {
        return acc + (item.price * item.quantity);
    }
        , 0) : 0;

    const totalItems = cartItems ? cartItems.reduce((acc, item) => {
        return acc + item.quantity;
    }
        , 0) : 0;


    const [formShow, setFormShow] = useState(false);
    const [shipping, setShipping] = useState(totalPrice >= 50 ? "free" : "charge");

    const calculateTotal = () => {
        if (shipping === "free") {
            return totalPrice.toFixed(2);
        } else if (shipping === "charge") {
            return (totalPrice + 5).toFixed(2);
        } else {
            return totalPrice.toFixed(2);
        }
    }

    const handleShippingChange = (event) => {
        setShipping(event.target.value);
    }

    const handleChangeAddress = (e) => {
        e.preventDefault();
        setFormShow(!formShow);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }
        , []);

    useEffect(() => {
        if (shipping === "pickup") {
            return;
        }
        if (totalPrice >= 50) {
            setShipping("free");
        } else if (shipping === "free") {
            setShipping("charge");
        }
    }
        , [totalPrice, shipping]);


    return (
        <section className="cartPage">
            <div className="container">
                <nav></nav>

                <div className="cartwrapper w-100 align-items-center d-flex flex-column">
                    {cartItems.length === 0 && <div className="emptyCart align-items-center text-center">
                        <EmptyCartIcon />

                        <div className="emptyCartText">
                            Your cart is currently empty.
                        </div>

                        <Link to="/cat">
                            <button className="return-to-shop btn btn-primary">
                                Continue Shopping
                            </button>
                        </Link>

                    </div>}

                    {cartItems.length > 0 && <div className='contain-items w-100'>
                        <div className='header-text col-8'>
                            <h2 className='hd'>Your Cart</h2>
                            <div className='clearall d-flex align-items-center'>
                                <p>There are <b>{totalItems}</b> products in your cart</p>
                                <Button className='ml-auto' disableRipple={true} onClick={context.cartValues.clearCart}><GoTrash /> Clear Cart</Button>
                            </div>
                        </div>

                        <div className='cart-items d-flex flex-row w-100'>
                            <div className='cart-items-list col-8'>

                                {totalPrice < 50 && <div className='free-shipping'>
                                    <div className='free-shipping-notice'>
                                        Add <span className='free-shipping-amount'>${50 - totalPrice.toFixed(2)}</span> more to your cart and get free shipping!
                                    </div>
                                    <div className='free-shipping-bar' style={{ backgroundColor: '#f0f0f0', width: '100%', height: '10px', borderRadius: '5px', position: 'relative' }}>
                                        <div className='free-shipping-bar-fill' style={{ backgroundColor: '#2bbef9', width: `${(totalPrice / 50) * 100}%`, height: '10px', borderRadius: '5px', position: 'absolute' }}></div>
                                    </div>
                                </div>}

                                {totalPrice >= 50 && <div className='free-shipping'>
                                    <div className='free-shipping-notice'>
                                        You have qualified for free shipping!
                                    </div>
                                    <div className='free-shipping-bar' style={{ backgroundColor: '#f0f0f0', width: '100%', height: '10px', borderRadius: '5px', position: 'relative' }}>
                                        <div className='free-shipping-bar-fill' style={{ backgroundColor: '#2bbef9', width: '100%', height: '10px', borderRadius: '5px', position: 'absolute' }}></div>
                                    </div>
                                </div>}

                                <div className='cart-items-list'>
                                    <table className='cart-table table'>
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Total</th>
                                                <th>Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cartItems.map((item, index) => (
                                                <tr key={index}>
                                                    <td>
                                                        <div className='cart-item d-flex align-items-center'>
                                                            <img src={item.image[0]} alt={item.name} />
                                                            <div className='cart-item-details'>
                                                                <h3>{item.name}</h3>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td style={{ textAlign: "center" }}>${item.price.toFixed(2)}</td>
                                                    <td>
                                                        <div className='quantity d-flex align-items-center justify-content-center'>
                                                            <button onClick={() => context.cartValues.removeFromCart(item)}>-</button>
                                                            <span>{item.quantity}</span>
                                                            <button onClick={() => context.cartValues.addToCart(item)}>+</button>
                                                        </div>
                                                    </td>
                                                    <td style={{ fontWeight: "600" }}>${(item.price * item.quantity).toFixed(2)}</td>
                                                    <td><Button onClick={() => context.cartValues.clearCartItem(item)}><GoTrash /></Button></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                <div className='cart-buttons d-flex'>
                                    <Link to="/cat">
                                        <Button className='btn btn-primary continue-shopping'>Continue Shopping</Button>
                                    </Link>
                                    <Button className='btn btn-primary clear-cart ml-auto' onClick={context.cartValues.clearCart}>Clear Cart</Button>
                                </div>
                            </div>

                            <div className='cart-summary col-4'>
                                <div className='cart-total'>
                                    <h2> CART TOTALS</h2>
                                </div>

                                <table className='cart-summary-table w-100'>
                                    <tbody>
                                        <tr>
                                            <th>Subtotal</th>
                                            <td >${totalPrice.toFixed(2)}</td>
                                        </tr>
                                        <tr>
                                            <th>Shipping</th>
                                            <td style={{ paddingTop: "15px" }}>
                                                <ul>
                                                    {totalPrice >= 50 && <li><input type="radio" name="shipping" value="free" checked={shipping === 'free'} onChange={handleShippingChange} /> Free shipping</li>}
                                                    {totalPrice < 50 && <li><input type="radio" name="shipping" value="charge" checked={shipping === 'charge'} onChange={handleShippingChange} /> Flat rate: $5.00</li>}

                                                    <li><input type="radio" name="shipping" value="pickup" checked={shipping === 'pickup'} onChange={handleShippingChange} /> Local pickup</li>
                                                </ul>
                                                <p>Shipping to <strong></strong> .</p>
                                                <Link to="/" onClick={handleChangeAddress} className='change-address'>
                                                    Change address
                                                </Link>

                                                <form className='address-form'>
                                                    <div className='form-group'>
                                                        <label htmlFor="address">Address</label>
                                                        <input type="text" className='form-control' id="address" placeholder='Enter your address' />
                                                    </div>
                                                    <div className='form-group'>
                                                        <label htmlFor="city">City</label>
                                                        <input type="text" className='form-control' id="city" placeholder='Enter your city' />
                                                    </div>
                                                    <div className='form-group'>
                                                        <label htmlFor="zip">Zip Code</label>
                                                        <input type="text" className='form-control' id="zip" placeholder='Enter your zip code' />
                                                    </div>
                                                    <div className='form-group'>
                                                        <label htmlFor="country">Country</label>
                                                        <input type="text" className='form-control' id="country" placeholder='Enter your country' />
                                                    </div>
                                                    <div className='form-group'>
                                                        <label htmlFor="phone">Phone</label>
                                                        <input type="text" className='form-control' id="phone" placeholder='Enter your phone number' />
                                                    </div>
                                                    <div className='form-group'>
                                                        <label htmlFor="email">Email</label>
                                                        <input type="email" className='form-control' id="email" placeholder='Enter your email' />
                                                    </div>
                                                    <div className='form-group'>
                                                        <label htmlFor="notes">Notes</label>
                                                        <textarea className='form-control' id="notes" placeholder='Enter any notes or special instructions'></textarea>
                                                    </div>
                                                    <Button type="submit" className='btn btn-primary'>Save Address</Button>
                                                </form>

                                            </td>
                                        </tr>
                                        <tr className='total'>
                                            <th style={{ paddingTop: "20px" }}>Total</th>
                                            <td style={{ paddingTop: "20px" }}><strong style={{ fontSize: "20px" }}>${calculateTotal()}</strong></td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div className='align-items-center d-flex justify-content-center' style={{ paddingTop: "15px" }}>
                                    <Link to="/checkout" className='w-100'>
                                        <Button className='btn btn-primary checkout w-100'>Proceed to Checkout</Button>
                                    </Link>
                                </div>
                            </div>

                        </div>




                    </div>}
                </div>
            </div>
        </section>
    );
}

export default Cart;