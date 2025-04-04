
const HorizontalText = ({ product, className }) => {
    return (
        <div className={`bannerText horizontal ${className}`}>

            <h6>
                WEEKEND DISCOUNT {product.discount}%
            </h6>

            <div>
                <h4>{product.des1}</h4>
                <p style={{ color: "#727285" }}>{product.des2}</p>
            </div>

            <div className="banner-footer align-items-center text-center">
                <span>
                    Shop Now
                </span>
            </div>
        </div>
    );
}

export default HorizontalText;