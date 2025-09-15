"use client";
import React from "react";
import Link from "next/link";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css"; // custom navbar styles
import { IoIosMail } from "react-icons/io";
import { MdWifiCalling3 } from "react-icons/md";

export default function Navbar() {
  return (
  <>
   <div style={{ backgroundColor: "#A997DF"}}>
  <div className="container">
    <div className="row">
      <div className="col-md-6"></div>

      <div className="col-md-6 d-flex gap-3">  
        
        {/* Email */}
        <div className="d-flex py-3 gap-3">
          <IoIosMail className="fs-3 text-light" />  
          <a href="mailto:info@capstole.com" className="m-0 text-decoration-none text-light">
            info@capstole.com
          </a>
        </div>

        {/* Phone */}
        <div className="d-flex py-3 gap-3">
          < MdWifiCalling3 className="fs-3 text-light" />  
          <a href="tel:9318311035" className="m-0 text-decoration-none text-light">
           91+ 9318311035
          </a>
        </div> 

      </div>
    </div>
  </div>
</div>

    <nav className="navbar navbar-expand-lg bg-white shadow-sm ">
      <div className="container">
        {/* Logo */}
        <Link href="/" className="navbar-brand d-flex flex-column lh-1">
          <span className="fw-bold BrandName fs-4" >CAPSTOLE</span>
          {/* <span className="fw-bold text-dark">uniform wala</span> */}
          <small className="text-muted">
            A <span className="text-danger fw-semibold">BuzzUniforms</span> Company
          </small>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/Pages/about-us" className="nav-link">
                About Us
              </Link>
            </li>

            {/* <li className="nav-item dropdown">
              <Link
                href="#"
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
             About Us
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link href="/products/school" className="dropdown-item">
                  Our History
                  </Link>
                </li>
                <li>
                  <Link href="/products/corporate" className="dropdown-item">
                  Our Product
                  </Link>
                </li>
                <li>
                  <Link href="/products/corporate" className="dropdown-item">
                  Product Application
                  </Link>
                </li>
                <li>
                  <Link href="/products/corporate" className="dropdown-item">
                  Production Market
                  </Link>
                </li>
                <li>
                  <Link href="/products/corporate" className="dropdown-item">
                  FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/products/corporate" className="dropdown-item">
                  Our Service
                  </Link>
                </li>
                <li>
                  <Link href="/products/corporate" className="dropdown-item">
                  Our factory
                  </Link>
                </li>
                <li>
                  <Link href="/products/corporate" className="dropdown-item">
                  Our video
                  </Link>
                </li>
              </ul>
            </li> */}



            {/* Dropdown 1 */}
            <li className="nav-item dropdown">
              <Link
                href="#"
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
               Products
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link href="/Pages/products" className="dropdown-item">
                  Graduation Cap and Gown
                  </Link>
                </li>
                <li>
                  <Link href="/products/corporate" className="dropdown-item">
                  Academic Regalia
                  </Link>
                </li>
                <li>
                  <Link href="/products/corporate" className="dropdown-item">
                  Graduation Accessories
                  </Link>
                </li>
                <li>
                  <Link href="/products/corporate" className="dropdown-item">
                  Choir Robe and Clergy Attire
                  </Link>
                </li>
               
              </ul>
            </li>

            {/* Dropdown 2 */}
            <li className="nav-item dropdown">
              <Link
                href="#"
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Knowledge
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link href="/shop/school" className="dropdown-item">
                    School Shop
                  </Link>
                </li>
                <li>
                  <Link href="/shop/corporate" className="dropdown-item">
                    Corporate Shop
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link href="/Pages/contact-us" className="nav-link">
                Contact Us
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link href="/blog" className="nav-link">
                Blog
              </Link>
            </li> */}
            {/* <li className="nav-item">
              <Link href="/contact" className="nav-link">
                Contact Us
              </Link>
            </li> */}
          </ul>

          {/* Button */}
          <div className="d-flex">
            <Link href="/enquiry" className="btn btn-enquiry">
              Quick Enquiry
            </Link>
          </div>

        
        </div>
      </div>
    </nav>
  </>
  );
}



