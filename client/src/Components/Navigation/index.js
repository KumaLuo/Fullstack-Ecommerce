
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
                <div className="row align-items-center">

                    <div className="col-sm-3 navPart1">
                        <Button className='allTab align-items-center'>
                            <span className="icon1 mr-2"><IoIosMenu /></span>
                            <span className='text'>ALL CATEGORIES</span>
                            <span className="icon2 ml-2"><FaAngleDown /></span>
                        </Button>
                    </div>

                    <div className="col-sm-9 navPart2 d-flex align-items-center">
                        <ul className="list list-inline ml-auto">
                            <li className="list-inline-item"> <Link to='/'> <Button><IoHomeOutline/> &nbsp;
                            Home </Button> </Link> </li>
                            <li className="list-inline-item"> <Link to='/'> <Button><IoShirtOutline/> &nbsp;
                            Fashion</Button></Link> </li>
                            <li className="list-inline-item"> <Link to='/'> <Button><MdOutlineDevices/> &nbsp; 
                            Electronic </Button></Link> </li>
                            <li className="list-inline-item"> <Link to='/'> <Button><IoPizzaOutline/> &nbsp; 
                            Bakery </Button></Link> </li>
                            <li className="list-inline-item"> <Link to='/'> <Button><LuGrape/> &nbsp;
                             Grocery </Button></Link> </li>
                            <li className="list-inline-item"> <Link to='/'> <Button><MdOutlineArticle/> &nbsp;
                             Blog </Button></Link> </li>
                            <li className="list-inline-item"> <Link to='/'> <Button><MdOutlineContactSupport/> &nbsp; 
                            Contact Us</Button></Link> </li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        </nav>   
    )
}

export default Navigation;