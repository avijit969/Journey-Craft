import React from "react";
import { MdHotel } from "react-icons/md";
import { TiHome } from "react-icons/ti";
import { FaBus } from "react-icons/fa";
import { IoCarSportSharp } from "react-icons/io5";
import { NavLink, Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="flex space-x-28 bg-white h-20 items-center mt-2  text-slate-700 drop-shadow-md">
      <img src="..\src\assets\logo4.png" className=" w-30 h-20"></img>
      <NavLink
        to=""
        className={({ isActive }) =>
          `${
            isActive ? "text-blue-500" : "text-gray-700"
          } hover:text-blue-500 cursor-pointer`
        }
      >
        <TiHome className=" ml-3" />
        Home
      </NavLink>
      <NavLink
        to="/hotel"
        className={({ isActive }) =>
          `${
            isActive ? "text-blue-500" : "text-gray-700"
          } hover:text-blue-500 cursor-pointer`
        }
      >
        <div className="">
          <MdHotel className=" ml-3" />
          Hotel
        </div>
      </NavLink>
      <NavLink
        to="bus"
        className={({ isActive }) =>
          `${
            isActive ? "text-blue-500" : "text-gray-700"
          } hover:text-blue-500 cursor-pointer`
        }
      >
        <FaBus className=" ml-1" />
        Bus
      </NavLink>
      <NavLink
        to="cabs"
        className={({ isActive }) =>
          `${
            isActive ? "text-blue-500" : "text-gray-700"
          } hover:text-blue-500 cursor-pointer`
        }
      >
        <IoCarSportSharp className=" ml-3" />
        Cabs
      </NavLink>
    </div>
  );
}

export default Navbar;
