import React from "react";
import "./supplyuniform.css";
import Image from "next/image";
import item1 from '@/app/Images/items/item13.png'
import item2 from '@/app/Images/items/item14.png'
import item3 from '@/app/Images/items/item16.png'


export default function SupplyUniform() {
  const cards = [
    {
      img: item1, // put images in public/uniforms/
      title: "Mortar Board Graduation Caps",
      desc: "Celebrate achievement with classic mortar board caps. A timeless symbol of knowledge, success, and new beginnings.",
      link: "/Pages/contact-us",
    },
    {
      img: item2,
      title: "Stoles",
      desc: "Honor your accomplishments with elegant graduation stoles.Designed to add pride, tradition, and style to your ceremony.",
      link: "/Pages/contact-us",
    },
    {
      img: item3,
      title: "Cassock",
      desc: "A traditional clerical garment symbolizing devotion and dignity.Perfectly tailored for formal religious and ceremonial occasions.",
      link: "/Pages/contact-us",
    },
  ];

  return (
    <>
      <div className="SuperSupplySection">
      <div className="SupplyUniformMainSec">
        <div className="container">
          <div className="supplyLeftSecText">
            <div className="supplyTitle">
              <h2>
                We Supply Our Products <br />{" "}
                <span className="spanText">Across the Globe</span>
              </h2>
            </div>

            <div className="supplyPara">
              <p>
                At capstole, we understand the significance of a uniform in
                creating a professional image and fostering team spirit. Our smooth
                supply system ensures timely delivery of products designed to evoke
                a sense of pride among wearers. As a leading Graduation & Church Apparel in
                Delhi , India, we offer customized solutions tailored to the specific
                needs of various Clients:
              </p>
            </div>
          </div>

          {/* card section */}

        </div>
      </div>
      <div className="HotProducts">
        <div className="container">
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

      </div>

    </>
  );
}
