

const VerticalText = ({ product, className }) => {
    return (
        <div className={`bannerText vertical ${className}`}>
            <div className="banner-header mb-2">
                {product.name}
            </div>

            <div className="banner-description">
                <h4 className="mb-1 light">{product.des1}</h4>
                <h4 className="mt-0 bold">{product.des2}</h4>
            </div>

            <div className="d-flex flex-column">
                <span>only-from</span>
                <span className="price">${product.price}</span>
            </div>

            <div className="mt-2 banner-footer align-items-center content-center">
                <span>Shop Now</span>
            </div>
        </div>
    );
}
export default VerticalText;