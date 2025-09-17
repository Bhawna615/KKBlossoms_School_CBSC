import React, { useEffect, useState } from "react";
import "./ImageSlider.css";

import img1 from "./photos/img-slider-1.jpg";
import img2 from "./photos/img-slider-2.jpg";
import img3 from "./photos/img-slider-3.jpg";
import img4 from "./photos/img-slider-4.jpg";
import img5 from "./photos/img-slider-5.jpg";
import img6 from "./photos/img-slider-6.jpg";

const ImageSlider = () => {
  const images = [img1, img2, img3, img4, img5, img6];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // change every 3 seconds

    return () => clearInterval(slider);
  }, [images.length]);

  return (
    <div className="slider-container">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`slide-${index}`}
          className={`slider-image ${index === currentIndex ? "active" : ""}`}
        />
      ))}
    </div>
  );
};

export default ImageSlider;