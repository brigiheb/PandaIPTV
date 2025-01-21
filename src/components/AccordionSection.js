import React, { useState } from "react";
import "./AccordionSection.css";

const faqData = [
  {
    question: "What does Panda IPTV offer?",
    answer:
      "Panda IPTV is a comprehensive online streaming service that offers a wide range of entertainment options. With access to over 18,000+ live global channels and a vast library of 60,000+ Video on Demand (VOD) titles, Panda IPTV delivers an extensive selection of live TV channels, movies, series, and pay-per-view (PPV) events from around the world. Enjoy the flexibility of streaming this vast content library on any device of your choice.",
  },
  {
    question:
      "How long do I have to wait before I can start using the service?",
    answer:
      "Once you receive your login details for the service, you can start using it right away. We will send the login credentials to your email address. In case you are unable to locate the email, please check both your inbox and spam folder. As soon as you have the login details, you can enjoy the service without any delays.",
  },
  {
    question: "Is it necessary to use a VPN with Panda IPTV?",
    answer:
      "While it is not mandatory to use a VPN with Panda IPTV, there are several reasons why you might consider using one. One of the primary benefits is the added layer of privacy and security it provides. With a VPN, your internet traffic is encrypted and routed through a remote server, making it difficult for ISPs to monitor your online activities.",
  },
  {
    question: "Is Panda IPTV a safe service to use?",
    answer:
      "Absolutely! Panda IPTV is a fully licensed and authorized service, ensuring that you can enjoy your streaming experience with complete peace of mind. Unlike many dubious IPTV providers offering illegal content, Panda IPTV operates within the legal boundaries and has the necessary rights to provide the content to its customers.",
  },
  {
    question: "Is there a refund policy for Panda IPTV?",
    answer:
      "Absolutely! We believe in providing our customers with a seamless and satisfying experience. If, for any reason, you feel that Panda IPTV did not meet your expectations of excellence, we offer a no-hassle 100% money-back guarantee for 14 days.",
  },
];

const AccordionSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="accordion-section">
      <div className="accordion-container">
        {faqData.map((item, index) => (
          <div className="accordion-item" key={index}>
            <div
              className={`accordion-title ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => toggleAccordion(index)}
            >
              <span>{item.question}</span>
              <span className="icon">
                {activeIndex === index ? "▲" : "▼"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="accordion-content">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AccordionSection;
