import React from 'react';
import { IoMdStar } from 'react-icons/io';
import { BiCheckboxSquare } from 'react-icons/bi';
import { LiaShoppingCartSolid } from 'react-icons/lia';
import { useCart } from '../CartContext'; // Adjust the import path as needed

const FoodItemsComponent = ({ foodItems = [], viewMode = 'grid' }) => {
  const { addToCart, isInCart, getItemQuantity, increaseQty, decreaseQty } = useCart();

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  if (foodItems.length === 0) {
    return (
      <div className="w-full flex flex-col items-center justify-center py-20">
        <div className="text-6xl text-gray-300 mb-4">🔍</div>
        <p className="text-gray-500 text-lg mb-2">No items found</p>
        <p className="text-gray-400 text-sm">Try adjusting your search or filters</p>
      </div>
    );
  }

  // Grid View
  if (viewMode === 'grid') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
        {foodItems.map((item) => {
          const itemQuantity = getItemQuantity(item.id);
          const itemInCart = isInCart(item.id);

          return (
            <div 
              key={item.id} 
              className='flex flex-col hover:cursor-pointer hover:scale-105 items-center justify-center p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 bg-white'
            >
              <img 
                className='w-full h-32 object-cover rounded-lg mb-3' 
                src={`${item.image}`}
                alt={item.name} 
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/200x128?text=Food+Image';
                }}
              />
              <div className='flex items-center justify-between w-full mb-2'>
                <p className='flex justify-center items-center text-sm'>
                  {item.rating} <IoMdStar className='inline text-yellow-500 ml-1' />
                </p>
                {item.veg ? (
                  <BiCheckboxSquare className='text-xl text-green-500' />
                ) : (
                  <BiCheckboxSquare className='text-xl text-red-500' />
                )}
              </div>
              <h3 className='text-lg font-bold mb-1 text-center'>{item.name}</h3>
              <p className='text-gray-600 text-sm text-center mb-2 line-clamp-2'>{item.description}</p>
              <p className='text-xs text-gray-500 mb-3'>{item.restaurant}</p>
              <div className='text-lg w-full flex justify-between items-center font-semibold'>
                <span className='text-green-600'>₹{item.price}</span>
                
                {!itemInCart ? (
                  <div 
                    className='flex items-center rounded bg-green-200 cursor-pointer hover:bg-green-300 transition-colors px-2 py-1'
                    onClick={() => handleAddToCart(item)}
                  >
                    <span className='text-green-900 text-sm mr-1'>Add</span>
                    <LiaShoppingCartSolid className='text-lg text-green-900' />
                  </div>
                ) : (
                  <div className='flex items-center gap-2'>
                    <button
                      className="px-2 py-1 bg-green-200 hover:bg-green-300 rounded text-green-900 font-bold"
                      onClick={() => decreaseQty(item.id)}
                    >
                      -
                    </button>
                    <span className='text-green-900 font-bold'>{itemQuantity}</span>
                    <button
                      className="px-2 py-1 bg-green-200 hover:bg-green-300 rounded text-green-900 font-bold"
                      onClick={() => increaseQty(item.id)}
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  // List View
  return (
    <div className="flex flex-col gap-3 w-full">
      {foodItems.map((item) => {
        const itemQuantity = getItemQuantity(item.id);
        const itemInCart = isInCart(item.id);

        return (
          <div 
            key={item.id} 
            className='flex items-center gap-4 p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 bg-white hover:cursor-pointer'
          >
            <img 
              className='w-20 h-20 object-cover rounded-lg flex-shrink-0' 
              src={`/images/${item.image}`}
              alt={item.name} 
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/80x80?text=Food';
              }}
            />
            
            <div className='flex-1'>
              <div className='flex items-start justify-between'>
                <div>
                  <div className='flex items-center gap-2 mb-1'>
                    <h3 className='text-lg font-bold'>{item.name}</h3>
                    {item.veg ? (
                      <BiCheckboxSquare className='text-lg text-green-500' />
                    ) : (
                      <BiCheckboxSquare className='text-lg text-red-500' />
                    )}
                  </div>
                  <p className='text-gray-600 text-sm mb-1'>{item.description}</p>
                  <div className='flex items-center gap-4 text-sm text-gray-500'>
                    <span>{item.restaurant}</span>
                    <span className='flex items-center'>
                      {item.rating} <IoMdStar className='inline text-yellow-500 ml-1' />
                    </span>
                    <span>
                      {item.category.map((cat, index) => (
                        <span key={index} className='inline-block bg-gray-100 px-2 py-1 rounded-full text-xs mr-1'>
                          {cat}
                        </span>
                      ))}
                    </span>
                  </div>
                </div>
                
                <div className='flex items-center gap-4'>
                  <span className='text-xl font-bold text-green-600'>₹{item.price}</span>
                  
                  {!itemInCart ? (
                    <div 
                      className='flex items-center rounded bg-green-200 cursor-pointer hover:bg-green-300 transition-colors px-3 py-2'
                      onClick={() => handleAddToCart(item)}
                    >
                      <span className='text-green-900 mr-2'>Add to Cart</span>
                      <LiaShoppingCartSolid className='text-xl text-green-900' />
                    </div>
                  ) : (
                    <div className='flex items-center gap-2'>
                      <button
                        className="px-3 py-2 bg-green-200 hover:bg-green-300 rounded text-green-900 font-bold"
                        onClick={() => decreaseQty(item.id)}
                      >
                        -
                      </button>
                      <span className='text-green-900 font-bold text-lg'>{itemQuantity}</span>
                      <button
                        className="px-3 py-2 bg-green-200 hover:bg-green-300 rounded text-green-900 font-bold"
                        onClick={() => increaseQty(item.id)}
                      >
                        +
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FoodItemsComponent;