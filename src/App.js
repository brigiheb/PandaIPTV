import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import ChannelsSection from "./components/ChannelsSection";
import DevicesSection from "./components/DevicesSection";
import PricingSection from "./components/PricingSection";
import AccordionSection from "./components/AccordionSection";
import FooterTopSection from "./components/FooterTopSection";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import ResellerPage from "./reseller/ResellerPage";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Home Route */}
        <Route path="/" element={
          <>
            <Navbar />
            <HeroSection />
            <FeaturesSection />
            <ChannelsSection />
            <DevicesSection />
            <PricingSection />
            <AccordionSection />
            <FooterTopSection />
            <Footer />
          </>
        } />

        {/* Reseller Page Route */}
        <Route path="/reseller" element={<ResellerPage />} />
      </Routes>
    </div>
  );
}

export default App;
