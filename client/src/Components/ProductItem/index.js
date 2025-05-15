import { React, useContext, useState } from 'react';
import { MyContext } from '../../App';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import { SlSizeFullscreen } from "react-icons/sl";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import ProductModel from './ProductModel';


const ProductItem = (props) => {

    const context = useContext(MyContext);

    const product = props.product;

    const className = props.className ? props.className : '';


    const [likedMap, setLikedMap] = useState({});
    const toggleLike = (id) => {
        setLikedMap(prev => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const [isOpenProductModel, setIsOpenProductModel] = useState(false);

    const viewProductDetails = () => {
        setIsOpenProductModel(prev => !prev);
    }

    return (
        <>
            {className === "one" ? (
                <div className={`productItem ${className} d-flex align-items-center`}>
                    <div className="imgWrap">
                        <img src={product.image[0]} alt={product.name} className="w-100" />
                        <div className="badge-container">
                            {product.discount && <span className="badge badge-primary">-{product.discount}%</span>}
                            {product.recommended && <span className="badge badge-recommend">Recommended</span>}
                            {product.organic && <span className="badge badge-organic">Organic</span>}
                        </div>

                        <div className="actionIcons">
                            <Button className='fullscreen' onClick={viewProductDetails}><SlSizeFullscreen /></Button>
                        </div>
                    </div>
                    <div className="productInfo">
                        <div className="productName mb-1">
                            <Link to={`/products/${product.id}`}>{product.name}</Link>
                        </div>

                        {product.stock > 0 ? (
                            <span className="success">In Stock</span>
                        ) : (
                            <span className="text-danger">Out of Stock</span>
                        )}

                        <div className="productRating d-flex align-items-center mt-2">
                            <Rating
                                name="read-only"
                                value={product.rating}
                                precision={0.5}
                                readOnly
                                size="small"
                            />
                        </div>

                        <div className="productPrice mt-2">
                            {product.oldPrice && <span className="oldPrice mr-2">${product.oldPrice}</span>}
                            <span className="price">${product.price}</span>
                        </div>

                        {product.stock > 0 ? (
                            context.cartValues.hasCartItem(product) ? (
                                <div className="cart-count d-flex align-items-center flex-row">
                                    <Button className="minus" onClick={context.cartValues.removeFromCart.bind(this, product)}>-</Button>
                                    <input type="text" min="1" max={product.stock} defaultValue="1" readOnly value={context.cartValues.getCartItemQuantity(product)} />
                                    <Button className="plus" onClick={context.cartValues.addToCart.bind(this, product)}>+</Button>
                                </div>
                            ) : (
                                <Button className="addToCartBtn mt-2 w-100" onClick={context.cartValues.addToCart.bind(this, product)}>Add to Cart</Button>)
                        ) : (
                            <Link to="" className='readmore'><Button className="addToCartBtn mt-2 w-100">Read More</Button></Link>
                        )}

                    </div>
                </div>
            ) : (
                <div className={`productItem ${className}`}>
                    <div className="imgWrap">
                        <img src={product.image[0]} alt={product.name} className="w-100" />
                        <div className="badge-container">
                            {product.discount && <span className="badge badge-primary">-{product.discount}%</span>}
                            {product.recommended && <span className="badge badge-recommend">Recommended</span>}
                            {product.organic && <span className="badge badge-organic">Organic</span>}
                        </div>

                        <div className="actionIcons">
                            <Button className='fullscreen' onClick={viewProductDetails}><SlSizeFullscreen /></Button>
                            {likedMap[product.id] ? (
                                <Button className="likeIcon like" onClick={() => toggleLike(product.id)} ><FaHeart /></Button>
                            ) : (
                                <Button className="likeIcon unlike" onClick={() => toggleLike(product.id)} ><FaRegHeart /></Button>
                            )}
                        </div>

                    </div>
                    <div className="productInfo w-100">
                        <div className="productName mb-1">
                            <Link to={`/products/${product.id}`}>{product.name}</Link>
                        </div>

                        {product.stock > 0 ? (
                            <span className="success">In Stock</span>
                        ) : (
                            <span className="text-danger">Out of Stock</span>
                        )}

                        <div className="productRating d-flex align-items-center mt-2">
                            <Rating
                                name="read-only"
                                value={product.rating}
                                precision={0.5}
                                readOnly
                                size="small"
                            />
                        </div>

                        <div className="productPrice mt-2">
                            {product.oldPrice && <span className="oldPrice mr-2">${product.oldPrice}</span>}
                            <span className="price">${product.price}</span>
                        </div>

                        {product.stock > 0 ? (
                            context.cartValues.hasCartItem(product) ? (
                                <div className="cart-count d-flex align-items-center flex-row">
                                    <Button className="minus" onClick={context.cartValues.removeFromCart.bind(this, product)}>-</Button>
                                    <input type="text" min="1" max={product.stock} defaultValue="1" readOnly value={context.cartValues.getCartItemQuantity(product)} />
                                    <Button className="plus" onClick={context.cartValues.addToCart.bind(this, product)}>+</Button>
                                </div>
                            ) : (
                                <Button className="addToCartBtn mt-2 w-100" onClick={context.cartValues.addToCart.bind(this, product)}>Add to Cart</Button>)
                        ) : (
                            <Link to="" className='readmore'><Button className="addToCartBtn mt-2 w-100">Read More</Button></Link>
                        )}
                    </div>
                </div>
            )}

            {isOpenProductModel && <ProductModel toggleModal={viewProductDetails} product={product} />}


        </>
    );
}

export default ProductItem;
