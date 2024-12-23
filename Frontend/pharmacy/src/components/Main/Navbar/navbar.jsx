import React from 'react';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../Productdetails/context/CartContext';
import logo from '../../../assets/Images/icons/logo.svg';
import locationLogo from '../../../assets/Images/icons/locationLogo.svg';
import arrow from '../../../assets/Images/icons/arrow.svg';
import cartIcon from '../../../assets/Images/icons/shopping-cart.svg';
import LocationWindow from './location-window/locationWindow';
import './navbar.css';
import Navheader from '../Header/Nav-header';
import Search from './search';

const Navbar = () => {
  const [isRotated, setIsRotated] = useState(false);
  const [isLocationWindowOpen, setIsLocationWindowOpen] = useState(false);
  const [pincode, setPincode] = useState('');
  const [searchTerm, setSearchTerm] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const { cartItems } = useCart();

  const cartItemCount = cartItems.length;

  const handleClick = () => {
    setIsRotated(!isRotated);
    setIsLocationWindowOpen(!isLocationWindowOpen);
  };

  const handleUpdatePincode = (newPincode) => {
    setPincode(newPincode);
    setIsLocationWindowOpen(false); 
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    navigate(`/products?search=${encodeURIComponent(term)}`);
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/"); 
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <nav>
      <div className="navbar">
          {/* First Section */}
          <div className="first-section">
            <div className="logo">
              <Link to='/'>
                <img src={logo} alt="site-logo" />
              </Link>
            </div>
            <div className="loc-logo">
              <img src={locationLogo} alt="location logo" />
              <div className="location-label">
                <label htmlFor=""className='label-1'>Delivery Address</label>
                <label htmlFor="" className='label-2'>{pincode || "Enter Pincode"}</label>
              </div>
            </div>
            <button
              className="arrow-btn-for-location-change"
              onClick={handleClick}
            >
              <img
                src={arrow}
                alt="Arrow"
                className={isRotated ? 'rotated' : ''}
              />
            </button>
          </div>

          {/* Location Window */}
          <LocationWindow
            isOpen={isLocationWindowOpen}
            onUpdatePincode = {handleUpdatePincode}
          />

          {/* Second Section */}
          <Search onSearch={handleSearch} />

            {/* Third Section */}
          <div className="third-section">
            <Link to={`/cart`}>
            <div className="shopping-cart">
              <img src={cartIcon} alt="Shopping Cart" />
              {cartItemCount > 0 && (
                <span className="cart-count">{cartItemCount}</span>
              )}
            </div>
            </Link>
            {isAuthenticated ? (
            <button className="login-btn" onClick={handleLogout}>Logout</button>
          ) : (
            <Link to="/login">
              <button className="login-btn">Login</button>
            </Link>
          )}
          </div>
      </div>
      <Navheader/>
    </nav>
    
  );
};

export default Navbar;

