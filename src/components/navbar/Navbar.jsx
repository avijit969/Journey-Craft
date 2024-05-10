import React, { useEffect, useReducer } from "react";
import { MdHotel } from "react-icons/md";
import { TiHome } from "react-icons/ti";
import { FaBus } from "react-icons/fa";
import { IoCarSportSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import Pbtn from "../btn/Pbtn";
import { useSelector, useDispatch } from "react-redux";
import { Avt } from "../avatar/Avatar";
import axios from "axios";
import { login } from "../../store/authSclice";


function Navbar() {
  const dispatch = useDispatch();
  
  const userData = useSelector((state) => state.auth.userData);
  useEffect(() => {
    var config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${import.meta.env.VITE_BACKEND_BASE_URL}/users/isLoggedIn`,
      withCredentials: true,
    };
    axios(config)
      .then(function (response) {
        dispatch(login({ userData: response.data }));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  console.log(userData);

  const authStatus = useSelector((state) => state.auth.status);

  return (
    <div className="flex justify-between space-x-28 bg-white h-20 items-center mt-2  text-slate-700 drop-shadow-md">
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
      <div>
        {authStatus ? (
          <div>
            <NavLink to="/logOut">
              <Pbtn name="LogOut" />{" "}
            </NavLink>{" "}
            <NavLink to="/editProfile">
              <Avt />
            </NavLink>
          </div>
        ) : (
          <div>
            <NavLink to="/login">
              <Pbtn name="LogIn" />
            </NavLink>{" "}
            <NavLink to="/signUp">
              <Pbtn name="singUp" />
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
