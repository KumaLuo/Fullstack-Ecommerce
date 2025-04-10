
import React, { useState, useRef } from 'react'
import { MdClose } from "react-icons/md";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { FaMinus, FaPlus, FaHeart, FaRegHeart } from "react-icons/fa";
import { TbArrowsUpDown } from "react-icons/tb";
import Slider from "react-slick";
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import { Link } from 'react-router-dom';


const ProductModel = ({ toggleModal, product }) => {

    const zoomSliderBig = useRef();
    const zoomSlider = useRef();


    const setting2 = {
        dots: false,
        infinite: false,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: false,
    }
    const settings = {
        dots: false,
        infinite: false,
        speed: 700,
        slidesToShow: 5,
        slidesToScroll: 1,
        fade: false,
        arrows: false,
    }




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

    const goto = (index) => {
        zoomSliderBig.current.slickGoTo(index);
        zoomSlider.current.slickGoTo(index);
    }



    return (
        <>
            <Dialog open={true} onClose={toggleModal} className="productModel"
                onMouseDown={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}>

                <div className='productModelwrapper'>
                    <div className='product-header'>
                        <h1 className='product-title'>{product.name}</h1>

                        <div className='product-rating d-flex align-items-center'>
                            <div >
                                <span className='brands mr-1'>Brands: </span>
                                <span>{product.brands}</span>
                            </div>

                            <div className='rating'>
                                <Rating
                                    name="read-only"
                                    value={product.rating}
                                    precision={0.5}
                                    readOnly
                                    size="small"
                                    sx={{
                                        fontSize: "11px",
                                    }}
                                    emptyIcon={<StarIcon style={{ opacity: 0.5, color: "#ccc", fontSize: "11px" }} />}
                                />
                                <span className='rating-count'>{product.reviewCount} REVIEW</span>


                            </div>

                            <div>
                                <span className='sku'>SKU: </span>
                                <span>{product.SKU}</span>
                            </div>

                        </div>

                    </div>

                    <div className='product-wrapper d-flex'>
                        <div className='product-sliders'>
                            <div className='productZoom align-items-center'>
                                <Slider {...setting2} className="zoomSliderBig" ref={zoomSliderBig}
                                    beforeChange={(current, next) => {
                                        zoomSlider.current.slickGoTo(next);
                                    }}>
                                    {product.image !== undefined && product.image.map((imgUrl, index) => {
                                        return (
                                            <div className='item'>
                                                <InnerImageZoom
                                                    zoomtype="hover" zoomScale={1}
                                                    src={imgUrl}
                                                />
                                            </div>
                                        )
                                    })}
                                </Slider>

                                <Slider {...settings} className="zoomSlider" ref={zoomSlider}>
                                    {product.image !== undefined && product.image.map((imgUrl, index) => {
                                        return (
                                            <div className='item'>
                                                <img src={imgUrl} alt="product" className='w-100'
                                                    onClick={() => goto(index)} />
                                            </div>
                                        )
                                    })}
                                </Slider>



                            </div>

                        </div>

                        <div className='product-details'>

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

                    </div>

                </div>

                <Button className="closeBtn" onClick={toggleModal}> <MdClose /> </Button>

            </Dialog>
        </>
    )
}

export default ProductModel