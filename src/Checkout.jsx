import React, { useState } from 'react';

const sampleCart = [
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

const Checkout = () => {
  const [cart, setCart] = useState(sampleCart);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    paymentMode: 'COD'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleOrder = () => {
    alert("Order placed successfully!");
    console.log("Order Details:", formData);
    console.log("Cart:", cart);
    // Optionally clear cart/form
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6">Checkout</h2>

      {/* Cart Summary */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-3">Your Cart</h3>
        <ul className="divide-y">
          {cart.map(item => (
            <li key={item.id} className="flex justify-between py-2">
              <span>{item.foodName} × {item.quantity}</span>
              <span>₹{item.price * item.quantity}</span>
            </li>
          ))}
        </ul>
        <div className="text-right mt-3 font-bold text-lg">
          Total: ₹{totalPrice}
        </div>
      </div>

      {/* Delivery Form */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-3">Delivery Details</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="border p-2 rounded"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="border p-2 rounded"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <textarea
          name="address"
          placeholder="Delivery Address"
          className="border p-2 rounded w-full mt-4"
          value={formData.address}
          onChange={handleChange}
        />
        <select
          name="paymentMode"
          className="border p-2 rounded w-full mt-4"
          value={formData.paymentMode}
          onChange={handleChange}
        >
          <option value="COD">Cash on Delivery</option>
          <option value="UPI">UPI</option>
          <option value="Card">Credit/Debit Card</option>
        </select>
      </div>

      <button
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        onClick={handleOrder}
      >
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
