"use client";
import React, { useState, useEffect } from "react";
import banner1 from "@/app/Images/Banner5.jpg";
import banner2 from "@/app/Images/Banner6.jpg";
import banner3 from "@/app/Images/Banner2.jpg";

import "./carousel.css";
import Image from "next/image";

const slides = [
  {
    img: banner1,
    title: "Corporate Uniforms",
    desc: "Stylish & professional attire for businesses.",
  },
  {
    img: banner2,
    title: "Healthcare Uniforms",
    desc: "Durable, comfortable & hygienic.",
  },
  {
    img: banner3,
    title: "Healthcare Uniforms",
    desc: "Durable, comfortable & hygienic.",
  },
 
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2000); // change every 4s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container ">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.img.src})` }} // <-- FIX
        >
          {/* Overlay Text */}
          {/* <div className="carousel-text">
           
            <h2>{slide.title}</h2>
            <p>{slide.desc}</p>
          </div> */}
         
        </div>
      ))}
    </div>
  );
}
