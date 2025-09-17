import React from "react";
import "./HomeContactSection.css";

const HomeContactSection = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Contact Info */}
          <div className="col-lg-5 col-md-12 mb-4 mb-lg-0 contact-info-col">
            <div
              className="bg-light d-flex flex-column justify-content-center px-5"
              style={{ height: "450px",borderRadius:"15px" }}
            >
              <div className="d-flex align-items-center mb-5">
                <div className="btn-icon bg-primary mr-4"style={{borderRadius:"50%"}}>
                  <i className="fa fa-2x fa-map-marker-alt text-white"></i>
                </div>
                <div className="mt-n1">
                  <h4>Our Location</h4>
                  <p className="m-0">Rabaun, Solan, Himachal Pradesh</p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-5">
                <div className="btn-icon bg-danger mr-4"style={{borderRadius:"50%"}}>
                  <i className="fa fa-2x fa-phone-alt text-white"></i>
                </div>
                <div className="mt-n1">
                  <h4>Call Us</h4>
                  <p className="m-0">98171-96968</p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="btn-icon bg-warning mr-4"style={{borderRadius:"50%"}}>
                  <i className="fa fa-2x fa-envelope text-white"></i>
                </div>
                <div className="mt-n1">
                  <h4>Email Us</h4>
                  <a href="mailto:blossomsactivity.sol@gmail.com"style={{textDecoration: "none",color: "inherit", border: "none"}}>
                    blossomsactivity.sol@gmail.com
                    </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7 col-md-12 contact-form-col">
            <div className="section-title position-relative mb-4">
              <h6 className="d-inline-block position-relative text-danger text-uppercase pb-2">
                Need Help?
              </h6>
              <h1 className="display-4">Send Us A Message</h1>
            </div>
            <div className="contact-form">
              <form>
                <div className="row">
                  <div className="col-6 form-group">
                    <input
                      type="text"
                      className="form-control border-top-0 border-right-0 border-left-0 p-0"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col-6 form-group">
                    <input
                      type="email"
                      className="form-control border-top-0 border-right-0 border-left-0 p-0"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control border-top-0 border-right-0 border-left-0 p-0"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control border-top-0 border-right-0 border-left-0 p-0"
                    rows="5"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div>
                  <button className="btn btn-primary py-3 px-5" type="submit"style={{borderRadius:"10px"}}>
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContactSection;
