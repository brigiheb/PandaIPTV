import React from "react";
import "./FeaturesSection.css";
import { FaShoppingCart, FaCog, FaHeadset } from "react-icons/fa";

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="section-heading">
        <span className="why-choose-us">● Why choose us</span>
        <h2>Panda IPTV Top Selling IPTV in the world</h2>
      </div>

      <div className="features-grid">
        {/* Feature 1 */}
        <div className="feature-card">
          <div className="icon">
            <FaShoppingCart size={40} color="#1a73e8" />
          </div>
          <h4>Ease of purchase</h4>
          <p>
            Select your desired package from the available pricing plans, choose your
            preferred device, and effortlessly complete the payment to finalize your
            purchase.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="feature-card">
          <div className="icon">
            <FaCog size={40} color="#1a73e8" />
          </div>
          <h4>Fast Activation</h4>
          <p>
            Sit back and relax as our dedicated support team works diligently to activate
            your account swiftly. Within just 25 minutes of completing the payment, you
            can expect an email from us confirming the activation.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="feature-card">
          <div className="icon">
            <FaHeadset size={40} color="#1a73e8" />
          </div>
          <h4>24/7 Support</h4>
          <p>
            We understand the importance of addressing our customers’ concerns promptly,
            and our dedicated support staff is always available to assist and resolve any
            issues that may arise.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
