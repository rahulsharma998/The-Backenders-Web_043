import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppContainer from './components/Login_SignUp/AppContainer'
import Prescription from './components/Preciscription/Prescription'
import Mainpage from './components/Main/mainpage'
import Specialities from'./components/specialties/specialties'
import Records from './components/Records/Records'
import PharmacyStore from './components/NearByPharmacyStore/PharmacyStore'
import ProductDisplay from './components/product-list-page/ProductDisplay'
import ProductPage from './components/Productdetails/ProductPage';
import Checkout from './components/Productdetails/Checkout';
import Cart from './components/Productdetails/Cart';
import { CartProvider } from './components/Productdetails/context/CartContext';
import { ProductProvider } from './components/Productdetails/context/ProductContext';
import './App.css'
// import AppRoutes from './components/Productdetails/routes/Routesss';

function App() {
  return (
<>
<ProductProvider>
  <CartProvider>
      <Router>
      <Routes>
        <Route path="/" element={<Mainpage/>} />
        <Route path='/login' element={<AppContainer/>}/>
        <Route path="/prescription" element={<Prescription/>} />
        <Route path="/specialties" element={<Specialities/>}/>
        <Route path='/records' element={<Records/>} />
        <Route path='/store' element={<PharmacyStore/>} />
        <Route path="/products" element={<ProductDisplay />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  </CartProvider>
</ProductProvider>
</>
  )
}

export default App



// import React from "react";
// import AppContainer from "./Login_SignUp/AppContainer";
// import "./assets/css/style.css";
// import Home from "./Login_SignUp/Home";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Footer from "./Footer/Footer";
// import ProductPage from "./Productdetails/ProductPage"
// import { ProductProvider } from "./context/ProductContext";
// import Cart from "./Productdetails/Cart";
// import Checkout from "./Productdetails/Checkout";

// const App = () => {
//   return (
//     <>
//       <Router>
//         <Routes>
//           <Route path="/" element={<AppContainer />} />
//           <Route path="/home" element={<Home />} />
//         </Routes>
//       </Router>

//       <CategoryGrid />
//       <Footer />
//       <ProductPage />
//       <ProductProvider>
//       <Router>
//         <Routes>
//           <Route path="/product/:id" element={<ProductPage />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/checkout" element={<Checkout />} />
//         </Routes>
//       </Router>
//     </ProductProvider>
//     </>
//   );
// };

// export default App;
