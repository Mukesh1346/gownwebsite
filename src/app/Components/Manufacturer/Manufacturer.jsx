import React from 'react'
import './manufacturer.css'

export default function Manufacturer() {
  return (
    <>
      <div className='ManufacturerMainSec py-5'>
        <div className='container'>
          <div className="row align-items-center">
            
            {/* Left Text Section */}
            <div className="col-md-4 d-flex flex-column justify-content-center">
              <h2 className="fw-bold mb-3 text-primary">
                Leading academic &amp; church apparel manufacturer
              </h2>
              <h5 className="fw-semibold mb-3 ManufacturerTitle">Why Choose Capstole?</h5>
              <ul className="text-muted ps-3">
                <li>Specialized in <strong>convocational gowns, hoods, and stoles</strong></li>
                <li>Crafted with <strong>premium fabrics</strong> ensuring durability & comfort</li>
                <li>Trusted by <strong>universities and churches worldwide</strong></li>
                <li>Custom sizing and designs tailored for every requirement</li>
                <li>Maintaining dignity, tradition, and professional excellence</li>
              </ul>
            </div>

            {/* Center Video Frame */}
            <div className="col-md-4 d-flex  justify-content-center">
              <div className="mobileFrame">
                <video className="reel-video" autoPlay loop muted playsInline>
                  <source src="/video2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Right Text Section */}
            <div className="col-md-4 d-flex flex-column justify-content-center">
              <h5 className="fw-semibold ManufacturerTitle mb-3">Our Commitment</h5>
              <ul className="text-muted ps-3">
                <li>Delivering <strong>on-time solutions</strong> for convocations & ceremonies</li>
                <li>Expert tailoring that ensures a <strong>perfect academic look</strong></li>
                <li>Available in <strong>diverse colors & styles</strong> for global institutions</li>
                <li>Providing both <strong>ready-to-wear & custom designs</strong></li>
                <li>Unmatched quality control for long-lasting apparel</li>
              </ul>
              <p className="mt-3">
                <em>“At Capstole, we blend tradition with modern craftsmanship to create apparel that makes every moment memorable.”</em>
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
