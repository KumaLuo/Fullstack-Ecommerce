import React, { useEffect, useContext } from 'react';
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

    useEffect(() => {
        window.scrollTo(0, 0);
    }
        , []);


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

                        <div className='cart-items d-flex flex-row'>
                            <div className='cart-items-list col-8'>

                                {totalPrice < 50 && <div className='free-shipping'>
                                    <div className='free-shipping-notice'>
                                        Add <span className='free-shipping-amount'>${50 - totalPrice}</span> more to your cart and get free shipping!
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



                            </div>

                            <div className='cart-summary'>
                                <div className='cart-total'>
                                    <h2> CART TOTALS</h2>
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