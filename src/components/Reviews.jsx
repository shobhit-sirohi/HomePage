import React from "react";
import person4 from "../images/person4.png";
function Reviews() {
  return (
    <div
      id="reviews"
      className="pb-16 lg:pb-20 xl:pb-24 lg:px-16 xl:px-20 2xl:px-32"
    >
      <h2 className="text-2xl font-medium tracking-wider text-gray-700 lg:w-4/5 xl:text-4xl 2xl:text-5xl">
        “Fast and outstanding resutls. Edie understands their customer’s needs.
        They have a young and talented team.”
      </h2>
      <div className="flex mt-6 ">
        <img
          className="w-20 h-20 xl:w-32 xl:h-32 rounded-xl"
          src={person4}
          alt="person 4"
        />
        <div className="flex flex-col justify-center ml-6 lg:space-y-6">
          <p className="text-2xl font-semibold text-gray-700 2xl:text-3xl">
            Carlos Tran
          </p>
          <p className="text-base text-gray-500">The Decorate Gatsby</p>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
