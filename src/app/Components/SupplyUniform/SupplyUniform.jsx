import React from "react";
import "./supplyuniform.css";
import Image from "next/image";
import item1 from '@/app/Images/items/item1.webp'
import item2 from '@/app/Images/items/item2.webp'
import item3 from '@/app/Images/items/item3.webp'
import item4 from '@/app/Images/items/item4.webp'

export default function SupplyUniform() {
  const cards = [
    {
      img: item1, // put images in public/uniforms/
      title: "Corporate Uniforms",
      desc: "From security personnel to top-level executives, our corporate uniforms are designed to cater to all levels of an organization.",
      link: "/Pages/contact-us",
    },
    {
        img: item2,
      title: "Hospital Uniforms",
      desc: "We are a high-quality uniform supplier in Mumbai for hospital staff, including doctors, nurses, and support teams.",
      link: "/Pages/contact-us",
    },
    {
        img: item3,
      title: "Hotel Uniforms",
      desc: "Enhance the elegance of your hotel with our hotel uniforms. Our uniforms are durable and aligned with your brand’s aesthetics.",
      link: "/Pages/contact-us",
    },
  ];

  return (
    <div className="SupplyUniformMainSec">
      <div className="container">
        <div className="supplyLeftSecText">
          <div className="supplyTitle">
            <h2>
              We Supply Uniforms <br />{" "}
              <span className="spanText">Across Industries</span>
            </h2>
          </div>

          <div className="supplyPara">
            <p>
              At Uniform Supplier, we understand the significance of a uniform in
              creating a professional image and fostering team spirit. Our smooth
              supply system ensures timely delivery of products designed to evoke
              a sense of pride among wearers. As a leading uniform manufacturer in
              Mumbai, India, we offer customized solutions tailored to the specific
              needs of various sectors:
            </p>
          </div>
        </div>

        {/* card section */}
        <div className="row mt-4">
          {cards.map((card, i) => (
            <div className="col-md-4 mb-4 d-flex justify-content-center" key={i}>
              <div className="supplyCard">
                <Image src={card.img} alt={card.title} className="supplyCardImg" />
                <h5 className="supplyCardTitle">{card.title}</h5>
                <p className="supplyCardDesc">{card.desc}</p>
                <a href={card.link} className="supplyReadMore">
                  Read More <span>&#8594;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
