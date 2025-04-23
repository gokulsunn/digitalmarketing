import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#292d33]">
      <div className="px-6 lg:px-40 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="p-4">
          <span
            className="text-[12px] w-auto px-[10px] font-bold text-yellow-400"
            style={{ boxShadow: "0px 13px 0px 0px #666600" }}
          >
            Create your logo
          </span>
          <p className="mt-4 text-gray-600 text-[10px]">
            Try our free logo maker to create your logo.
          </p>
        </div>
        <div className="p-4">
          <span
            className="text-[12px] px-4 font-bold text-pink-600"
            style={{ boxShadow: "0px 13px 0px 0px #660033" }}
          >
            Support
          </span>
          <p className="mt-4 text-gray-600 text-[10px]">
            Have any questions? Contact us.
          </p>
        </div>
        <div className="p-4">
          <span
            className="text-[12px] font-bold px-4 text-green-400"
            style={{ boxShadow: "0px 13px 0px 0px #006633" }}
          >
            Tools
          </span>
          <p className="mt-4 text-gray-600 text-[10px]">
            Explore our tools to create your logo.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pb-12 lg:pb-24 px-6 lg:px-48 text-gray-500 font-semibold text-[12px]">
        <div>
          <span>Terms of Service</span>
        </div>
        <div>
          <span>Privacy Policy</span>
        </div>
      </div>
      <div>
        <div className="flex justify-center lg:justify-start lg:ml-[370px] mb-6">
          <div className="bg-red-500 w-[40px] h-[40px] lg:w-[80px] lg:h-[80px]"></div>
        </div>
        <div className="flex justify-center lg:justify-between mb-6">
          <div className="bg-blue-500 w-[40px] h-[40px] lg:w-[80px] lg:h-[80px]"></div>
          <div className="bg-green-500 w-[40px] h-[40px] lg:w-[80px] lg:h-[80px]"></div>
        </div>
        <div className="flex justify-center lg:justify-end pb-6">
          <div className="bg-yellow-500 w-[40px] h-[40px] lg:w-[80px] lg:h-[80px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
