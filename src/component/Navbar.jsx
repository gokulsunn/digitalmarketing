import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import WeatherWidget from "./WeatherWidget";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showWeatherWidget, setShowWeatherWidget] = useState(false);

  const isLargeScreen = useMediaQuery({ query: "(min-width: 1398px)" });

  useEffect(() => {
    if (isLargeScreen) {
      setIsSidebarOpen(false);
    }
  }, [isLargeScreen]);

  const handleWeatherClick = () => {
    setShowWeatherWidget(!showWeatherWidget);
  };

  const handleCloseWeatherWidget = () => {
    setShowWeatherWidget(false);
  };

  return (
    <div>
      <div className="hidden lg:flex justify-between bg-[#fcd469] h-60 px-8 lg:px-48 pt-8 lg:pt-20">
        <div className="text-white text-3xl lg:text-4xl font-bold">
          WEB<span className="text-black">INTEGRATE</span>
        </div>
        <div>
          <ul className="flex gap-1 lg:gap-2 text-[8px] lg:text-[10px] font-semibold pr-10 lg:pr-20">
            <li className="px-3 lg:px-5 py-1 hover:bg-gray-300 rounded-full duration-300">
              Tools
            </li>
            <li className="px-3 lg:px-5 py-1 hover:bg-gray-300 rounded-full duration-300">
              Pricing
            </li>
            <li className="px-3 lg:px-5 py-1 hover:bg-gray-300 rounded-full duration-300">
              Support
            </li>
            <li className="px-3 lg:px-5 py-1 hover:bg-gray-300 rounded-full duration-300">
              Login
            </li>
            <li
              className="px-3 lg:px-5 py-1 hover:bg-gray-300 rounded-full duration-300 cursor-pointer"
              onClick={handleWeatherClick}
            >
              Weather
            </li>
          </ul>
        </div>
      </div>

      <div className="lg:hidden flex justify-center items-center bg-[#fcd469] h-16">
        <div className="text-white font-bold text-3xl lg:text-5xl">
          WEB<span className="text-black">INTEGRATE</span>
        </div>
      </div>

      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed top-4 right-4 p-2 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none z-50"
      >
        <span className="sr-only">
          {isSidebarOpen ? "Close sidebar" : "Open sidebar"}
        </span>
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 012 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>

      <aside
        className={`fixed top-0 right-0 z-40 w-64 h-screen pt-5 transition-transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } bg-gray-700 border-l border-gray-200`}
      >
        <span className="pl-2 bg-gray-700 px-5 pt-4 font-bold text-blue-300 text-xl lg:text-2xl">
          WEB<span className="text-white">INTEGRATE</span>
        </span>
        <div className="h-full px-3 bg-gray-600 pb-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
              >
                Menu
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
              >
                Tools
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
              >
                Support
              </a>
            </li>
            <li
              className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 cursor-pointer"
              onClick={handleWeatherClick}
            >
              Weather
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </aside>

      {showWeatherWidget && (
        <div className="fixed top-16 lg:top-24 right-0 m-2 lg:m-4 p-4 bg-gray-100 rounded-sm shadow-lg z-50">
          <button
            onClick={handleCloseWeatherWidget}
            className="absolute top-2 right-2 p-1 text-gray-500 rounded-full hover:bg-gray-200"
          >
            <svg
              className="w-5 h-5 lg:w-6 lg:h-6 pr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <WeatherWidget />
        </div>
      )}
   </div>
  );
};

export default Navbar;
