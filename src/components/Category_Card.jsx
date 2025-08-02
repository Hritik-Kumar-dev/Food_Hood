import React from 'react'

const Category_Card = (props) => {
  return (
    <div className='hover:cursor-pointer hover:scale-105 hover:bg-gray-300 flex flex-col justify-between items-center p-2 w-[140px] h-[180px] bg-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
      <div className=' h-[100px]'> <img  className=' object-fit h-auto w-auto aspect-auto '  src={props.image} alt="category" /></div>
        <h2 className='font-bold text-lg mt-2'>{props.title}</h2>
    </div>
  )
}

export default Category_Card
