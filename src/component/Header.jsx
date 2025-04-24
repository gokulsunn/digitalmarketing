import React from "react";

const Header = () => {
  return (
    <div className="bg-[#fcd469] px-4 sm:px-20 lg:px-48 z-[-20]">
      <div>
        <h1 className="text-lg sm:text-xl lg:text-3xl font-bold text-gray-800 pt-10 sm:pt-20 lg:pt-0 sm:pl-10 lg:pl-0 flex lg:w-[500px]">
          Create a unique, professional logo for your business
        </h1>
        <p className="mt-4 text-gray-600 pl-2 sm:pl-10 lg:pl-0">
          Kickstart your brand with business card designs, social media
          graphics, <br className="hidden sm:inline" />
          app icons, letterheads, and more.
        </p>

        <button className="mt-10 ml-0 sm:ml-10 lg:ml-0 text-white bg-gray-800 px-6 sm:px-10 py-3 sm:py-4 rounded-full mb-10 sm:mb-20">
          Create a  logo
        </button>
      </div>
    </div>
  );
};

export default Header;
