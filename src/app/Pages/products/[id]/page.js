"use client";
import React, { useState } from "react";
import "./ProductDetails.css";
import { useParams } from "next/navigation";
import Image from "next/image";
import Products from "@/app/Components/Products/Products";
import Swal from "sweetalert2"; // ✅ you forgot to import

import pic1 from "@/app/Images/items/item1.webp";
import pic2 from "@/app/Images/items/item2.webp";
import pic3 from "@/app/Images/items/item3.webp";
import pic4 from "@/app/Images/items/item4.webp";
import pic5 from "@/app/Images/items/item5.webp";
import pic6 from "@/app/Images/items/item6.webp";
import pic7 from "@/app/Images/items/item7.webp";
import pic8 from "@/app/Images/items/item8.webp";

const products = [
  { id: 1, title: "Black Adult Matte High School Graduation Cap", price: 53.0, oldPrice: 74.95, rating: 3.3, reviews: 25, color: "Dark Indigo", subtitle: "Adult graduation cap is a special cap for graduation students.", images: [pic1, pic2, pic3, pic4] },
  { id: 2, title: "Black Adult Matte High School Graduation Cap", price: 53.0, oldPrice: 74.95, rating: 3.3, reviews: 25, color: "Dark Indigo", subtitle: "Adult graduation cap is a special cap for graduation students.", images: [pic2, pic3, pic4, pic5] },
  { id: 3, title: "Black Adult Matte High School Graduation Cap", price: 53.0, oldPrice: 74.95, rating: 3.3, reviews: 25, color: "Dark Indigo", subtitle: "Adult graduation cap is a special cap for graduation students.", images: [pic3, pic1, pic2, pic4] },
  { id: 4, title: "Black Adult Matte High School Graduation Cap", price: 53.0, oldPrice: 74.95, rating: 3.3, reviews: 25, color: "Dark Indigo", subtitle: "Adult graduation cap is a special cap for graduation students.", images: [pic4, pic1, pic2, pic3] },
  { id: 5, title: "Black Adult Matte High School Graduation Cap", price: 53.0, oldPrice: 74.95, rating: 3.3, reviews: 25, color: "Dark Indigo", subtitle: "Adult graduation cap is a special cap for graduation students.", images: [pic5, pic2, pic3, pic4] },
  { id: 6, title: "Black Adult Matte High School Graduation Cap", price: 53.0, oldPrice: 74.95, rating: 3.3, reviews: 25, color: "Dark Indigo", subtitle: "Adult graduation cap is a special cap for graduation students.", images: [pic6, pic2, pic3, pic4] },
  { id: 7, title: "Black Adult Matte High School Graduation Cap", price: 53.0, oldPrice: 74.95, rating: 3.3, reviews: 25, color: "Dark Indigo", subtitle: "Adult graduation cap is a special cap for graduation students.", images: [pic7, pic2, pic3, pic4] },
  { id: 8, title: "Black Adult Matte High School Graduation Cap", price: 53.0, oldPrice: 74.95, rating: 3.3, reviews: 25, color: "Dark Indigo", subtitle: "Adult graduation cap is a special cap for graduation students.", images: [pic8, pic2, pic3, pic4] },
];

export default function ProductDetails() {
  const params = useParams();
  const productId = parseInt(params.id);
  const product = products.find((p) => p.id === productId);

  const [selectedImage, setSelectedImage] = useState(product?.images[0] || null);
  const [showModal, setShowModal] = useState(false);

  const [formdata, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // ✅ fixed handleChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ fixed handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" }, // fixed spelling
        body: JSON.stringify(formdata),
      });

      const data = await res.json();

      if (data.success) {
        Swal.fire({
          title: "Form Submitted",
          text: "Our Team Will Connect to You Shortly.",
          icon: "success",
          confirmButtonText: "OK",
        });

        setFormData({
          name: "",
          phone: "",
          message: "",
        });
        setShowModal(false); // close modal after success
      } else {
        Swal.fire({
          title: "Error!",
          text: "Sorry Our Server is Busy. Please Try again",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Error!",
        text: "Something went wrong.",
        icon: "error",
        confirmButtonText: "OK",
      });
    } finally {
      setLoading(false);
    }
  };

  if (!product) return <div className="text-center my-5"> Product Not Found !</div>;

  return (
    <>
      <div className="container product-details mt-3">
        <div className="row">
          {/* Left Section */}
          <div className="col-md-6 d-flex flex-wrap justify-content-center">
            <div className="thumbnail-list">
              {product.images.map((img, idx) => (
                <Image
                  key={idx}
                  src={img}
                  alt="thumbnail"
                  className={`thumbnail ${selectedImage === img ? "active" : ""}`}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
            <div className="main-image">
              <Image src={selectedImage} alt="main" className="mainImage" />
            </div>
          </div>

          {/* Right Section */}
          <div className="col-md-6">
            <div className="details-box mt-5">
              <h4>{product.title}</h4>

              <div className="price">
                <span className="current-price">${product.price.toFixed(2)}</span>
                <span className="old-price text-success">${product.oldPrice.toFixed(2)}</span>
              </div>

              <div className="rating">⭐ {product.rating} ({product.reviews} Reviews)</div>

              <p><b className="me-2">Color:</b> {product.color}</p>

              {/* Quantity */}
              <div className="quantity gap-2 my-3">
                <b className="me-2">Quantity :</b>
                <input type="number" defaultValue={1} min={1} />
              </div>

              <button className="btn btn-dark w-75 mt-3" onClick={() => setShowModal(true)}>
                Whats Your Query
              </button>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div>
        <Products />
      </div>

      {/* Modal */}
      {showModal && (
        <div className="custom-modal-overlay">
          <div className="custom-modal">
            <div className="modal-header">
              <h5 className="mt-2 text-light">Customer Query</h5>
              <button className="btn-close" onClick={() => setShowModal(false)}></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    name="name" // ✅ added
                    className="form-control"
                    onChange={handleChange}
                    value={formdata.name}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <input
                    type="tel"
                    name="phone" // ✅ added
                    className="form-control"
                    onChange={handleChange}
                    value={formdata.phone}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Your Query</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    name="message" // ✅ added
                    onChange={handleChange}
                    value={formdata.message}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn submitBtn w-100 text-light" disabled={loading}>
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
