import Image from 'next/image'
import React from 'react'
import './topmanufacturer.css'
import banner4 from '@/app/Images/Banner4.jpg'

export default function TopManufacturer() {
    
    return (
        <>
            <div className='container my-5'>
                <div className='row'>
                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <div className='ManufacturerImageSection'>
                            <Image src={banner4} alt="" className='TopManufacturerImg' />


                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className='ManufacturerTextSec'>
                            <h2>Convocation Manufacturer <br /> <span className='spanText'>& Supplier in India</span></h2>
                            <p>At Uniform Supplier, we specialize in manufacturing <b>premium-quality convocation gowns</b> designed to add dignity and elegance to graduation ceremonies. Based in Mumbai, India, we are a trusted name in the industry, serving <b>universities, colleges,</b> and <b>institutions </b> across the country with top-notch ceremonial attire.

                                Our gowns are crafted using high-grade fabrics to ensure <b> comfort, durability,</b> and <b>sophistication</b>. From the classic black graduation gown to colorful convocation hoods, sashes, and caps, we offer a wide range of styles that can be customized to reflect your institutions colors and identity. <br /><br />

                                As a reputed convocation gown manufacturer in Mumbai, we combine advanced tailoring techniques with meticulous craftsmanship to deliver products that meet international standards. Whether you need bulk orders for large institutions or custom gowns for special occasions, we provide a seamless manufacturing-to-delivery process backed by quality assurance. 

                                Choose Uniform Supplier for reliable service, competitive pricing, and gowns that make every convocation moment unforgettable.</p>

                                <button className='Connectbtn'>CONNECT WITH US</button>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}
