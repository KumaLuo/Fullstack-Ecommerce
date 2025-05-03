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

                <div className="cart-notice">
                    We reduce shipping prices to only $2.49!
                </div>
            </div>
        </div>
    )
}

export default FloatingCart;