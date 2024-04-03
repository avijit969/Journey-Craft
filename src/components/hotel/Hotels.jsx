import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { MdFreeBreakfast } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
const stars = [1, 2, 3, 4, 6];
function Hotels({
  name = "avi's hotel",
  price = 999,
  freeBreakfast = 1,
  freeWifi = true,
  rating = 4,
  location="location",
  image="..\src\assets\hotel.jpg"
}) {
  return (
    <div className=" flex  mx-8 border-slate-100 border-2">
      <div className=" mr-4">
        <img className=" h-48 w-62" src={image}></img>
      </div>
      <div className="flex flex-col space-y-4">
        <div className=" text-2xl">{name}</div>
        <div className="flex ">
          {stars.map((star, index) => (
            <FaStar className="text-blue-400" key={index} />
          ))}
          <IoLocationSharp className=" ml-4" />
          <div className=" text-sm">{location}</div>
        </div>
        <div className="flex mt-2">
          <MdFreeBreakfast className=" text-xl mr-1" />
          <div className="">{freeBreakfast ? "Free Breakfast" : ""}</div>

          <FaWifi className=" text-xl mx-2" />
          <div className="">{freeWifi ? "Free Wifi" : ""}</div>
        </div>
      </div>
      <div className="ml-60 flex flex-col space-y-4">
        <div>4.3/5 Excellent</div>
        <div>
          ₹{price}
          <div className=" text-sm">Per night</div>
        </div>

        <button class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          Book Now
        </button>
      </div>
    </div>
  );
}

export default Hotels;
