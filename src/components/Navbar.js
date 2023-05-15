import React, { useState } from "react";
import logo from "../assets/logo.svg";
import hamburger from "../assets/icon-hamburger.svg";
import close from "../assets/icon-close.svg";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav((prevNav) => !prevNav);
  };
  return (
    <header className="py-4 z-50 relative bg-white">
      <div className="container w-10/12 mx-auto flex items-center justify-between">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center">
            <li className="px-4 text-black/40">Home</li>
            <li className="px-4 text-black/40">About</li>
            <li className="px-4 text-black/40">Contact</li>
            <li className="px-4 text-black/40">Blog</li>
            <li className="px-4 text-black/40">Careers</li>
          </ul>
        </div>
        <button className="bg-gradient-to-r from-[#31D35C] to-[#2BB7DA] rounded-full py-2 px-4 text-white capitalize hidden md:inline">
          Request invite
        </button>
        <div className="md:hidden cursor-pointer" onClick={handleNav}>
          {nav ? (
            <img src={close} alt="close menu" />
          ) : (
            <img src={hamburger} alt="hamburger menu" />
          )}
        </div>

        <div
          className={
            nav
              ? "md:hidden absolute top-12 left-0  w-[70%] bg-[#2D314D] ease-in-out duration-500"
              : "md:hidden absolute top-12  left-[-100%] w-[70%] bg-[#2D314D] ease-in-out duration-500"
          }
        >
          <ul className="flex flex-col items-center">
            <li className=" text-white py-8 px-4 md:py-0">Home</li>
            <li className=" text-white py-8 px-4 md:py-0">About</li>
            <li className=" text-white py-8 px-4 md:py-0">Contact</li>
            <li className=" text-white py-8 px-4 md:py-0">Blog</li>
            <li className=" text-white py-8 px-4 md:py-0">Careers</li>
          </ul>
        </div>
      </div>
      {/* logo
    div holding a ul 
    button */}
    </header>
  );
}

export default Navbar;
{
  /* <div class="bg-gradient-to-r from-indigo-500 ..."></div>
<div class="bg-gradient-to-r from-cyan-500 to-blue-500 ..."></div>
bg-[#31D35C] */
}
