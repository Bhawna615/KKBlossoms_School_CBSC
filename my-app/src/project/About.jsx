
import React from "react";
import "./About.css";

import schoolBuilding from "./photos/school-img1.jpg";
import studentsPlaying from "./photos/img5.webp";
import classroom from "./photos/school-img6.jpg";
import library from "./photos/img7.jpg";
import sportsDay from "./photos/img5.webp";

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <img src={schoolBuilding} alt="KK Blossoms School" />
        <div className="hero-text">
          <h1>About Us</h1>
          <p class="about-desc">
            At Blossoms, we believe in preparing students for life, not just for exams. Our curriculum goes beyond academic excellence, fostering a deep sense of curiosity and a lifelong passion for learning. We empower students to thrive in a competitive world by developing them into well-rounded individuals who are intellectually engaged and socially aware. 
           
          </p>
        </div>
      </section>

      {/* Quote Section */}
      <section className="quote-section">
        <blockquote class="quote" >
          Education is not the filling of a pail, but the lighting of a fire.
        </blockquote>
      </section>

      {/* Our Vision & Mission */}
      <section className="vision-mission">
        <div className="card">
          <h2>Our Vision</h2>
          <p class="card-desc">
            To create an inspiring and inclusive environment where creativity,
            curiosity, and critical thinking thrive. We envision students who
            are confident, compassionate, and capable of making a positive impact
            in society.
          </p>
        </div>
        <div className="card">
          <h2>Beyond the Classroom</h2>
          <p class="card-desc">
            At Blossoms, we believe in preparing students for life, not just for exams. Our curriculum goes beyond academic excellence, fostering a deep sense of curiosity and a lifelong passion for learning. 
            
          </p>
        </div>
        <div className="card">
          <h2>Our Mission</h2>
          <p class="card-desc">
            To empower students with knowledge, skills, and values that prepare
            them to excel in academics, social interactions, and life-long learning.
            We focus on nurturing individual potential and encouraging holistic growth.
          </p>
        </div>
      </section>
<section className="quote-section">
    <blockquote class="quote">
          At KK Blossoms, every child is empowered to explore, learn, and grow with confidence.
        </blockquote>
</section>
      {/* Gallery Section */}
      <section className="gallery">
        <h2>Our School Life</h2>
        <div className="gallery-images">
          <div className="gallery-card hover-zoom">
            <img src={studentsPlaying} alt="Students playing" />
            <p class="card-desc">Fun and games on the playground</p>
          </div>
          <div className="gallery-card hover-zoom">
            <img src={classroom} alt="Classroom" />
            <p class="card-desc">Interactive learning in classrooms</p>
          </div>
          <div className="gallery-card hover-zoom">
            <img src={library} alt="Library" />
            <p class="card-desc">Our well-stocked library for curious minds</p>
          </div>
          <div className="gallery-card hover-zoom">
            <img src={sportsDay} alt="Sports Day" />
            <p class="card-desc">Celebrating talent during Sports Day</p>
          </div>
        </div>
      </section>

      {/* Interactive Info Section */}
      <section className="interactive-section">
        <h2>Why Choose KK Blossoms?</h2>
        <div className="info-boxes">
          <div className="info-box flip-box">
            <div className="front">
              <h3>Experienced Teachers</h3>
              <p>Guiding students with knowledge and care.</p>
            </div>
            <div className="back">
              <p>Our educators focus on personalized learning and mentoring.</p>
            </div>
          </div>
          <div className="info-box flip-box">
            <div className="front">
              <h3>Modern Infrastructure</h3>
              <p>Safe and advanced facilities for learning.</p>
            </div>
            <div className="back">
              <p>Smart classrooms, labs, playgrounds, and libraries support holistic growth.</p>
            </div>
          </div>
          <div className="info-box flip-box">
            <div className="front">
              <h3>Holistic Curriculum</h3>
              <p>Balanced academics and extracurricular activities.</p>
            </div>
            <div className="back">
              <p>We emphasize sports, arts, life skills, and community engagement.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;