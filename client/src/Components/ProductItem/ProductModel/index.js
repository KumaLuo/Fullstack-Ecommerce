
import React from 'react'
import { MdClose } from "react-icons/md";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ProductZoom from '../../ProductZoom';
import ProductInfo from '../../ProductInfo';
import ProductHeader from '../../ProductHeader';


const ProductModel = ({ toggleModal, product }) => {

    return (
        <>
            <Dialog open={true} onClose={toggleModal} className="productModel"
                onMouseDown={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}>


                <div className='productModelwrapper'>
                    <ProductHeader product={product} />


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