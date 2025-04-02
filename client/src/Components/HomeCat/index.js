import React, { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const HomeCat = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);


    return (
        <section className="homeCat mt-3">
            <div className="container">
                <div ref={prevRef} className="custom-swiper-button-prev">
                    <IoIosArrowBack />
                </div>
                <div ref={nextRef} className="custom-swiper-button-next">
                    <IoIosArrowForward />
                </div>

                <Swiper
                    spaceBetween={20}
                    slidesPerView={8}
                    navigation={true}
                    slidePerGroup={1}
                    modules={[Navigation]}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}
                    className="mySwiper"
                    loop={true}
                >
                    <SwiperSlide>
                        <div className="catItem text-center " style={{ backgroundColor: '#fff3ff' }}>
                            <img src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-1.png" alt="" />
                            <h6>Vegetables</h6>
                            <p>72 items</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="catItem text-center" style={{ backgroundColor: '#f2fce4' }}>
                            <img src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-2.png" alt="" />
                            <h6>Strawberry</h6>
                            <p>36 items</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="catItem text-center" style={{ backgroundColor: '#fdf0ea' }}>
                            <img src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-4.png" alt="" />
                            <h6>Black plum</h6>
                            <p>123 items</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="catItem text-center" style={{ backgroundColor: '#fefceb' }}>
                            <img src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-5.png" alt="" />
                            <h6>Custard apple</h6>
                            <p>34 items</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="catItem text-center" style={{ backgroundColor: '#fdf0ea' }}>
                            <img src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-14.png" alt="" />
                            <h6>Coffee & Tea</h6>
                            <p>89 items</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="catItem text-center" style={{ backgroundColor: '#ebfcea' }}>
                            <img src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-15.png" alt="" />
                            <h6>Headphone</h6>
                            <p>87 items</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="catItem text-center" style={{ backgroundColor: '#f2fce4' }}>
                            <img src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-13.png" alt="" />
                            <h6>Cake & Milk</h6>
                            <p>26 items</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="catItem text-center" style={{ backgroundColor: '#fefceb' }}>
                            <img src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-12.png" alt="" />
                            <h6>Organic Kiwi</h6>
                            <p>28 items</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="catItem text-center" style={{ backgroundColor: '#edffec' }}>
                            <img src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-11.png" alt="" />
                            <h6>Peach</h6>
                            <p>14 items</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="catItem text-center" style={{ backgroundColor: '#fdf0ea' }}>
                            <img src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-9.png" alt="" />
                            <h6>Red Apple</h6>
                            <p>54 items</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="catItem text-center" style={{ backgroundColor: '#fff3eb' }}>
                            <img src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-3.png" alt="" />
                            <h6>Snack</h6>
                            <p>56 items</p>
                        </div>
                    </SwiperSlide>

                </Swiper>

            </div>
        </section>
    )
}

export default HomeCat;