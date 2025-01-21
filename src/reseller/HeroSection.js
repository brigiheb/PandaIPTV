import React from "react";
import "./HeroSection.css";
import backgroundImage from "../assets/images/backgroundRes.png";

const HeroSection = () => {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="overlay"></div>
      <div className="hero-content">
        <nav className="breadcrumb">
          Home › IPTV Reseller › Blog › <span>Best IPTV Reseller Panel Provider 2024 – Review</span>
        </nav>
        <h1 className="hero-title">Best IPTV Reseller Panel Provider 2024 – Review</h1>
        <div className="hero-meta">
          <span>Maxie Hester</span> · <span>February 5, 2024</span> · <span>Blog</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
