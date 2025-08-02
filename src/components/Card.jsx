import React from 'react';
import { GrCart } from "react-icons/gr";

let obj = [
  {
    id: 1,
    title: "Pizza",
    description: "Delicious cheese pizza",
    price: 299,
    image: "cake.png"
  }
]
const Card = ({ id, title, description, price, image }) => {
  return (
    <div className="flex flex-col p-4">
      <div className="m-2 border w-[220px] p-3 rounded-lg shadow-md bg-white">
        
    
        <div className="w-full h-[140px] flex justify-center items-center overflow-hidden rounded">
          <img
            className="object-cover h-full w-full rounded"
            src={image}
            alt={title}
          />
        </div>

        <h2 className="font-bold text-lg mt-2">{title}</h2>

        <p className="text-gray-600 text-sm">{description}</p>

        <div className="flex justify-between items-center mt-3">
          <span className="text-lg font-semibold text-green-600">₹{price}</span>
          <button className="bg-orange-500 text-white p-2 rounded hover:bg-orange-600">
            <GrCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
