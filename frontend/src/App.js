import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const STATIC_PRODUCTS = [
  {
    name: "Engagement Ring 1",
    popularityScore: 85,
    weight: 2.1,
    images: {
      yellow:
        "https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG085-100P-Y.jpg?v=1696588368",
      rose: "https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG085-100P-R.jpg?v=1696588406",
      white:
        "https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG085-100P-W.jpg?v=1696588402",
    },
  },
];

function App() {
  const [products, setProducts] = useState(STATIC_PRODUCTS);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
  getProducts();
}, []);


  const getProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:4000/rings");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products", error);
    } finally {
      setLoading(false);
    }
  };

  const scrollCarousel = (direction) => {
    const carousel = document.querySelector(".product-carousel");
    if (carousel) {
      const scrollAmount = direction === "prev" ? -300 : 300;
      carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>PRODUCT LIST</h1>
      <div className="carousel-container">
        <button
          className="carousel-btn prev-btn"
          onClick={() => scrollCarousel("prev")}
        >
          &#8592;
        </button>
        <div className="product-carousel">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
        <button
          className="carousel-btn next-btn"
          onClick={() => scrollCarousel("next")}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}

function ProductCard({ product }) {
  const [selectedColor, setSelectedColor] = useState("yellow");

  return (
    <div className="product-card">
      <img
        src={product.images[selectedColor]}
        alt={`${product.name} - ${selectedColor}`}
        className="product-image"
      />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <p>Popularity: {(product.popularityScore / 100 * 5).toFixed(1)} / 5</p>

      <div className="color-picker">
        {Object.keys(product.images).map((color) => (
          <button
            key={color}
            onClick={() => setSelectedColor(color)}
            className={selectedColor === color ? "active" : ""}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
}



export default App;
