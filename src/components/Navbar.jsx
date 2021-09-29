import React from "react";
import { HiMenu } from "react-icons/hi";

function Navbar() {
  return (
    <div className="flex items-center justify-between text-gray-700">
      <h1 className="text-4xl font-bold">Edie</h1>

      <ul className="hidden space-x-10 text-lg font-semibold text-center md:flex">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#work">Our Work</a>
        </li>
        <li>
          <a href="#reviews">Clients</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="flex justify-center align-middle md:hidden">
        <HiMenu className="w-8 h-8 " />
      </div>
    </div>
  );
}

export default Navbar;
