import HomeBanner from "../../Components/HomeBanner";
import Button from '@mui/material/Button';
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import Slider from "react-slick";
import ProductItem from "../../Components/ProductItem";
import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import {Navigation} from 'swiper/modules';

const Home = () => {

  const products = [
    {
      id: 1,
      name: "All Natural Italian-Style Chicken Meatballs",
      image: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg",
      discount: 20,
      recommended: true,
      organic: true,
      stock: 10,
      rating: 4.5,
      oldPrice: 30,
      price: 24,
    },
    {
      id: 2,
      name: "Field Roast Chao Cheese Creamy Original",
      image: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-46-346x310.jpg",
      discount: 19,
      recommended: false,
      organic: true,
      stock: 0,
      rating: 4.5,
      oldPrice: 24,
      price: 19.5,
    },
    {
      id: 3,
      name: "All Natural Italian-Style Chicken Meatballs",
      image: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg",
      discount: 20,
      recommended: true,
      organic: false,
      stock: 10,
      rating: 4.5,
      oldPrice: 30,
      price: 24,
    },
    {
      id: 4,
      name: "All Natural Italian-Style Chicken Meatballs",
      image: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg",
      discount: 20,
      recommended: true,
      organic: false,
      stock: 10,
      rating: 4.5,
      oldPrice: 30,
      price: 24,
    },
    {
      id: 5,
      name: "All Natural Italian-Style Chicken Meatballs",
      image: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg",
      discount: 20,
      recommended: true,
      organic: true,
      stock: 10,
      rating: 4.5,
      oldPrice: 30,
      price: 24,
    },
    {
      id: 6,
      name: "Field Roast Chao Cheese Creamy Original",
      image: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-46-346x310.jpg",
      discount: 19,
      recommended: false,
      organic: true,
      stock: 0,
      rating: 4.5,
      oldPrice: 24,
      price: 19.5,
    },
    {
      id: 7,
      name: "All Natural Italian-Style Chicken Meatballs",
      image: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg",
      discount: 20,
      recommended: true,
      organic: false,
      stock: 10,
      rating: 4.5,
      oldPrice: 30,
      price: 24,
    },
    {
      id: 8,
      name: "All Natural Italian-Style Chicken Meatballs",
      image: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg",
      discount: 20,
      recommended: true,
      organic: false,
      stock: 10,
      rating: 4.5,
      oldPrice: 30,
      price: 24,
    },]

  var productSliderOptions = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };


  return (
    <>
      <HomeBanner />

      <section className="homeCat">
        <div className="container">

        </div>
      </section>
      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="banner mb-5">
                <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/banner-box.jpg" alt="product"
                  className="cursor w-100" />
              </div>
              <div className="banner">
                <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/bacola-banner-04.jpg" alt="product"
                  className="cursor w-100" />
              </div>


            </div>

            <div className="col-md-9 productRow">
              <div className="d-flex align-items-center mb-4">
                <div className="info w-75">
                  <h3 className="mb-0 hd">BEST SELLERS</h3>
                  <p className="text-light text-sml mb-0">Do not miss the current offers until the end of March.</p>
                </div>
                <Button className="viewAllbtn ml-auto">View All <IoIosArrowRoundForward /></Button>
              </div>

              <div className="productSlider w-100 mb-4">
                <Slider {...productSliderOptions}>

                  {products.map((product) => (
                    <ProductItem key={product.id} product={product} />
                  ))}
                </Slider>
              </div>

              <Link to="/" className="banner-link">
                <div className="banner-health mb-4">
                  <div className="banner-text">
                    <p className="subheading">Always Taking Care</p>
                    <h3 className="heading">
                      In store or online your health &amp; safety is our top priority.
                    </h3>
                  </div>
                  <div className="banner-img">
                    <img src="https://klbtheme.com/bacola/wp-content/plugins/bacola-core/elementor/images/banner-box2.jpg" alt="product" />
                  </div>
                </div>
              </Link>


              <div className="d-flex align-items-center mb-4">
                <div className="info w-75">
                  <h3 className="mb-0 hd">NEW PRODUCTS</h3>
                  <p className="text-light text-sml mb-0">New products with updated stocks.</p>
                </div>
                <Button className="viewAllbtn ml-auto">View All <IoIosArrowRoundForward /></Button>
              </div>

              <div className="cardsRow w-100 mb-4 d-flex flex-wrap align-items-center">
                {products.map((product) => (
                  <div className="grid-item align-items-center" key={product.id}>
                    <ProductItem className="show" product={product} />
                    <ProductItem className="shadow" product={product} />
                  </div>
                ))}
              </div>





              {/* <div className="productRow w-100">
                <Swiper
                  spaceBetween={30}
                  slidesPerView={4}
                  pagination={{
                    clickable: true,
                  }}
                  modules={['navigation']}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="productItem">
                      <div className="imgWrap">
                        <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg" alt="product" className="w-100" />
                      </div>

                      <div className="productInfo">
                        <div className="productName mb-1">
                          <Link to="/product/1">All Natural Italian-Style Chicken Meatballs</Link>
                        </div>

                        <span className="success">In Stock</span>

                        <div className="productRating d-flex align-items-center mt-2">
                          <Rating
                            name="read-only"
                            value={4.5}
                            precision={0.5}
                            readOnly
                            size="small"
                          />
                        </div>

                        <div className="productPrice mt-2">
                          <span className="oldPrice mr-2">$30.00</span>
                          <span className="price">$25.00</span>
                        </div>

                        <Button className="addToCartBtn mt-2 w-100">Add to Cart</Button>

                      </div>

                    </div>
                  </SwiperSlide>

                </Swiper>

              </div> */}


            </div>
          </div>
        </div >
      </section >
    </>
  );
}

export default Home;