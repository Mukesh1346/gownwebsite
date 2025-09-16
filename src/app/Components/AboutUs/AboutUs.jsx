import Image from "next/image";
import React from "react";
import "./aboutus.css";
import pic1 from "@/app/Images/Banner6.jpg";
import pic2 from "@/app/Images/Banner2.jpg";
import { MdContactPhone } from "react-icons/md";
import CountOnView from "../CountOnView/CountOnView";

export default function AboutUs() {
    return (

        <>
        <div className="AboutUsMainSec">
            <div className="container">
                <div className="Img-wrapper">
                    <Image src={pic2} alt="designImg" className="BannerImg" />
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="textSectionLeft">


                            <p>We believe every convocation deserves the finest attire. Our expert team ensures each gown is tailored with precision, offering elegance, comfort, and durability. From bulk orders for universities to customized designs for individual institutions</p>

                            <Image src={pic1} alt="thumbnail" className=" h-25 w-100" />

                        </div>
                    </div>
                    <div className="col-md-6 d-flex flex-direction-column">
                   
                        <div className="textSectionRight">
                                   
                          <div>
                            <div className="contactUsSec mb-3">
                                < MdContactPhone className="fs-3 me-3 text-light"/>
                            <h3 className="text-light">Contact Us</h3>
                            </div>
                          <p>At CAPSTOLE , we take pride in being a trusted manufacturer and supplier of high-quality convocational gowns and accessories. With years of experience, we understand the significance of graduation ceremonies and aim to make them truly memorable.Our gowns are crafted with premium fabrics, perfect stitching, and elegant designs that symbolize dignity and achievement. Whether its for universities, colleges, or schools, we provide customized gowns, hoods, and caps that meet international standards. We are committed to excellence, timely delivery, and unmatched customer satisfaction—because every milestone deserves to be celebrated in style.</p>
                          </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>

<section className="about-stats">
      <div className="container text-center">
        <h2 className="section-title">Why Choose Us</h2>
        <p className="section-subtitle">
          We specialize in premium <span>convocational gowns</span>, combining
          tradition, comfort, and elegance for graduates worldwide.
        </p>

        <div className="row countSec  g-4 justify-content-center">
          <div className="col-md-3 col-6">
            <div className="stat-card">
              <CountOnView end={15000} duration={2000} className="stat-number" suffix="+" />
              <p className="stat-label">Graduates Dressed</p>
            </div>
          </div>

          <div className="col-md-3 col-6">
            <div className="stat-card">
              <CountOnView end={25} duration={1800} className="stat-number" suffix="+" />
              <p className="stat-label">Years of Experience</p>
            </div>
          </div>

          <div className="col-md-3 col-6">
            <div className="stat-card">
              <CountOnView end={120} duration={1600} className="stat-number" suffix="+" />
              <p className="stat-label">Universities Served</p>
            </div>
          </div>

          <div className="col-md-3 col-6">
            <div className="stat-card">
              <CountOnView end={98} duration={1700} className="stat-number" suffix="%" />
              <p className="stat-label">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
      </section>


</>

    );
}
