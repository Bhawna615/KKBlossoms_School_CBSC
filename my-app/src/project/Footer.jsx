import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      {/* Main Footer Section */}
      <div
        className="container-fluid position-relative overlay-top bg-dark text-white-50 py-5"
        style={{ marginTop: "90px" }}
      >
        <div className="container mt-5 pt-5">
          <div className="row">
            {/* Logo and About */}
            <div className="col-md-6 col-12 mb-4 mb-md-5 footer-logo-col">
              <a href="index.html" className="navbar-brand">
                <h1 className="mt-n2 text-uppercase text-white">
                  <i className="fa fa-book-reader mr-3"></i>KK Blossoms
                </h1>
              </a>
            
            </div>

          
          </div>

          {/* Footer Links */}
          <div className="row">
            {/* Contact */}
            <div className="col-md-5 col-12 footer-contact-col">
              <h3 className="text-white mb-4">Get In Touch</h3>
              <div className="d-flex justify-content-start mt-4">
                <a className="text-white mr-4" href="#" style={{fontSize:"15px"}}>
                  <i className="fab fa-2x fa-twitter"></i>
                </a>
                <a className="text-white mr-4" href="#" style={{fontSize:"15px"}}>
                  <i className="fab fa-2x fa-facebook-f"></i>
                </a>
                <a className="text-white mr-4" href="#"style={{fontSize:"15px"}}>
                  <i className="fab fa-2x fa-linkedin-in"></i>
                </a>
                <a className="text-white" href="#"style={{fontSize:"15px"}}>
                  <i className="fab fa-2x fa-instagram"></i>
                </a>
              </div>
            </div>
                 <div className="col-md-4 col-12  mb-md-0 footer-address-col">
                   <p>
                     <i className="fa fa-map-marker-alt mr-2"></i>Rabaun, Solan, Himachal Pradesh
                   </p>
                    <p>
                     <i className="fa fa-phone-alt mr-2"></i>98171-96968
                    </p>
                    <a href="mailto:blossomsactivity.sol@gmail.com"style={{textDecoration: "none",color: "inherit", border: "none"}}>
                    <i className="fa fa-envelope mr-2"></i>blossomsactivity.sol@gmail.com
                    </a>
                 </div>
            
            <div className="col-md-3 col-12 footer-links-col">
              <div className="d-flex flex-column justify-content-start">
                <a className="text-white-50 mb-2" href="/">
                  <i className="fa fa-angle-right mr-2"></i>Home
                </a>
                <a className="text-white-50 mb-2" href="/about">
                  <i className="fa fa-angle-right mr-2"></i>About Us
                </a>
                <a className="text-white-50 mb-2" href="/contact">
                  <i className="fa fa-angle-right mr-2"></i>Contact
                </a>
                <a className="text-white-50 mb-2" href="/academic">
                  <i className="fa fa-angle-right mr-2"></i>Academic
                </a>
              
                <a className="text-white-50 mb-2" href="/activities">
                  <i className="fa fa-angle-right mr-2"></i>Activity
                </a>
                <a className="text-white-50 mb-2" href="/facultypage">
                  <i className="fa fa-angle-right mr-2"></i>Faculty
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div
        className="container-fluid bg-dark text-white-50 border-top py-4"
        style={{ borderColor: "rgba(256, 256, 256, .1)" }}
      >
        <div>
          <div className="row">
            <div className="col-md-6 col-12 text-center text-md-left mb-3 mb-md-0">
              <p className="m-0">
                Copyright &copy;{" "}
                <a className="text-white" href="#">
                  2025 KK Blossoms
                </a>
                . All Rights Reserved.
              </p>
            </div>
            <div className="col-md-6 col-12 text-center text-md-right">
              <p className="m-0">
                Designed & Developed by{" "}
                <a className="text-white" href="https://htmlcodex.com">
                 Millennium Soft
                </a>{" "}
                {/* Distributed by{" "}
                <a href="https://themewagon.com" target="_blank" rel="noreferrer">
                  ThemeWagon
                </a> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
