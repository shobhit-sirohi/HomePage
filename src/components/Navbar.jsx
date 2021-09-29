import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";

function Navbar() {
  const [show, setShow] = useState(false);

  return (
    <>
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
          <HiMenu
            className="w-8 h-8 "
            onClick={() => setShow((toggle) => !toggle)}
          />
        </div>
      </div>
      {/* hamburger menu div */}
      {show && (
        <div className="w-full h-full ">
          <ul className="flex flex-col justify-center text-lg font-semibold text-center space-y-14 ">
            <li>
              <a href="#home" onClick={() => setShow(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#services" onClick={() => setShow(false)}>
                Services
              </a>
            </li>
            <li>
              <a href="#work" onClick={() => setShow(false)}>
                Our Work
              </a>
            </li>
            <li>
              <a href="#reviews" onClick={() => setShow(false)}>
                Clients
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setShow(false)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
