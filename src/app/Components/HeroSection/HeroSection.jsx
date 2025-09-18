import Image from 'next/image'
import React from 'react'
import './herosection.css'

export default function HeroSection(props) {
  return (
    <>
      <div className='heroSection'>
        <div className='ImageSec'>
        <Image src="/graphic.gif" alt="Animated Gif" style={{width:"100%"}} className='overlayImg w-100  ' width={1200} height={400} unoptimized/>    
        </div>
        <div className='overlayText'>
             <h3 className='text-light'>{props.name}</h3>
             <p className='text-warning'>{props.title}</p>
        </div>
          </div>
    </>
  )
}
