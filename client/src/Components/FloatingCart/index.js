import { Link } from 'react-router-dom';
import EmptyCartIcon from '../EmptyCartIcon';
import CartItem from './CartItem';
import { useContext } from 'react';
import { MyContext } from '../../App';

const FloatingCart = () => {

    const context = useContext(MyContext);
    const cartItems = context.cartValues.cart;

    const totalPrice = cartItems.reduce((acc, item) => {
        return acc + item.price * item.quantity;
    }
        , 0);

    return (
        <div className="floating-cart">
            <div className="dropdown-wrapper">
                {cartItems.length === 0 && (
                    <div className="cart-empty">
                        <EmptyCartIcon />
                        <div className="emptyCartText">
                            No products in the cart.
                        </div>

                    </div>)}

                {cartItems.length > 0 && (
                    <div className="cart-content">

                        <div className="cart-items">
                            <ul className="cart-list">
                                {cartItems.map((item) => (
                                    <li key={item.id} className="d-flex align-items-center">
                                        <CartItem product={item} />
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className='total d-flex align-items-center justify-content-space-between'>
                            <strong>Total:</strong>
                            <span className="total-price ml-auto">
                                ${totalPrice.toFixed(2)}
                            </span>
                        </div>

                        <div className='buttons d-flex flex-column'>
                            <Link to="/cart" className="btn view-cart btn-primary">
                                View Cart
                            </Link>
                            <Link to="/checkout" className="btn checkout btn-primary">
                                Checkout
                            </Link>

                        </div>
                    </div>)}

                <div className="cart-notice">
                    We reduce shipping prices to only $2.49!
                </div>
            </div>
        </div>
    )
}

export default FloatingCart;