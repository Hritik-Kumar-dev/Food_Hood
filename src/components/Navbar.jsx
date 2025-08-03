import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LiaHandshake } from "react-icons/lia";
import { TbClipboardList } from "react-icons/tb";
import { LuLayoutGrid } from "react-icons/lu";
import { TiHomeOutline } from "react-icons/ti";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { GrCart } from "react-icons/gr";
import { HiMenu, HiX } from "react-icons/hi";

import '../App.css'
import CartBadge from "./CartBadge";

const Navbar = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="sticky flex items-center justify-between px-3 sm:px-6 py-2.5 text-black shadow-md w-full top-0 backdrop-blur-md bg-white/50 z-50">

            {/* Logo */}
            <div className="flex items-center">
                <span className="ml-1 sm:ml-3 text-lg sm:text-xl font-bold">FoOD_HoOD</span>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex space-x-6 xl:space-x-10 poetsen-one-regular">
                <Link 
                    to="/Home" 
                    className={`hover:text-[16.3px] cursor-pointer flex items-center gap-1 transition-colors duration-200 ${
                        location.pathname === "/Home" 
                            ? "text-red-600 font-semibold" 
                            : "text-black hover:text-red-500"
                    }`}
                > 
                    <TiHomeOutline /> Home 
                </Link>

                <Link 
                    to="/menu" 
                    className={`hover:text-[16.3px] cursor-pointer flex items-center gap-1 transition-colors duration-200 ${
                        location.pathname === "/menu" 
                            ? "text-red-600 font-semibold" 
                            : "text-black hover:text-red-500"
                    }`}
                >
                    <TbClipboardList />menu
                </Link>

                <Link 
                    to="/cart" 
                    className={`hover:text-[16.3px] cursor-pointer flex items-center gap-1 transition-colors duration-200 ${
                        location.pathname === "/cart" 
                            ? "text-red-600 font-semibold" 
                            : "text-black hover:text-red-500"
                    }`}
                >
                    <CartBadge/>cart
                </Link>

                <Link 
                    to="/about" 
                    className={`hover:text-[16.3px] cursor-pointer flex items-center gap-1 transition-colors duration-200 ${
                        location.pathname === "/about" 
                            ? "text-red-600 font-semibold" 
                            : "text-black hover:text-red-500"
                    }`}
                >
                    <LiaProjectDiagramSolid />about us
                </Link>

                <Link 
                    to="/checkout"  
                    className={`hover:text-[16.3px] cursor-pointer flex items-center gap-0.5 transition-colors duration-200 ${
                        location.pathname === "/checkout" 
                            ? "text-red-600 font-semibold" 
                            : "text-black hover:text-red-500"
                    }`}
                > 
                    <LiaHandshake />Checkout
                </Link>
            </ul>

            {/* Desktop Right Menu */}
            <div className="hidden lg:flex items-center space-x-6">
                <LuLayoutGrid className="hover:cursor-pointer text-xl hover:text-red-500 transition-colors" />
            </div>

            {/* Mobile Menu Toggle & Cart */}
            <div className="flex lg:hidden items-center space-x-3">
                {/* Mobile Cart */}
                <Link 
                    to="/cart" 
                    className={`flex items-center gap-1 ${
                        location.pathname === "/cart" 
                            ? "text-red-600" 
                            : "text-black"
                    }`}
                    onClick={closeMenu}
                >
                    <CartBadge />
                </Link>
                
                {/* Hamburger Menu */}
                <button 
                    onClick={toggleMenu}
                    className="text-2xl hover:text-red-500 transition-colors"
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <HiX /> : <HiMenu />}
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200 lg:hidden">
                    <ul className="flex flex-col py-4 space-y-1">
                        <Link 
                            to="/Home" 
                            className={`px-6 py-3 flex items-center gap-2 transition-colors duration-200 ${
                                location.pathname === "/Home" 
                                    ? "text-red-600 font-semibold bg-red-50" 
                                    : "text-black hover:text-red-500 hover:bg-gray-50"
                            }`}
                            onClick={closeMenu}
                        > 
                            <TiHomeOutline className="text-lg" /> Home 
                        </Link>

                        <Link 
                            to="/menu" 
                            className={`px-6 py-3 flex items-center gap-2 transition-colors duration-200 ${
                                location.pathname === "/menu" 
                                    ? "text-red-600 font-semibold bg-red-50" 
                                    : "text-black hover:text-red-500 hover:bg-gray-50"
                            }`}
                            onClick={closeMenu}
                        >
                            <TbClipboardList className="text-lg" /> Menu
                        </Link>

                        <Link 
                            to="/about" 
                            className={`px-6 py-3 flex items-center gap-2 transition-colors duration-200 ${
                                location.pathname === "/about" 
                                    ? "text-red-600 font-semibold bg-red-50" 
                                    : "text-black hover:text-red-500 hover:bg-gray-50"
                            }`}
                            onClick={closeMenu}
                        >
                            <LiaProjectDiagramSolid className="text-lg" /> About Us
                        </Link>

                        <Link 
                            to="/checkout"  
                            className={`px-6 py-3 flex items-center gap-2 transition-colors duration-200 ${
                                location.pathname === "/checkout" 
                                    ? "text-red-600 font-semibold bg-red-50" 
                                    : "text-black hover:text-red-500 hover:bg-gray-50"
                            }`}
                            onClick={closeMenu}
                        > 
                            <LiaHandshake className="text-lg" /> Checkout
                        </Link>

                        {/* Mobile Grid Menu */}
                        <div className="px-6 py-3 border-t border-gray-200 mt-2">
                            <LuLayoutGrid className="text-xl hover:text-red-500 transition-colors cursor-pointer" />
                        </div>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;