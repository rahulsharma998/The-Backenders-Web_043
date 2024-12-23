// locationWindow.jsx
import React from 'react';
import { useState } from 'react'
import './locationWindow.css'; // Import the associated CSS for styles

const LocationWindow = ({isOpen,onUpdatePincode}) => {
  const [inputPincode, setInputPincode] = useState('');
  if (!isOpen) return null;

  const handlePincodeUpdate = () =>{
    if(/^\d{6}$/.test(inputPincode)){
      onUpdatePincode(inputPincode);
    }else{
      alert('please enter a valid pincode');
    }
  }
    
  return (
    <div className="location-window">
      <button className="fetch-location-btn">Grant Current Location</button>
      <div className="update-pincode">
        <input
          type="text"
          placeholder="Enter your pincode"
          className="pincode-input"
          value={inputPincode}
          onChange={(e) => setInputPincode(e.target.value)}
        />
        <button className="update-pincode-btn" onClick={handlePincodeUpdate}>Update Pincode</button>
      </div>
    </div>
  );
};

export default LocationWindow;
