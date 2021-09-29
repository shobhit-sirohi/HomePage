import React from "react";
import person1 from "../images/person1.png";
import person2 from "../images/person2.png";
import person3 from "../images/person3.png";

function Clients() {
  return (
    <div id="clients" className=" lg:px-16 xl:px-20 2xl:px-32">
      <div className="space-y-6 md:flex md:justify-between">
        <div className="flex flex-col justify-center space-y-2 ">
          <p className="text-base text-red-500 xl:text-xl 2xl:text-2xl">
            Meet the team
          </p>
          <h2 className="text-2xl font-medium tracking-wider text-gray-700 xl:text-4xl 2xl:text-6xl">
            We are chilled <br />
            and a laidback <br />
            team
          </h2>
          <p className="text-base text-gray-500 xl:text-lg 2xl:text-2xl">
            Lorem ipsum, dolor sit amet <br /> consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex ">
          <div className="flex items-center">
            <img className="p-2 rounded-3xl" src={person3} alt="person 3" />
          </div>
          <div className="">
            <img className="p-2 rounded-3xl" src={person1} alt="person 1" />
            <img className="p-2 rounded-3xl" src={person2} alt="person 2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
