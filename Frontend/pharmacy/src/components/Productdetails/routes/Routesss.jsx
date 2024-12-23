import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "../ProductList";
import ProductPage from "../ProductPage";
import Cart from "../Cart";
import Checkout from "../Checkout";
import { ProductProvider } from "../context/ProductContext";
import { CartProvider } from "../context/CartContext";

const AppRoutes = () => {
  return (
    <ProductProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Router>
      </CartProvider>
    </ProductProvider>
  );
};

export default AppRoutes;
