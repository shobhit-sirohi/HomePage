import React from "react";
import { HiPencil } from "react-icons/hi";
import { BsCode } from "react-icons/bs";
import { CgDatabase } from "react-icons/cg";

function Services() {
  return (
    <div
      id="services"
      className="space-y-4 lg:px-16 xl:px-20 2xl:px-32 sapce-y-8"
    >
      <h1 className="text-2xl font-medium tracking-wider text-gray-700 xl:text-4xl 2xl:text-6xl">
        We offer high <br /> demand services
      </h1>
      <div className="flex flex-col gap-6 md:flex-row md:justify-between">
        <div className="flex flex-col p-4 space-y-6 rounded-xl hover:shadow-2xl lg:w-1/4">
          <div className="flex items-center justify-center text-white bg-blue-500 rounded-lg w-14 h-14">
            <HiPencil className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-extrabold text-gray-700 2xl:text-3xl">
            UI/UX Design
          </h2>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            consectetur vel deserunt officia cupiditate quidem vitae illo ab
            laboriosam sequi!
          </p>
          <div>
            <button className="px-4 py-2 text-gray-600 bg-gray-200 rounded-lg hover:bg-blue-500 hover:text-white">
              Get started
            </button>
          </div>
        </div>
        <div className="flex flex-col p-4 space-y-6 hover:shadow-2xl rounded-xl lg:w-1/4 ">
          <div className="flex items-center justify-center text-white bg-green-500 rounded-lg w-14 h-14">
            <BsCode className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-extrabold text-gray-700 2xl:text-3xl">
            Front End
          </h2>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            consectetur vel deserunt officia cupiditate quidem vitae illo ab
            laboriosam sequi!
          </p>
          <div>
            <button className="px-4 py-2 text-gray-600 bg-gray-200 rounded-lg hover:bg-blue-500 hover:text-white">
              Get started
            </button>
          </div>
        </div>
        <div className="flex flex-col p-4 space-y-6 hover:shadow-2xl rounded-xl lg:w-1/4">
          <div className="flex items-center justify-center text-white bg-red-400 rounded-lg w-14 h-14">
            <CgDatabase className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-extrabold text-gray-700 2xl:text-3xl">
            Back End
          </h2>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            consectetur vel deserunt officia cupiditate quidem vitae illo ab
            laboriosam sequi!
          </p>
          <div>
            <button className="px-4 py-2 text-gray-600 bg-gray-200 rounded-lg hover:bg-blue-500 hover:text-white">
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
