"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import pic1 from '@/app/Images/T1.webp'
import pic2 from '@/app/Images/T2.webp'
import pic3 from '@/app/Images/T3.webp'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "Thank you so much for your quick and prompt ability to handle our convocation on such short notice.",
      name: "Pulkit Arora",
      college: "Maharaja Surajmal College",
      image: pic1,
    },
    {
      id: 2,
      text: "The quality of the products are really amazing… Packaging was neat and delivery was on time. The seller is very cooperative.",
      name: "Manasa Ryagalla",
      college: "",
      image: pic2,
    },
    {
      id: 3,
      text: "They made a custom preaching gown for me and I was very pleased with the whole experience. Great service and communication.",
      name: "Christopher P. David",
      college: "",
      image: pic3,
    },
    {
      id: 4,
      text: "Excellent fabric quality and timely delivery. I will surely order again for next year's event.",
      name: "Ritika Sharma",
      college: "Delhi University",
      image: pic1,
    },
    {
      id: 5,
      text: "Very professional service. They handled bulk orders without any delay .I was very pleased with the whole experience.",
      name: "Amit Verma",
      college: "IGNOU",
      image: pic2,
    },
  ];

  return (
    <section className="container py-5">
      <div className="row">
        {/* Left side text */}
        <div className="col-md-4 d-flex flex-column justify-content-center">
          <h3 className="text-uppercase  fw-bold text-muted">Testimonials</h3>
          <h2 className="fw-bold">Our Prestigious Clients</h2>
          <p className="text-muted">Voices of Joy, Moments of Pride</p>
        </div>

        {/* Right side Swiper carousel */}
        <div className="col-md-8">
          <Swiper
            modules={[  Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="card shadow-sm h-100 p-3">
                  <p className="mb-3" style={{ fontSize: "0.95rem" }}>
                    {item.text}
                  </p>
                  <div className="d-flex align-items-center mt-auto">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={50}
                      height={50}
                      className="rounded-circle me-3"
                    />
                    <div>
                      <h6 className="mb-0 fw-bold">{item.name}</h6>
                      {item.college && (
                        <small className="text-muted">{item.college}</small>
                      )}
                      <div className="text-warning small">★★★★★</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
