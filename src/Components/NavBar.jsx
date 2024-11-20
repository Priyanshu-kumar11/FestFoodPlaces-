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
            {/* Shared border container */}
            <ul className="flex font-bold px-4 py-2 text-lg text-saffron-dark border border-saffron-dark rounded-full">
              <Link to="/">
                <li className="hover:text-saffron-light cursor-pointer px-4">
                  Home
                </li>
              </Link>
              <Link to="/about">
                <li className="hover:text-saffron-light cursor-pointer px-4">
                  About
                </li>
              </Link>
              <Link to="/toppicks">
                <li className="hover:text-saffron-light cursor-pointer px-4">
                  Top Picks
                </li>
              </Link>
              <Link to="/collection">
                <li className="hover:text-saffron-light cursor-pointer px-4">
                  Collection
                </li>
              </Link>
              <Link to="/contact">
                <li className="hover:text-saffron-light cursor-pointer px-4">
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
          {/* Shared border for mobile */}
          <ul className="flex flex-col space-y-4 px-4 py-2 border text-saffron-dark border-saffron-dark rounded">
            <Link to="/" onClick={closeMenu}>
              <li className="hover:text-saffron-light cursor-pointer py-2">
                Home
              </li>
            </Link>
            <Link to="/about" onClick={closeMenu}>
              <li className="hover:text-saffron-light cursor-pointer py-2">
                About
              </li>
            </Link>
            <Link to="/toppicks" onClick={closeMenu}>
              <li className="hover:text-saffron-light cursor-pointer py-2">
                Top Picks
              </li>
            </Link>
            <Link to="/collection" onClick={closeMenu}>
              <li className="hover:text-saffron-light cursor-pointer py-2">
                Collection
              </li>
            </Link>
            <Link to="/contact" onClick={closeMenu}>
              <li className="hover:text-saffron-light cursor-pointer py-2">
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
