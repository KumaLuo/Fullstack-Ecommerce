import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { FaMinus, FaPlus } from "react-icons/fa";




const Sidebar = () => {
    const [value, setValue] = useState([100, 60000]);
    const [value2, setValue2] = useState(0);
    const [show, setShow] = useState([false, false, false, false, false]);

    const showChildren = (index) => {
        const newShow = [...show];
        newShow[index] = !newShow[index];
        setShow(newShow);
    }

    return (
        <div className="sidebar">
            <div className="sticky">
                <div className="filterBox">
                    <h6>product categories</h6>
                    <div className="scroll">
                        <ul>
                            <li className="cat-parent">
                                <div className="d-flex align-items-center mb-1">
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Beverages" />
                                    </FormGroup>
                                    {show[0] ? <Button className="ml-auto" onClick={() => showChildren(0)} disableRipple disableTouchRipple><FaMinus /></Button>
                                        : <Button className="ml-auto" onClick={() => showChildren(0)} disableRipple disableTouchRipple><FaPlus /></Button>}
                                </div>
                                <ul className={show[0] ? "cat-child" : "cat-child hide"}>
                                    <li>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox />} label="Coffee" />
                                        </FormGroup>
                                    </li>
                                    <li>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox />} label="Craft Beer" />
                                        </FormGroup>
                                    </li>
                                    <li>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox />} label="Drink Boxes & Pouches" />
                                        </FormGroup>
                                    </li>
                                    <li>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox />} label="Milk & Plant-Based Milk" />
                                        </FormGroup>
                                    </li>
                                    <li>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox />} label="Soda & Pop" />
                                        </FormGroup>
                                    </li>
                                    <li>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox />} label="Sparkling Water" />
                                        </FormGroup>
                                    </li><li>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox />} label="Tea & Kombucha" />
                                        </FormGroup>
                                    </li>
                                    <li>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox />} label="Water" />
                                        </FormGroup>
                                    </li>
                                    <li>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox />} label="Wine" />
                                        </FormGroup>
                                    </li>
                                </ul>
                            </li>
                            <li className="cat-parent">
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox />} label="Biscuits & Snacks" />
                                </FormGroup>
                            </li>
                            <li className="cat-parent">
                                <div className="d-flex align-items-center mb-1">
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Breads & Bakery" />
                                    </FormGroup>
                                    {show[1] ? <Button className="ml-auto" onClick={() => showChildren(1)} disableRipple disableTouchRipple><FaMinus /></Button>
                                        : <Button className="ml-auto" onClick={() => showChildren(1)} disableRipple disableTouchRipple><FaPlus /></Button>}
                                </div>
                                <ul className={show[1] ? "cat-child" : "cat-child hide"}>
                                    <li>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox />} label="Coffee" />
                                        </FormGroup>
                                    </li>
                                    <li>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox />} label="Craft Beer" />
                                        </FormGroup>
                                    </li>
                                    <li>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox />} label="Drink Boxes & Pouches" />
                                        </FormGroup>
                                    </li>
                                    <li>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox />} label="Milk & Plant-Based Milk" />
                                        </FormGroup>
                                    </li>
                                    <li>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox />} label="Soda & Pop" />
                                        </FormGroup>
                                    </li>
                                    <li>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox />} label="Sparkling Water" />
                                        </FormGroup>
                                    </li>
                                </ul>
                            </li>
                            <li className="cat-parent">
                                <div className="d-flex align-items-center mb-1">
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Breakfast & Dairy" />
                                    </FormGroup>
                                    {show[2] ? <Button className="ml-auto" onClick={() => showChildren(2)} disableRipple disableTouchRipple><FaMinus /></Button>
                                        : <Button className="ml-auto" onClick={() => showChildren(2)} disableRipple disableTouchRipple><FaPlus /></Button>}
                                </div>
                                <ul className={show[2] ? "cat-child" : "cat-child hide"}>
                                    <li>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox />} label="Coffee" />
                                        </FormGroup>
                                    </li>
                                    <li>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox />} label="Craft Beer" />
                                        </FormGroup>
                                    </li>
                                    <li>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox />} label="Drink Boxes & Pouches" />
                                        </FormGroup>
                                    </li>
                                    <li>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox />} label="Milk & Plant-Based Milk" />
                                        </FormGroup>
                                    </li>
                                    <li>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox />} label="Soda & Pop" />
                                        </FormGroup>
                                    </li>
                                    <li>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox />} label="Sparkling Water" />
                                        </FormGroup>
                                    </li><li>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox />} label="Tea & Kombucha" />
                                        </FormGroup>
                                    </li>
                                    <li>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox />} label="Water" />
                                        </FormGroup>
                                    </li>
                                </ul>
                            </li>
                            <li className="cat-parent">
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox />} label="Frozen Foods" />
                                </FormGroup>
                            </li>
                            <li className="cat-parent">
                                <div className="d-flex align-items-center mb-1">
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Fruits & Vegetables" />
                                    </FormGroup>
                                    {show[3] ? <Button className="ml-auto" onClick={() => showChildren(3)} disableRipple disableTouchRipple><FaMinus /></Button>
                                        : <Button className="ml-auto" onClick={() => showChildren(3)} disableRipple disableTouchRipple><FaPlus /></Button>}
                                </div>
                                <ul className={show[3] ? "cat-child" : "cat-child hide"}>
                                    <li>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox />} label="Coffee" />
                                        </FormGroup>
                                    </li>
                                    <li>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox />} label="Craft Beer" />
                                        </FormGroup>
                                    </li>
                                    <li>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox />} label="Drink Boxes & Pouches" />
                                        </FormGroup>
                                    </li>
                                    <li>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox />} label="Milk & Plant-Based Milk" />
                                        </FormGroup>
                                    </li>
                                    <li>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox />} label="Soda & Pop" />
                                        </FormGroup>
                                    </li>
                                    <li>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox />} label="Sparkling Water" />
                                        </FormGroup>
                                    </li><li>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox />} label="Tea & Kombucha" />
                                        </FormGroup>
                                    </li>
                                </ul>
                            </li>
                            <li className="cat-parent">
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox />} label="Grocery & Staples" />
                                </FormGroup>
                            </li>
                            <li className="cat-parent">
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox />} label="Household Items" />
                                </FormGroup>
                            </li>
                            <li className="cat-parent">
                                <div className="d-flex align-items-center mb-1">
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Meats & Seafood" />
                                    </FormGroup>
                                    {show[4] ? <Button className="ml-auto" onClick={() => showChildren(4)} disableRipple disableTouchRipple><FaMinus /></Button>
                                        : <Button className="ml-auto" onClick={() => showChildren(4)} disableRipple disableTouchRipple><FaPlus /></Button>}
                                </div>
                                <ul className={show[4] ? "cat-child" : "cat-child hide"}>
                                    <li>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox />} label="Coffee" />
                                        </FormGroup>
                                    </li>
                                    <li>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox />} label="Craft Beer" />
                                        </FormGroup>
                                    </li>
                                    <li>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox />} label="Drink Boxes & Pouches" />
                                        </FormGroup>
                                    </li>
                                    <li>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox />} label="Milk & Plant-Based Milk" />
                                        </FormGroup>
                                    </li>
                                    <li>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox />} label="Soda & Pop" />
                                        </FormGroup>
                                    </li>
                                    <li>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox />} label="Sparkling Water" />
                                        </FormGroup>
                                    </li><li>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox />} label="Tea & Kombucha" />
                                        </FormGroup>
                                    </li>
                                    <li>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox />} label="Water" />
                                        </FormGroup>
                                    </li>
                                    <li>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox />} label="Wine" />
                                        </FormGroup>
                                    </li>
                                </ul>
                            </li>


                        </ul>
                    </div>
                </div>

                <div className="filterBox">
                    <h6>filter by price</h6>
                    <RangeSlider value={value} onInput={setValue} min={100} max={60000} step={5} />

                    <div className="d-flex priceRange align-items-center">
                        <span>Price: <strong>$ {value[0]}</strong> — <strong>$ {value[1]}</strong></span>
                        <Button className="ml-auto filter" disableRipple disableTouchRipple>FILTER</Button>
                    </div>
                </div>

                <div className="filterBox">
                    <h6>product status</h6>
                    <ul>
                        <li>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="In Stock" />
                            </FormGroup>
                        </li>
                        <li>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="On sale" />
                            </FormGroup>
                        </li>
                    </ul>
                </div>

                <div className="filterBox brands">
                    <h6>brands</h6>
                    <ul>
                        <li>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Frito Lay" />
                            </FormGroup>
                            <span className="count"> (5)</span>
                        </li>
                        <li>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Nespresso" />
                            </FormGroup>
                            <span className="count"> (2)</span>
                        </li>
                        <li>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Oreo" />
                            </FormGroup>
                            <span className="count"> (3)</span>
                        </li>
                        <li>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Quaker" />
                            </FormGroup>
                            <span className="count"> (4)</span>
                        </li>
                        <li>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Welch's" />
                            </FormGroup>
                            <span className="count"> (6)</span>
                        </li>
                    </ul>
                </div>

                <Link to="/" className="promotion-link align-items-center mb-4 d-flex justify-content-center">
                    <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/sidebar-banner.gif" alt="product" className="w-100" />
                </Link>
            </div>
        </div>
    )
}

export default Sidebar;