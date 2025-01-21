import React from "react";
import "./Footer2.css";

const Footer2= () => {
  return (
    <footer className="footer-section">
      {/* We Accept Section */}
      <div className="footer-container">
        <div className="footer-accept">
          <h3 className="footer-title">We Accept</h3>
          <div className="footer-logos">
            <img
              src="https://matrixiptv.net/wp-content/uploads/2023/10/visa-mastercard-american-express-logo-icons-set-vector-42788527.jpg"
              alt="Payment Methods"
              className="payment-logos"
            />
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-copyright">
        <p>© 2023 PANDA IPTV TV Design Themes</p>
      </div>
    </footer>
  );
};

export default Footer2;
