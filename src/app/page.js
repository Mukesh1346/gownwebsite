import Image from "next/image";
// import NewCollections from "./Components/NewCollections/NewCollections";
import Carousel from "./Components/Carousel/Carousel";
import TopManufacturer from "./Components/TopManufacturer/TopManufacturer";
import SupplyUniform from "./Components/SupplyUniform/SupplyUniform";
import CategoriesCarousel from "./Components/CategoriesCarousel/CategoriesCarousel";
import Testimonials from "./Components/Testimonial/Testimonial";
import Banner from "./Components/Banner/Banner";
import Products from "./Components/Products/Products";
import FAQ from "./Components/FAQ/FAQ";
import WhyChooseUs from "./Components/WhyChooseUs/WhyChooseUs";



export default function Home() {
  return (
    <>
      <div>
        <Carousel />
       
        <CategoriesCarousel />
        {/* <TopManufacturer /> */}
        <SupplyUniform />
        <WhyChooseUs />
        <Banner />
        <Products />

        <FAQ />
        <Testimonials />
      </div>
    </>
  );
}
