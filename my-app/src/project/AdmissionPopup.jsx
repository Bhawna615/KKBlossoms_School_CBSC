import React from 'react';
import { FaGraduationCap, FaChalkboardTeacher, FaGlobeAmericas, FaShieldAlt } from 'react-icons/fa';
import './AdmissionPopup.css'; // Assuming you have a CSS file for styling
import SchoolImage from './photos/school-img1.jpg';
import GroupImage from './photos/photo2.jpg';

const AdmissionsPopup = ({ onClose }) => {
  return (
    <div className="admissions-popup-overlay">
      <div className="admissions-popup-container">
        <button className="close-button" onClick={onClose}>&times;</button>
        <div className="admissions-content-wrapper">
          
          {/* Left Side: Image and Branding */}
          <div className="admissions-visual">
            <div className="admissions-branding">
              <h2>KK Blossoms</h2>
              <p className="tagline">Inspiring the leaders of tomorrow</p>
            </div>
            
            {/* New container for the images to align them correctly */}
            <div className="admissions-images-section">
              <div className="popup-img-container">
                <img src={GroupImage} alt="A school building" className="popup-img" />
              </div>
              <div className="group-img-container">
                <img src={SchoolImage} alt="A school group" className="group-img" />
              </div>
            </div>

            <div className="admissions-image-overlay"></div>
            <div className="admissions-contact">
              <h4>Admissions Open 2025-26</h4>
              <p>For more details, contact us:</p>
              <a href="tel:9817196968" className="phone-number">
                +91 98171-96968
              </a>
            </div>
          </div>
          
          {/* Right Side: Text and Call-to-Action */}
          <div className="admissions-details">
            <h1 className="admissions-title">Admissions Open 2025-26</h1>
            <p className="admissions-description">
              We believe in nurturing young minds in a vibrant and supportive environment. Our goal is to provide a holistic education that prepares students for a bright future.
            </p> 

            <div className="features-list">
              <div className="feature-item">
                <FaChalkboardTeacher className="feature-icon" />
                <div className="feature-text">
                  <h3>Exceptional Faculty</h3>
                </div>
              </div>

              <div className="feature-item">
                <FaGlobeAmericas className="feature-icon" />
                <div className="feature-text">
                  <h3>Global Curriculum</h3>
                </div>
              </div>

              <div className="feature-item">
                <FaShieldAlt className="feature-icon" />
                <div className="feature-text">
                  <h3>Safe & Supportive</h3>
                </div>
              </div>

              <div className="feature-item">
                <FaGraduationCap className="feature-icon" />
                <div className="feature-text">
                  <h3>Holistic Development</h3>
                </div>
              </div>
            </div>

            <button className="apply-button">
              Apply Now
            </button>
            <p className="limited-seats">Limited seats available. Secure your child's future today!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionsPopup;