import React from "react";
import "./contact.css";

export default function ContactUs() {
  return (
    <div className="contact-form-section py-5">
      <div className="container w-50">
        <h2 className="form-title">Send Us Message</h2>
        <p className="form-subtitle">
          Have Questions? Send Us A Message, And We'll Get Back To You Soon!
        </p>

        <form className="contact-form mt-4">
          <div className="mb-3">
            <input
              type="text"
              className="form-control custom-input"
              placeholder="Name*"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              className="form-control custom-input"
              placeholder="Email*"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control custom-input"
              placeholder="Phone number*"
              required
            />
          </div>

          <div className="mb-3">
            <textarea
              className="form-control custom-input"
              rows="4"
              placeholder="Comment*"
              required
            ></textarea>
          </div>

          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="saveInfo"
            />
            <label className="form-check-label" htmlFor="saveInfo">
              Save my name, email, and website in this browser.
            </label>
          </div>

          <button type="submit" className="btn send-btn">
            SEND
          </button>
        </form>
      </div>

      <div className="container mt-5">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.6243092123127!2d77.08410077496043!3d28.730771579613716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d07440faeeedd%3A0x7fd3b4b030819bdf!2sDigi%20India%20Solutions!5e0!3m2!1sen!2sin!4v1757765853741!5m2!1sen!2sin" className="w-100" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
}
