import React from 'react'
import pic1 from '@/app/Images/items/item1.webp'
import pic2 from '@/app/Images/items/item2.webp'
import pic3 from '@/app/Images/items/item3.webp'
import pic4 from '@/app/Images/items/item4.webp'
import pic5 from '@/app/Images/items/item5.webp'
import pic6 from '@/app/Images/items/item6.webp'
import pic7 from '@/app/Images/items/item7.webp'
import pic8 from '@/app/Images/items/item8.webp'
import { TiArrowRightOutline } from "react-icons/ti";
import './products.css'
import Image from 'next/image'

export default function Products() {
 
    const products =[
        {id:1,title:"Black Adult Matte High School Graduation Cap" , subtitle: "Adult graduation cap is a special cap for graduation students." , image:pic1 },
        {id:2,title:"Black Adult Matte High School Graduation Cap" , subtitle: "Adult graduation cap is a special cap for graduation students." , image:pic2 },
        {id:3,title:"Black Adult Matte High School Graduation Cap" , subtitle: "Adult graduation cap is a special cap for graduation students." , image:pic3 },
        {id:4,title:"Black Adult Matte High School Graduation Cap" , subtitle: "Adult graduation cap is a special cap for graduation students." , image:pic4 },
        {id:5,title:"Black Adult Matte High School Graduation Cap" , subtitle: "Adult graduation cap is a special cap for graduation students." , image:pic5 },
        {id:6,title:"Black Adult Matte High School Graduation Cap" , subtitle: "Adult graduation cap is a special cap for graduation students." , image:pic6 },
        {id:7,title:"Black Adult Matte High School Graduation Cap" , subtitle: "Adult graduation cap is a special cap for graduation students." , image:pic7 },
        {id:8,title:"Black Adult Matte High School Graduation Cap" , subtitle: "Adult graduation cap is a special cap for graduation students." , image:pic8 },
    ]

  return (
    <>

    <div className='Products-mainSec'>
           <div className='container'>
            <div className='text-center my-5'>
                <h3 className='headingTitle'>Our Best Selling Products</h3>
            </div>
            <div className='row'>
              {products.map((item,index)=>(
                  <div className="col-md-3 d-flex justify-content-center" key={index}>
                   <div className='card productCard '>
                   <div className='ProductImageSec'>
                        <Image src={item.image} alt="productImg" className='productImg' />
                    </div>
                         <div className='productDetails'>
                            <h3>{item.title}</h3>
                            <p>{item.subtitle}</p>
                             <button className='ReadMoreBtn'>Read More  < TiArrowRightOutline  className='fs-3'/></button>
                         </div>
                   </div>
                  </div>
              ))

              }

            </div>

           </div>

    </div>
      
    </>
  )
}
