import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../Components/Sidebar";
import { PiListBold } from "react-icons/pi";
import { BsGridFill, BsGrid3X3GapFill } from "react-icons/bs";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { FaAngleDown } from "react-icons/fa6";
import { Button } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ProductItem from "../../Components/ProductItem";
import Pagination from "@mui/material/Pagination";


const Listing = () => {

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
    const productListRef = useRef(null);

    const [anchorEl, setAnchorEl] = useState(null);
    const [showAnchorEl, setShowAnchorEl] = useState(null);
    const [itemView, setItemView] = useState("four");
    const [sort, setSort] = useState("Latest");
    const [show, setShow] = useState(12);
    const [currentPage, setCurrentPage] = useState(1);
    const page = Math.ceil(products.length / show);
    const startIndex = (currentPage - 1) * show;
    const endIndex = startIndex + show;
    const paginatedProducts = products.slice(startIndex, endIndex);

    const openDropDown = Boolean(anchorEl);
    const openShowDropDown = Boolean(showAnchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (event) => {
        setAnchorEl(null);
        if (event.target.innerText !== "") {
            setSort(event.target.innerText);
        }
    };

    const handleShowClick = (event) => {
        setShowAnchorEl(event.currentTarget);
    };

    const handleShowClose = (event) => {
        setShowAnchorEl(null);
        if (event.target.innerText !== "") {
            const newShow = parseInt(event.target.innerText, 10);
            const newPageCount = Math.ceil(products.length / newShow);

            if (currentPage > newPageCount) {
                setCurrentPage(1);
            }

            setShow(newShow);
            productListRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
        productListRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    };


    return (
        <section className="product_list_page">
            <div className="container">
                <div className="product_list d-flex">

                    <Sidebar />

                    <div className="content_right">
                        <div className="right_banner w-100">
                            <Link to="/">
                                <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-18.jpg" alt="product" className="w-100" />
                                <div className="banner-content">
                                    <h4>Organic Meals Prepared</h4>
                                    <h3>Delivered to <strong>your Home</strong></h3>
                                    <p>Fully prepared & delivered nationwide.</p>
                                </div>
                            </Link>

                        </div>

                        <div className="list-buttons d-flex align-items-center">
                            <div className="view-selectors d-flex align-items-center">
                                <Button disableRipple disableTouchRipple onClick={() => { setItemView("one"); setShow(12); setCurrentPage(1) }} className={itemView === "one" ? "active" : ""}><PiListBold /></Button>
                                <Button disableRipple disableTouchRipple onClick={() => { setItemView("two"); setShow(12); setCurrentPage(1) }} className={itemView === "two" ? "active" : ""}><BsGridFill /></Button>
                                <Button disableRipple disableTouchRipple onClick={() => { setItemView("three"); setShow(18); setCurrentPage(1) }} className={itemView === "three" ? "active" : ""}><BsGrid3X3GapFill /></Button>
                                <Button disableRipple disableTouchRipple onClick={() => { setItemView("four"); setShow(12); setCurrentPage(1) }} className={itemView === "four" ? "active" : ""}><TfiLayoutGrid4Alt /></Button>
                            </div>
                            <div className="filters ml-auto d-flex align-items-center">
                                <div className="sortby">
                                    <Button disableRipple disableTouchRipple onClick={handleClick}><span className="mr-1">Sort By</span>{sort} <FaAngleDown className="ml-2" /></Button>
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={openDropDown}
                                        onClose={handleClose}
                                        aria-labelledby="basic-button"
                                    >
                                        <MenuItem
                                            onClick={handleClose}
                                            selected={sort === "Latest"}
                                        >
                                            Latest
                                        </MenuItem>
                                        <MenuItem
                                            onClick={handleClose}
                                            selected={sort === "Price: Low to High"}
                                        >
                                            Price: Low to High
                                        </MenuItem>
                                        <MenuItem
                                            onClick={handleClose}
                                            selected={sort === "Price: High to Low"}
                                        >
                                            Price: High to Low
                                        </MenuItem>
                                        <MenuItem
                                            onClick={handleClose}
                                            selected={sort === "Popularity"}
                                        >
                                            Popularity
                                        </MenuItem>
                                        <MenuItem
                                            onClick={handleClose}
                                            selected={sort === "Average Rating"}
                                        >
                                            Average Rating
                                        </MenuItem>

                                    </Menu>

                                </div>
                                <div className="show">
                                    <Button disableRipple disableTouchRipple onClick={handleShowClick}><span className="mr-1">Show</span> {show} <FaAngleDown className="ml-2" /></Button>

                                    {itemView === "four" && <Menu
                                        id="show-menu"
                                        anchorEl={showAnchorEl}
                                        open={openShowDropDown}
                                        onClose={handleShowClose}
                                        aria-labelledby="show-button"
                                    >
                                        <MenuItem
                                            onClick={handleShowClose}
                                            selected={show === 12}
                                        >
                                            12
                                        </MenuItem>
                                        <MenuItem
                                            onClick={handleShowClose}
                                            selected={show === 24}
                                        >
                                            24
                                        </MenuItem>
                                        <MenuItem
                                            onClick={handleShowClose}
                                            selected={show === 36}
                                        >
                                            36
                                        </MenuItem>
                                        <MenuItem
                                            onClick={handleShowClose}
                                            selected={show === 48}
                                        >
                                            48
                                        </MenuItem>
                                    </Menu>}

                                    {(itemView === "one" || itemView === "two") && <Menu
                                        id="show-menu"
                                        anchorEl={showAnchorEl}
                                        open={openShowDropDown}
                                        onClose={handleShowClose}
                                        aria-labelledby="show-button"
                                    >
                                        <MenuItem
                                            onClick={handleShowClose}
                                            selected={show === 6}
                                        >
                                            6
                                        </MenuItem>
                                        <MenuItem
                                            onClick={handleShowClose}
                                            selected={show === 12}
                                        >
                                            12
                                        </MenuItem>
                                        <MenuItem
                                            onClick={handleShowClose}
                                            selected={show === 24}
                                        >
                                            24
                                        </MenuItem>
                                        <MenuItem
                                            onClick={handleShowClose}
                                            selected={show === 36}
                                        >
                                            36
                                        </MenuItem>
                                    </Menu>
                                    }

                                    {itemView === "three" && <Menu
                                        id="show-menu"
                                        anchorEl={showAnchorEl}
                                        open={openShowDropDown}
                                        onClose={handleShowClose}
                                        aria-labelledby="show-button"
                                    >
                                        <MenuItem
                                            onClick={handleShowClose}
                                            selected={show === 9}
                                        >
                                            9
                                        </MenuItem>
                                        <MenuItem
                                            onClick={handleShowClose}
                                            selected={show === 18}
                                        >
                                            18
                                        </MenuItem>
                                        <MenuItem
                                            onClick={handleShowClose}
                                            selected={show === 27}
                                        >
                                            27
                                        </MenuItem>
                                        <MenuItem
                                            onClick={handleShowClose}
                                            selected={show === 36}
                                        >
                                            36
                                        </MenuItem>
                                    </Menu>
                                    }

                                </div>
                            </div>
                        </div>

                        <div ref={productListRef} className="product_list_items d-flex flex-wrap">

                            {paginatedProducts.map((product) => (
                                <ProductItem key={product.id} product={product} className={itemView} />
                            ))}

                        </div>

                        <div className="pagination d-flex justify-content-center align-items-center mt-4">

                            <Pagination count={page} page={currentPage} onChange={handlePageChange} color="primary" size="large" />

                        </div>


                    </div>

                </div>
            </div>
        </section>
    );
}

export default Listing;