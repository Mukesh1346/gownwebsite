"use client";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import "./faq.css";

const faqs = [
  {
    question: "Do you provide custom design for Your Products?",
    answer:
      "Yes, we offer custom design options tailored to your specific requirements. You can share your design ideas, logos, or branding details, and we will work with you to create products that perfectly match your vision.",
  },
  {
    question: "What fabric options are available?",
    answer:
      "We offer a variety of premium fabrics including polyester blends, satin finish, and eco-friendly options for maximum comfort and durability.",
  },
  {
    question: "Do you Ship Your Products  Across The Globe?",
    answer:
      "Yes, we deliver our products worldwide. No matter where you are located, we ensure safe and timely shipping through our trusted logistics partners. International customers can also track their orders and enjoy the same quality service as our local clients",
  },
  {
    question: "How early should we place an order?",
    answer:
      "We recommend placing your order at least 4-6 weeks before the ceremony to ensure proper customization and delivery.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section py-5">
      <div className="container faqTopSec text-center ">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-underline"></div>
        <p className="faq-subtitle">
          Everything you need to know about our convocation gowns
        </p>
      </div>
      <div className="container faq-wrapper">
        {faqs.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <h5>{item.question}</h5>
              <FaChevronDown className="faq-icon" />
            </div>
            <div
              className="faq-answer"
              style={{
                maxHeight: activeIndex === index ? "200px" : "0px",
              }}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
