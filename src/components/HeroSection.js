import React from "react";
import "./HeroSection.css";
import backgroundImage from "../assets/images/background.png";

const HeroSection = () => {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>
          <span className="highlight">Panda IPTV</span> 
        </h1>
        <p>
          Experience the pinnacle of streaming excellence with Panda IPTV, the unrivaled
          #1 provider of premium subscriptions in 2023.
        </p>
        <a href="#pricing" className="hero-button">
          Check Pricing
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
