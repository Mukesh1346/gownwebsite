"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import item1 from "@/app/Images/items/item13.png"
import item2 from "@/app/Images/items/item14.png"
import item3 from "@/app/Images/items/item17.jpg"
import item4 from "@/app/Images/items/item16.png"

import Image from "next/image";
import "./categories.css"; // import external css
import Link from "next/link";

export default function CategoriesCarousel() {
    const categories = [ 
            { id : 1,name: "Graduation Caps", img: item1},
            { id : 2,name: "Stoles", img: item2 },
            { id : 3,name: "Tassles & year Charm ", img: item3 },
            { id : 4,name: "Choir and Clergy Gowns", img: item4 },
            // { id : 5,name: "Master Degree", img: item5 },
            // { id : 6,name: "Medals", img: item3 },
            // { id : 7,name: "Medals", img: item4 },
            // { id : 8,name: "Medals", img: item5 },
          ];
        
  return (
    <section className="categories-section">
      <h2>Top Categories</h2>
      <div className="categories-carousel">
        <Swiper
          modules={[ Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            320: { slidesPerView: 3 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {categories.map((item, idx) => (
            <SwiperSlide key={idx}>
             <Link href={`/Pages/products`}>
             <div className="category-item pt-2">
                <Image src={item.img} alt={item.name} />
                <p className="text-none">{item.name}</p>
              </div>
             </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

