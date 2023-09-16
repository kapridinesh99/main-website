import React, { useState, useEffect } from "react";
import "./style.css";
import { banner1, banner2, banner3, banner4, banner5 } from "../../../Assets/index.js";

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const images = [banner1, banner2, banner3, banner4, banner5];

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(interval);
  }, [current]);

  const nextImage = () => {
    setCurrent((current + 1) % images.length);
  };

  const jumpImage = (index) => {
    setCurrent(index);
  };

  return (
    <div className="gallery-container">
      <div className="gallery-track">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide-image ${index === current ? "active" : ""}`}
            style={{
              backgroundImage: `url(${image})`,
              transform: `translateX(${(index - current) * 100}%)`,
            }}></div>
        ))}
      </div>
      <div className="gallery-footer">
        {images.map((image, index) => (
          <div
            key={index}
            className="bubble-outer"
            onClick={() => jumpImage(index)}
            id={index}>
            <div className="bubble-inner" id={index}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
