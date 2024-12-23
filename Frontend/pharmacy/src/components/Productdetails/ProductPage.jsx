import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProduct } from "./context/ProductContext";
import "./ProductPage.css";
import { Link } from "react-router-dom";
import { useCart } from "./context/CartContext";

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getProductById, addToCart, cart } = useProduct();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const { addToCart: addToCartInCartContext } = useCart();

  useEffect(() => {
    const productData = getProductById(id);
    if (!productData) {
      navigate("/products");
      return;
    }
    setProduct(productData);
  }, [id]);

  if (!product) return <div>Loading...</div>;

  const handleAddToCart = () => {
    // addToCart(product, quantity);
    // alert("Product added to cart successfully!");
    addToCartInCartContext(product);
    alert("Product added to cart!");
  };

  const handleBuyNow = () => {
    // addToCart(product, quantity);
    // navigate("/checkout");
    addToCartInCartContext(product);
    navigate("/checkout");
  };

  const calculateTotalAmount = () => {
    return (product.price * quantity).toFixed(2);
  };

  return (
    <>
      <div className="product-details">
        <button className="view-cart">
          <Link to="/cart" className="view-cart">
            {" "}
            View Cart
          </Link>
        </button>
        <div className="product-container">
          <div className="product-image-section">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <button className="share-button">
              <i className="fas fa-share-alt"></i>
            </button>
          </div>

          <div className="product-details-section">
            <h1 className="product-title">{product.name}</h1>

            <div className="ratings-section">
              <span className="rating">{product.rating} ★</span>
              <span className="total-ratings">
                | {product.totalRatings} ratings
              </span>
              <span className="bestseller-badge">
                #1 Best Seller in Combination Multivitamins & Minerals
              </span>
            </div>

            <div className="price-section">
              <span className="discount-tag">-{product.discount}%</span>
              <span className="price">₹{product.price}</span>
              <span className="price-per-count">
                (₹{product.pricePerCount} / count)
              </span>
              <div className="mrp">M.R.P.: ₹{product.mrp}</div>
            </div>

            <div className="delivery-info">
              <div className="free-delivery">
                <span className="highlight">FREE delivery</span>{" "}
                {product.deliveryDate}
              </div>
              <div className="fast-delivery">
                Or fastest delivery <span className="highlight">Today</span>.
                Order within {product.fastDeliveryTime}
              </div>
            </div>

            <div className="product-meta">
              <div className="size-info">Size: {product.size}</div>
              <div className="expiry-info">Use by: {product.expiryDate}</div>
            </div>
          </div>

          <div className="buy-box-section">
            <div className="price-display">
              <span className="current-price">₹{calculateTotalAmount()}</span>
              <span className="delivery-text">
                FREE delivery {product.deliveryDate}
              </span>
            </div>

            <div className="stock-status">In stock</div>

            <div className="seller-info">
              <div>Ships from: {product.shipsFrom}</div>
              <div>Sold by: {product.soldBy}</div>
            </div>

            <div className="quantity-selector">
              <label>Quantity: </label>
              <select
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>

            <button className="add-to-cart-button" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button className="buy-now-button" onClick={handleBuyNow}>
              Buy Now (₹{calculateTotalAmount()})
            </button>

            <div className="secure-transaction">
              <i className="fas fa-lock"></i> Secure transaction
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
