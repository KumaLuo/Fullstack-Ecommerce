import React, {useState} from 'react';
import {FaAngleDown} from "react-icons/fa6";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { IoSearch } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import Slide from '@mui/material/Slide';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const CountryDropdown = () => {

    const [isOpenModel, setIsOpenModel] = useState(false);
    const [location, setLocation] = useState('Australia');

    const locations = [
        'New South Wales',
        'Northern Territory',
        'Queensland',
        'South Australia',
        'Tasmania',
        'Victoria',
        'Western Australia',
        'Australian Capital Territory',
    ];

    const handleClick = (loc) => {
    setLocation(loc);
    setIsOpenModel(false);
    };

    return(
        <>
            <Button className='countryDrop' onClick={() => setIsOpenModel(true)}>
                <div className='info d-flex flex-column'>
                    <span className='label'>Your Location</span>
                    <span className='name'>{location}</span>
                </div>
                <span className='ml-auto'><FaAngleDown /></span>
            </Button>

            <Dialog open={isOpenModel} className="LocationDialog" 
            onClose={()=>setIsOpenModel(false)} slots={{ transition: Transition } }>
                <h4 className="mb-0">Choose Your Delivery Location</h4>
                <p>Enter your address and we will specify the offer for your area.</p>
                <Button className="closeBtn" onClick={()=>setIsOpenModel(false)} > <MdClose /> </Button>
                <div className='headerSearch w-100 align-items-center d-flex'> 
                    <Button className="locationSearch"> <IoSearch /> </Button>
                    <input type="text" placeholder="Search your area..." />
                </div>
                <ul className='locationList mt-3'>
                    {locations.map((loc, index) => (
                        <li key={index} onClick={() => handleClick(loc)}><Button>{loc}</Button></li>
                    ))}
                </ul>

            </Dialog>
        </>
    )
};

export default CountryDropdown;