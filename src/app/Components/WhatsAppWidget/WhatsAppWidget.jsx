"use client";
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./whatsapp.css";

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="whatsapp-container">
      {/* Chat Section */}
      <div className={`chat-box ${open ? "open" : ""}`}>
        <div className="chat-header">
          <FaWhatsapp className="me-2" /> Chat with us
        </div>
        <div className="chat-body">
          <p>👋 Hi there! How can we help you?</p>
          <button
            className="chat-btn"
            onClick={() =>
              window.open("https://wa.me/919318311035", "_blank")
            }
          >
            Start WhatsApp Chat
          </button>
        </div>
      </div>

      {/* WhatsApp Icon */}
      <div
        className="whatsapp-icon"
        onClick={() => setOpen(!open)}
      >
        <FaWhatsapp />
      </div>
    </div>
  );
}
