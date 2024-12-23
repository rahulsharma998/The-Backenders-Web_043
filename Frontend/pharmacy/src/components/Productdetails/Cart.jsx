import { Link } from "react-router-dom";
import { useCart } from "./context/CartContext";
import Navbar from "../Main/Navbar/navbar";
import "./Cart.css";

function Cart() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const calculateTotal = () => {
    if (cartItems.length === 0) {
      return {
        mrp: 0,
        discount: 0,
        subtotal: 0,
        platformFee: 0,
        total: 0,
      };
    }

    const subtotal = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    const platformFee = 9;
    const discount = cartItems.reduce(
      (acc, item) => acc + (item.mrp - item.price) * item.quantity,
      0
    );
    return {
      mrp: subtotal + discount,
      discount,
      subtotal,
      platformFee,
      total: subtotal + platformFee,
    };
  };

  const totals = calculateTotal();

  return (
    <>
      <Navbar />
      <div className="cart-page">
      <div className="cart-content">
        {cartItems.length > 0 ? (
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p className="brand">By {item.brand}</p>
                  <p className="description">{item.description}</p>
                  <div className="price-info">
                    <span className="price">₹{item.price}</span>
                    {item.mrp > item.price && (
                      <span className="mrp">MRP ₹{item.mrp}</span>
                    )}
                  </div>
                </div>
                <div className="quantity-controls">
                  <select
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, Number(e.target.value))
                    }
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        Qty {num}
                      </option>
                    ))}
                  </select>
                  <img
                    src="https://assets.pharmeasy.in/web-assets/images/icDelete.svg?dim=1440x1440&q=75"
                    onClick={() => removeFromCart(item.id)}
                    alt="delete"
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-cart">
            <h2>Your cart is empty!</h2>
            <p>Add some items to see them here.</p>
          </div>
        )}

        <div className="cart-summary">
          <h3 className="h3">Bill Summary</h3>
          <div className="summary-row">
            <span>MRP Total</span>
            <span>₹{totals.mrp.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Discount</span>
            <span>-₹{totals.discount.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{totals.subtotal.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Platform Fee</span>
            <span>₹{totals.platformFee.toFixed(2)}</span>
          </div>
          <div className="summary-row total">
            <span className="">Total Amount</span>
            <span>₹{totals.total.toFixed(2)}</span>
          </div>

          {cartItems.length > 0 && (
            <button className="button">
              <Link to="/checkout" className="proceed-btn">
                Proceed to Buy
              </Link>
            </button>
          )}
        </div>
      </div>
    </div>
    </>
  );
}

export default Cart;

