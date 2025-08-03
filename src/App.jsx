import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx'
import './App.css'
import { useGSAP } from '@gsap/react';


import Home from './Home.jsx'
import Menu from './Menu.jsx'
import Cart from './Cart.jsx'
import Checkout from './Checkout.jsx'
import About from './About.jsx'
import { CartProvider } from './CartContext';

function App() {


  return (
    <>
    <CartProvider>

      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      
    
    </Router>
    </CartProvider>
    </>
  )
}

export default App
