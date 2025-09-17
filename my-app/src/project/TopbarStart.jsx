import React from "react";
import "./TopBar.css"; // import css

function TopBar() {
  return (
    <div className="topbar bg-dark ">
      <div class="topbar-container" style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"5px 40px",width:"100%",flexDrection:"column"}}>
        <div className="topbar-left">
          <small>
            <i className="fa fa-phone-alt mr-2"></i>
            98171-96968
          </small>
          <span className="divider">|</span>
          <a
            href="mailto:blossomsactivity.sol@gmail.com"
            className="email-link"
          >
            <i className="fa fa-envelope mr-2"></i>
            blossomsactivity.sol@gmail.com
          </a>
        </div>

        <div className="topbar-right">
          <a className="social" href="https://www.facebook.com/KKBHSS/">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a className="social" href="https://kkblossomschool.org/#">
            <i className="fab fa-twitter"></i>
          </a>
          <a
            className="social"
            href="https://www.linkedin.com/in/samiksha-chaudhary-96a531159?originalSubdomain=in"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a className="social" href="https://kkblossomschool.org/#">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default TopBar;