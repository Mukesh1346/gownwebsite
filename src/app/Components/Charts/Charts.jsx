import React from 'react'
import './charts.css'
import slide1 from "@/app/Images/slide1.png";
import slide2 from "@/app/Images/slide2.jpg";
import slide3 from "@/app/Images/slide4.png";
import Image from "next/image";
import Link from 'next/link';

export default function Charts() {
  return (
    <>
     {/* ===== Gown Carousel Section ===== */}
     <section className="gown-section py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* Left: Text */}
            <div className="col-md-7">
             
             <h3> How to Measure for Your Gown </h3>

<ul>
  <li>Follow these simple steps to ensure your gown fits perfectly:</li>

 <li>Height Measurement</li>

 <li>Stand tall with shoes you plan to wear on graduation day.</li>

 <li>Measure from the top of your head to the floor.</li>

   <li>This measurement determines the gown length.</li>
</ul>

<b>Weight Consideration</b>
  
  <ul>
    <li> Your weight helps us ensure the gown drapes comfortably.</li>
    <li> The gown is designed to have a loose, flowing fit.</li>
  
  </ul>




<b>Cap Size</b>
 <ul>
  <li> Most caps are “one size fits all” with an elastic band.</li>
  <li>For larger or smaller head sizes, adjustable caps are available on request.</li>
 </ul>




<b>Sleeve & Fit</b>
<ul >
  <li> Academic gowns have wide sleeves and a relaxed fit.</li>
  <li>No need for exact chest or waist measurement—just height and weight are enough.</li>
</ul>





         
              <Link href="/Pages/products">
              <button className="btn text-light explore-btn mt-3">
                Explore Our Collection
              </button>
              </Link>
            </div>   

           
            {/* Right: Swiper Carousel */}
            <div className="col-md-5">
              <Image src={slide1} alt="" className="Slide1 w-100" />
            </div>

          </div>
        </div>
      </section>

      <section className="gown-section py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* Left: Text */}
              

           
            {/* Right: Swiper Carousel */}
            <div className="col-md-5">
              <Image src={slide2} alt="" className="Slide1 w-100" />
            </div>
            <div className="col-md-7">
              <div>
             <h3>Measuring Instructions for Choir Gowns</h3>

   <ul className='lineHeight'>
    <li>Height  Measure from the top of the head to the floor while wearing performance shoes.</li>
    <li>Fit  Choir gowns are designed to be loose and flowing so members can sing comfortably.</li>

    <li>Sleeves & Robe Length  The gown should reach mid-calf and sleeves should fall around the wrist.</li>

    <li>Chest/Weight  Only needed if the singer is outside the average weight range for their height (to ensure the gown hangs properly).</li>

   </ul>






              </div>
              <Link href="/Pages/products">
              <button className="btn text-light explore-btn mt-3">
                Explore Our Collection
              </button>
              </Link>
            </div>

          </div>
        </div>
      </section>

      <section className="gown-section py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* Left: Text */}
            <div className="col-md-7">
              <div>
                <h3>Elements of a Graduation Hood</h3>
                <p>Academic hoods are designed to represent both the degree earned and the institution awarding it. The main elements include:</p>
              <ul>
                <b>Shell (the hood fabric)</b>
                <li>Usually black to match the gown.</li>
                <li>Made of polyester or silk.</li>
                <li>Length varies depending on the academic level:</li>
               
              </ul>


              <b>Lining (inside the hood)</b>
          <ul >
            <li>Represents the school or university colors.</li>
            <li>Often shown as a full lining or a lining with a chevron pattern.</li>
          </ul>
          <em className='mb-2'>Example: A hood lined with blue and white chevron indicates the school colors of the awarding institution.</em>

           <br />
             <b >Cap/Tassel (with hood)</b>
          <ul>
            <li>Usually black mortarboard for Bachelors and Masters.</li>
            <li>Doctoral gowns may use a velvet tam with a gold tassel.</li>
          </ul>

              </div>
              <Link href="/Pages/products">
              <button className="btn text-light explore-btn mt-3">
                Explore Our Collection
              </button>
              </Link>
            </div>   

           
            {/* Right: Swiper Carousel */}
            <div className="col-md-5">
              <Image src={slide3} alt="" className="Slide1 w-100" />
            </div>

          </div>
        </div>
      </section>
      
    </>
  )
}
