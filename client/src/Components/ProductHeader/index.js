
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

const ProductHeader = ({ product }) => {
    return (
        <div className='product-header'>
            <h1 className='product-title'>{product.name}</h1>

            <div className='product-rating d-flex align-items-center'>
                <div >
                    <span className='brands mr-1'>Brands: </span>
                    <span>{product.brands}</span>
                </div>

                <div className='rating'>
                    <Rating
                        name="read-only"
                        value={product.rating}
                        precision={0.5}
                        readOnly
                        size="small"
                        sx={{
                            fontSize: "11px",
                        }}
                        emptyIcon={<StarIcon sx={{ color: "#ccc", fontSize: "11px" }} />}
                    />
                    <span className='rating-count'>{product.reviewCount} REVIEW</span>
                </div>
                <div>
                    <span className='sku'>SKU: </span>
                    <span>{product.SKU}</span>
                </div>
            </div>
        </div>
    )
}

export default ProductHeader;