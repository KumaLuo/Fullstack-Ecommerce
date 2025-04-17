import React, { useState } from 'react'
import { FaMinus, FaPlus, FaHeart, FaRegHeart } from "react-icons/fa";
import { TbArrowsUpDown } from "react-icons/tb";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';


const ProductInfo = ({ product }) => {

    const [quantity, setQuantity] = useState(1);
    const [inWhishlist, setInWishlist] = useState(false);

    const minusQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }
    const plusQuantity = () => {
        if (quantity < product.stock) {
            setQuantity(quantity + 1);
        }
    }

    const handleWhishlist = () => {
        setInWishlist(!inWhishlist);
    }

    return (
        <div className='productInfo'>
            <div className="Price">
                {product.oldPrice && <span className="oldPrice">${product.oldPrice}</span>}
                <span className="price">${product.price}</span>
            </div>

            {product.stock > 0 ? (
                <span className="success">In Stock</span>
            ) : (
                <span className="text-danger">Out of Stock</span>
            )}

            <p className='description'>{product.description}</p>

            <div className='product-quantity d-flex align-items-center'>
                <Button className='minus' onClick={minusQuantity}><FaMinus /></Button>
                <input type="text" min="1" max={product.stock} defaultValue="1" readOnly value={quantity} />
                <Button className='plus' onClick={plusQuantity}><FaPlus /></Button>
                <Button className='add-to-cart'>Add to Cart</Button>
            </div>

            <div className='product-action align-items-center d-flex'>
                {inWhishlist ? <Button className='wishlist' onClick={handleWhishlist}><FaHeart />Remove from Wishlist</Button>
                    : <Button className='wishlist' onClick={handleWhishlist}><FaRegHeart />Add to Wishlist</Button>}
                <Button className='compare'><TbArrowsUpDown />Compare</Button>
            </div>

            <div className='checklist'>
                <ul>
                    <li>Type: {product.type}</li>
                    <li>MFG: {product.MFG}</li>
                    <li>LIFE: {product.LIFE}</li>
                </ul>
            </div>

            <div className='product-tags d-flex flex-column'>
                <span>
                    Categories: {product.category !== undefined && product.category.map((cat, index) => {
                        return (
                            <Link to={`/category/${cat}`} key={index}>{cat}</Link>
                        )
                    })}
                </span>
                <span>Tags: {product.tags !== undefined && product.tags.map((tag, index) => {
                    return (
                        <Link to={`/tag/${tag}`} key={index}>{tag}</Link>
                    )
                })}</span>
            </div>

        </div>
    )
}


export default ProductInfo;