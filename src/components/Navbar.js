import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from '../assets/images/panda-logo.png';
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for menu and close

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Panda IPTV Logo" className="logo-image" />
        </div>
        <ul className={`nav-links ${isDrawerOpen ? "open" : ""}`}>
          <li><Link to="/" onClick={closeDrawer}>Home</Link></li>
          <li><a href="#pricing" onClick={closeDrawer}>Pricing</a></li>
          <li><a href="#installation" onClick={closeDrawer}>Installation</a></li>
          <li><a href="#channels" onClick={closeDrawer}>Channels</a></li>
          <li><Link to="/reseller" onClick={closeDrawer}>IPTV Reseller</Link></li>
        </ul>
        <button className="contact-button">Contact us</button>
        <div className="hamburger" onClick={toggleDrawer}>
          {isDrawerOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
      {isDrawerOpen && <div className="backdrop" onClick={closeDrawer}></div>}
    </>
  );
};

export default Navbar;