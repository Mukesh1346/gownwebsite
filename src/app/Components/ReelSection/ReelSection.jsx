"use client";
import React from "react";
import "./ReelSection.css";




// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Charts from "../Charts/Charts";

export default function ReelSection() {
  return (
    <>
      {/* ===== Reel Section ===== */}
      <section className="reel-section py-5">
        <div className="container">
          <div className="row align-items-center g-4">
            {/* Left: Reel Video */}
            <div className="col-md-4 d-flex justify-content-center">
              <div className="mobile-frame">
                <video className="reel-video" autoPlay loop muted playsInline>
                  <source src="/video1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Right: Text */}
            <div className="col-md-8">
              <h2 className="section-title mb-3">
                🎓 Capstole Your Trusted Apparel Partner
              </h2>
              <p className="lead-text">
                “Capstole is a specialist manufacturer of academic and ceremonial
                apparel with deep experience in graduation regalia and related
                accessories. Combining traditional tailoring skills with
                contemporary production technology, we operate multiple
                facilities and a team of experienced craftsmen to deliver
                large-volume orders without compromising finish or fit. Our
                process focuses on fabric selection, pattern precision, and
                quality-control at every stage—so institutions receive gowns
                that look immaculate in person and on camera. We work with
                universities, colleges, and institutions worldwide to provide
                bespoke designs, bulk production runs, and embroidered insignia
                options — all backed by reliable logistics and a commitment to
                timely delivery.” 🌍✨
              </p>
              <button className="btn explore-btn text-light mt-3">
                Explore Our Collections
              </button>
            </div>
          </div>
        </div>
      </section>
      <div>
        <Charts/>
      </div>
        
    </>
  );
}
