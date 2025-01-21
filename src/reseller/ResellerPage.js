import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "./HeroSection";
import Sidebar from "./Sidebar";
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import LastSection from "./LastSection";
import Footer2 from "./Footer2";
import FooterTop from "./FooterTop";
import "./ResellerPage.css"; // Import the CSS file

const ResellerPage = () => {
  return (
    <div className="reseller-page">
      <Navbar />
      <HeroSection />

      <div className="content-wrapper">
        {/* Sidebar - Stays Fixed */}
        <div className="sidebar-wrapper">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="main-content">
          <Section1 />
          <Section2 />
          <Section3 />
        </div>
      </div>

      <LastSection />
      <FooterTop />
      <Footer2 />
    </div>
  );
};

export default ResellerPage;