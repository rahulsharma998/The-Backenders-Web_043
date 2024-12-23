import React from "react";
import { useNavigate } from "react-router-dom";
import "./CategoryGrid.css";

const categories = [
  { image: "https://www.netmeds.com/images/category/v1/3226/thumb/co_q_1.png", title: "coq10" },
  { image: "https://www.netmeds.com/images/category/v1/3224/thumb/biotins_1.png", title: "Biotins" },
  { image: "https://www.netmeds.com/images/category/v1/3228/thumb/multi_vitamins_1.png", title: "multivitamins" },
  { image: "https://www.netmeds.com/images/category/prod/thumb/ayurvedic.png", title: "Ayurvedic" },
  { image: "https://www.netmeds.com/images/category/prod/thumb/shampoos.png", title: "shampoos" },
  { image: "https://www.netmeds.com/images/category/prod/thumb/orthopaedics.png", title: "Orthopedics" },
  { image: "https://www.netmeds.com/images/category/v1/3087/thumb/feminine_hygiene_2.png", title: "Women's Hygiene" },
  { image: "https://www.netmeds.com/images/category/prod/thumb/face_wash_cleansers.png", title: "face-wash" },
  { image: "https://www.netmeds.com/images/category/prod/thumb/creams_oils_lotions.png", title: "creams-and-oils" },
  { image: "https://www.netmeds.com/images/category/prod/thumb/skin_care.png", title: "Skin Care" },
  { image: "https://www.netmeds.com/images/category/prod/thumb/mens_grooming.png", title: "Grooming" },
  { image: "https://www.netmeds.com/images/category/prod/thumb/fitness.png", title: "Fitness" },
];

const CategoryGrid = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/products?category=${category}`);
  };
  return (
    <div className="category-grid">
      <h2>Shop by Category</h2>
      <div className="category-container">
        {categories.map((category, index) => (
          <div key={index} className="category-card" onClick={() => handleCategoryClick(category.title)} >
            <img src={category.image} alt={category.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
