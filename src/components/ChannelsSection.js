import React from "react";
import "./ChannelsSection.css";
import channelsImage from "../assets/images/channels.png"; // Replace with your image path
import { FaCheckCircle } from "react-icons/fa";

const ChannelsSection = () => {
  return (
    <section className="channels-section">
      <div className="channels-container">
        {/* Text Content */}
        <div className="channels-text">
          <h2>
            <span className="highlight">Sports | VOD | TV</span> <br /> Channels on Panda
            IPTV
          </h2>
          <p>
            Experience the best IPTV service with a price that fits your budget. Indulge
            in premium sports channels, your favorite movies, TV shows, and an extensive
            VOD library, all in Full HD quality. Elevate your entertainment experience
            today with our unbeatable IPTV service.
          </p>

          <h3>Benefits:</h3>
          <ul className="benefits-list">
            <li>
              <FaCheckCircle className="icon" />
              Local and International Channels
            </li>
            <li>
              <FaCheckCircle className="icon" />
              9000+ LiveTV Channels (US & CA)
            </li>
            <li>
              <FaCheckCircle className="icon" />
              18,000+ Live TV Channels (Worldwide)
            </li>
            <li>
              <FaCheckCircle className="icon" />
              EPG - Catch-UP - VPN
            </li>
            <li>
              <FaCheckCircle className="icon" />
              Video on Demand (Updated monthly)
            </li>
          </ul>
        </div>

        {/* Image Content */}
        <div className="channels-image">
          <img src={channelsImage} alt="Sports and TV Channels" />
        </div>
      </div>
    </section>
  );
};

export default ChannelsSection;
