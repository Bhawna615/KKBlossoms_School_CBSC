import React from "react";
import teamImg1 from "./photos/photo1.jpg";
import teamImg2 from "./photos/photo2.jpg";
import teamImg3 from "./photos/photo3.jpg";
import teamImg4 from "./photos/photo4.jpg";

const instructors = [
  { img: teamImg1, name: "Class1", role: "National Anthem" },
  { img: teamImg2, name: "Class2", role: "National Anthem" },
  { img: teamImg3, name: "Class3", role: "National Anthem" },
  { img: teamImg4, name: "Class4", role: "National Anthem" },
];

const HomePhotos = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        {/* Section Heading */}
        <div className="section-title text-center position-relative mb-5">
          <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">
            Activities
          </h6>
          <h1 className="display-4">Independence Day Activity</h1>
        </div>

        {/* Instructor Carousel */}
        <div
          className="owl-carousel team-carousel position-relative"
          style={{ padding: "0 30px" }}
        >
          {instructors.map((instructor, index) => (
            <div className="team-item" key={index}>
              <img
                className="img-fluid w-100"
                src={instructor.img}
                alt={instructor.name}
              />
              <div className="bg-light text-center p-4">
                <h5 className="mb-3">{instructor.name}</h5>
                <p className="mb-2">{instructor.role}</p>
                <div className="d-flex justify-content-center">
                  <a className="mx-1 p-1" href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="mx-1 p-1" href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="mx-1 p-1" href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a className="mx-1 p-1" href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a className="mx-1 p-1" href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePhotos;
