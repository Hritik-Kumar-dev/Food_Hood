import React from 'react';
import { LiaShoppingCartSolid } from 'react-icons/lia';
import { useCart } from '../CartContext'; // Adjust the import path as needed
import { useNavigate } from 'react-router-dom';

const CartBadge = () => {
  const { getCartItemCount } = useCart();
  const navigate = useNavigate();
  const itemCount = getCartItemCount();

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <div 
      className="relative cursor-pointer p-2 hover:bg-gray-100 rounded-full transition-colors"
      onClick={handleCartClick}
    >
      <LiaShoppingCartSolid className="text-2xl text-gray-700 hover:text-gray-900" />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
          {itemCount > 99 ? '99+' : itemCount}
        </span>
      )}
    </div>
  );
};

export default CartBadge;