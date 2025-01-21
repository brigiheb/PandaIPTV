import React from 'react';
import './FooterTop.css';
import logo from '../assets/images/panda-logo.png'; // Correct path for the logo

const FooterTop = () => {
  return (
    <section className="footer-top-section">
      <div className="footer-container">
        {/* Left Column */}
        <div className="footer-column">
          <a href="/">
            <img src={logo} alt="Panda IPTV Logo" className="footer-logo" />
          </a>
          <p>
            Panda IPTV Gives you full access to 17K+ IPTV Premium channels + 80K+ of VOD
            Content with low cost, Using Panda IPTV Service #1 IPTV Provider in 2024.
          </p>
        </div>

        {/* Center Column */}
        <div className="footer-column">
          <h3>Information</h3>
          <ul>
            <li>
              <a href="/refund-policy">Refund Policy</a>
            </li>
            <li>
              <a href="/terms-of-service">Terms of Service</a>
            </li>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="footer-column">
          <h3>Contact Us</h3>
          <ul className="footer-contact">
            <li>🏠 Siloam Springs, AR 72761, United States</li>
            <li>📞 +44 7360 518769</li>
            <li>⏰ 24/7</li>
            <li>📧 contact@iptvservices.online</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FooterTop;
