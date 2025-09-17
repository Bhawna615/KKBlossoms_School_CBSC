import React from "react";
import './HomeHeader.css';
function HomeHeader() {
    return (
        <div
      className="banner-serction jumbotron-fluid position-relative overlay-bottom"
      style={{height: "100vh" }}
    >
      <div className="container text-center"style={{position:"absolute",top:"40%",right:"0"}}>
        <h1 className="text-white"style={{fontSize:"60px"}}>Welcome To KK Blossoms</h1>
        <p class="home-desc">
          
KK Blossoms School
We prepare students for life, by helping them 
to be curious and passionate for learning. The school curriculum prepares them to be at their best in this competitive environment. We focus on nurturing the young minds by engaging them intellectually and socially, so that they can make a difference in the world.
        </p>
      </div>
    </div>
    );
}

export default HomeHeader;
