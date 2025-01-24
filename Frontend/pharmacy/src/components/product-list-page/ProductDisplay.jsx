import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import ProductDisplayCard from "./ProductDisplayCard";
import Navbar from "../Main/Navbar/navbar";

function ProductDisplay() {
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const [filterOption, setFilterOption] = useState("all");
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [error, setError] = useState("");

  const searchText = searchParams.get("search") || "";
  const category = searchParams.get("category") || "";

  // Fetch products and medicines
  const fetchProductsAndMedicines = async () => {
    setLoading(true);
    setError("");
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
        type: "product",
      }));

      const medicinesArray = Object.keys(medicinesResponse.data).map((key) => ({
        id: key,
        ...medicinesResponse.data[key],
        type: "medicine",
      }));

      setProducts([...productsArray, ...medicinesArray]);
    } catch (error) {
      setError("Failed to load products. Please try again later.");
      console.error("Error fetching data:", error.message);
    } finally {
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

    const matchesPrice =
      (!minPrice || product.price >= parseFloat(minPrice)) &&
      (!maxPrice || product.price <= parseFloat(maxPrice));

    return matchesSearch && matchesCategory && matchesFilter && matchesPrice;
  });

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    setSelectedCategory(newCategory);
    searchParams.set("category", newCategory);
    setSearchParams(searchParams);
  };

  const handleMinPriceChange = (e) => {
    const value = e.target.value;
    if (value >= 0) setMinPrice(value);
  };

  const handleMaxPriceChange = (e) => {
    const value = e.target.value;
    if (value >= 0) setMaxPrice(value);
  };

  // Sorting logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "lowToHigh") {
      return a.price - b.price;
    } else if (sortOption === "highToLow") {
      return b.price - a.price;
    }
    return 0;
  });

  const styles = {
    filterContainer: { width: "300px", paddingLeft: "50px" },
    filterSection: { padding: "15px" },
    filterInput: { width: "100%", padding: "5px", borderRadius: "5px" },
    productNotFound: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "50px",
    },
  };

  return (
    <>
      <Navbar />
      <div style={{ display: "flex", gap: "15px", padding: "20px" }}>
        <div className="left-section" style={styles.filterContainer}>
          <div className="left-top-section">
            <p>Filters</p>
          </div>
          <hr />
          <div className="left-bottom-section" style={styles.filterSection}>
            <ul style={{ listStyleType: "none" }}>
              <li style={{ padding: "2px" }}>
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
              <li style={{ padding: "2px" }}>
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
              <li style={{ padding: "2px" }}>
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
              <li>
                <label>
                  Category:
                  <select
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    style={styles.filterInput}
                  >
                    <option value="">All Categories</option>
                    <option value="health">Health</option>
                    <option value="beauty">Beauty</option>
                    <option value="fitness">Fitness</option>
                  </select>
                </label>
              </li>
              <li>
                <label>
                  Price Range:
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <input
                      type="number"
                      placeholder="Min"
                      style={styles.filterInput}
                      onChange={handleMinPriceChange}
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      style={styles.filterInput}
                      onChange={handleMaxPriceChange}
                    />
                  </div>
                </label>
              </li>
            </ul>
          </div>
        </div>

        <div className="right-section" style={{ width: "100%", padding: "10px" }}>
          <div className="right-top-section" style={{ display: "flex", justifyContent: "end" }}>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              style={{ padding: "5px", width: "200px", height: "30px", borderRadius: "5px" }}
            >
              <option value="">Sort By: Relevance</option>
              <option value="lowToHigh">Price: Low to High</option>
              <option value="highToLow">Price: High to Low</option>
            </select>
          </div>
          <div
            className="right-bottom-section"
            style={{ display: "flex", flexWrap: "wrap", gap: "20px", paddingTop: "15px" }}
          >
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p style={{ color: "red" }}>{error}</p>
            ) : sortedProducts.length === 0 ? (
              <div style={styles.productNotFound}>
                <img
                  src="https://www.netmeds.com/assets/version1726634759/gloryweb/images/icons/no_search.png"
                  alt="Product Not Found"
                  style={{ maxWidth: "300px", marginBottom: "20px" }}
                />
                <p style={{ fontSize: "18px", color: "#555" }}>Product Not Found</p>
              </div>
            ) : (
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