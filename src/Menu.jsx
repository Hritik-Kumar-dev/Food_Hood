import React from 'react'
import Category_Card from './components/Category_Card.jsx';
import Dish from './components/Dish.jsx';
const Menu = () => {
  return (
    <div className='w-full h-[100vh] bg-gray-100  flex'>
     <section className='left w-[24%] h-[100vh] overflow-scroll justify-center item-center flex flex-wrap  gap-4.5'  > 
   <Category_Card title="vegetarian" image="veg.svg" />
      <Category_Card title="Non veg" image="nonveg.svg" />
      <Category_Card title="Desserts" image="dessert.svg" />
      <Category_Card title="Snacks" image="snacks.svg" />
      <Category_Card title="Beverages" image="coldrink.svg" />
      <Category_Card title="fast-foods" image="fastfood.svg" />
      <Category_Card title="pizza" image="pizza.svg" />
      <Category_Card title="thali&combo" image="thali.svg" />
      <Category_Card title="chinese" image="chinese.svg" />
     </section>

<section className='right w-[76%] flex flex-wrap  items-center gap-1 p-4'> 

 <Dish />
 <Dish />
 <Dish />
 <Dish />
 <Dish />
 <Dish />
</section>
    </div>
  )
}

export default Menu
