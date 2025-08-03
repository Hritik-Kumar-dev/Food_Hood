import React, { useState } from 'react';
import { useCart } from './CartContext';
import { BiCheckboxSquare } from 'react-icons/bi';
import Footer from './components/Footer';

const Checkout = () => {
  const { 
    cart, 
    getCartTotal, 
    getCartItemCount,
    clearCart 
  } = useCart();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    paymentMode: 'COD'
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const totalAmount = getCartTotal();
  const itemCount = getCartItemCount();
  const deliveryFee = 30;
  const taxes = Math.round(totalAmount * 0.05);
  const finalTotal = totalAmount + deliveryFee + taxes;

  const handleOrder = async () => {
    // Basic validation
    if (!formData.name || !formData.phone || !formData.address) {
      alert("Please fill in all required fields!");
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      alert("Order placed successfully!");
      console.log("Order Details:", formData);
      console.log("Cart:", cart);
      console.log("Total Amount:", finalTotal);
      
      // Clear cart after successful order
      clearCart();
      setIsLoading(false);
      
      // Optionally redirect to home or order confirmation page
      // window.history.back();
    }, 1500);
  };

  // If cart is empty, show empty state
  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-6 mt-10 bg-white rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-6">Checkout</h2>
        <div className="text-center py-12">
          <div className="text-6xl text-gray-300 mb-4">🛒</div>
          <p className="text-gray-500 text-lg mb-4">Your cart is empty</p>
          <p className="text-gray-400 text-sm mb-6">Add some items to proceed with checkout!</p>
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

  return (
    <>
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-white rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Checkout</h2>
        <button
          onClick={() => window.history.back()}
          className="text-gray-500 hover:text-gray-700 text-sm font-medium"
        >
          ← Back to Cart
        </button>
      </div>

      {/* Order Summary */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Order Summary ({itemCount} items)</h3>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="space-y-3 mb-4">
            {cart.map(item => (
              <div key={item.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img 
                    className="w-12 h-12 object-cover rounded-lg"
                    src={`/images/${item.image}`}
                    alt={item.foodName}
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/48x48?text=Food';
                    }}
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{item.foodName}</span>
                      {item.veg !== undefined && (
                        item.veg ? (
                          <BiCheckboxSquare className='text-sm text-green-500' />
                        ) : (
                          <BiCheckboxSquare className='text-sm text-red-500' />
                        )
                      )}
                    </div>
                    {item.restaurant && (
                      <p className="text-gray-500 text-sm">{item.restaurant}</p>
                    )}
                    <span className="text-sm text-gray-600">Qty: {item.quantity}</span>
                  </div>
                </div>
                <span className="font-semibold">₹{item.price * item.quantity}</span>
              </div>
            ))}
          </div>

          <hr className="my-4" />

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span>Subtotal:</span>
              <span>₹{totalAmount}</span>
            </div>
            <div className="flex justify-between items-center text-sm text-gray-600">
              <span>Delivery Fee:</span>
              <span>₹{deliveryFee}</span>
            </div>
            <div className="flex justify-between items-center text-sm text-gray-600">
              <span>Taxes (5%):</span>
              <span>₹{taxes}</span>
            </div>
            
            <hr className="my-3" />
            
            <div className="flex justify-between items-center text-xl font-bold">
              <span>Total:</span>
              <span className="text-green-600">₹{finalTotal}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Delivery Form */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Delivery Details</h3>
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Delivery Address *
            </label>
            <textarea
              name="address"
              placeholder="Enter your complete delivery address"
              rows="3"
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Payment Method
            </label>
            <select
              name="paymentMode"
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              value={formData.paymentMode}
              onChange={handleChange}
            >
              <option value="COD">Cash on Delivery</option>
              <option value="UPI">UPI Payment</option>
              <option value="Card">Credit/Debit Card</option>
              <option value="Wallet">Digital Wallet</option>
            </select>
          </div>
        </div>
      </div>

      {/* Place Order Button */}
      <div className="flex gap-4">
        <button 
          onClick={() => window.history.back()}
          className="flex-1 bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
        >
          Back to Cart
        </button>
        <button
          className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-colors ${
            isLoading 
              ? 'bg-gray-400 text-gray-200 cursor-not-allowed' 
              : 'bg-green-600 text-white hover:bg-green-700'
          }`}
          onClick={handleOrder}
          disabled={isLoading}
        >
          {isLoading ? 'Placing Order...' : `Place Order - ₹${finalTotal}`}
        </button>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Checkout;