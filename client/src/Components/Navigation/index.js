
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { IoShirtOutline } from "react-icons/io5";
import { MdOutlineDevices } from "react-icons/md";
import { IoPizzaOutline } from "react-icons/io5";
import { LuGrape } from "react-icons/lu";
import { MdOutlineArticle } from "react-icons/md";
import { MdOutlineContactSupport } from "react-icons/md";
import { useState, useEffect, useRef } from "react";
import { FaAngleRight } from "react-icons/fa6";


const Navigation = () => {
    const [SideBarOpen, setSideBarOpen] = useState(false);
    const sidebarRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target)
            ) {
                setSideBarOpen(false);
            }
        }

        if (SideBarOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [SideBarOpen]);


    return (
        <nav>
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-sm-3 navPart1">
                        <div className="catWrapper">
                            <Button className='allTab align-items-center'
                                onClick={() => setSideBarOpen(!SideBarOpen)}>
                                <span className="icon1 mr-2"><IoIosMenu /></span>
                                <span className='text'>ALL CATEGORIES</span>
                                <span className="icon2 ml-2"><FaAngleDown /></span>
                            </Button>
                            <div ref={sidebarRef} className={`sideBar ${SideBarOpen ? 'open' : ''}`}>
                                <ul>
                                    <li><Link to='/'> <Button>Electronic <FaAngleRight className="ml-auto" /></Button></Link>
                                        <ul className="subMenu">
                                            <li><Link to='/'> <Button>Electronic </Button></Link></li>
                                            <li><Link to='/'> <Button>Electronic </Button></Link></li>
                                            <li><Link to='/'> <Button>Electronic </Button></Link></li>
                                            <li><Link to='/'> <Button>Electronic </Button></Link></li>
                                            <li><Link to='/'> <Button>Electronic </Button></Link></li>
                                            <li><Link to='/'> <Button>Electronic </Button></Link></li>
                                            <li><Link to='/'> <Button>Electronic </Button></Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to='/'> <Button>Electronic </Button></Link></li>
                                    <li><Link to='/'> <Button>Electronic <FaAngleRight className="ml-auto" /></Button></Link>
                                        <ul className="subMenu">
                                            <li><Link to='/'> <Button>Electronic </Button></Link></li>
                                            <li><Link to='/'> <Button>Electronic </Button></Link></li>
                                            <li><Link to='/'> <Button>Electronic </Button></Link></li>
                                            <li><Link to='/'> <Button>Electronic </Button></Link></li>
                                            <li><Link to='/'> <Button>Electronic </Button></Link></li>
                                            <li><Link to='/'> <Button>Electronic </Button></Link></li>
                                            <li><Link to='/'> <Button>Electronic </Button></Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to='/'> <Button>Electronic </Button></Link></li>
                                    <li><Link to='/'> <Button>Electronic </Button></Link></li>
                                    <li><Link to='/'> <Button>Electronic </Button></Link></li>
                                    <li><Link to='/'> <Button>Electronic </Button></Link></li>
                                    <li><Link to='/'> <Button>Electronic </Button></Link></li>
                                </ul>
                                <div class="separator"></div>
                                <ul className="list">
                                    <li><Link to='/'>Electronic</Link></li>
                                    <li><Link to='/'>Electronic</Link></li>
                                    <li><Link to='/'>Electronic</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-9 navPart2 d-flex align-items-center">
                        <ul className="list list-inline ml-auto">
                            <li className="list-inline-item"> <Link to='/'> <Button><IoHomeOutline /> &nbsp;
                                Home </Button> </Link> </li>
                            <li className="list-inline-item">
                                <Link to='/'> <Button><IoShirtOutline /> &nbsp;Fashion</Button></Link>
                                <div className="subMenu shadow">
                                    <Link to='/'> <Button>Electronic </Button></Link>
                                    <Link to='/'> <Button>Electronic </Button></Link>
                                    <Link to='/'> <Button>Electronic </Button></Link>
                                    <Link to='/'> <Button>Electronic </Button></Link>
                                    <Link to='/'> <Button>Electronic </Button></Link>
                                    <Link to='/'> <Button>Electronic </Button></Link>
                                </div>
                            </li>
                            <li className="list-inline-item">
                                <Link to='/'> <Button><MdOutlineDevices /> &nbsp;Electronic </Button></Link>
                                <div className="subMenu shadow">
                                    <Link to='/'> <Button>Electronic </Button></Link>
                                    <Link to='/'> <Button>Electronic </Button></Link>
                                    <Link to='/'> <Button>Electronic </Button></Link>
                                    <Link to='/'> <Button>Electronic </Button></Link>
                                    <Link to='/'> <Button>Electronic </Button></Link>
                                    <Link to='/'> <Button>Electronic </Button></Link>
                                </div>
                            </li>
                            <li className="list-inline-item"> <Link to='/'> <Button><IoPizzaOutline /> &nbsp;Bakery </Button></Link> </li>
                            <li className="list-inline-item"> <Link to='/'> <Button><LuGrape /> &nbsp;Grocery </Button></Link> </li>
                            <li className="list-inline-item"> <Link to='/'> <Button><MdOutlineArticle /> &nbsp;Blog </Button></Link> </li>
                            <li className="list-inline-item"> <Link to='/'> <Button><MdOutlineContactSupport /> &nbsp;Contact Us</Button></Link> </li>
                        </ul>

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;