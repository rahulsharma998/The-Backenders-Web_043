import React, { useState, useEffect } from "react";
import "./Carousal.css"; // Updated for responsive styles

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

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    // Function to update visible image count based on screen width
    const updateVisibleCount = () => {
      if (window.innerWidth <= 480) {
        setVisibleCount(1); // Mobile: Show 1 image
      } else if (window.innerWidth <= 1024) {
        setVisibleCount(2); // Tablets: Show 2 images
      } else {
        setVisibleCount(3); // Larger screens: Show 3 images
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", updateVisibleCount);

    // Initial call
    updateVisibleCount();

    return () => {
      window.removeEventListener("resize", updateVisibleCount);
    };
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + data.length) % data.length
    );
  };

  const getVisibleImages = () => {
    const visibleImages = [];
    for (let i = 0; i < visibleCount; i++) {
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
