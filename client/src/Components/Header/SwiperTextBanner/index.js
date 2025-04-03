import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';

const SwiperTextBanner = () => {

    const texts = [
        "Welcome to our store!",
        "Check out our latest products!",
        "Don't miss our special offers!",
        "Shop now and enjoy great discounts!"
    ];
    return (
        <div className="swiperTextBanner align-items-center d-flex justify-content-center">
            <Swiper
                direction='vertical'
                slidesPerView={1}
                loop={true}
                modules={[Autoplay]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
            >
                {texts.map((text, index) => (
                    <SwiperSlide key={index}>
                        <div className="text-slide">
                            <h6>{text}</h6>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
export default SwiperTextBanner;