import React from "react";
import phoneImage from "../images/laptop-white-background-3d-rendering-computer-generated-image.png";
import vscode from "../images/Screenshot (48).png";

const Content = () => {
  return (
    <div className="relative">
      <div className="lg:flex lg:pl-[100px] lg:justify-evenly sm:mt-10 sm:pl-2 lg:items-center sm:flex-col sm:items-center text-center">
        <div className="mb-2 lg:mb-0 lg:text-left">
          <span className="text-[20px] lg:text-[25px] font-bold">
            The only logo maker with free{" "}
            <span style={{ boxShadow: "0px 8px 0px 0px #66ffb2" }}>
              customization
            </span>
          </span>
          <p className="text-gray-500 text-[14px] lg:text-[12px] lg:mt-2 sm:mt-2">
            We'll personally help you customize your <br />
            logo with the purchase of any package.
          </p>
        </div>
        <div>
          <img
            src={phoneImage}
            alt="phone"
            className="w-[300px] lg:w-[800px] mx-auto"
          />
        </div>
      </div>
      <div className="bg-violet-300 h-[50vh] lg:h-[70vh] flex flex-col items-center pt-10 lg:pt-20 text-center">
        <span className="font-bold text-white text-2xl lg:text-4xl pb-4">
          Instantly customize and export
        </span>
        <span className="text-white text-sm lg:text-base">
          Right in your browser, no designer or software needed
        </span>
        <img
          className="h-[150px] lg:h-[270px] pt-6 lg:pt-10 mb-10"
          src={vscode}
          alt="vscode"
        />
      </div>
    </div>
  );
};

export default Content;
