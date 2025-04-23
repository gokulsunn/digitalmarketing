import React from "react";
import lapimage from "../images/pexels-goumbik-574071.jpg";

const Assets = () => {
  return (
    <div>
      <section className="flex flex-col lg:flex-row items-center justify-center px-4 lg:px-24">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex justify-center">
          <img
            src={lapimage}
            alt="Laptop and Branding Assets"
            className="w-full max-w-md"
          />
        </div>

        <div className="w-full lg:w-1/2 lg:pl-12 text-center lg:text-left">
          <h1 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
            Build a beautiful brand on time and on budget
          </h1>
          <p className="text-gray-400 text-base lg:text-sm mb-6">
            Kickstart your business with thousands of ready-to-use design
            assets.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 text-[12px] lg:text-[10px] gap-4 text-gray-700">
            <li className="flex items-center justify-center lg:justify-start">
              <span className="mr-2">📝</span> Logo design files
            </li>
            <li className="flex items-center justify-center lg:justify-start">
              <span className="mr-2">💼</span> Business card designs
            </li>
            <li className="flex items-center justify-center lg:justify-start">
              <span className="mr-2">📄</span> Letterhead templates
            </li>
            <li className="flex items-center justify-center lg:justify-start">
              <span className="mr-2">📊</span> Presentation templates
            </li>
            <li className="flex items-center justify-center lg:justify-start">
              <span className="mr-2">🔗</span> Social profile icons
            </li>
            <li className="flex items-center justify-center lg:justify-start">
              <span className="mr-2">🎨</span> Animated designs
            </li>
            <li className="flex items-center justify-center lg:justify-start">
              <span className="mr-2">📱</span> Social media designs
            </li>
            <li className="flex items-center justify-center lg:justify-start">
              <span className="mr-2">📚</span> Brand guide
            </li>
          </ul>

          <button className="mt-4 mb-6 px-4 py-2 text-sm font-semibold bg-blue-200 text-gray-800 rounded-full hover:bg-blue-600 transition duration-300">
            See example assets
          </button>
        </div>
      </section>
    </div>
  );
};

export default Assets;
