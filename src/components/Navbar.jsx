import React from "react";
import { Link } from "react-router-dom";
import { LiaHandshake } from "react-icons/lia";
import { TbClipboardList } from "react-icons/tb";
import { LuLayoutGrid } from "react-icons/lu";
import { TiHomeOutline } from "react-icons/ti";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { GrCart } from "react-icons/gr";

import '../App.css'
const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-6 py-2.5  text-black shadow-md  w-full  top-0 backdrop-blur-md bg-white/50  z-100   ">

            <div className="flex items-center">
                <span className="ml-3 text-xl font-bold">FoOD_HoOD</span>
            </div>

            <ul className="flex space-x-10 -translate-x-55 gap-5.5 poetsen-one-regular ">
                <Link to="/Home" className=" hover:text-[16.3px] cursor-pointer flex items-center gap-1"> {<TiHomeOutline />} Home </Link>

                <Link to="/menu" className=" hover:text-[16.3px] cursor-pointer flex items-center gap-1">{<TbClipboardList />}menu</Link>

                <Link to="/cart" className=" hover:text-[16.3px] cursor-pointer flex items-center gap-1">{<GrCart />}cart</Link>

                <Link to="/about" className=" hover:text-[16.3px] cursor-pointer flex items-center gap-1">{<LiaProjectDiagramSolid />}about us</Link>

                <Link to="/checkout"  className=" hover:text-[16.3px] cursor-pointer flex items-center gap-0.5 "> {<LiaHandshake />}Checkout</Link>
            </ul>

            <ul className="flex items-center space-x-6 mx-[20px]">

                <li className="hover:cursor-pointer" ><LuLayoutGrid /></li>
            </ul>
        </nav>
    );
};


export default Navbar;