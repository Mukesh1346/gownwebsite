      "use client"
import React, { useState } from 'react'
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
import Link from 'next/link'




const products = [
  { id: 1, title: "Black Adult Matte High School Graduation Cap", subtitle: "Adult graduation cap is a special cap for graduation students.", image: pic1 },
  { id: 2, title: "Black Adult Matte High School Graduation Cap", subtitle: "Adult graduation cap is a special cap for graduation students.", image: pic2 },
  { id: 3, title: "Black Adult Matte High School Graduation Cap", subtitle: "Adult graduation cap is a special cap for graduation students.", image: pic3 },
  { id: 4, title: "Black Adult Matte High School Graduation Cap", subtitle: "Adult graduation cap is a special cap for graduation students.", image: pic4 },
  { id: 5, title: "Black Adult Matte High School Graduation Cap", subtitle: "Adult graduation cap is a special cap for graduation students.", image: pic5 },
  { id: 6, title: "Black Adult Matte High School Graduation Cap", subtitle: "Adult graduation cap is a special cap for graduation students.", image: pic6 },
  { id: 7, title: "Black Adult Matte High School Graduation Cap", subtitle: "Adult graduation cap is a special cap for graduation students.", image: pic7 },
  { id: 8, title: "Black Adult Matte High School Graduation Cap", subtitle: "Adult graduation cap is a special cap for graduation students.", image: pic8 },
  { id: 9, title: "Black Adult Matte High School Graduation Cap", subtitle: "Adult graduation cap is a special cap for graduation students.", image: pic1 },
  { id: 10, title: "Black Adult Matte High School Graduation Cap", subtitle: "Adult graduation cap is a special cap for graduation students.", image: pic2 },
  { id: 11, title: "Black Adult Matte High School Graduation Cap", subtitle: "Adult graduation cap is a special cap for graduation students.", image: pic3 },
  { id: 12, title: "Black Adult Matte High School Graduation Cap", subtitle: "Adult graduation cap is a special cap for graduation students.", image: pic4 },
  { id: 13, title: "Black Adult Matte High School Graduation Cap", subtitle: "Adult graduation cap is a special cap for graduation students.", image: pic5 },
  { id: 14, title: "Black Adult Matte High School Graduation Cap", subtitle: "Adult graduation cap is a special cap for graduation students.", image: pic6 },
  { id: 15, title: "Black Adult Matte High School Graduation Cap", subtitle: "Adult graduation cap is a special cap for graduation students.", image: pic7 },
  { id: 16, title: "Black Adult Matte High School Graduation Cap", subtitle: "Adult graduation cap is a special cap for graduation students.", image: pic8 },
  { id: 17, title: "Black Adult Matte High School Graduation Cap", subtitle: "Adult graduation cap is a special cap for graduation students.", image: pic1 },
  { id: 18, title: "Black Adult Matte High School Graduation Cap", subtitle: "Adult graduation cap is a special cap for graduation students.", image: pic2 },
  { id: 19, title: "Black Adult Matte High School Graduation Cap", subtitle: "Adult graduation cap is a special cap for graduation students.", image: pic3 },
  { id: 20, title: "Black Adult Matte High School Graduation Cap", subtitle: "Adult graduation cap is a special cap for graduation students.", image: pic4 },
  
]






export default function Products({ display }) {
  const [currentPage, setCurrentPage] = useState(1)
  const cardsPerPage = 8;




  const indexOfLastCard = currentPage * cardsPerPage;

  const indexOfFirstCard = indexOfLastCard - cardsPerPage;

  const currentCards = products .slice(indexOfFirstCard, indexOfLastCard)


  const totalPages = Math.ceil(products.length / cardsPerPage);

  return (
    <>

      <div className='Products-mainSec'>
        <div className='container'>
          <div className={`text-center ${display}  my-5`}>
            <h3 className='headingTitle '>Our Best Selling Products</h3>
          </div>
          <div className='row'>
            {currentCards.map((item, index) => (
              <div className="col-md-3 d-flex justify-content-center" key={index}>
                <div className='card productCard '>
                  <div className='ProductImageSec'>
                    <Image src={item.image} alt="productImg" className='productImg' />
                  </div>
                  <div className='productDetails'>
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>
                    <Link href={`/Pages/products/${item.id}`}>     <button className='ReadMoreBtn' >Read More  < TiArrowRightOutline className='fs-3' /></button> </Link>
                  </div>
                </div>
              </div>
            ))

            }

          </div>

      <div className="d-flex  align-item-center justify-content-center gap-2 my-3">
        <button
          className="px-3 py-1 border rounded disabled:opacity-50"
          onClick={() => setCurrentPage((p) => p - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-3 py-1 border rounded ${
              currentPage === index + 1 ? "bg-blue-500 text-white" : ""
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          className="px-3 py-1 border rounded disabled:opacity-50"
          onClick={() => setCurrentPage((p) => p + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
        </div>

      </div>

  

    </>
  )
}
