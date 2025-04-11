import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { Button } from "@mui/material";




const Sidebar = () => {
    const [value, setValue] = useState([100, 60000]);
    const [value2, setValue2] = useState(0);
    return (
        <div className="sidebar">
            <div className="filterBox">
                <h6>product categories</h6>
                <div className="scroll">
                    <ul>
                        <li>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Beverages" />
                            </FormGroup>
                        </li>
                        <li>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Biscuits & Snacks" />
                            </FormGroup>
                        </li>
                        <li>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Breads & Bakery" />
                            </FormGroup>
                        </li>
                        <li>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Breakfast & Dairy" />
                            </FormGroup>
                        </li>
                        <li>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Frozen Foods" />
                            </FormGroup>
                        </li>
                        <li>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Fruits & Vegetables" />
                            </FormGroup>
                        </li>
                        <li>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Grocery & Staples" />
                            </FormGroup>
                        </li>
                        <li>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Household Items" />
                            </FormGroup>
                        </li>
                        <li>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Meats & Seafood" />
                            </FormGroup>
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

            </div>
        </div>
    )
}

export default Sidebar;