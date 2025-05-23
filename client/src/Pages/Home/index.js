import HomeBanner from "../../Components/HomeBanner";
import HomeCat from "../../Components/HomeCat";
import Button from '@mui/material/Button';
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import Slider from "react-slick";
import ProductItem from "../../Components/ProductItem";
import { Link } from "react-router-dom";
import VerticalText from "../../Components/BannerText/vertical";
import HorizontalText from "../../Components/BannerText/horizontal";


const Home = () => {

  const products = [
    {
      id: 1,
      name: "All Natural Italian-Style Chicken Meatballs",
      image: ["https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg",
        "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-47.jpg",
        "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35.jpg"
      ],
      discount: 23,
      recommended: true,
      organic: false,
      stock: 10,
      rating: 4.5,
      oldPrice: 9.35,
      price: 7.25,
      brands: "Welch's",
      SKU: "ZU49VOR",
      reviewCount: "1",
      description: "Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent",
      type: 'Organic',
      MFG: "Jun 04.2025",
      LIFE: "30 days",
      category: ["Meats & Seafood"],
      tags: ["Meat", "Chicken", " Organic", "Natural"],
    },
    {
      id: 2,
      name: "Field Roast Chao Cheese Creamy Original",
      image: ["https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-46.jpg",
        "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-46.jpg"
      ],
      discount: 19,
      recommended: false,
      organic: true,
      stock: 0,
      rating: 5.0,
      oldPrice: 24,
      price: 19.5,
    },
    {
      id: 3,
      name: "Blue Diamond Almonds Lightly Salted",
      image: ["https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-59.jpg",
        "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-33.jpg"
      ],
      discount: 10,
      recommended: false,
      organic: true,
      stock: 10,
      rating: 4.0,
      oldPrice: 11.68,
      price: 10.58,
    },
    {
      id: 4,
      name: "Nestle Original Coffee-Mate Coffee Creamer",
      image: ["https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-32.jpg",
        "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-27.jpg",
        "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image4-1.jpg"
      ],
      discount: 15,
      recommended: false,
      organic: false,
      stock: 10,
      rating: 4.9,
      oldPrice: 13.99,
      price: 11.99,
    },
    {
      id: 5,
      name: "All Natural Italian-Style Chicken Meatballs",
      image: ["https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg",
        "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-47.jpg",
        "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35.jpg"
      ],
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
      image: ["https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-46.jpg"
      ],
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
      image: ["https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg",
        "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-47.jpg",
        "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35.jpg"
      ],
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
      image: ["https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg",
        "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-47.jpg",
        "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35.jpg"
      ],
      recommended: true,
      organic: false,
      stock: 10,
      rating: 4.5,
      oldPrice: 30,
      price: 24,
    }]

  const bannerProducts = [{
    name: "Bacola Natural Foods",
    des1: "Special Organic",
    des2: "Roats Burger",
    price: 14.99,
  },
  {
    name: "Best Bakery Products",
    des1: "Freshest Products",
    des2: "Every Hours.",
    price: 24.99,
  },
  {
    des1: "Legumes & Cereals",
    des2: "Feed your family the best",
    discount: 40,
  },
  {
    des1: "Dairy & Eggs",
    des2: "A different kind of grocery store",
    discount: 40,
  }
  ]

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

      <HomeCat />

      <section className="homeProducts">
        <div className="container">
          <div className="row">

            <div className="col-md-3">
              <div className="sticky">
                <div className="banner mb-5 cursor">
                  <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/banner-box.jpg" alt="product" />
                  <VerticalText product={bannerProducts[0]} className="banner-1" />
                </div>

                <div className="banner mb-5 cursor">
                  <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/bacola-banner-04.jpg" alt="product" />
                  <VerticalText product={bannerProducts[1]} className="banner-2" />
                </div>
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

              <Link to="/" className="promotion-link align-items-center mb-4 d-flex justify-content-center">
                <span>Super discount for you <strong>first purchase</strong></span>
                <span className="promotion-code">free25bac</span>
                <span className="promotion-btm">Use discount code in checkout!</span>
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

              <div className="d-flex bannerSection">
                <div className="banner mb-5 cursor">
                  <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-01.jpg" alt="product" />
                  <HorizontalText product={bannerProducts[2]} />
                </div>
                <div className="banner mb-5 cursor">
                  <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-02.jpg" alt="product" />
                  <HorizontalText product={bannerProducts[3]} />
                </div>
              </div>



            </div>
          </div>
        </div >
      </section >

    </>
  );
}

export default Home;