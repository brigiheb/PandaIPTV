import React from "react";
import "./DevicesSection.css";
import devicesImage from "../assets/images/devices.png"; // Replace with your image path
import { FaCheckCircle } from "react-icons/fa";

const DevicesSection = () => {
  return (
    <section className="devices-section">
      <div className="devices-container">
        {/* Left Side: Text Content */}
        <div className="devices-text">
          <h2>Panda IPTV Meets Your <br /> <span className="highlight">Device Needs</span></h2>
          <ul className="devices-list">
            <li>
              <FaCheckCircle className="icon" /> Smart TV, Apple TV, LG, Android TV, Samsung
            </li>
            <li>
              <FaCheckCircle className="icon" /> Fire TV Stick (Firestick)
            </li>
            <li>
              <FaCheckCircle className="icon" /> Smart phones (iPhone, Samsung, and All Android Phones)
            </li>
            <li>
              <FaCheckCircle className="icon" /> Computers (Linux, MAC, WINDOWS)
            </li>
            <li>
              <FaCheckCircle className="icon" /> High quality Android based Set-top boxes
            </li>
            <li>
              <FaCheckCircle className="icon" /> Mag Boxes & STB Emulator
            </li>
            <li>
              <FaCheckCircle className="icon" /> Dreamlink, Formuler, Enigma, Avov & All IPTV Boxes
            </li>
          </ul>
        </div>

        {/* Right Side: Image */}
        <div className="devices-image">
          <img src={devicesImage} alt="Supported Devices" />
        </div>
      </div>
    </section>
  );
};

export default DevicesSection;
