import React, { useState } from "react";
import "./Academics.css";

// Import images
import visionImg from "./photos/School-group-img.jpg";
import approachImg from "./photos/school-img6.jpg";
import innovationImg from "./photos/img2.webp";

const Academics = () => {
  const [activeTab, setActiveTab] = useState("vision");
  const [faqOpen, setFaqOpen] = useState(null);

  const toggleFaq = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  return (
    <div className="academic-container">
      {/* Hero Section */}
      <header className="academic-hero">
        <h1 >Academics</h1>
        <p>
          A place where knowledge meets creativity, and students are inspired to
          dream big.
        </p>
      </header>

      {/* Tabs Section */}
      <div className="tabs">
        <button
          className={activeTab === "vision" ? "active" : ""}
          onClick={() => setActiveTab("vision")}
        >
          🌍 Our Vision
        </button>
        <button
          className={activeTab === "approach" ? "active" : ""}
          onClick={() => setActiveTab("approach")}
        >
          📖 Learning Approach
        </button>
        <button
          className={activeTab === "innovation" ? "active" : ""}
          onClick={() => setActiveTab("innovation")}
        >
          🚀 Innovation
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === "vision" && (
          <div className="tab-item">
            <div>
              <h2 class="sub-title">🌍 Our Vision</h2>
              <p>
                We envision creating a learning environment where every child
                flourishes academically, socially, and emotionally. Education
                here is not about exams, but about empowering students to shape
                the future with confidence and compassion.
              </p>
            </div>
            <img src={visionImg} alt="Our Vision" className="tab-img" />
            
          </div>
        )}
        {activeTab === "approach" && (
          <div className="tab-item">
            <div>
              <h2 class="sub-title">📖 Learning Approach</h2>
              <p>
                Our classrooms are hubs of curiosity and collaboration. Through
                hands-on projects, digital learning tools, and personalized
                mentoring, we make learning fun, meaningful, and impactful for
                every student.
              </p>
            </div>
            <img src={approachImg} alt="Learning Approach" className="tab-img" />
            
          </div>
        )}
        {activeTab === "innovation" && (
          <div className="tab-item">
            <div>
              <h2 class="sub-title">🚀 Innovation</h2>
              <p>
                From robotics to creative arts, we integrate innovation into
                everyday education. Students are encouraged to think outside the
                box, experiment, and develop real-world problem-solving skills.
              </p>
            </div>
            <img src={innovationImg} alt="Innovation" className="tab-img" />
            
          </div>
        )}
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h2>💡 Frequently Asked Questions</h2>
        
        <div
          className={`faq-item ${faqOpen === 1 ? "open" : ""}`}
          onClick={() => toggleFaq(1)}
        >
          <h4>🌱 How do you support holistic development?</h4>
          {faqOpen === 1 && (
            <p>
              Along with academics, we emphasize art, sports, leadership, and
              life skills to ensure complete growth of every child.
            </p>
          )}
        </div>
        <div
          className={`faq-item ${faqOpen === 2 ? "open" : ""}`}
          onClick={() => toggleFaq(2)}
        >
          <h4>📚 Do you use modern teaching tools?</h4>
          {faqOpen === 2 && (
            <p>
              Absolutely! Our classrooms are equipped with smart boards,
              e-learning platforms, and innovative teaching methods.
            </p>
          )}
        </div>
        <div
          className={`faq-item ${faqOpen === 3 ? "open" : ""}`}
          onClick={() => toggleFaq(3)}
        >
          <h4>🤝 How do teachers engage with students?</h4>
          {faqOpen === 3 && (
            <p>
              Teachers act as mentors, guiding students individually,
              encouraging curiosity, and celebrating achievements.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Academics;