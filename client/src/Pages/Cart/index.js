import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { GoTrash } from "react-icons/go";
import EmptyCartIcon from '../../Components/EmptyCartIcon';

const Cart = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }
        , []);


    return (
        <section className="cartPage">
            <div className="container">
                <nav></nav>

                <div className="cartwrapper w-100 align-items-center d-flex flex-column">
                    <div className="emptyCart align-items-center text-center">
                        <EmptyCartIcon />

                        <div className="emptyCartText">
                            Your cart is currently empty.
                        </div>

                        <Link to="/cat">
                            <button className="return-to-shop btn btn-primary">
                                Continue Shopping
                            </button>
                        </Link>

                    </div>
                    <div className='contain-items w-100'>
                        <div className='header-text col-lg-8'>
                            <h2 className='hd'>Your Cart</h2>
                            <div className='clearall d-flex align-items-center'>
                                <p>There are <b>3</b> products in your cart</p>
                                <Button className='ml-auto' disableRipple={true}><GoTrash /> Clear Cart</Button>

                            </div>
                        </div>

                        <div className='cart-items'>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cart;