// React aur useState hook import kar rahe hain
// useState ka use state (data) ko store aur update karne ke liye hota hai
import React, { useState } from 'react';
// 'lucide-react' se Menu aur X icons import kiye (hamburger menu & close icon)
import { Menu, X } from 'lucide-react';
// ThemeToggle component import (ye dark/light theme toggle ke liye ho sakta hai)
import ThemeToggle from "./ThemeToggle";

// Header component start
const Header = () => {
  // State banayi 'isMenuOpen' jo track karegi mobile menu open hai ya close
  // setIsMenuOpen function state ko update karega
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation items ka array (har ek ke paas link aur label)
  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    // Header ko screen ke top me fix kiya gaya hai
    // Tailwind CSS classes use karke background, border, blur effect lagaya gaya hai
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      {/* Navigation bar */}
      <nav className="container mx-auto px-6 py-3.5">
        
        {/* Header ke andar - Logo aur Navigation */}
        <div className="flex items-center justify-between">
          
          {/* Left Side - Logo / Name */}
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Anuj kumar 
          </div>

          {/* Desktop Navigation (sirf medium screen size ya bada hone par dikhega) */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href} // React ke liye unique key
                href={item.href} // Link ka address
                className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
              >
                {/* Navigation ka naam */}
                {item.label}
                {/* Hover karne par neeche blue underline animation */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button (sirf chhote screens par dikhega) */}
          <button
            // Button click hone par menu ka open/close state change hota hai
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white transition-colors"
          >
            {/* Agar menu open hai to 'X' icon, warna 'Menu' icon dikhana */}
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu (sirf tab dikhega jab isMenuOpen true ho) */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2 text-gray-300 hover:text-white transition-colors duration-300"
                // Mobile menu me kisi link pe click hote hi menu close ho jaye
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

// Header component ko export kar rahe hain taki dusre files me use ho sake
export default Header;
