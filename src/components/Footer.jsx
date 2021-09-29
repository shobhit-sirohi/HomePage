import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className="text-white bg-gray-900 ">
      <div className="flex flex-col px-8 py-8 space-y-10 md:space-y-0 lg:px-24 lg:py-16 md:flex-row md:justify-between">
        <div>
          <ul className="flex flex-col text-lg font-semibold xl:text-xl 2xl:text-2xl ">
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
        </div>
        <div className="space-y-2">
          <p className="text-4xl font-bold 2xl:text-5xl">Edie</p>
          <div className="flex space-x-2 text-3xl xl:text-4xl 2xl:text-5xl">
            <a href="#">
              <FaInstagramSquare />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <FaTwitterSquare />
            </a>
          </div>
        </div>
        <div className="">
          <p className="text-lg text-white">Want us to contact you?</p>
          <div className="flex justify-between p-1 bg-gray-200 rounded-xl md:w-80">
            <input
              className="bg-gray-200 md:ml-4 focus:outline-none md:w-52"
              type="email"
              name="email-join"
              id="email-join"
              placeholder="Email"
            />
            <button className="px-4 py-2 text-white bg-blue-500 rounded-xl">
              Join
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-8 pb-4">
        <p class=" text-xs lg:text-base 2xl:text-xl  text-gray-300 ">
          created by{" "}
          <a
            class="hover:text-blue-600 underline"
            href="https://github.com/shobhit-sirohi"
            target="_blank"
          >
            Shobhit Sirohi
          </a>{" "}
          - devchallenges.io
        </p>
      </div>
    </div>
  );
}

export default Footer;
