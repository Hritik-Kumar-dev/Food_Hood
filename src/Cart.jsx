import React from 'react';
import { useCart } from './CartContext';
import { BiCheckboxSquare } from 'react-icons/bi';
import { IoMdStar } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import Footer from './components/Footer.jsx';
const Cart = () => {
  const { 
    cart, 
    increaseQty, 
    decreaseQty, 
    removeFromCart, 
    getCartTotal, 
    getCartItemCount,
    clearCart 
  } = useCart();


  const navigate = useNavigate();
  
  const handleClick2 = () => {
    navigate('/checkout');
  };

  const totalAmount = getCartTotal();
  const itemCount = getCartItemCount();

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-6 mt-10 bg-white rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
        <div className="text-center py-12">
          <div className="text-6xl text-gray-300 mb-4">🛒</div>
          <p className="text-gray-500 text-lg mb-4">Your cart is empty</p>
          <p className="text-gray-400 text-sm mb-6">Add some delicious items to get started!</p>
          <button 
            onClick={() => window.history.back()}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (<>
  
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-white rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Your Cart ({itemCount} items)</h2>
        <button
          onClick={clearCart}
          className="text-red-500 hover:text-red-700 text-sm font-medium"
        >
          Clear Cart
        </button>
      </div>

      <div className="space-y-4">
        {cart.map(item => (
          <div key={item.id} className="flex items-center gap-4 border-b pb-4 hover:bg-gray-50 p-4 rounded-lg transition-colors">
            <img 
              className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
              src={`/images/${item.image}`}
              alt={item.foodName}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/64x64?text=Food';
              }}
            />
            
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold text-lg">{item.foodName}</h3>
                {item.veg !== undefined && (
                  item.veg ? (
                    <BiCheckboxSquare className='text-lg text-green-500' />
                  ) : (
                    <BiCheckboxSquare className='text-lg text-red-500' />
                  )
                )}
              </div>
              
              {item.restaurant && (
                <p className="text-gray-500 text-sm mb-1">{item.restaurant}</p>
              )}
              
              <div className="flex items-center justify-between">
                <p className="text-gray-600">
                  ₹{item.price} × {item.quantity} = 
                  <span className="font-semibold text-green-600 ml-1">
                    ₹{item.price * item.quantity}
                  </span>
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="flex items-center gap-2">
                <button
                  className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded font-bold text-gray-700 transition-colors"
                  onClick={() => decreaseQty(item.id)}
                >
                  -
                </button>
                <span className="font-semibold text-lg min-w-[2rem] text-center">
                  {item.quantity}
                </span>
                <button
                  className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded font-bold text-gray-700 transition-colors"
                  onClick={() => increaseQty(item.id)}
                >
                  +
                </button>
              </div>
              
              <button
                className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded transition-colors"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="mt-8 border-t pt-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg">Subtotal ({itemCount} items):</span>
            <span className="text-xl font-semibold">₹{totalAmount}</span>
          </div>
          
          <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
            <span>Delivery Fee:</span>
            <span>₹30</span>
          </div>
          
          <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
            <span>Taxes:</span>
            <span>₹{Math.round(totalAmount * 0.05)}</span>
          </div>
          
          <hr className="my-4" />
          
          <div className="flex justify-between items-center text-xl font-bold">
            <span>Total:</span>
            <span className="text-green-600">
              ₹{totalAmount + 30 + Math.round(totalAmount * 0.05)}
            </span>
          </div>
        </div>

        <div className="flex gap-4 mt-6">
          <button 
            onClick={() => window.history.back()}
            className="flex-1 bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
          >
            Continue Shopping
          </button>
          <button onClick={handleClick2} className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
      <Footer />
</>
  );
};

export default Cart;