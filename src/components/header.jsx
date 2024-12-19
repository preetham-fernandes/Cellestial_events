"use client"
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-black bg-opacity-50 fixed w-full z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center max-w-screen-lg">
        {/* Brand Name */}
        <Link href="/" className="text-3xl font-serif text-white">
          Cellestial Events
        </Link>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            menuOpen ? 'block' : 'hidden'
          } absolute md:static top-full left-0 w-full md:w-auto bg-black md:bg-transparent md:flex space-y-4 md:space-y-0 space-x-0 md:space-x-4 px-4 md:px-0 py-4 md:py-0`}
        >
          <ul className="flex flex-col md:flex-row items-center md:space-x-6 space-y-4 md:space-y-0">
          <li>
              <Link href="#about" className="text-white font-sans hover:text-red-500">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#services" className="text-white font-sans hover:text-red-500">
                Services
              </Link>
            </li>
            <li>
              <Link href="#portfolio" className="text-white font-sans hover:text-red-500">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="#testimonials" className="text-white font-sans hover:text-red-500">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-white font-sans hover:text-red-500">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
