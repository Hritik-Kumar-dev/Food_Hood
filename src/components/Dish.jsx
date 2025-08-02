import React from 'react'
import { IoMdStar } from "react-icons/io";
import { BiCheckboxSquare } from "react-icons/bi";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { MdDescription } from 'react-icons/md';
const Dish = () => {
  return (
    <div className='flex flex-col hover:cursor-pointer hover:scale-105 items-center justify-center p-2 border border-gray-300 rounded-lg shadow-md'>
      <img className='w-[100%] h-32 object-cover rounded-lg' src="https://i.pinimg.com/736x/9a/c1/f9/9ac1f96f80efd57e2453649003d8ec1c.jpg" alt="Dish" />
      <div className='sticky flex items-center justify-between w-full  px-3'>
        <p className=' flex justify-center items-center'>4.5 <IoMdStar className='inline text-yellow-500' /></p>
        <BiCheckboxSquare className='inline text-2xl text-green-500' />
      </div>
      <h2 className='text-xl font-bold '>Noodles</h2>
      <p className='text-gray-600'>Chinese authentic noodles</p>

      <div className='text-lg w-full flex justify-between px-3 font-semibold'>199Rs

        <div className='flex items-center rounded bg-green-200'> <label className='px-2 text-green-900' htmlFor="add-to-cart">Add</label>< LiaShoppingCartSolid name='add-to-cart' className=' text-2xl text-green-900' /> </div>
      </div>
    </div>
  )
}

export default Dish
// const foodItems = [
//   {
//     id: 1,
//     title: "Pizza",
//     description: "Cheesy delight",
//     price: 299,
//     image: "pizza.jpg"
//   },
//   {
//     id: 2,
//     title: "Burger",
//     description: "Loaded with veggies",
//     price: 199,
//     image: "burger.jpg"
//   }
// ];

// const FoodCard = ({ title, description, price, image }) => {
//   return (
//    <div className='flex flex-col hover:cursor-pointer hover:scale-105 items-center justify-center p-2 border border-gray-300 rounded-lg shadow-md'>
//       <img className='w-[100%] h-32 object-cover rounded-lg' src={image} alt="Dish" />
//       <div className='sticky flex items-center justify-between w-full  px-3'>
//         <p className=' flex justify-center items-center'>4.5 <IoMdStar className='inline text-yellow-500' /></p>
//         <BiCheckboxSquare className='inline text-2xl text-green-500' />
//       </div>
//       <h2 className='text-xl font-bold '>{title}</h2>
//       <p className='text-gray-600'>{description}</p>

//       <div className='text-lg w-full flex justify-between px-3 font-semibold'>{price}

//         <div className='flex items-center rounded bg-green-200'> <label className='px-2 text-green-900' htmlFor="add-to-cart">Add</label>< LiaShoppingCartSolid name='add-to-cart' className=' text-2xl text-green-900' /> </div>
//       </div>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div className="flex flex-wrap justify-center mt-10">
//       {foodItems.map(item => (
//         <FoodCard
//           key={item.id}
//           title={item.title}
//           description={item.description}
//           price={item.price}
//           image={item.image}
//         />
//       ))}
//     </div>
//   );
// };

// export default App;
