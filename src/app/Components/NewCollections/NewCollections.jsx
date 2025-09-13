import Image from 'next/image'
import React from 'react'


export default function NewCollections() {
  return (
    <>
      <section id="billboard" className="bg-light py-5">
    <div className="container">
      <div className="row justify-content-center">
        <h1 className="section-title text-center mt-4" data-aos="fade-up">New Collections</h1>
        <div className="col-md-6 text-center" data-aos="fade-up" data-aos-delay="300">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptas ut dolorum consequuntur, adipisci
            repellat! Eveniet commodi voluptatem voluptate, eum minima, in suscipit explicabo voluptatibus harum,
            quibusdam ex repellat eaque!</p>
        </div>
      </div>
      <div className="row">
        <div className="swiper main-swiper py-4" data-aos="fade-up" data-aos-delay="600">
          <div className="swiper-wrapper d-flex border-animation-left">
            <div className="swiper-slide">
              <div className="banner-item image-zoom-effect">
                <div className="image-holder">
                  <a href="#">
                    <Image src="/images/banner-image-6.jpg" alt="product" width={200} height={200} className="img-fluid"/>
                  </a>
                </div>
                <div className="banner-content py-4">
                  <h5 className="element-title text-uppercase">
                    <a href="index.html" className="item-anchor">Soft leather jackets</a>
                  </h5>
                  <p>Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.</p>
                  <div className="btn-left">
                    <a href="#" className="btn-link fs-6 text-uppercase item-anchor text-decoration-none">Discover Now</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="banner-item image-zoom-effect">
                <div className="image-holder">
                  <a href="#">
                    <Image src="/images/banner-image-1.jpg" alt="product" width={200} height={200} className="img-fluid"/>
                  </a>
                </div>
                <div className="banner-content py-4">
                  <h5 className="element-title text-uppercase">
                    <a href="index.html" className="item-anchor">Soft leather jackets</a>
                  </h5>
                  <p>Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.</p>
                  <div className="btn-left">
                    <a href="#" className="btn-link fs-6 text-uppercase item-anchor text-decoration-none">Discover Now</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="banner-item image-zoom-effect">
                <div className="image-holder">
                  <a href="#">
                    <Image src="/images/banner-image-2.jpg" alt="product" width={200} height={200} className="img-fluid"/>
                  </a>
                </div>
                <div className="banner-content py-4">
                  <h5 className="element-title text-uppercase">
                    <a href="index.html" className="item-anchor">Soft leather jackets</a>
                  </h5>
                  <p>Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.</p>
                  <div className="btn-left">
                    <a href="#" className="btn-link fs-6 text-uppercase item-anchor text-decoration-none">Discover Now</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="banner-item image-zoom-effect">
                <div className="image-holder">
                  <a href="#">
                    <Image src="/images/banner-image-3.jpg" alt="product" width={200} height={200} className="img-fluid"/>
                  </a>
                </div>
                <div className="banner-content py-4">
                  <h5 className="element-title text-uppercase">
                    <a href="index.html" className="item-anchor">Soft leather jackets</a>
                  </h5>
                  <p>Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.</p>
                  <div className="btn-left">
                    <a href="#" className="btn-link fs-6 text-uppercase item-anchor text-decoration-none">Discover Now</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="banner-item image-zoom-effect">
                <div className="image-holder">
                  <a href="#">
                    <Image src="/images/banner-image-4.jpg" alt="product" width={200} height={200} className="img-fluid"/>
                  </a>
                </div>
                <div className="banner-content py-4">
                  <h5 className="element-title text-uppercase">
                    <a href="index.html" className="item-anchor">Out crop sweater</a>
                  </h5>
                  <p>Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.</p>
                  <div className="btn-left">
                    <a href="#" className="btn-link fs-6 text-uppercase item-anchor text-decoration-none">Discover Now</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="banner-item image-zoom-effect">
                <div className="image-holder">
                  <a href="#">
                    <Image src="/images/banner-image-5.jpg" alt="product" width={200} height={200} className="img-fluid"/>
                  </a>
                </div>
                <div className="banner-content py-4">
                  <h5 className="element-title text-uppercase">
                    <a href="index.html" className="item-anchor">Soft leather jackets</a>
                  </h5>
                  <p>Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.</p>
                  <div className="btn-left">
                    <a href="#" className="btn-link fs-6 text-uppercase item-anchor text-decoration-none">Discover Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
        <div className="icon-arrow icon-arrow-left"><svg width="50" height="50" viewBox="0 0 24 24">
            <use href="#arrow-left"></use>
          </svg></div>
        <div className="icon-arrow icon-arrow-right"><svg width="50" height="50" viewBox="0 0 24 24">
            <use href="#arrow-right"></use>
          </svg></div>
      </div>
    </div>
  </section>

    </>
  )
}
