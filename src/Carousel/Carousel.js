import React from "react";
import "./Carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import image1 from "../images/image-product-1.jpg";
import image2 from "../images/image-product-2.jpg";
import image3 from "../images/image-product-3.jpg";
import image4 from "../images/image-product-4.jpg";
const CarouselSlider = () => {
  return (
    <div>
      <div className="carousel-flex">
        <Carousel autoPlay={true} interval={4000}>
          <div>
            <img alt="" className="carousel-image" src={image1} />
          </div>
          <div>
            <img alt="" className="carousel-image" src={image2} />
          </div>
          <div>
            <img alt="" className="carousel-image" src={image3} />
          </div>
          <div>
            <img alt="" className="carousel-image" src={image4} />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselSlider;
