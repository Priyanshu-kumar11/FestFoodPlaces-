import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Navbar wrapper */}
      <div className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="flex items-center justify-between p-2">
          <p className="text-lg font-semibold text-green-500">FestFoodPlaces </p>
          <div className="hidden md:block">
            <ul className="flex font-bold space-x-4 px-4 py-2 border border-green-500 rounded-full text-lg text-green-500">
              <Link to="/">
                <li className="hover:text-green-950 cursor-pointer">Home</li>
              </Link>
              <Link to="/about">
                <li className="hover:text-green-950 cursor-pointer">About</li>
              </Link>
              <Link to="/contact">
                <li className="hover:text-green-950 cursor-pointer">Contact</li>
              </Link>
            </ul>
          </div>
          <p className="text-lg font-bold cursor-pointer hover:text-green-500 text-green-500">Login</p>
          <div className="md:hidden flex items-center">
            <button
              className="text-xl cursor-pointer text-green-500 hover:text-green-500"
              onClick={toggleMenu}
            >
              &#9776;
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${menuOpen ? 'block' : 'hidden'} md:hidden absolute top-14 right-2 bg-white shadow-lg rounded border border-green-500 w-40`}>
          <ul className="flex flex-col space-y-4 px-4 py-2">
            <Link to="/" onClick={closeMenu}>
              <li className="hover:text-green-500 cursor-pointer">Home</li>
            </Link>
            <Link to="/about" onClick={closeMenu}>
              <li className="hover:text-green-500 cursor-pointer">About</li>
            </Link>
            <Link to="/contact" onClick={closeMenu}>
              <li className="hover:text-green-500 cursor-pointer">Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
