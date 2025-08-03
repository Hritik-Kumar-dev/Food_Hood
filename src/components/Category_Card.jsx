import React from 'react';

const Category_Card = ({ title, image, isSelected, onClick }) => {
  return (
    <div
      className={`flex flex-col justify-between items-center p-2 sm:p-3 w-[100px] sm:w-[120px] md:w-[140px] h-[130px] sm:h-[150px] md:h-[180px] rounded-lg shadow-md transition-all duration-200 cursor-pointer
        ${isSelected 
          ? 'bg-blue-100 border-2 border-blue-500 shadow-lg scale-105' 
          : 'bg-gray-200 hover:bg-gray-300 hover:scale-105 hover:shadow-lg active:scale-95'
        }
      `}
      onClick={onClick}
    >
      {/* Image Container */}
      <div className='h-[70px] sm:h-[80px] md:h-[100px] flex items-center justify-center w-full'>
        <img
          className='object-contain h-auto w-auto max-h-[70px] sm:max-h-[80px] md:max-h-[100px] max-w-full'
          src={`${image}`}
          alt={title}
          loading="lazy"
        />
      </div>
      
      {/* Title */}
      <h2 className={`font-bold text-xs sm:text-sm md:text-base lg:text-lg text-center leading-tight px-1 ${
        isSelected ? 'text-blue-700' : 'text-gray-800'
      }`}>
        {title}
      </h2>
    </div>
  );
};

export default Category_Card;