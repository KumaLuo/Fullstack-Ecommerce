
import { IoIosMenu } from "react-icons/io";
import {FaAngleDown} from "react-icons/fa6";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { IoShirtOutline } from "react-icons/io5";
import { MdOutlineDevices } from "react-icons/md";
import { IoPizzaOutline } from "react-icons/io5";
import { LuGrape } from "react-icons/lu";
import { MdOutlineArticle } from "react-icons/md";
import { MdOutlineContactSupport } from "react-icons/md";


const Navigation = () => {
    return(
        <nav>
            <div className="container">
                <div className="row">

                    <div className="col-sm-3 navPart1">
                        <Button className='allTab align-items-center'>
                            <span className="icon1 mr-2"><IoIosMenu /></span>
                            <span className='text'>ALL CATEGORIES</span>
                            <span className="icon2 ml-2"><FaAngleDown /></span>
                        </Button>
                    </div>

                    <div className="col-sm-9 navPart2 d-flex align-items-center">
                        <ul className="list list-inline ml-auto">
                            <li className="list-inline-item"> <Link to='/'> <IoHomeOutline/> &nbsp; 
                            Home </Link> </li>
                            <li className="list-inline-item"> <Link to='/'> <IoShirtOutline/> &nbsp;
                            Fashion </Link> </li>
                            <li className="list-inline-item"> <Link to='/'> <MdOutlineDevices/> &nbsp; 
                            Electronic </Link> </li>
                            <li className="list-inline-item"> <Link to='/'> <IoPizzaOutline/> &nbsp; 
                            Bakery </Link> </li>
                            <li className="list-inline-item"> <Link to='/'> <LuGrape/> &nbsp;
                             Grocery </Link> </li>
                            <li className="list-inline-item"> <Link to='/'> <MdOutlineArticle/> &nbsp;
                             Blog </Link> </li>
                            <li className="list-inline-item"> <Link to='/'> <MdOutlineContactSupport/> &nbsp; 
                            Contact Us</Link> </li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        </nav>   
    )
}

export default Navigation;