import React from "react";
import Bazul from '../../assets/Roupas/Fig1.jpeg'
import Bpret from '../../assets/Roupas/Fig2.jpeg'
import Bnike from '../../assets/Roupas/Fig3.jpeg'
import Blist from '../../assets/Roupas/Fig4.jpeg'
import Slider from "react-slick"
import './SimpleSlider.css';

 const SimpleSlider = () => {
  
  const slides = {Bazul, Bpret, Bnike, Blist};
  
  var settings = {
    bool:true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
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
  
  )
}

export default SimpleSlider
