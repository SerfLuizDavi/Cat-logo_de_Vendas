import React from "react";
import {Swiper , SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper';
import Bazul from ".src/assets/Roupas/Fig1.jpeg;";
import BPret from "./src/assets/Roupas/Fig2.jpeg";
import BNike from "./src/assets/Roupas/Fig3.jpeg";
import BList from "./src/assets/Roupas/Fig4.jpeg";
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
/* import Slider from "react-slick"; */
import './SimpleSlider.css';

 const SimpleSlider = () => {

  const slides = {Bazul, BPret, BNike, BList};
  /*
  var settings = {
    bool:true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
*/
  return (
    <Swiper>
      {slides.map(slide => {
        <SwiperSlide>
          <img src = {slides} alt={slides}></img>
        </SwiperSlide>
      })}
    </Swiper>
    /*
    <Slider {...settings}>
      <div>
        <h3 className="A">1</h3>
      </div>
      <div>
        <h3 className="B">2</h3>
      </div>
      <div>
        <h3 className="C">3</h3>
      </div>
      <div>
        <h3 className="D">4</h3>
      </div>
      <div>
        <h3 className="E">5</h3>
      </div>
      <div>
        <h3 className="F">6</h3>
      </div>
      </Slider>
      */
  )
}

export default SimpleSlider