import React from "react";
import heroImage from "../images/heroImage.jpg";
function header() {
  const handleSubmit = () => {
    alert("Done");
  };
  return (
    <div id="home" className="flex flex-col lg:space-y-4 ">
      <div className="pl-6 space-y-2 lg:space-y-4 lg:pl-60 lg:2xl:pl-96">
        <a href="#" className="text-base text-blue-500 xl:text-xl">
          Unhappy with your website?
        </a>
        <p className="text-2xl font-medium tracking-wider text-gray-700 xl:text-5xl 2xl:text-7xl">
          We create beautiful <br /> and fast web services
        </p>
      </div>
      <div className="py-4">
        <img
          className="w-full rounded-lg"
          src={heroImage}
          alt="meeting image"
        />
      </div>
      <div className="flex flex-col pl-6 space-y-2 lg:space-y-4 lg:pl-60 lg:2xl:pl-96">
        <p className="text-2xl font-medium tracking-wider text-gray-700 xl:text-5xl 2xl:text-7xl">
          Story, emotion
          <br /> and purpose
        </p>
        <p className="text-base text-gray-500 md:w-80 xl:w-96 xl:text-xl">
          We help transform your ideas into real world applications that will
          outperform your toughest competition and help you achieve your
          strategic goals in short period of time.
        </p>
        <div className="pt-6">
          <p className="text-gray-500">Want us to contact you?</p>
          <div className="flex justify-between p-1 bg-gray-100 rounded-xl md:w-80">
            <input
              className="bg-gray-100 md:ml-4 focus:outline-none md:w-52"
              type="email"
              name="email-join"
              id="email-join"
              placeholder="Email"
              autoComplete="email"
            />
            <button
              className="px-4 py-2 text-white bg-blue-500 rounded-xl"
              type="submit"
              onClick={handleSubmit}
            >
              Join
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default header;
