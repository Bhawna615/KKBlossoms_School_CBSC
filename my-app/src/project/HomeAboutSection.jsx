import React from "react";
import aboutImg from "./photos/img2.webp"; // ✅ Replace with your image path
import "./HomeAboutSection.css";

const HomeAboutSection = () => {
  return (
    <div className="container-fluid">
      <div className="container py-5">
        <div className="row">
          {/* Left Image Section */}
          <div className="col-lg-5 col-md-6 col-12 mb-4 mb-lg-0" style={{ minHeight: "500px" }}>
            <div className="position-relative h-100">
              <img
                className="position-absolute w-100 h-100 home-about-img"
                src={aboutImg}
                alt="About"
                style={{ objectFit: "cover", borderRadius: "10px", boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }}
              />
            </div>
          </div>

          {/* Right Text Section */}
          <div className="col-lg-7 col-md-6 col-12">
            <div className="section-title position-relative mb-4">
              <h6 className="d-inline-block position-relative text-danger text-uppercase pb-2">
                About Us
              </h6>
              <h1 className="display-4">
                Nurturing Young Minds for a Brighter Future
              </h1>
            </div>
            <p>
              At KK Blossoms School, we believe education is more than books—it’s about building 
  curiosity, creativity, and confidence in every child. Our dedicated faculty and 
  innovative learning methods ensure students don’t just learn, but truly thrive. 
  From academics to extracurriculars, we prepare our students to excel in life, 
  embrace challenges, and grow into responsible global citizens.
            </p>

            {/* Stats Section */}
            <div className="row pt-3 mx-0">
              <div className="col-6 col-md-3 px-1 mb-3 mb-md-0">
                <div className="bg-success text-center p-3 p-md-4 rounded">
                  <h1 className="text-white">123+</h1>
                  <h6 className="text-uppercase text-white">Dedicated Teachers</h6>
                </div>
              </div>
              <div className="col-6 col-md-3 px-1 mb-3 mb-md-0">
                <div className="bg-primary text-center p-3 p-md-4 rounded">
                  <h1 className="text-white">2000+</h1>
                  <h6 className="text-uppercase text-white">Happy Students</h6>
                </div>
              </div>
              <div className="col-6 col-md-3 px-1 mb-3 mb-md-0">
                <div className="bg-danger text-center p-3 p-md-4 rounded">
                  <h1 className="text-white">50+</h1>
                  <h6 className="text-uppercase text-white">Smart Classrooms</h6>
                </div>
              </div>
              <div className="col-6 col-md-3 px-1 mb-3 mb-md-0">
                <div className="bg-warning text-center p-3 p-md-4 rounded">
                  <h1 className="text-white">25+</h1>
                  <h6 className="text-uppercase text-white">Years of Excellence</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutSection;
