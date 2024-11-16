import React, { useState } from "react";
import { Link } from "react-router-dom";

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
          <p className="text-lg font-semibold hover:text-saffron-light text-saffron-dark">
            <span className="text-2xl animate-bounce inline-block">F</span>
            est<span className="text-2xl animate-bounce inline-block">F</span>
            ood<span className="text-2xl animate-bounce inline-block">P</span>
            laces
          </p>
          <div className="hidden md:block">
            <ul className="flex font-bold space-x-4 px-4 py-2 border-saffron-light border-0 rounded-full text-lg text-saffron-dark">
              <Link to="/">
                <li className="hover:text-saffron-light cursor-pointer">
                  Home
                </li>
              </Link>
              <Link to="/about">
                <li className="hover:text-saffron-light cursor-pointer">
                  About
                </li>
              </Link>
              <Link to="/contact">
              <li className="hover:text-saffron-light cursor-pointer">
                Contact
              </li>
              </Link>
            </ul>
          </div>
          <p className="text-lg font-bold cursor-pointer hover:text-saffron-light text-saffron-dark">
            Login
          </p>
          <div className="md:hidden flex items-center">
            <button
              className="text-xl cursor-pointer text-saffron-dark hover:text-saffron-light"
              onClick={toggleMenu}
            >
              &#9776;
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } md:hidden absolute top-14 right-2 bg-white shadow-lg rounded border border-saffron-dark w-40`}
        >
          <ul className="flex flex-col space-y-4 px-4 py-2">
            <Link to="/" onClick={closeMenu}>
              <li className="hover:text-saffron-light cursor-pointer">Home</li>
            </Link>
            <Link to="/about" onClick={closeMenu}>
              <li className="hover:text-saffron-light cursor-pointer">About</li>
            </Link>
            <li
              className="hover:text-saffron-light cursor-pointer"
              // onClick={(e) => {
              //   handleSmoothScroll(e);
              //   closeMenu(); // Close the menu after clicking
              // }}
            >
              Contact
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
