'use client';
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-red-600 text-black flex items-center justify-between p-4 shadow-md">
      {/* Logo Section */}
      <div className="text-lg font-bold">D-Commerce</div>

      {/* Hamburger Icon (Small Screens Only) */}
      <button
        className="menu-toggle block md:hidden text-2xl focus:outline-none"
        aria-label="Toggle Menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>

      {/* Navigation Links */}
      <ul
        className={`nav-links ${
          isMenuOpen ? "flex" : "hidden"
        } flex-col md:flex md:flex-row md:items-center gap-4 absolute md:static bg-white md:bg-transparent text-black md:text-black md:gap-6 p-4 md:p-0 rounded md:rounded-none shadow-md md:shadow-none top-14 right-4 md:top-auto md:right-auto`}
      >
        <li>
          <a href="#" className="hover:text-blue-500">
            Shop
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500">
            On Sale
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500">
            New Arrivals
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500">
            Brands
          </a>
        </li>
      </ul>

      {/* Right Section */}
      <div className="hidden md:flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded">
          Cart
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
