import React from 'react'
import Slider from "react-slick";
import Category_Card from './Category_Card.jsx';
import '../App.css'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function Rtl() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    rtl: true
  };
  return (
    <div className="slider-container">
     
      <Slider {...settings}>
            <Category_Card title="vegetarian" image="veg.svg" />
      <Category_Card title="Non veg" image="nonveg.svg" />
      <Category_Card title="Desserts" image="dessert.svg" />
      <Category_Card title="Snacks" image="snacks.svg" />
      <Category_Card title="Beverages" image="coldrink.svg" />
      <Category_Card title="fast-foods" image="fastfood.svg" />
      <Category_Card title="pizza" image="pizza.svg" />
      <Category_Card title="thali&combo" image="thali.svg" />
      <Category_Card title="chinese" image="chinese.svg" />
      </Slider>
    </div>
  );
}

export default Rtl;