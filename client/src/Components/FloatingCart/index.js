import { Link } from 'react-router-dom';
import EmptyCartIcon from '../EmptyCartIcon';

const FloatingCart = () => {

    return (
        <div className="floating-cart">
            <div className="dropdown-wrapper">
                <div className="cart-empty">
                    <EmptyCartIcon />
                    <div className="emptyCartText">
                        No products in the cart.
                    </div>

                </div>

                <div className="cart-content">
                    <div className='buttons d-flex flex-column'>
                        <Link to="/cart" className="btn view-cart btn-primary">
                            View Cart
                        </Link>
                        <Link to="/checkout" className="btn checkout btn-primary">
                            Checkout
                        </Link>

                    </div>
                </div>



                <div className="cart-notice">
                    We reduce shipping prices to only $2.49!
                </div>
            </div>
        </div>
    )
}

export default FloatingCart;