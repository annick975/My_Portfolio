import React, { useState } from "react";
import logo from "../../assets/logo2.svg";
import { FaBars, FaTimes } from 'react-icons/fa'; // Add this line for icons

const Header: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // State for nav visibility

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  const closeNav = () => {
    setIsNavOpen(false); // Close the nav when a link is clicked
  };
  return (
    <header className="bg-bg2 shadow-md fixed w-full top-0 z-50 flex justify-between items-center p-4 md:p-10 font-Lora">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="rounded-full w-12 h-auto" />
        <span className="ml-2 text-3xl font-bold text-primary">Annick</span>
      </div>
      
      {/* Hamburger Menu */}
      <div className="md:hidden cursor-pointer" onClick={toggleNav}>
        {isNavOpen ? <FaTimes size={30} color="#bdcec8" /> : <FaBars size={30} color="#bdcec8" />}
      </div>

      {/* Navigation Links */}
      <nav className={`flex flex-col md:flex-row gap-6 fixed md:static top-16 left-0 w-full md:w-auto bg-bg2 md:bg-transparent transition-all duration-300 ease-in-out ${isNavOpen ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden'} md:max-h-full ml-14`}>
        <a href="#Home" onClick={closeNav} className="text-lg font-semibold text-gray-300 hover:bg-primary hover:text-white px-4 py-2 rounded">Home</a>
        <a href="#About" onClick={closeNav} className="text-lg font-semibold text-gray-300 hover:bg-primary hover:text-white px-4 py-2 rounded">About</a>
        <a href="#Skills" onClick={closeNav} className="text-lg font-semibold text-gray-300 hover:bg-primary hover:text-white px-4 py-2 rounded">Skills</a>
        <a href="#Education" onClick={closeNav} className="text-lg font-semibold text-gray-300 hover:bg-primary hover:text-white px-4 py-2 rounded">Education</a>
        <a href="#Projects" onClick={closeNav} className="text-lg font-semibold text-gray-300 hover:bg-primary hover:text-white px-4 py-2 rounded">Projects</a>
        <a href="#Testimonials" onClick={closeNav} className="text-lg font-semibold text-gray-300 hover:bg-primary hover:text-white px-4 py-2 rounded">Testimonials</a>
        <a href="#Contact" onClick={closeNav} className="text-lg font-semibold text-gray-300 hover:bg-primary hover:text-white px-4 py-2 rounded">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
