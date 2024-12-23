import React from 'react'
import {useCart} from '../../Productdetails/context/CartContext'
import { useNavigate } from "react-router-dom";
import './ProductCard.css'

const ProductCard = ({ id,image, title, currentPrice, originalPrice, discount }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  
  const handleAddToCart = () => {
    const price = parseFloat(currentPrice.replace("₹", ""));
    addToCart({
      id,
      name: title,
      image,
      price,
      description, // Include description
      quantity: 1,
    });
  };
    return (
      <div className="product-card-mainpage">
        <div className="product-image-mainpage">
          <img src={image} alt={title} />
        </div>
        <div className="product-details-mainpage">
          <p className="product-title-mainpage">{title}</p>
          <div className="product-pricing-mainpage">
            <span className="current-price-mainpage">₹{currentPrice}</span>
            <span className="original-price-mainpage">({originalPrice})</span>
            <span className="discount-mainpage">{discount}%</span>
          </div>
        </div>
          <button className="add-to-cart-btn-mainpage" onClick={handleAddToCart}><p>ADD</p></button>
      </div>
    );
  };
  
  export default ProductCard
