import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductHeader from '../../Components/ProductHeader';
import ProductZoom from '../../Components/ProductZoom';
import ProductInfo from '../../Components/ProductInfo';
import { FaFacebookF, FaTwitter, FaPinterestP, FaLinkedinIn, FaRedditAlien, FaWhatsapp } from "react-icons/fa6";
import { TbTruckDelivery, TbMilk } from "react-icons/tb";
import { PiCurrencyCircleDollar } from "react-icons/pi";
import Slider from "react-slick";
import ProductItem from '../../Components/ProductItem';


const ProductDetails = () => {

    const [tab, setTab] = useState("tab-description");
    const [floatingTab, setFloatingTab] = useState();
    const [isFloatingTabVisible, setIsFloatingTabVisible] = useState(false);
    const productDetailsRef = useRef(null);
    const floatingTabRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const productDetailsTop = productDetailsRef.current?.getBoundingClientRect().top;

            if (productDetailsTop <= 0) {
                setIsFloatingTabVisible(true);
            } else {
                setIsFloatingTabVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const tabClick = (e) => {
        e.preventDefault();
        const tabId = e.target.getAttribute('href').replace('#', '');
        setTab(tabId);
        setFloatingTab();
    }

    const scrollToWithFloatingOffset = (e, id) => {
        e.preventDefault();
        const target = document.querySelector(id);
        const floatingTabHeight = floatingTabRef.current?.offsetHeight || 0;

        if (target) {
            const y = target.getBoundingClientRect().top + window.pageYOffset - floatingTabHeight;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };


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
        },
        {
            id: 9,
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
            id: 10,
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
            id: 11,
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
            id: 12,
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
            id: 13,
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
            id: 14,
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
            id: 15,
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
            id: 16,
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
        },
        {
            id: 17,
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
            id: 18,
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
            id: 19,
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
            id: 20,
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
            id: 21,
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
            id: 22,
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
            id: 23,
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
            id: 24,
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
        },
    ]

    const { id } = useParams();

    var productSliderOptions = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };


    return (
        <section className="productDetailsPage">
            <div className="container">

                <div className='nav-wrapper'>

                </div>

                <div className="productDetails align-items-center" ref={productDetailsRef}>
                    <ProductHeader product={products[id - 1]} />
                    <div className='d-flex align-items-center justify-content-center'>
                        <div className='col-12 col-lg-5'>
                            <ProductZoom product={products[id - 1]} />
                        </div>
                        <div className='col-12 col-lg-7 details d-flex'>
                            <div style={{ minWidth: "50%", maxWidth: "50%" }}>
                                <ProductInfo product={products[id - 1]} />
                                <div className='productShare'>
                                    <ul cliassName='list-inline align-items-center'>
                                        <li className='list-inline-item'>
                                            <a href=' ' target='_blank' rel="noreferrer" style={{ backgroundColor: "#3b5998" }}>
                                                <FaFacebookF />
                                            </a>
                                        </li>
                                        <li className='list-inline-item'>
                                            <a href=' ' target='_blank' rel="noreferrer" style={{ backgroundColor: "#1da1f2" }}>
                                                <FaTwitter />
                                            </a>
                                        </li>
                                        <li className='list-inline-item'>
                                            <a href=' ' target='_blank' rel="noreferrer" style={{ backgroundColor: "#e60023" }}>
                                                <FaPinterestP />
                                            </a>

                                        </li>
                                        <li className='list-inline-item'>
                                            <a href=' ' target='_blank' rel="noreferrer" style={{ backgroundColor: "#0077b5" }}>
                                                <FaLinkedinIn />
                                            </a>

                                        </li>
                                        <li className='list-inline-item'>
                                            <a href=' ' target='_blank' rel="noreferrer" style={{ backgroundColor: "#ff4500" }}>
                                                <FaRedditAlien />
                                            </a>

                                        </li>
                                        <li className='list-inline-item'>
                                            <a href=' ' target='_blank' rel="noreferrer" style={{ backgroundColor: "#25D366" }}>
                                                <FaWhatsapp />
                                            </a>
                                        </li>

                                    </ul>

                                </div>
                            </div>

                            <div className='iconMessage'>
                                <ul>
                                    <li className='d-flex align-items-center'>
                                        <TbTruckDelivery />
                                        <span>Free Shipping apply to all orders over $100</span>
                                    </li>
                                    <li className='d-flex align-items-center'>
                                        <TbMilk />
                                        <span>Guranteed 100% Organic from natural farmas</span>
                                    </li>
                                    <li className='d-flex align-items-center'>
                                        <PiCurrencyCircleDollar />
                                        <span>1 Day Returns if you change your mind</span>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>

                </div>

                <div className="reviews" id='reviews'>
                    <ul className='list-inline'>
                        <li className='list-inline-item' id='tab-description'>
                            <a href='#tab-description' onClick={(e) => tabClick(e)} className={tab === "tab-description" ? "active" : ""}>DESCRIPTION</a>
                        </li>
                        <li className='list-inline-item' id='tab-additional-information'>
                            <a href='#tab-additional-information' onClick={(e) => tabClick(e)} className={tab === "tab-additional-information" ? "active" : ""}>ADDITIONAL INFORMATION </a>
                        </li>
                        <li className='list-inline-item' id='tab-reviews'>
                            <a href='#tab-reviews' onClick={(e) => tabClick(e)} className={tab === "tab-reviews" ? "active" : ""}>REVIEWS({products[id - 1].reviewCount})</a>
                        </li>

                    </ul>
                    {tab === "tab-description" && <div className='tab-panel'>
                        1
                    </div>}

                    {tab === "tab-additional-information" && <div className='tab-panel'>
                        2
                    </div>}

                    {tab === "tab-reviews" && <div className='tab-panel'>
                        3
                    </div>}
                </div>

                <div className="relatedProducts" id='relatedProducts'>
                    <h3>RELATED PRODUCTS</h3>
                    <div className='slide-container'>
                        <Slider {...productSliderOptions}>
                            {products.map((product) => (
                                <ProductItem key={product.id} product={product} />
                            ))}
                        </Slider>
                    </div>
                </div>

                <div className='recentViewed'>
                    <h3>RECENTLY VIEWED PRODUCTS</h3>
                    <div className='slide-container'>
                        <Slider {...productSliderOptions}>
                            {products.map((product) => (
                                <ProductItem key={product.id} product={product} />
                            ))}
                        </Slider>
                    </div>
                </div>

                {isFloatingTabVisible && <div className='floatingTab' ref={floatingTabRef}>
                    <ul className='list-inline'>
                        <li className='list-inline-item'>
                            <a href='#reviews'
                                onClick={(e) => {
                                    scrollToWithFloatingOffset(e, '#reviews');
                                    setTab("tab-description");
                                    setFloatingTab("tab-description");
                                }}
                                className={floatingTab === "tab-description" ? "active" : ""}>DESCRIPTION</a>
                        </li>
                        <li className='list-inline-item'>
                            <a href='#reviews'
                                onClick={(e) => {
                                    scrollToWithFloatingOffset(e, '#reviews');
                                    setTab("tab-additional-information");
                                    setFloatingTab("tab-additional-information");
                                }}
                                className={floatingTab === "tab-additional-information" ? "active" : ""}>ADDITIONAL INFORMATION </a>
                        </li>
                        <li className='list-inline-item'>
                            <a href='#reviews'
                                onClick={(e) => {
                                    scrollToWithFloatingOffset(e, '#reviews');
                                    setTab("tab-reviews");
                                    setFloatingTab("tab-reviews");
                                }}
                                className={floatingTab === "tab-reviews" ? "active" : ""}>REVIEWS({products[id - 1].reviewCount})</a>
                        </li>
                        <li className='list-inline-item'>
                            <a href='#relatedProducts'
                                onClick={(e) => {
                                    scrollToWithFloatingOffset(e, '#relatedProducts');
                                    setFloatingTab("relatedProducts");
                                }}
                                className={floatingTab === "relatedProducts" ? "active" : ""}>RELATED PRODUCTS</a>
                        </li>
                    </ul>
                </div>}
            </div>
        </section>
    )
}

export default ProductDetails;