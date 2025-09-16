"use client";
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
import "./footer.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-sec text-light pt-5 pb-3">
      <div className="container">
        <div className="row">
          {/* Left Section */}
          <div className="col-md-4 mb-4">
            <Link href="/" className="navbar-brand d-flex flex-column lh-1">
              <span className="fw-bold footer-heading fs-4">CAPSTOLE</span>
              {/* <span className="fw-bold text-dark">uniform wala</span> */}
              <small className="text-muted">
                A <span className="text-warning fw-semibold">BuzzUniforms</span> Company
              </small>
            </Link>

            <p className="companydetails">
              Established in 2002, we have more than 15 years in graduation & church
              robes and accessories making, we are factory here, so the quality and
              delivery date can be controlled by ourselves.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="col-md-2 mb-4">
            <h5 className="footer-heading">Quick Navigation</h5>
            <ul className="list-unstyled footerUl ">
              <li><a href="#" className="footer-link">Home</a></li>
              <li><a href="#" className="footer-link">About Us</a></li>
              <li><a href="#" className="footer-link">Products</a></li>
              <li><a href="#" className="footer-link">News</a></li>
              <li><a href="#" className="footer-link">Knowledge</a></li>
              <li><a href="#" className="footer-link">Contact Us</a></li>
              <li><a href="#" className="footer-link">Showroom</a></li>
              <li><a href="#" className="footer-link">Mobile</a></li>
              <li><a href="#" className="footer-link">Sitemap</a></li>
            </ul>
          </div>

          {/* Products */}
          <div className="col-md-3 mb-4">
            <h5 className="footer-heading">Products</h5>
            <ul className="list-unstyled footerUl">
              <li><a href="#" className="footer-link">Graduation Cap and Gown</a></li>
              <li><a href="#" className="footer-link">Academic Regalia</a></li>
              <li><a href="#" className="footer-link">Graduation Accessories</a></li>
              <li><a href="#" className="footer-link">Choir Robe and Clergy Attire</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-3 contactFooterSec mb-4">
            <h5 className="footer-heading">Contact Us</h5>
            <p className="mb-1">
              Capstole textile Co.Ltd <br />
              <span className="footer-heading">Address:</span> <br /> Tuglakabad extn North.Delhi - 110019
            </p>
            <p className="mb-1"><span className="footer-heading">Tel:</span> +91-9318311035</p>
            <p className="mb-1"> <span className="footer-heading">Email:</span> sales@capstole .com</p>
            <p className="mb-1"> <span className="footer-heading">Email: </span>Info@capstole.com</p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom text-center mt-4 pt-3">
        <p className="mb-2">
          Copyright © Capstole Co.Ltd All Rights Reserved.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <a href="#" className="social-icon"><FaFacebookF /></a>
          <a href="#" className="social-icon"><FaTwitter /></a>
          <a href="#" className="social-icon"><FaGooglePlusG /></a>
          <a href="#" className="social-icon"><FaLinkedinIn /></a>
        </div>
      </div>
    </footer>
  );
}






