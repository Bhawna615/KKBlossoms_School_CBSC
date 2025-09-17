import React, { useState } from "react";
import schoolLogo from "./photos/K-K-Blossoms-School-png.webp"; // adjust path as per your structure
import TopBar from "./TopbarStart";
import { BsDisplay } from "react-icons/bs";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  // Optionally close menu when a nav link is clicked (for mobile UX)
  const handleNavLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="container-fluid p-0" style={{ position: "fixed", zIndex: "2" }}>
      <div>
        <TopBar />
      </div>

      <div
        className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5 display-flex justify-content-between align-items-center"
        style={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", // ✅ smooth shadow
        }}>
        <div class="header-bottom" style={{display:"contents"}}>
          {/* Brand Logo */}
          <a href="/" className="navbar-brand ml-lg-3 align-items-center">
            <img
              src={schoolLogo}
              alt="KK Blossoms School"
              style={{ height: "50px", width: "50px", marginRight: "10px" }}
            />
            <h1 className="m-0 text-uppercase text-primary">KK Blossoms</h1>
          </a>

          {/* Toggler for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarCollapse"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
            onClick={handleToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <nav>
            <div
              className={`collapse navbar-collapse justify-content-between px-lg-3${isOpen ? " show" : ""}`}
              id="navbarCollapse"
            >
              <div className="navbar-nav mx-auto py-0">
                <a href="/" className="nav-item nav-link" onClick={handleNavLinkClick}>
                  Home
                </a>
                <a href="/about" className="nav-item nav-link" onClick={handleNavLinkClick}>
                  About
                </a>
                <a href="/contact" className="nav-item nav-link" onClick={handleNavLinkClick}>
                  Contact
                </a>
                <a href="/academic" className="nav-item nav-link" onClick={handleNavLinkClick}>
                  Academic
                </a>
                <a href="/activities" className="nav-item nav-link" onClick={handleNavLinkClick}>
                  Activity
                </a>
                <a href="/facultypage" className="nav-item nav-link" onClick={handleNavLinkClick}>
                  Faculty
                </a>
              </div>

              {/* Contact Button (desktop only) */}
              <a
                href="/contact"
                className="btn btn-primary py-2 px-4 d-none d-lg-block"
                style={{ borderRadius: "10px" }}
              >
                Contact Us
              </a>
            </div>
          </nav>
        </div>


      </div>
    </div>
  );
}

export default Navbar;