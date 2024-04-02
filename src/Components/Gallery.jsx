import React, { useState } from "react";
import "./Gallery.css";

const ImageSlider = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevSlide = () => {
    let newIndex = activeIndex - 1;
    if (newIndex < 0) {
      newIndex = images.length - 1;
    }
    setActiveIndex(newIndex);
  };

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="slider">
      <button className="left-arrow" onClick={goToPrevSlide}>
        &lt;
      </button>
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === activeIndex ? "active" : ""}`}
          style={{ backgroundImage: `url(${image.original})` }}
        ></div>
      ))}
      <button className="right-arrow" onClick={goToNextSlide}>
        &gt;
      </button>
      <div className="indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
