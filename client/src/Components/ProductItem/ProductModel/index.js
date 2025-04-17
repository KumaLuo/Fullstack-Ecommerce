
import React from 'react'
import { MdClose } from "react-icons/md";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import ProductZoom from '../../ProductZoom';
import ProductInfo from '../../ProductInfo';


const ProductModel = ({ toggleModal, product }) => {

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

                        <ProductZoom product={product} />

                        <div className='product-details col-md-7'>
                            <ProductInfo product={product} />
                        </div>
                    </div>
                </div>

                <Button className="closeBtn" onClick={toggleModal}> <MdClose /> </Button>

            </Dialog>
        </>
    )
}

export default ProductModel