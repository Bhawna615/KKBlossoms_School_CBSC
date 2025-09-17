import React, { useState, useEffect } from "react";
import Slider from './Slider';
import HomeHeader from './HomeHeader';
import HomeAboutSection from './HomeAboutSection';
import HomeWhyChooseUs from './HomeWhyChooseUs';
import HomeCoursesSection from './HomeCoursesSection';
import HomePhotos from './HomePhotos';
import HomeContactSection from './HomeContactSection';
import HomeVideo from './HomeVideo';
import ImageSlider from './ImageSlider';
import ImageSwapper from './ImageSwapper';
import HolisticSection from './HolisticSection';
import AdmissionPopup from "./AdmissionPopup";
function Home() {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
  };
    return (
    <>
      {showPopup && <AdmissionPopup onClose={handleClosePopup} />}
      {!showPopup && (
        <>
          <HomeHeader />
          <ImageSlider />
          <ImageSwapper />
          <HomeAboutSection />
          <Slider />
          <HomeWhyChooseUs />
          <HomeCoursesSection />
          <HomePhotos />
          <HomeVideo />
          <HolisticSection />
          <HomeContactSection />

          {/* Back to Top */}
          <div>
            <a
              href="#"
              className="btn btn-lg btn-primary rounded-circle d-flex align-items-center justify-content-center back-to-top"
              style={{ width: "50px", height: "50px" }}
            >
              <i className="fa fa-angle-double-up"></i>
            </a>
          </div>
        </>
      )}
    </>
  );
}

export default Home;