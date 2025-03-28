import React from "react";
import Slider from "react-slick";


const HomeBanner = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
    };


    return (
        <div className="homeBannerSection">
            <Slider {...settings}>
                <div className="item">
                    <img src="https://cmsimages.shoppersstop.com/SS_EOSS_Top_Carousel_Web_88323fe956/SS_EOSS_Top_Carousel_Web_88323fe956.jpg" alt="Banner 1" className="w-100" />
                </div>
                <div className="item">
                    <img src="https://cmsimages.shoppersstop.com/SS_25_pvt_brands_main_kv_web_e55ed30937/SS_25_pvt_brands_main_kv_web_e55ed30937.png" alt="Banner 2" className="w-100" />
                </div>
                <div className="item">
                    <img src="https://cmsimages.shoppersstop.com/Watches_web_79f94fa3c0/Watches_web_79f94fa3c0.png" alt="Banner 3" className="w-100" />
                </div>
                <div className="item">
                    <img src="https://cmsimages.shoppersstop.com/Women_Indian_web_0fe65b5fe0/Women_Indian_web_0fe65b5fe0.png" alt="Banner 4" className="w-100" />
                </div>
            </Slider>

        </div>
    )
};

export default HomeBanner;