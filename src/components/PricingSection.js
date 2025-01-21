import React from "react";
import "./PricingSection.css";

const plans = [
  {
    duration: "1 MONTH",
    price: 15,
    note: "you’ll get to select multi-devices on the next page",
    features: [
      "Access +16K Channels",
      "+80000 VOD TV & Movies",
      "4K FHD HD Channels",
      "All Devices supported",
      "24/7 Technical Support",
    ],
    link: "#",
  },
  {
    duration: "3 MONTH",
    price: 32,
    note: "you’ll get to select multi-devices on the next page",
    features: [
      "Access +16K Channels",
      "+80000 VOD TV & Movies",
      "4K FHD HD Channels",
      "All Devices supported",
      "24/7 Technical Support",
    ],
    link: "#",
  },
  {
    duration: "12 MONTH",
    price: 69,
    note: "you’ll get to select multi-devices on the next page",
    features: [
      "Access +16K Channels",
      "+80000 VOD TV & Movies",
      "4K FHD HD Channels",
      "All Devices supported",
      "24/7 Technical Support",
    ],
    link: "#",
  },
  {
    duration: "6 MONTH",
    price: 54,
    note: "you’ll get to select multi-devices on the next page",
    features: [
      "Access +16K Channels",
      "+80000 VOD TV & Movies",
      "4K FHD HD Channels",
      "All Devices supported",
      "24/7 Technical Support",
    ],
    link: "#",
  },
];

const PricingSection = () => {
  return (
    <section className="pricing-section">
      <div className="section-heading">
        <h2>Find a plan that’s right for you</h2>
      </div>
      <div className="plans-container">
        {plans.map((plan, index) => (
          <div className="plan-card" key={index}>
            <h3 className="plan-duration">{plan.duration}</h3>
            <p className="plan-note">
              <strong>Note:</strong> {plan.note}
            </p>
            <div className="plan-price">
              <span>$</span>
              {plan.price}
            </div>
            <ul className="features-list">
              {plan.features.map((feature, idx) => (
                <li key={idx}>
                  <span className="check-icon">✔</span> {feature}
                </li>
              ))}
            </ul>
            <a href={plan.link} className="select-plan-btn">
              Select Plan →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
