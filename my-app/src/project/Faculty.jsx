import React from "react";
import "./Faculty.css";

// Sample images
import teacher1 from "./photos/img3.webp";
import teacher2 from "./photos/img2.webp";
import teacher3 from "./photos/img4.jpg";

const Faculty = () => {
  const staffList = [
    {
      name: "John Doe",
      role: "Principal",
      qualification: "M.Ed., 20+ years of experience",
      description:
        "Provides visionary leadership and ensures the holistic growth of students and teachers.",
      img: teacher1,
    },
    {
      name: "Jane Smith",
      role: "Math Teacher",
      qualification: "M.Sc. Mathematics, B.Ed.",
      description:
        "Specializes in simplifying complex math concepts and encourages problem-solving skills.",
      img: teacher2,
    },
    {
      name: "Robert Brown",
      role: "Science Teacher",
      qualification: "M.Sc. Physics, Ph.D. Research Scholar",
      description:
        "Passionate about hands-on experiments and motivating students to explore scientific innovations.",
      img: teacher3,
    },
    {
      name: "Emily White",
      role: "English Teacher",
      qualification: "M.A. English Literature, B.Ed.",
      description:
        "Focuses on language fluency, creative writing, and instilling a love for literature.",
      img: teacher1,
    },
    {
      name: "Michael Green",
      role: "Sports Teacher",
      qualification: "B.P.Ed., Diploma in Sports Training",
      description:
        "Dedicated to fitness and sportsmanship, with experience training state-level athletes.",
      img: teacher2,
    },
  ];

  return (
    <div className="faculty-container">
      {/* Hero Section */}
      <header className="faculty-hero">
        <div className="hero-text">
          <h1>Our Dedicated Faculty</h1>
          <p>Passionate educators shaping the leaders of tomorrow</p>
        </div>
      </header>

      {/* Staff Section */}
      <section className="staff-section">
        <div className="staff-grid">
          {staffList.map((staff, index) => (
            <div key={index} className="staff-card">
              <div className="staff-img">
                <img src={staff.img} alt={staff.name} />
              </div>
              <div className="staff-info">
                <h3>{staff.name}</h3>
                <p className="staff-role">{staff.role}</p>
                <p className="staff-qualification">{staff.qualification}</p>
                <p className="staff-description">{staff.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

     
    </div>
  );
};

export default Faculty;