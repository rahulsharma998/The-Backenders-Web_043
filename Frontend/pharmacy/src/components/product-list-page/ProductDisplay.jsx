import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import ProductDisplayCard from "./ProductDisplayCard";
import Navbar from "../Main/Navbar/navbar";

function ProductDisplay() {
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const [filterOption, setFilterOption] = useState("all"); // Filter: "all" by default
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);

  const searchText = searchParams.get("search") || "";
  const category = searchParams.get("category") || "";

  // Fetch products and medicines
  const fetchProductsAndMedicines = async () => {
    setLoading(true);
    try {
      const productsResponse = await axios.get(
        "https://the-backenders-043-1.onrender.com/api/products"
      );
      const medicinesResponse = await axios.get(
        "https://the-backenders-043-1.onrender.com/api/medicines"
      );

      const productsArray = Object.keys(productsResponse.data).map((key) => ({
        id: key,
        ...productsResponse.data[key],
        type: "product", // Identify as product
      }));

      const medicinesArray = Object.keys(medicinesResponse.data).map((key) => ({
        id: key,
        ...medicinesResponse.data[key],
        type: "medicine", // Identify as medicine
      }));

      setProducts([...productsArray, ...medicinesArray]); // Combine both datasets
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }finally{
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductsAndMedicines();
  }, []);

  // Filter and search logic
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchText.toLowerCase()) ||
      product.category.toLowerCase().includes(searchText.toLowerCase());
    
      const matchesCategory = category
      ? product.category.toLowerCase() === category.toLowerCase()
      : true;

    const matchesFilter =
      filterOption === "all" ||
      (filterOption === "product" && product.type === "product") ||
      (filterOption === "medicine" && product.type === "medicine");

    return matchesSearch && matchesCategory && matchesFilter;
  });

  // Sorting logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "lowToHigh") {
      return a.price - b.price;
    } else if (sortOption === "highToLow") {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <>
      <Navbar />
      <div style={{ display: "flex", gap:"15px", padding:"20px" }}>
      <div className="left-section" style={{ width: "300px",paddingLeft:"50px" }}>
      <div className="left-top-section">
          <p>Filters</p>
        </div>
        <hr />
        <div className="left-bottom-section" style={{padding:"15px"}}>
          <ul style={{ listStyleType: "none" }}>
            {/* Filter by Type */}
            <li style={{padding:"2px"}}>
              <label>
                <input
                  type="radio"
                  name="filter"
                  value="all"
                  checked={filterOption === "all"}
                  onChange={(e) => setFilterOption(e.target.value)}
                />
                All
              </label>
            </li>
            <li style={{padding:"2px"}}>
              <label>
                <input
                  type="radio"
                  name="filter"
                  value="product"
                  checked={filterOption === "product"}
                  onChange={(e) => setFilterOption(e.target.value)}
                />
                Products
              </label>
            </li>
            <li style={{padding:"2px"}}>
              <label>
                <input
                  type="radio"
                  name="filter"
                  value="medicine"
                  checked={filterOption === "medicine"}
                  onChange={(e) => setFilterOption(e.target.value)}
                />
                Medicines
              </label>
            </li>

          {/* Filter by Category */}
          <li>
            <label>
              Category:
              <select
                value={category}
                onChange={(e) => searchParams.set("category", e.target.value)}
                style={{ width: "100%", padding: "5px", borderRadius: "5px",marginTop:"5px",marginBottom:"5px" }}
              >
                <option value="">All Categories</option>
                <option value="health">Health</option>
                <option value="beauty">Beauty</option>
                <option value="fitness">Fitness</option>
                {/* Add more categories as needed */}
              </select>
            </label>
            </li>

            {/* Filter by Price */}
            <li>
              <label>
                Price Range:
                <div style={{ display: "flex", marginTop: "5px",flexDirection:"column" }}>
                  <input
                    type="number"
                    placeholder="Min"
                    style={{ width: "100%", marginBottom:"5px",padding:"3px" }}
                    onChange={(e) => setMinPrice(e.target.value)}
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    style={{ width: "100%", padding:"3px"}}
                    onChange={(e) => setMaxPrice(e.target.value)}
                  />
                </div>
              </label>
            </li>
            </ul>
            </div>
      </div>


        {/* Right Section: Sorting and Product List */}
        <div className="right-section" style={{width:"100%",padding:"10px"}}>
          <div className="right-top-section" style={{ display: "flex", justifyContent:"end", paddingRight:"30px"}}>
            <select value={sortOption} onChange={(e) => setSortOption(e.target.value)} style={{padding:"5px", width:"200px",height:"30px", borderRadius:"5px", border:"1px solid #ccc"}}>
              <option value="">Sort By: Relevance</option>
              <option value="lowToHigh">Price: Low to High</option>
              <option value="highToLow">Price: High to Low</option>
            </select>
          </div>
          <div
            className="right-bottom-section"
            style={{ display: "flex", flexWrap: "wrap", gap: "20px", paddingTop:"15px" }}
          >
              {loading ? (<p>Loading...</p>):
                sortedProducts.length === 0 ? (
                  <div style={{ display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center", marginTop: "50px" }}>
                    <img
                      src="https://www.netmeds.com/assets/version1726634759/gloryweb/images/icons/no_search.png" // Replace with your desired "not found" image URL
                      alt="Product Not Found"
                      style={{ maxWidth: "300px", marginBottom: "20px" }}
                    />
                    <p style={{ fontSize: "18px", color: "#555" }}>Product Not Found</p>
                  </div>
                ):(
                  sortedProducts.map((product) => (
                    <ProductDisplayCard
                      key={product.id}
                      image={product.imageUrl}
                      title={product.name}
                      currentPrice={`₹${product.price}`}
                      description={product.description}
                    />
                  ))
                )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDisplay;
