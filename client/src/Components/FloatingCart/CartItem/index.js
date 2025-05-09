import { Link } from "react-router-dom";


const CartItem = ({ product }) => {
    const { id, name, image, price, quantity } = product;

    return (
        <div className="cart-item d-flex align-items-center w-100">
            <div className="cart-item-image w-25" style={{ minWidth: "25%" }}>
                <img className="w-100" src={image[0]} alt={name} />
            </div>
            <div className="cart-item-details">
                <Link to={`/products/${id}`} className="cart-item-name">
                    {name}
                </Link>
                <p>{quantity + " "} x<strong className="ml-1">${price.toFixed(2)}</strong></p>
            </div>
            <div className="remove-item">

            </div>
        </div>
    );
}

export default CartItem;