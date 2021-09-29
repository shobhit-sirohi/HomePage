import React from "react";
import smarthome from "../images/smarthome.jpg";
import onboard from "../images/onboard.png";
import juice from "../images/juice.png";
import booking from "../images/booking.png";
import { CgArrowLongRight } from "react-icons/cg";

function Work() {
  return (
    <div id="work" className="space-y-4 lg:px-16 xl:px-20 2xl:px-32">
      <h1 className="text-2xl font-medium tracking-wider text-gray-700 xl:text-4xl 2xl:text-6xl">
        Good design means <br /> good business
      </h1>
      <div className=" md:grid md:grid-cols-2">
        <div className="pb-4 my-6 space-y-2 md:mt-20 xl:mt-32 md:pr-2 xl:pr-6 2xl:pr-10">
          <img
            className="w-full rounded-3xl"
            src={smarthome}
            alt="smart home photo"
          />
          <div>
            <p className="text-base text-gray-500">Full stack application</p>
            <p className="text-2xl font-semibold text-gray-700 2xl:text-3xl">
              Smart home dashboard
            </p>
          </div>
        </div>
        <div className="pb-4 my-6 space-y-2 md:pl-2 xl:pl-6 2xl:pl-10">
          <img
            className="w-full rounded-3xl"
            src={onboard}
            alt="smart home photo"
          />
          <div>
            <p className="text-base text-gray-500">UX/UI design</p>
            <p className="text-2xl font-semibold text-gray-700 2xl:text-3xl">
              Onboard application
            </p>
          </div>
        </div>
        <div className="pb-4 my-6 space-y-2 md:mt-20 xl:mt-32 md:pr-2 xl:pr-6 2xl:pr-10">
          <img
            className="w-full rounded-3xl"
            src={booking}
            alt="smart home photo"
          />
          <div>
            <p className="text-base text-gray-500">Mobile application</p>
            <p className="text-2xl font-semibold text-gray-700 2xl:text-3xl">
              Booking system
            </p>
          </div>
        </div>
        <div className="my-6 space-y-2 md:pl-2 xl:pl-6 2xl:pl-10">
          <img
            className="w-full rounded-3xl"
            src={juice}
            alt="smart home photo"
          />
          <div>
            <p className="text-base text-gray-500">Front End application</p>
            <p className="text-2xl font-semibold text-gray-700 2xl:text-3xl">
              Juice product homepage
            </p>
          </div>
          <a
            className="flex items-center justify-end text-xl font-semibold text-blue-500 2xl:text-3xl md:pt-24"
            href="#"
          >
            see more <CgArrowLongRight className="ml-2" />{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Work;
