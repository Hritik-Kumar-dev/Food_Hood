import React from 'react'
import {PopularFoodItems} from '../assets/object.js';
import { IoMdStar } from 'react-icons/io';
import { BiCheckboxSquare } from 'react-icons/bi';
import { LiaShoppingCartSolid } from 'react-icons/lia';

const PopularFood = () => {
  return (
   <div className=" overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 w-full">
        {PopularFoodItems.map((item) => (
          <div 
            key={item.id} 
            className='flex flex-col hover:cursor-pointer hover:scale-105 items-center justify-center p-2 border border-gray-300 rounded-lg shadow-md transition-transform duration-200'
          >
            <img 
              className='w-[100%] h-32 object-cover rounded-lg' 
              src={`${item.image}`}
              alt={item.name} 
            />
            <div className='sticky flex items-center justify-between w-full px-3 mt-2'>
              <p className='flex justify-center items-center'>
                {item.rating} <IoMdStar className='inline text-yellow-500 ml-1' />
              </p>
                <p className='text-sm text-gray-500 mt-1'>{item.restaurant}</p>
              {item.veg ? (
                <BiCheckboxSquare className='inline text-2xl text-green-500' />
              ) : (
                <BiCheckboxSquare className='inline text-2xl text-red-500' />
              )}
            </div>
            <h2 className='text-xl font-bold mt-2'>{item.name}</h2>
            <p className='text-gray-600 text-center px-2'>{item.description}</p>
          
            <div className='text-lg w-full flex justify-between px-3 font-semibold mt-3'>
              ₹{item.price}
              <div className='flex items-center rounded bg-green-200 cursor-pointer hover:bg-green-300 transition-colors'>
                <label className='px-2 text-green-900 cursor-pointer' htmlFor={`add-to-cart-${item.id}`}>
                  Add
                </label>
                <LiaShoppingCartSolid 
                  id={`add-to-cart-${item.id}`}
                  className='text-2xl text-green-900 mr-1' 
                />
              </div>
            </div>
          </div>
        ))}
      </div>
  )
}

export default PopularFood
