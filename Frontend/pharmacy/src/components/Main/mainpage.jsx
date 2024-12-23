import React from 'react'
import CategoryGrid from './CategoryGrid/CategoryGrid'
import Header from './Header/Header'
import Navbar from './Navbar/navbar'
import AutoCarousal from './carousal/AutoCarousal'
import ProductList from './products/ProductList'
import Footer from './Footer/Footer'
import Carousel from './carousal/Carousal'
import Chatbot from './chatbot/chatbot'
import ProductList2 from './products/ProductList2'

function Mainpage() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <CategoryGrid/>
      <AutoCarousal/>
      <ProductList/>
      <Carousel/>
      <ProductList2/>
      {/*<Chatbot/>*/}
      <Footer/>
    </div>
  )
}

export default Mainpage
