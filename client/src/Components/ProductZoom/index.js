import React, { useRef } from 'react';
import Slider from "react-slick";
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';


const ProductZoom = ({ product }) => {
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

    const goto = (index) => {
        zoomSliderBig.current.slickGoTo(index);
        zoomSlider.current.slickGoTo(index);
    }


    return (
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
    )
}

export default ProductZoom