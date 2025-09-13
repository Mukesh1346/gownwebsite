import React from 'react'
import icon1 from '@/app/Images/items/icon1.png'
import icon2 from '@/app/Images/items/icon2.png'
import icon3 from '@/app/Images/items/icon3.png'
import icon4 from '@/app/Images/items/icon4.png'
import Image from 'next/image'
import './whychoose.css'

export default function WhyChooseUs() {
    const features = [
        { id: 1, title: " Professional Team", subtitle: "Professional team: We have around 100 works & over 100 machines, can control the whole production process.", icon: icon1 },
        { id: 2, title: "Safety Assurance", subtitle: "Safety assurance: Certificated by ISO9001:2000 system.", icon: icon2 },
        { id: 3, title: " Customization Requirements", subtitle: "Customization requirements: Have own R&D room, can do as your styles, colors, size, etc .", icon: icon3 },
        { id: 4, title: "Complete After-Sale Service", subtitle: "Complete after-sale service: Our after sales-team are on line whole year, can solve the problem rapidly.", icon: icon4 },

    ]





    return (
        <>
            <div className='whyChooseMainSec'>
                <div className='container'>
                    <div className='textSection text-center'>
                        <h2>Why Choose Shaoxing OBSO Textile & Garments Co.Ltd</h2>
                        <p> We have over 100 skilled workers, around 100 machines, with our own design room, cutting, sewing, packing rooms. We can do the gown, caps, stoles, etc according to your demands, or specially design for you.</p>

                    </div>
                    <div className='FeatureSection'>
                        <div className="container">
                            <div className="row">
                                {features.map((item, index) => (
                                    <div className="col-md-3 " key={index}>
                                        <div className='cardSecDetils card'>
                                            <div className='d-flex justify-content-center'><Image src={item.icon} alt={item.title} className='iconImg' height={100} width={100} /></div>
                                            <h4>{item.title}</h4>
                                            <p>{item.subtitle}</p>
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
