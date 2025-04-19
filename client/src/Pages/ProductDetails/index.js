import React from 'react';
import { useParams } from 'react-router-dom';
import ProductHeader from '../../Components/ProductHeader';
import ProductZoom from '../../Components/ProductZoom';
import ProductInfo from '../../Components/ProductInfo';
import { FaFacebookF, FaTwitter, FaPinterestP, FaLinkedinIn, FaRedditAlien, FaWhatsapp } from "react-icons/fa6";


const ProductDetails = () => {

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

    return (
        <section className="productDetailsPage">
            <div className="container">

                <div className="productDetails align-items-center">
                    <ProductHeader product={products[id - 1]} />
                    <div className='d-flex align-items-center justify-content-center'>
                        <div className='col-12 col-lg-5'>
                            <ProductZoom product={products[id - 1]} />
                        </div>
                        <div className='col-12 col-lg-7 details'>
                            <div style={{ maxWidth: "50%" }}>
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

                            <div>

                            </div>

                        </div>
                    </div>

                </div>

                <div className="reviews">

                </div>
            </div>
        </section>
    )
}

export default ProductDetails;