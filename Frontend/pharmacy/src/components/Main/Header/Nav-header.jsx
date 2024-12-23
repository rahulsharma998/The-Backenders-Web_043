import React from 'react'
import { useNavigate } from 'react-router-dom';

function Navheader() {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    // Update the category query parameter in the URL
    navigate(`/products?category=${category}`);
  };
  return (
    <div className="p-tag-container">
        
      <p onClick={() => handleCategoryClick('health')}>Buy Medicines</p>
      <p onClick={() => handleCategoryClick('Baby Care')}>Baby Care</p>
      <p onClick={() => handleCategoryClick('Fitness')}>Nutrition Drink & Supplements</p>
      <p onClick={() => handleCategoryClick('Women Care')}>Women Care</p>
      <p onClick={() => handleCategoryClick('Personal Care')}>Personal Care</p>
      <p onClick={() => handleCategoryClick('Ayurveda')}>Ayurveda</p>
      <p onClick={() => handleCategoryClick('health-devices')}>Health Devices</p>
      <p onClick={() => handleCategoryClick('health-essentials')}>Health Essentials</p>
      <p onClick={() => handleCategoryClick('health-condition')}>Health Condition</p>

    </div>
  )
}

export default Navheader
