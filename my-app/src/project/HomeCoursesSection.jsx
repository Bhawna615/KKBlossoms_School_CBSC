import React from "react";
import "./WhykkBlossoms.css"; // External CSS file
import academicIcon from "./photos/image.png";
import studentLifeIcon from "./photos/Capture.PNG";
import teachingIcon from "./photos/Capture1.PNG";
import activitiesIcon from "./photos/Capture2.PNG";

const features = [
  {
    icon: academicIcon,
    title: "Strong Academic System",
  },
  {
    icon: studentLifeIcon,
    title: "Empowering Student Life",
  },
  {
    icon: teachingIcon,
    title: "Modern Teaching Methods",
  },
  {
    icon: activitiesIcon,
    title: "Wide Range of Activities",
  },
];

const WhyKKBlossoms = () => {
  return (
    <div className="why-kk-container">
      <h2>Why KK Blossoms?</h2>
      <div className="features">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <img src={feature.icon} alt={feature.title} className="feature-icon"style={{height:"100px",width:"130px"}} />
            <p>{feature.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyKKBlossoms;