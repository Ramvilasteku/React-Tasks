import React from "react";
import {Carousel} from "react-bootstrap"
import '../Carousels/carousle.css'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'

const Carousel1 = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
        <img src={img1} className="w-100"/>
        </Carousel.Item>
        <Carousel.Item >
        <img src={img2} className="w-100"/>
        </Carousel.Item>
        <Carousel.Item >
        <img src={img3}className="w-100"/>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Carousel1;
