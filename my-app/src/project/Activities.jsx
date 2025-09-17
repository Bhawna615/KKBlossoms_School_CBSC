import React, { useState } from "react";
import "./Activities.css";

import sportsImg from "./photos/Sport-img1.webp";
import artsImg from "./photos/school-img6.jpg";
import musicImg from "./photos/music-img.jpg";
import clubsImg from "./photos/school-img7.jpg";
import eventsImg from "./photos/Goup-img.png";
import sports from "./photos/Sport-img.webp";
import students from "./photos/school-img5.jpg"
import groupActivity from "./photos/school-img6.jpg"
const Activities = () => {
  const [activeTab, setActiveTab] = useState("Sports");

  const activityContent = {
    Sports: {
      title: "🏅 Sports & Fitness",
      desc: "From cricket to yoga, our school provides a wide range of sports facilities. Students are encouraged to participate in athletics, team sports, and fitness programs that foster discipline, teamwork, and resilience.",
      img: sportsImg,
    },
    Arts: {
      title: "🎨 Arts & Creativity",
      desc: "We believe in nurturing creativity. Our art studio is a space for students to express themselves through painting, sketching, and sculpture while developing aesthetic skills and imagination.",
      img: artsImg,
    },
    Music: {
      title: "🎵 Music & Dance",
      desc: "Music and dance form an integral part of our curriculum. From classical to contemporary, students engage in learning instruments, singing, and performing on stage with confidence.",
      img: musicImg,
    },
    Clubs: {
      title: "🤝 Clubs & Societies",
      desc: "A variety of clubs like Science Club, Debate Club, and Eco Club empower students to pursue their interests, develop leadership skills, and work collaboratively towards meaningful projects.",
      img: clubsImg,
    },
    Events: {
      title: "🎉 Annual Events & Celebrations",
      desc: "Our vibrant campus celebrates cultural festivals, annual day functions, exhibitions, and competitions, making learning a joyful and memorable experience.",
      img: eventsImg,
    },
  };

  return (
    <div className="activities-container">
      {/* Hero Section */}
      <header className="activities-hero">
        <div className="hero-container">
       <h1> Student Activities</h1>
        <p>
          Building confidence, creativity, and teamwork through engaging
          activities and experiences.
        </p>
        </div>
        
      </header>

      {/* Tabs Section */}
      <div className="tabs">
        {Object.keys(activityContent).map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="tab-content">
        <h2 className="sub-title">{activityContent[activeTab].title}</h2>
        <p>{activityContent[activeTab].desc}</p>
        <img src={activityContent[activeTab].img} alt={activeTab} />
      </div>

      {/* Gallery Section */}
      <section className="gallery">
        <h2>📸 Glimpses of Activities</h2>
        <div className="gallery-grid">
          <img src={sports} alt="Sports" height={"200px"}width={"350px"}/>
          <img src={students} alt="Arts" height={"200px"}width={"350px"}/>
          <img src={groupActivity} alt="Music" height={"200px"}width={"350px"}/>
          <img src={clubsImg} alt="Clubs"height={"200px"}width={"350px"} />
        </div>
      </section>
    </div>
  );
};

export default Activities;