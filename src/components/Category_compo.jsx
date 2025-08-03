import React from 'react'
import Slider from "react-slick";
import Category_Card from './Category_Card.jsx';
import '../App.css'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';


function Rtl() {

    const navigate = useNavigate();
    const handleClick = () => {
    navigate('/menu');
  };
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
    <div className="slider-container sm:px-4 md:px-6 lg:px-8">
     
      <Slider {...settings}>
      <Category_Card onClick={handleClick} title="All" image="https://i.pinimg.com/736x/06/ec/65/06ec655440ba6272f7de186bb991e89e.jpg" />
      <Category_Card onClick={handleClick} title="vegetarian" image="veg.svg" />
      <Category_Card onClick={handleClick} title="Non veg" image="nonveg.svg" />
      <Category_Card onClick={handleClick} title="Desserts" image="dessert.svg" />
      <Category_Card onClick={handleClick} title="Snacks" image="snacks.svg" />
      <Category_Card onClick={handleClick} title="Beverages" image="coldrink.svg" />
      <Category_Card onClick={handleClick} title="fast-foods" image="fastfood.svg" />
      <Category_Card onClick={handleClick} title="pizza" image="pizza.svg" />
      <Category_Card onClick={handleClick} title="thali&combo" image="thali.svg" />
      <Category_Card onClick={handleClick} title="chinese" image="chinese.svg" />
      </Slider>
    </div>
  );
}

export default Rtl;