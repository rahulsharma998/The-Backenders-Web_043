import React, { useState, useEffect } from "react";
import "./Carousal.css"; // Add styles for the carousel

const data = [
  {
    image:
      "https://images.apollo247.in/pub/media/magestore/bannerslider/images/h/o/horlicks_women_vitd.jpg?tr=q-80,f-webp,w-450,dpr-3,c-at_max 1350w",
  },
  {
    image:
      "https://images.apollo247.in/pub/media/magestore/bannerslider/images/p/a/pampers_active_baby_app.jpg?tr=q-80,f-webp,w-450,dpr-3,c-at_max 1350w",
  },
  {
    image:
      "https://images.apollo247.in/pub/media/magestore/bannerslider/images/n/u/nutrigro_app.jpg?tr=q-80,f-webp,w-450,dpr-3,c-at_max 1350w",
  },
  {
    image:
      "https://images.apollo247.in/pub/media/magestore/bannerslider/images/r/e/revital_app_web_10.jpg?tr=q-80,f-webp,w-450,dpr-1,c-at_max",
  },
  {
    image:
      "https://images.apollo247.in/pub/media/magestore/bannerslider/images/n/i/nivea_app_1.jpg?tr=q-80,f-webp,w-450,dpr-1,c-at_max",
  },
];

// Helper function to chunk the data into groups of 3
const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length); // Increment index and loop back to the start
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + data.length) % data.length
    ); // Decrement index and loop back to the end
  };

  // Dynamically calculate the three images to display
  const getVisibleImages = () => {
    const visibleImages = [];
    for (let i = 0; i < 3; i++) {
      visibleImages.push(data[(currentIndex + i) % data.length]);
    }
    return visibleImages;
  };

  return (
    <div className="carousel-container">
      <button className="carousel-prev-photo" onClick={handlePrev}>
        Prev
      </button>
      <div className="carousel-card-container">
        {getVisibleImages().map((item, index) => (
          <div key={index} className="carousel-card">
            <img
              src={item.image}
              alt={`Slide ${index}`}
              style={{ height: "170px", borderRadius: "20px" }}
            />
          </div>
        ))}
      </div>
      <button className="carousel-next-photo" onClick={handleNext}>
        Next
      </button>
    </div>
  );
}

export default Carousel;

