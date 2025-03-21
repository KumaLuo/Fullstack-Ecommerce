import logo from '../../assets/images/bacola-logo.png';
import { Link } from 'react-router-dom';
import CountryDropdown from '../CountryDropdown';

const Header = () => {
    return (
        <>
            <div className="headerwrapper">
                <div className="top-strip bg-blue">
                    <div className="container"> 
                        <p className="mb-0 mt-0 text-center">Due to the <b> COVID 19 </b>  epidemic,
                            orders maybe processed with a slight delay</p> 
                    </div>
                </div>

                <div className="header">
                    <div className="container">
                        <div className="row">

                            <div className="logowrapper d-flex align-items-center col-sm-2">
                                <Link to="/"> <img src={logo} alt="Logo" /> </Link>
                            </div>

                            <div className="col-sm-10 d-flex align-items-center part2">
                                <CountryDropdown />
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </>
    );
};

export default Header;