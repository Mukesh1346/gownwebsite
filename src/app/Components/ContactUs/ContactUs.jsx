"use client";
import React, { useState } from "react";
import "./contact.css";
import Swal from "sweetalert2";

export default function ContactUs() {
  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formdata),
      });

      const data = await res.json();

      if (data.success) {
        Swal.fire({
          title: "Form Submitted!",
          text: "Your form has been successfully submitted.",
          icon: "success",
          confirmButtonText: "OK",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "Failed to send message. Try again.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Error!",
        text: "Something went wrong.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }

    setLoading(false);
  };

  return (
    <div className="contact-form-section py-3">
      <div className="container form-container">
        <h2 className="form-title">Send Us Message</h2>
        <p className="form-subtitle">
          Have Questions? Send Us A Message, And We'll Get Back To You Soon!
        </p>

        <form className="contact-form mt-4" onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              name="name"
              className="form-control custom-input"
              placeholder="Name*"
              value={formdata.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              name="email"
              className="form-control custom-input"
              placeholder="Email*"
              value={formdata.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              name="phone"
              className="form-control custom-input"
              placeholder="Phone number*"
              value={formdata.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <textarea
              className="form-control custom-input"
              rows="4"
              name="message"
              placeholder="Comment*"
              value={formdata.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="form-check mb-3">
            <input type="checkbox" className="form-check-input" id="saveInfo" />
            <label className="form-check-label" htmlFor="saveInfo">
              Save my name, email, and website in this browser.
            </label>
          </div>

          <button type="submit" className="btn send-btn" disabled={loading}>
            {loading ? "Sending..." : "SEND"}
          </button>
        </form>
      </div>

      <div className="container mt-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.6243092123127!2d77.08410077496043!3d28.730771579613716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d07440faeeedd%3A0x7fd3b4b030819bdf!2sDigi%20India%20Solutions!5e0!3m2!1sen!2sin!4v1757765853741!5m2!1sen!2sin"
          className="w-100"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
