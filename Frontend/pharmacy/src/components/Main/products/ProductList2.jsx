import React from 'react'
import ProductCard from './ProductCard'
import './ProductList.css'
const products = [
    {
      name: "Hydrating Face Mask",
      description: "Provides deep hydration to dry skin, leaving it soft and glowing.",
      currentPrice: 280,
      originalPrice: 350,
      discount: 20,
      imageUrl: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1695558519-laneige-65102b6c7f810.jpg?crop=1xw:1xh;center,top&resize=980:*"
    },
    {
      name: "Tea Tree Oil",
      description: "Natural antiseptic oil to treat acne and skin blemishes.",
      currentPrice: 250,
      originalPrice: 300,
      discount: 17,
      imageUrl: "https://images.ctfassets.net/mri7fdzlxw7c/3IoqRHf7IWlsR1DMNmwAE9/b8b4683bc2065806f8afd822c3ed5eff/Tea-tree-conditioner.jpg?fm=jpg&q=75"
    },
    {
      name: "Moisturizing Body Lotion",
      description: "Keeps skin hydrated for long hours with a refreshing fragrance.",
      currentPrice: 300,
      originalPrice: 350,
      discount: 14,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvUrh6Vs_Q777XbeZ6YqZHXv7EW_rDt1ngiA&s"
    },
    {
      name: "Exfoliating Scrub",
      description: "Gently exfoliates and removes dead skin cells for smoother skin.",
      currentPrice: 200,
      originalPrice: 250,
      discount: 20,
      imageUrl: "https://www.mcaffeine.com/cdn/shop/products/1_3_ddd6f872-4894-46b1-9e1f-4006de87d81c.jpg?v=1661770055"
    },
    {
      name: "Face Wash - For Oily Skin",
      description: "Removes excess oil and cleanses pores without over-drying the skin.",
      currentPrice: 150,
      originalPrice: 180,
      discount: 17,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf8LfbpGpyNsi8j0TtpwMol7i-LBOQu5xP_g&s"
    },
    {
      name: "Brightening Night Cream",
      description: "Fades dark spots and brightens skin overnight.",
      currentPrice: 400,
      originalPrice: 450,
      discount: 11,
      imageUrl: "https://cdn.shopaccino.com/cutiskart/products/cetaphil-brightening-night-serum-50gm-145782_l.jpg?v=392"
    },
    {
      name: "Aloe Vera Gel",
      description: "Soothes and hydrates skin with natural aloe vera.",
      currentPrice: 180,
      originalPrice: 220,
      discount: 18,
      imageUrl: "https://himalayawellness.in/cdn/shop/products/Aloe-Vera-Refreshing-Body-Gel-300ml_FOP_1024x1024.jpg?v=1670397702"
    },
    {
      name: "Chyawanprash",
      description: "Traditional Ayurvedic immunity booster with herbs and spices.",
      currentPrice: 500,
      originalPrice: 550,
      discount: 9,
      imageUrl: "https://images.apollo247.in/pub/media/catalog/product/P/A/PAT0254_1-AUG23_1.jpg"
    },
    {
      name: "Feminine Wipes",
      description: "Convenient and gentle wipes for feminine hygiene and freshness on the go.",
      currentPrice: 200,
      originalPrice: 250,
      discount: 20,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGs2bFCumrcfCg6bznQaeI7r1quNOd7LG7kA&s"
    },
    {
      name: "Feminine Hygiene Spray",
      description: "Freshens up and eliminates odors with a gentle, alcohol-free spray.",
      currentPrice: 250,
      originalPrice: 300,
      discount: 17,
      imageUrl: "https://5.imimg.com/data5/SELLER/Default/2023/6/314944605/CY/FD/BL/187783086/100-female-hygiene-care-fem-o-fr-500x500.jpg"
    },
    {
      name: "Feminine Wash - With Aloe Vera",
      description: "Soothes and protects the intimate area with natural aloe vera extract.",
      currentPrice: 300,
      originalPrice: 350,
      discount: 14,
      imageUrl: "https://www.billjumla.com/cdn/shop/products/CWL060007_1024x1024.jpg?v=1603185352"
    },
    {
      name: "Intimate Gel - pH Balanced",
      description: "Maintains natural pH balance while keeping you fresh and comfortable.",
      currentPrice: 350,
      originalPrice: 400,
      discount: 13,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vjTh5xVRa6h9ARXfNJEykcns0e5Sl5_w4g&s"
    }
  ]
  

function ProductList2() {
  return (
    <>
    <div className="product-container-mp">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          image={product.imageUrl}
          title={product.name}
          currentPrice={product.currentPrice}
          originalPrice={product.originalPrice}
          discount={product.discount}
        />
      ))}
    </div>
    </>
  )
}

export default ProductList2
