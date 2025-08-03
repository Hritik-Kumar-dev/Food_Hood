import React, { useState, useMemo } from 'react'
import Category from './components/Category_Card.jsx';
import Category_compo from './components/Category_compo.jsx';
import { IoFastFoodSharp } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { IoMdStar } from 'react-icons/io';
import { BiCheckboxSquare } from 'react-icons/bi';
import { LiaShoppingCartSolid } from 'react-icons/lia';
import { IoCloseOutline } from 'react-icons/io5';
import {moreFoodItems} from './assets/object.js';
import { useNavigate } from 'react-router-dom';
import PopularFood from './components/PopularFood.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/menu');
  };

  // Filter food items based on search term
  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) return [];
    
    return moreFoodItems.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.restaurant.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.some(cat => cat.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm]);

  const clearSearch = () => {
    setSearchTerm('');
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {/* Hero Section */}
      <div className='relative h-[50vh] sm:h-[60vh] w-full flex flex-col gap-3 sm:gap-3.5 justify-center items-center overflow-hidden px-4'>
        <video 
          className='w-full h-full background-video object-cover absolute inset-0 -z-10' 
          src='Untitled design (1).mp4' 
          playsInline 
          
          autoPlay 
          loop 
          muted
        />
        <h1 className='text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-tight'>
          Order Your Favorite Food
        </h1>
        <p className='text-white text-sm sm:text-base md:text-lg font-semibold text-center px-2'>
          Order now and enjoy delicious meals at your doorstep!
        </p>

        {/* Search Form */}
        <form 
          onSubmit={handleSearchSubmit} 
          className='flex items-center justify-center gap-1 sm:gap-2 w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] p-1 bg-white rounded-lg hover:border-2 hover:border-amber-500 transition-all duration-300'
        >
          <input 
            className='p-2 sm:p-3 rounded border-none w-full bg-white outline-none text-sm sm:text-base' 
            type="text" 
            name="browse" 
            id="browse" 
            placeholder='Search for dishes or cuisines' 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <IoCloseOutline 
              className='hover:cursor-pointer hover:text-red-500 text-gray-500 text-xl sm:text-2xl mr-1 sm:mr-2 flex-shrink-0' 
              onClick={clearSearch}
            />
          )}
          <FiSearch className='hover:cursor-pointer hover:text-amber-500 text-gray-500 text-2xl sm:text-3xl md:text-4xl flex-shrink-0 mr-1' />
        </form>

        {/* Check Menu Button */}
        <button 
          onClick={handleClick} 
          className='mt-3 sm:mt-4 px-3 sm:px-4 py-2 sm:py-3 md:py-4 flex gap-1 sm:gap-2 justify-center items-center bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-all duration-300 text-sm sm:text-base'
        >
          Check Menu <IoFastFoodSharp className='text-lg sm:text-xl md:text-2xl' />
        </button>
      </div>

      {/* Search Results Section */}
      {searchTerm && (
        <div className='w-full bg-white border-b border-gray-200 px-2 sm:px-4 py-4 sm:py-6'>
          <div className='max-w-7xl mx-auto'>
            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2'>
              <h2 className='text-lg sm:text-xl md:text-2xl font-bold text-gray-800'>
                Search Results for "{searchTerm}"
              </h2>
              <span className='text-sm sm:text-base text-gray-600'>
                {searchResults.length} items found
              </span>
            </div>
            
            {searchResults.length > 0 ? (
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4'>
                {searchResults.map((item) => (
                  <div 
                    key={item.id} 
                    className='flex flex-col hover:cursor-pointer hover:scale-105 items-center justify-center p-3 sm:p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 bg-white'
                  >
                    <img 
                      className='w-full h-28 sm:h-32 object-cover rounded-lg mb-2 sm:mb-3' 
                      src={`${item.image}`}
                      alt={item.name} 
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/200x128?text=Food+Image';
                      }}
                    />
                    <div className='flex items-center justify-between w-full mb-2'>
                      <p className='flex justify-center items-center text-xs sm:text-sm'>
                        {item.rating} <IoMdStar className='inline text-yellow-500 ml-1' />
                      </p>
                      {item.veg ? (
                        <BiCheckboxSquare className='text-lg sm:text-xl text-green-500' />
                      ) : (
                        <BiCheckboxSquare className='text-lg sm:text-xl text-red-500' />
                      )}
                    </div>
                    <h3 className='text-base sm:text-lg font-bold mb-1 text-center line-clamp-1'>{item.name}</h3>
                    <p className='text-gray-600 text-xs sm:text-sm text-center mb-2 line-clamp-2'>{item.description}</p>
                    <p className='text-xs text-gray-500 mb-2 sm:mb-3 text-center'>{item.restaurant}</p>
                    <div className='text-base sm:text-lg w-full flex justify-between items-center font-semibold'>
                      <span className='text-green-600'>₹{item.price}</span>
                      <div className='flex items-center rounded bg-green-200 cursor-pointer hover:bg-green-300 transition-colors px-2 py-1'>
                        <span className='text-green-900 text-xs sm:text-sm mr-1'>Add</span>
                        <LiaShoppingCartSolid className='text-sm sm:text-lg text-green-900' />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className='text-center py-6 sm:py-8'>
                <div className='text-4xl sm:text-5xl md:text-6xl text-gray-300 mb-3 sm:mb-4'>🔍</div>
                <p className='text-gray-500 text-base sm:text-lg mb-2'>No items found for "{searchTerm}"</p>
                <p className='text-gray-400 text-sm mb-3 sm:mb-4 px-4'>Try searching for something else or check our popular categories below</p>
                <button 
                  onClick={clearSearch}
                  className='px-3 sm:px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors text-sm sm:text-base'
                >
                  Clear Search
                </button>
              </div>
            )}
            
            {searchResults.length > 0 && (
              <div className='text-center mt-4 sm:mt-6'>
                <button 
                  onClick={() => {
                    navigate('/menu', { state: { searchTerm } });
                  }}
                  className=' animation  px-4 sm:px-6 py-2 sm:py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors font-semibold text-sm sm:text-base'
                >
                  View All Results in Menu
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Main Content Section */}
      <div className='w-full h-auto bg-gray-100 px-2 sm:px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-48'>
        
     {/* How It Works Section */}
<div className="flex flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 px-4 py-8 bg-gray-50 rounded-lg flex-wrap">
  {/* Step 1 */}
  <div className="flex flex-col items-center text-center">
    <img className="w-26 h-26 sm:w-20 sm:h-20 md:w-24 md:h-24" src="AddCart.svg" alt="Select Food" />
    <h2 className="mt-2 text-sm sm:text-base md:text-lg font-semibold">Select Your Food</h2>
  </div>

  {/* Arrow 1 */}
  <img className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rotate-0 opacity-50" src="arrow.svg" alt="Arrow" />

  {/* Step 2 */}
  <div className="flex flex-col items-center text-center">
    <img className="w-26 h-26 sm:w-20 sm:h-20 md:w-24 md:h-24" src="checkout.svg" alt="Place Order" />
    <h2 className="mt-2 text-sm sm:text-base md:text-lg font-semibold">Place Order</h2>
  </div>

  {/* Arrow 2 */}
  <img className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rotate-0 opacity-50" src="arrow.svg" alt="Arrow" />

  {/* Step 3 */}
  <div className="flex flex-col items-center text-center">
    <img className="w-26 h-26 sm:w-20 sm:h-20 md:w-24 md:h-24" src="deliver.svg" alt="Get Delivered" />
    <h2 className="mt-2 text-sm sm:text-base md:text-lg font-semibold">Get Delivered</h2>
  </div>
</div>


        {/* Popular Categories Section */}
       <div className="px-4 sm:px-6 lg:px-8">
  <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mt-4 sm:mt-6 md:mt-8 mb-2 sm:mb-4 md:mb-6 lg:mb-8">
    Popular Categories
  </h1>
  <Category_compo />
</div>


        {/* Popular Dishes Section */}
        <div className='px-2 sm:px-0'>
          <h1 className='text-xl sm:text-2xl md:text-3xl font-bold my-4 sm:my-6 md:my-8'>Popular Dishes</h1>
          <div className='overflow-x-auto sm:overflow-x-hidden'>
            <PopularFood />
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer className="mt-4 sm:mt-6 md:mt-8" />
    </>
  )
}

export default Home