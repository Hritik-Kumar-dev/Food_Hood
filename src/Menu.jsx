import React, { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { IoSearchOutline } from 'react-icons/io5';
import Category_Card from './components/Category_Card.jsx';
import FoodItemsComponent from './components/FoodItemsComponent.jsx';
import Footer from './components/Footer.jsx';

import { moreFoodItems } from './assets/object.js'; // Adjust the path as necessary

const Menu = () => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Handle search term from Home page
  useEffect(() => {
    if (location.state?.searchTerm) {
      setSearchTerm(location.state.searchTerm);
    }
  }, [location]);

  // Function to handle category selection
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Simple filtering based on category and search
  const filteredItems = useMemo(() => {
    let items = moreFoodItems;

    // Category filter
    if (selectedCategory !== 'All') {
      items = items.filter(item => 
        item.category.some(cat => 
          cat.toLowerCase() === selectedCategory.toLowerCase()
        )
      );
    }

    // Search filter
    if (searchTerm) {
      items = items.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.restaurant.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.some(cat => cat.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    return items;
  }, [selectedCategory, searchTerm]);

  return (
    <>
    <div className='w-full h-[100vh] bg-gray-100 flex'>
      {/* Categories Sidebar */}
      <section className='left w-[24%] h-[100vh] overflow-scroll justify-center item-center flex flex-wrap gap-4.5 p-4'>
        <Category_Card 
          title="All" 
          image="https://i.pinimg.com/736x/06/ec/65/06ec655440ba6272f7de186bb991e89e.jpg" 
          isSelected={selectedCategory === 'All'}
          onClick={() => handleCategoryClick('All')}
        />
        <Category_Card 
          title="Vegetarian" 
          image="veg.svg" 
          isSelected={selectedCategory === 'Vegetarian'}
          onClick={() => handleCategoryClick('Vegetarian')}
        />
        <Category_Card 
          title="Non Veg" 
          image="nonveg.svg" 
          isSelected={selectedCategory === 'Non Veg'}
          onClick={() => handleCategoryClick('Non Veg')}
        />
        <Category_Card 
          title="Desserts" 
          image="dessert.svg" 
          isSelected={selectedCategory === 'Desserts'}
          onClick={() => handleCategoryClick('Desserts')}
        />
        <Category_Card 
          title="Snacks" 
          image="snacks.svg" 
          isSelected={selectedCategory === 'Snacks'}
          onClick={() => handleCategoryClick('Snacks')}
        />
        <Category_Card 
          title="Pizza" 
          image="pizza.svg" 
          isSelected={selectedCategory === 'Pizza'}
          onClick={() => handleCategoryClick('Pizza')}
        />
        <Category_Card 
          title="Chinese" 
          image="chinese.svg" 
          isSelected={selectedCategory === 'Chinese'}
          onClick={() => handleCategoryClick('Chinese')}
        />
      </section>
      
      {/* Main Content Area */}
      <section className='right w-[76%] h-[100vh] flex flex-col'>
        {/* Simple Search Header */}
        <div className="bg-white shadow-sm border-b p-4">
          {/* Search Bar */}
          <div className="relative mb-4">
            <IoSearchOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
            <input
              type="text"
              placeholder="Search food items, restaurants, or categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Results Section */}
        <div className="flex-1 overflow-auto p-4">
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-gray-800">
              {selectedCategory === 'All' ? 'Browse All Items' : selectedCategory}
              {searchTerm && (
                <span className="text-lg font-normal text-gray-600 ml-2">
                  - Results for "{searchTerm}"
                </span>
              )}
            </h2>
            <p className="text-gray-600">
              {filteredItems.length} items found
            </p>
          </div>
          
          <FoodItemsComponent 
            foodItems={filteredItems} 
            viewMode="grid"
          />
        </div>
      </section>
    </div>
    
      <Footer />
    </>
  );
};

export default Menu;