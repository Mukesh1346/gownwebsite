import React from 'react'
import icon1 from '@/app/Images/items/icon5.png'
import icon2 from '@/app/Images/items/icon6.png'
import icon3 from '@/app/Images/items/icon7.png'
import icon4 from '@/app/Images/items/icon8.png'
import Image from 'next/image'
import './whychoose.css'

export default function WhyChooseUs() {
    const features = [
        { id: 1, title: " Professional Team", subtitle: "Professional team: We have around 50 workers with all the advance Machinery,which can control the whole production process.", icon: icon1 },
        // { id: 2, title: "Safety Assurance", subtitle: "Safety assurance: Certificated by ISO9001:2000 system.", icon: icon2 },
        { id: 2, title: " Customization Requirements", subtitle: "Customization requirements: Have own R&D room, can do as your styles, colors, size, etc .", icon: icon3 },
        { id: 3, title: "Complete After-Sale Service", subtitle: "Complete after-sale service: Our after sales-team are on line whole year, can solve the problem rapidly.", icon: icon4 },

    ]





    return (
        <>
            <div className='whyChooseMainSec'>
                <div className='container'>
                    <div className='textSection text-center'>
                        <h2>Why Choose capstole </h2>
                        <p> We have over 50 skilled workers with all the advance Machinery required with our own design room, cutting, sewing, packing rooms. We can do the gown, caps, stoles, etc according to your demands, or specially design for you.</p>

                    </div>
                    <div className='FeatureSection'>
                        <div className="container">
                            <div className="row d-flex justify-content-center">
                                {features.map((item, index) => (
                                    <div className="col-md-3 " key={index}>
                                        <div className='cardSecDetils '>
                                            <div className='d-flex justify-content-center'><Image src={item.icon} alt={item.title} className='iconImg text-light' height={100} width={100} /></div>
                                            <h4 className='text-light'>{item.title}</h4>
                                            <p className='text-light'>{item.subtitle}</p>
                                        </div>
                                    </div>
                                ))

                                }
                            </div>
                        </div>

                    </div>


                </div>
            </div>


        </>
    )
}
