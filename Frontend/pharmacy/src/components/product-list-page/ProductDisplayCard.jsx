import React from "react";
import { useCart } from "../Productdetails/context/CartContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./ProductDisplayCard.css";

function ProductDisplayCard({ id, image, title, currentPrice, description, brand }) {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    const price = parseFloat(currentPrice.replace("₹", ""));
    addToCart({
      id,
      name: title,
      image,
      price,
      description,
      brand,
      quantity: 1,
    });
  };

  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="product-card-display">
      <div className="product-image-display-page">
      <Link to={`/product/${id}`}> {/* Link to product detail page */}
          <img src={image} alt={title} />
        </Link>
      </div>
      <div className="product-details-display-page">
        <p className="product-title-display-page">{title}</p>
        <div className="product-pricing-display-page">
          <span className="current-price-display-page">{currentPrice}</span>
        </div>
      </div>
      <button className="add-to-cart-btn-display-page" onClick={handleAddToCart}>
        <p>ADD</p>
      </button>
    </div>
  );
}

export default ProductDisplayCard;



// import React from "react";
// import "./ProductDisplayCard.css";

// function ProductDisplayCard({ image, title, currentPrice, description }) {
//   return (
//     <div className="product-card-display">
//       <div className="product-image-display-page">
//         <img src={image} alt={title} />
//       </div>
//       <div className="product-details-display-page">
//         <p className="product-title-display-page">{title}</p>
//         {/* <p className="product-description">{description}</p> */}
//         <div className="product-pricing-display-page">
//           <span className="current-price-display-page">{currentPrice}</span>
//         </div>
//       </div>
//         <button className="add-to-cart-btn-display-page"><p>ADD</p></button>
//     </div>
//   );
// }

// export default ProductDisplayCard;