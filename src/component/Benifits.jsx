import React from "react";
import { TiInfinityOutline } from "react-icons/ti";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { IoMdChatbubbles } from "react-icons/io";
import { BiMoneyWithdraw } from "react-icons/bi";
import { FaRegCopyright } from "react-icons/fa";

const Benifits = () => {
  return (
    <div className="mt-20 flex flex-col items-center justify-center min-h-screen bg-gray-100 p-10">
      <div className="space-y-6 max-w-4xl w-full">
        <div className="flex items-center justify-center">
          <div className="w-1/2"></div>
          <div className="w-1/2 flex justify-start pl-4">
            <div className="w-24 h-24 bg-orange-500 flex items-center justify-center"></div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-1/2 flex justify-end pr-4">
            <div className="w-24 h-24 bg-pink-500 flex items-center justify-center text-4xl text-gray-300 ">
              <MdOutlineCancelPresentation />
            </div>
          </div>
          <div className="w-1/2 pl-4">
            <h3 className="text-pink-500 font-bold text-xl">
              No more designer anxiety
            </h3>
            <p className="text-gray-600">
              Get your logo instantly, not in weeks.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-1/2 pr-4 text-right">
            <h3 className="text-green-500 font-bold text-xl">
              Need a tweak to your design?
            </h3>
            <p className="text-gray-600">
              We'll do it for you, absolutely free.
            </p>
          </div>
          <div className="w-1/2 flex justify-start pl-4">
            <div className="w-24 h-24 bg-green-500 flex items-center justify-center text-4xl text-gray-300">
              <IoMdChatbubbles />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-1/2 flex justify-end pr-4">
            <div className="w-24 h-24 bg-blue-500 flex items-center justify-center text-4xl text-gray-300">
              <BiMoneyWithdraw />
            </div>
          </div>
          <div className="w-1/2 pl-4">
            <h3 className="text-blue-500 font-bold text-xl">
              No monthly charges
            </h3>
            <p className="text-gray-600">
              Pay once, get access to our branding tools forever.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-1/2 pr-4 text-right">
            <h3 className="text-yellow-500 font-bold text-xl">
              Full copyright included
            </h3>
            <p className="text-gray-600">
              For use in commercial and personal projects.
            </p>
          </div>
          <div className="w-1/2 flex justify-start pl-4">
            <div className="w-24 h-24 bg-yellow-500 flex items-center justify-center text-4xl text-gray-300">
              <FaRegCopyright />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-1/2 flex justify-end pr-4">
            <div className="w-24 h-24 bg-black flex items-center justify-center text-4xl text-gray-300">
              <TiInfinityOutline />
            </div>
          </div>
          <div className="w-1/2 pl-4">
            <h3 className="text-black font-bold text-xl">
              Unlimited revisions
            </h3>
            <p className="text-gray-600">
              Modify your logo at any time, even after purchase.
            </p>
          </div>
        </div>
        <div className="font-semibold text-3xl text-center pt-8">
          Create Your Unic Logo Design
        </div>
        <div className="text-gray-500 text-center">
          generate your logo instantly
        </div>
        <div className="text-center  ">
          <button className="bg-violet-400 px-6 py-4 rounded-full text-white">
            Create my Logo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Benifits;
