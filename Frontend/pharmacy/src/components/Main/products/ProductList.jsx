import React from 'react'
import ProductCard from './ProductCard'
import './ProductList.css'
const products = [
  {
    _id: "6766929b8baab8368b431f41",
    name: "Centrum Multivitamin Tablets",
    description: "Essential daily multivitamin for overall health.",
    originalPrice: 400,
    discount: 50,
    currentPrice: 350,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6ayWc0-rYpRr3bkeX7SXGNmjrCsVICq-JGA&s"
  },
  {
    _id: "6766929b8baab8368b431f42",
    name: "Vitamin D3 Capsules",
    description: "Improves bone and immune health.",
    originalPrice: 250,
    discount: 50,
    currentPrice: 200,
    imageUrl: "https://vediherbals.com/cdn/shop/files/Buy-NVD3-50000IU-Natural-Vitamin-D3-Supplement.jpg?v=1718608034"
  },
  {
    _id: "6766929b8baab8368b431f43",
    name: "Omega-3 Fish Oil Capsules",
    description: "Supports heart and brain health.",
    originalPrice: 600,
    discount: 100,
    currentPrice: 500,
    imageUrl: "https://images.apollo247.in/pub/media/catalog/product/i/m/img_20210108_174942__front__omega-3_fish_oil_4__1.jpg"
  },
  {
    _id: "6766929b8baab8368b431f50",
    name: "Ashwagandha Capsules",
    description: "Boosts energy, reduces stress, and improves vitality.",
    originalPrice: 400,
    discount: 50,
    currentPrice: 350,
    imageUrl: "https://himalayawellness.in/cdn/shop/files/Ashwagandha-60caplets-4.jpg?v=1699590911"
  },
  {
    _id: "6766929b8baab8368b431f51",
    name: "Tulsi Herbal Tea",
    description: "Herbal tea with tulsi for immunity and stress relief.",
    originalPrice: 250,
    discount: 50,
    currentPrice: 200,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8xHly2Zk_VekY1H9HVw7PjFuKbS504tO0NQ&s"
  },
  {
    _id: "6766929b8baab8368b431fdd",
    name: "Baby Nasal Aspirator",
    description: "Safe and effective nasal aspirator for your baby’s blocked nose.",
    originalPrice: 500,
    discount: 50,
    currentPrice: 450,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQlLXW-wAJDO5zCo4YNZkkxEJFEKyr5Zb7rQ&s"
  },
  {
    _id: "6766929b8baab8368b431fde",
    name: "Baby Diaper Pail",
    description: "Convenient and odor-free diaper disposal system for your baby.",
    originalPrice: 900,
    discount: 100,
    currentPrice: 800,
    imageUrl: "https://www.parents.com/thmb/e0KRgZ4tSF_zYMHvh4mOEbUy44g=/fit-in/1500x1000/filters:no_upscale():max_bytes(150000):strip_icc()/dekor-classic-hands-free-diaper-pail-7f2e3468e7f240128a4f2f45eccb04f0.jpg"
  },
  {
    _id: "6766929b8baab8368b431fbc",
    name: "Prenatal Vitamins",
    description: "Essential nutrients for women during pregnancy for healthy development.",
    originalPrice: 900,
    discount: 100,
    currentPrice: 800,
    imageUrl: "https://sheneed.in/cdn/shop/products/sheneed-Prenatal-_-Postnatal-Supplements-COMBO-07-get-13_-off-and-save-129_grande.jpg?v=1657281422"
  },
  {
    _id: "6766929b8baab8368b431fbd",
    name: "Magnesium Supplements",
    description: "Supports muscle function and helps with stress relief.",
    originalPrice: 500,
    discount: 50,
    currentPrice: 450,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJiVLrMDyDJUpETxwvRlfr_Q-8OTsI4NKjcA&s"
  },
  {
    _id: "6766929b8baab8368b431fbe",
    name: "Multivitamin Tablets for Women",
    description: "Complete multivitamins for overall health and wellness.",
    originalPrice: 750,
    discount: 100,
    currentPrice: 650,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-bXALj39yx7uVJAOUzBNqOxwhKFVsGPOGDQ&s"
  },
  {
    _id: "6766929b8baab8368b431f9b",
    name: "Women's Deodorant Spray",
    description: "Long-lasting protection against odor with a light floral fragrance.",
    originalPrice: 400,
    discount: 50,
    currentPrice: 350,
    imageUrl: "https://www.skinn.in/dw/image/v2/BKMH_PRD/on/demandware.static/-/Sites-Skinn-product-catalog/default/dw18ab9ac9/images/Skinn/hi-res/FW01DQ1_1.jpg?sw=640"
  },
  {
    _id: "6766929b8baab8368b431f9c",
    name: "Facial Cleanser for Women",
    description: "Gentle cleanser that removes dirt, makeup, and impurities.",
    originalPrice: 450,
    discount: 50,
    currentPrice: 400,
    imageUrl: "https://www.cerave.com/-/media/project/loreal/brand-sites/cerave/americas/us/skincare/cleansers/hydrating-facial-cleanser/photos/2022/700x700/cerave_daily_hydrating-cleanser_12oz_front-700x700-v2.jpg?rev=8dcf681b75c042deaaa0c6ea1581d4df"
  }
]



function ProductList() {
  return (
    <div className="product-container-mp">
      {products.map((product, index) => (
        <ProductCard
        key={index}
        id={product._id}
        image={product.imageUrl}
        title={product.name}
        description={product.description} // Pass description
        currentPrice={product.currentPrice}
        originalPrice={product.originalPrice}
        discount={product.discount}
      />
      ))}
    </div>
  )
}

export default ProductList
