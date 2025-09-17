import React from "react";
import "./HolisticSection.css";

// Import your images
import danceImg from "./photos/photo5.jpg";
import musicImg from "./photos/img6.webp";
import sportsImg from "./photos/img5.webp";
import clubsImg from "./photos/school-img7.jpg";
import yogaImg from "./photos/img7.jpg";

const HolisticSection = () => {
  return (
    <div className="holistic-section">
      <h3 className="section-title">Holistic Educational Approach</h3>

      <div className="holistic-row">
        {/* Left side big image */}
        <div className="holistic-left">
          <img src={danceImg} alt="Dance" className="img_res" />
          <h3 className="overlay-title">Dance</h3>
        </div>

        {/* Right side grid */}
        <div className="holistic-right">
          <div className="grid-item">
            <img src={musicImg} alt="Music" className="img_res" />
            <h3 className="overlay-title">Drawing</h3>
          </div>
          <div className="grid-item">
            <img src={sportsImg} alt="Sports" className="img_res" />
            <h3 className="overlay-title">Sports</h3>
          </div>
          <div className="grid-item">
            <img src={clubsImg} alt="Clubs" className="img_res" />
            <h3 className="overlay-title">Clubs</h3>
          </div>
          <div className="grid-item">
            <img src={yogaImg} alt="Yoga" className="img_res" />
            <h3 className="overlay-title">Debut</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HolisticSection;