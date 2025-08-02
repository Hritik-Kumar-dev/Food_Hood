import React, { useState } from 'react';

const initialCart = [
  {
    id: 1,
    foodName: "Paneer Butter Masala",
    price: 220,
    quantity: 1
  },
  {
    id: 2,
    foodName: "Cold Coffee",
    price: 90,
    quantity: 2
  }
];

const Cart = () => {
  const [cart, setCart] = useState(initialCart);

  const increaseQty = (id) => {
    const updatedCart = cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const decreaseQty = (id) => {
    const updatedCart = cart.map(item =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
  };

  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-center">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map(item => (
              <div key={item.id} className="flex justify-between items-center border-b pb-4">
                <div>
                  <h3 className="font-semibold text-lg">{item.foodName}</h3>
                  <p className="text-gray-600">₹{item.price} × {item.quantity} = ₹{item.price * item.quantity}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    className="px-2 py-1 bg-gray-200 rounded"
                    onClick={() => decreaseQty(item.id)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="px-2 py-1 bg-gray-200 rounded"
                    onClick={() => increaseQty(item.id)}
                  >
                    +
                  </button>
                  <button
                    className="ml-4 px-2 py-1 bg-red-500 text-white rounded"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-right mt-6 text-xl font-semibold">
            Total: ₹{totalAmount}
          </div>

          <div className="text-right mt-4">
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
