
import React, { createContext, useContext, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const products = [
    {
      id: 1,
      name: "Carbamide Forte Multivitamin Tablet For Men | Multivitamin for Men With Probiotics For Immunity & Energy and Ginseng | Multivitamin Men with Zinc, Multivitamins, Multiminerals - 180 Veg Tablets ",
      description:
        "Multi vitamin for Men with Ginseng | Multivitamin for Men With Probiotics For Immunity & Energy",
      rating: 4.2,
      totalRatings: "9,003",
      price: 699,
      mrp: 1065,
      discount: 34,
      pricePerCount: 3.88,
      deliveryDate: "Sunday, 22 December",
      fastDeliveryTime: "4 hrs 3 mins",
      location: "New Delhi 110020",
      soldBy: "Amazon Retail",
      shipsFrom: "Amazon",
      expiryDate: "07 MAY 2025",
      size: "180 count (Pack of 1)",
      image: "https://m.media-amazon.com/images/I/81-4dfEqULL._SL1500_.jpg",
    },
  ];

  const addToCart = (product, quantity = 1) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
    calculateTotal();
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
    calculateTotal();
  };

  const updateQuantity = (productId, quantity) => {
    setCart(
      cart.map((item) => (item.id === productId ? { ...item, quantity } : item))
    );
    calculateTotal();
  };

  const calculateTotal = () => {
    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalAmount(total);
  };

  const getProductById = (id) =>
    products.find((product) => product.id === Number(id));

  return (
    <ProductContext.Provider
      value={{
        products,
        cart,
        totalAmount,
        addToCart,
        removeFromCart,
        updateQuantity,
        getProductById,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
