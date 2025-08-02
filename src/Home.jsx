import React from 'react'
import Category from './components/Category_Card.jsx';
import Category_compo from './components/Category_compo.jsx';
import { IoFastFoodSharp } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import Dish from './components/Dish.jsx';
const Home = () => {
  return (
    <>
      <div className='relative  h-[60vh] w-full flex flex-col gap-3.5 justify-center items-center overflow-hidden'>

        <video className='w-full h-auto background-video object-cover absolute -z-10  ' src='Untitled design (1).mp4' playsInline controls autoPlay loop muted></video>
        <h1 className='text-white text-5xl font-bold'>Order Your Favorite Food </h1>

        <p className='text-white text-lg font-semibold'>Order now and enjoy delicious meals at your doorstep!</p>

        <div className='flex items-center justify-center gap-2 w-[40vw] p-1 bg-white rounded-lg hover:border-3 hover:border-amber-500 transition-all duration-300'>
          <input className='p-3 rounded border-b-white-400 w-[40vw] bg-white' type="text" name="browse" id="browse" placeholder='Search for dishes or cuisines ' /> < FiSearch className=' hover:cursor-pointer hover:text-amber-500 text-gray-500 text-4xl' />
        </div>
        {/* call to action button to check the menuu and restraunts */}
        <button className='mt-4 px-4 py-4 flex  gap-0.5 justify-center items-center bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-all duration-300'>Check Menu <IoFastFoodSharp className='text-2xl' /></button>
      </div>


      <div className='w-full h-auto  bg-gray-100 px-48 '>
        <div className="flex   justify-center  items-center mx-4 p-2">

          <div className='flex flex-col justify-center gap-2 items-center align-center ' > <img className='w-70 h-50' src="AddCart.svg" alt="add to cart img" /> <h2 className='text-2xl -translate-y-9 font-bold'>Select Your Food</h2></div>

          <img className='w-30 h-30' src="arrow.svg" alt="arrow img" />

          <div className='flex flex-col justify-center  items-center align-center ' ><img className='w-50 h-50 ' src="checkout.svg" alt="checkout img" /><h2 className='text-2xl -translate-y-9 font-bold'>Place Order</h2> </div>

          <img className='w-30 h-30 ' src="arrow.svg" alt="arrow img" />

          <div className='flex flex-col justify-center  items-center align-center ' ><img className='mx-4.5 w-60 h-50' src="deliver.svg" alt="delivery img" /><h2 className='text-2xl -translate-y-9 font-bold'>Get Delivered</h2></div>

        </div>
        <h1 className='text-3xl font-bold  my-8'>Popular Categories</h1>
        <Category_compo />

         <h1 className='text-3xl font-bold  my-8'>Popular Dishes</h1>
         <div className='grid grid-cols-4 gap-4 p-2'>
           <Dish />
           <Dish />
           <Dish />
           <Dish />
           <Dish />
           <Dish />
           <Dish />
           <Dish />
       
        
         </div>

      </div>


    </>
  )
}

export default Home
