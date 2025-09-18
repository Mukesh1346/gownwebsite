"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import item1 from "@/app/Images/items/item1.webp"
import item2 from "@/app/Images/items/item2.webp"
import item3 from "@/app/Images/items/item3.webp"
import item4 from "@/app/Images/items/item4.webp"
import item5 from "@/app/Images/items/item5.webp"
import Image from "next/image";
import "./categories.css"; // import external css
import Link from "next/link";

export default function CategoriesCarousel() {
    const categories = [
            { id : 1,name: "Doctoral Gowns", img: item1},
            { id : 2,name: "Doctoral Packages", img: item2 },
            { id : 3,name: "High School", img: item3 },
            { id : 4,name: "Faculty Doctoral-tams", img: item4 },
            { id : 5,name: "Master Degree", img: item5 },
            { id : 6,name: "Medals", img: item3 },
            { id : 7,name: "Medals", img: item4 },
            { id : 8,name: "Medals", img: item5 },
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
            1024: { slidesPerView: 6 },
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

