import { IoSearch } from "react-icons/io5";
import Button from '@mui/material/Button';

const searchBox = () => {
    return(

            <div className='headerSearch ml-3 mr-3'> 
                <input type="text" placeholder="Search for products, brands and more..." />
                <Button> <IoSearch /> </Button>
            </div>
    )
}

export default searchBox;