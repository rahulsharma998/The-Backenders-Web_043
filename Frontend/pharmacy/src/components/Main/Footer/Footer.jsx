import React from "react";
import footerlogo from "../../../assets/Images/icons/logo.svg"
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div>
          <hr class="line" />
          <div className="footer-top">
            <div className="footer-stat">
              <div>
                <img
                  src="https://www.netmeds.com/assets/icons/store.png"
                  alt="Stores"
                />
              </div>
              <div>
                <p>
                  <h1>1000+</h1>
                  Offline Stores
                </p>
              </div>
            </div>
            <div className="footer-stat">
              <img
                src="https://www.netmeds.com/assets/icons/location.png"
                alt="Pincodes"
              />
              <p>
                <h1>20000+</h1>
                Pincodes Served
              </p>
            </div>
            <div className="footer-stat">
              <img
                src="https://www.netmeds.com/assets/icons/user.png"
                alt="Customers"
              />
              <p>
                <h1>9M+</h1>
                Happy Customers
              </p>
            </div>
          </div>
        </div>
        <div class="section-container">
          <div class="netmeds-section">
            <img
              src={footerlogo}
              alt="PurePharma  footer-Logo"
              class="footer-logo"
            />
            <p class="description">
              PurePharma.com is one of India’s most trusted pharmacies, dispensing
              quaty medicines at reasonable prices to over 9 million happy
              customers – PAN India.
            </p>
          </div>
          <hr class="line" />
        </div>
        <div className="footer-links">
          <div>
            <h4>COMPANY</h4>
            <ul>
              <h5>About PurePharma</h5>
              <h5>Customers Speak</h5>
              <h5>In the News</h5>
              <h5>Career</h5>
              <h5>Contact</h5>
            </ul>
          </div>
          <div>
            <h4>OUR POLICIES</h4>
            <ul>
              <h5>Terms and Conditions</h5>
              <h5>Privacy Policy</h5>
              <h5>Fees and Payments Policy</h5>
              <h5>Shipping and Delivery Policy</h5>
              <h5>Return, Refund and Cancellation Policy</h5>
              <h5>Editorial Policy</h5>
            </ul>
          </div>
          <div>
            <h4>SHOPPING</h4>
            <ul>
              <h5>Browse by A-Z</h5>
              <h5>Browse by Manufacturers</h5>
              <h5>Health Articles</h5>
              <h5>Offers / Coupons</h5>
              <h5>FAQs</h5>
            </ul>
          </div>
          <div>
            <h4>POPULAR CATEGORIES</h4>
            <ul>
              <h5>Fitness</h5>
              <h5>Devices</h5>
              <h5>Personal Care</h5>
              <h5>Ayurveda</h5>
              <h5>Homeopathy</h5>
            </ul>
          </div>
          <div>
            <h4>SOCIAL</h4>
            <ul>
              <h5>Facebook</h5>
              <h5>Twitter</h5>
              <h5>LinkedIn</h5>
              <h5>YouTube</h5>
              <h5>Instagram</h5>
            </ul>
          </div>
          <div className="newsletter">
            <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
            <h5>
              Get a free subscription to our health and fitness tips and stay
              tuned to our latest offers
            </h5>
            <div className="main-form">
              <div className="form">
                <div>
                  <input type="email" placeholder="Enter your email address" />
                </div>
                <div>
                  <button type="submit">➔</button>
                </div>
              </div>
              <hr />
            </div>

            <div className="apps">
              <img
                src="https://www.netmeds.com/assets/gloryweb/images/icons/play_store.png"
                alt="Google Play"
              />
              <img
                src="https://www.netmeds.com/assets/gloryweb/images/icons/app_store.png"
                alt="App Store"
              />
            </div>
          </div>
        </div>
        <div className="payments">
          <h4>OUR PAYMENT PARTNERS</h4>
          <div className="pantners">
            <img
              src="https://www.netmeds.com/assets/global/images/footer-payment-icon/google-pay.svg"
              alt="google"
            />
            <img
              src="https://www.netmeds.com/assets/global/images/footer-payment-icon/phonepe.svg"
              alt="phonepe"
            />
            <img
              src="https://www.netmeds.com/assets/global/images/footer-payment-icon/paytm.svg"
              alt="paytm"
            />
            <img
              src="https://www.netmeds.com/assets/global/images/footer-payment-icon/simpl.svg"
              alt="simpl"
            />
            <img
              src="https://www.netmeds.com/assets/global/images/footer-payment-icon/rupay.svg"
              alt="rupay"
            />
            <img
              src="https://www.netmeds.com/assets/global/images/footer-payment-icon/visa.svg"
              alt="visa"
            />
            <img
              src="https://www.netmeds.com/assets/global/images/footer-payment-icon/mastercard.svg"
              alt="mastercard"
            />
          </div>
        </div>
        <hr />
        <div className="copyrights">
          <p>Medicine</p>
          <p>Wellness</p>
          <p>Lab Tests</p>
          <p>Beauty</p>
          <p>Copyright© 2024. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
