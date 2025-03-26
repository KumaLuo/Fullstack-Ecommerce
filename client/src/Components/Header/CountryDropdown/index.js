import React, { useEffect, useState } from 'react';
import { FaAngleDown } from "react-icons/fa6";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { IoSearch } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import Slide from '@mui/material/Slide';
import { MyContext } from '../../../App';
import { useContext } from 'react';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const CountryDropdown = () => {

    const [isOpenModel, setIsOpenModel] = useState(false);
    const [selectTab, setSelectTab] = useState(null);
    const [countryList, setCountryList] = useState([]);

    const context = useContext(MyContext);

    useEffect(() => {
        setCountryList(context.values.locationList);
    }, [context.values.locationList]);

    const handleClick = (index, country) => {
        context.values.setLocation(countryList[index].country);
        setSelectTab(index);
        setIsOpenModel(false);
    };

    const filterList = (e) => {
        if (e.target.value === '') {
            setCountryList(context.values.locationList);
            return;
        }
        const searchValue = e.target.value.toLowerCase();
        const filteredList = context.values.locationList.filter((item) => {
            return item.country.toLowerCase().includes(searchValue);
        });
        setCountryList(filteredList);
    };

    return (
        <>
            <Button className='countryDrop' onClick={() => setIsOpenModel(true)}>
                <div className='info d-flex flex-column'>
                    <span className='label'>Your Location</span>
                    <span className='name'>{context.values.location}</span>
                </div>
                <span className='ml-auto'><FaAngleDown /></span>
            </Button>

            <Dialog open={isOpenModel} className="LocationDialog"
                onClose={() => setIsOpenModel(false)} slots={{ transition: Transition }}>
                <h4 className="mb-0">Choose Your Delivery Location</h4>
                <p>Enter your address and we will specify the offer for your area.</p>
                <Button className="closeBtn" onClick={() => setIsOpenModel(false)} > <MdClose /> </Button>
                <div className='headerSearch w-100 align-items-center d-flex'>
                    <Button className="locationSearch"> <IoSearch /> </Button>
                    <input type="text" placeholder="Search your area..." onChange={filterList} />
                </div>
                <ul className='locationList mt-3'>
                    {countryList.map((loc, index) => {
                        return (
                            <li key={index}>
                                <Button
                                    onClick={() => handleClick(index, loc.country)}
                                    className={selectTab === index ? 'active' : ''}
                                >{loc.country}
                                </Button>
                            </li>
                        )
                    })}
                </ul>

            </Dialog>
        </>
    )
};

export default CountryDropdown;