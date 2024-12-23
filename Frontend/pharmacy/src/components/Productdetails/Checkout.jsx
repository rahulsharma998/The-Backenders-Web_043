import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCart } from "./context/CartContext";
import Navbar from "../Main/Navbar/navbar";
import "./Checkout.css";

function Checkout() {
  const navigate = useNavigate();
  const { cartItems, address, updateAddress, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardDetails, setCardDetails] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: "",
  });
  const [upiId, setUpiId] = useState("");

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newAddress = {
      fullName: formData.get("fullName"),
      street: formData.get("street"),
      city: formData.get("city"),
      state: formData.get("state"),
      zip: formData.get("zip"),
      phone: formData.get("phone"),
    };
    updateAddress(newAddress);
    alert("Address saved successfully!");
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    if (paymentMethod === "card") {
      if (!validateCardDetails()) {
        alert("Invalid card details. Please check and try again.");
        return;
      }
    }
    if (paymentMethod === "upi" && !upiId) {
      alert("Please enter a valid UPI ID.");
      return;
    }

    alert("Order placed successfully!");
    clearCart(); // Clear the cart after order placement
    navigate("/"); // Navigate to the home page or success page
  };

  // Card Details Validation
  const validateCardDetails = () => {
    const { number, name, expiry, cvv } = cardDetails;
    return (
      number.length === 16 &&
      name.trim().length > 0 &&
      expiry.match(/^(0[1-9]|1[0-2])\/\d{2}$/) &&
      cvv.length === 3
    );
  };

  // Calculate Total Amount
  const calculateTotal = () => {
    const subtotal = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    const shipping = 9; // Flat shipping fee
    return subtotal + shipping;
  };

  return (
    <>
    <Navbar/>
      <div className="chechoutpage">
        <header className="checkout-header">
          <Link to="/cart" className="back-link">
            Back to Cart
          </Link>
          <h3>Checkout</h3>
        </header>
        <div className="checkout-page">
          <div className="checkout-forms">
            <section className="address-section">
              <h2>Shipping Address</h2>
              <form onSubmit={handleAddressSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    required
                    defaultValue={address.fullName}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="street"
                    placeholder="Street Address"
                    required
                    defaultValue={address.street}
                  />
                </div>
                <div className="form-grid">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    required
                    defaultValue={address.city}
                  />
                  <input
                    type="text"
                    name="state"
                    placeholder="State"
                    required
                    defaultValue={address.state}
                  />
                  <input
                    type="text"
                    name="zip"
                    placeholder="ZIP Code"
                    required
                    defaultValue={address.zip}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    defaultValue={address.phone}
                  />
                </div>
                <button type="submit">Save Address</button>
              </form>
            </section>

            <section className="payment-section">
              <h2>Payment Method</h2>
              <div className="payment-methods">
                <label>
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === "card"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  Credit/Debit Card
                </label>
                <label>
                  <input
                    type="radio"
                    name="payment"
                    value="upi"
                    checked={paymentMethod === "upi"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  UPI
                </label>
              </div>

              {paymentMethod === "card" ? (
                <form onSubmit={handlePaymentSubmit} className="card-form">
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Card Number"
                      maxLength="16"
                      required
                      value={cardDetails.number}
                      onChange={(e) =>
                        setCardDetails({
                          ...cardDetails,
                          number: e.target.value.replace(/\D/g, ""),
                        })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Cardholder Name"
                      required
                      value={cardDetails.name}
                      onChange={(e) =>
                        setCardDetails({ ...cardDetails, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-grid">
                    <input
                      type="text"
                      placeholder="MM/YY"
                      maxLength="5"
                      required
                      value={cardDetails.expiry}
                      onChange={(e) =>
                        setCardDetails({
                          ...cardDetails,
                          expiry: e.target.value,
                        })
                      }
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      maxLength="3"
                      required
                      value={cardDetails.cvv}
                      onChange={(e) =>
                        setCardDetails({
                          ...cardDetails,
                          cvv: e.target.value.replace(/\D/g, ""),
                        })
                      }
                    />
                  </div>
                  <button type="submit" className="pay-button">
                    Pay ₹{calculateTotal().toFixed(2)}
                  </button>
                </form>
              ) : (
                <form onSubmit={handlePaymentSubmit} className="upi-form">
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="UPI ID (e.g., name@upi)"
                      required
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="pay-button">
                    Pay ₹{calculateTotal().toFixed(2)}
                  </button>
                </form>
              )}
            </section>
          </div>

          <div className="order-summary">
            <h2>Order Summary</h2>
            {cartItems.map((item) => (
              <div key={item.id} className="summary-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>Qty: {item.quantity}</p>
                  <p className="price">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
            <div className="total">
              <span>Total Amount:</span>
              <span>₹{calculateTotal().toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
