import React, { useState, useEffect } from "react";
import "./ImageSwapper.css";

// Import images from src/photos
import img1 from "./photos/school-img6.jpg";
import img2 from "./photos/school-img7.jpg";
import img3 from "./photos/school-img5.jpg";
import img4 from "./photos/school-img1.jpg";
import img5 from "./photos/school-img2.jpg";
import img6 from "./photos/school-img3.jpg";

const ImageSwapper = () => {
  const initialImages = [img1, img2, img3, img4, img5, img6];
  const [displayedImages, setDisplayedImages] = useState(initialImages);

  useEffect(() => {
    const interval = setInterval(() => {
      // Rotate images: first image goes to the end
      setDisplayedImages((prev) => {
        const rotated = [...prev];
        const first = rotated.shift(); // remove first
        rotated.push(first);           // add it to the end
        return rotated;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div class="images-wrapper">
    <div className="image-container">
      {displayedImages.map((img, index) => (
        <div key={index} className="image-box">
          <img src={img} alt={`img-${index}`} />
        </div>
      ))}
    </div>
    </div>
    
  );
};

export default ImageSwapper;