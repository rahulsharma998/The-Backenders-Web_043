import React from "react";
import { Link } from "react-router-dom";
import { useProduct } from "./context/ProductContext";
const ProductList = () => {
  const { products } = useProduct();
  return (
    <div className="product-list">
      {products.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id}>
          <div className="product-card">
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "150px" }}
            />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default ProductList;
