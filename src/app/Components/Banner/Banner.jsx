import React from 'react'
import './banner.css'
import Image from 'next/image'
import Banner1 from '@/app/Images/banner.jpg'
import { MdWifiCalling3 } from "react-icons/md";

export default function Banner() {
  return (
    <div className='Banner-mainSec'>
        <div className='BannerDetials'>
           <div className='BannerImgSec'>
           <Image src={Banner1} alt="bannerImg" className='BannerImg'/>
           </div>
                
                <div className='overlayText'>
                    <h3>Provide First-class Customized Services</h3>
                  <div className='d-flex'>
                  <MdWifiCalling3  className='fs-3 text-light'/> <p className='bannerpara'><span className='pe-2'> Support Hotline:</span> +91 - 9318311035</p>
                  </div>
                    <a href="/Pages/contact-us"><button className='bannerBtn'>Read More</button></a>
                </div>
        </div>
      
    </div>
  )
}
