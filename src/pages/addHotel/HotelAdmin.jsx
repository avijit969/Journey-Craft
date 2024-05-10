import React, { useRef } from "react";
import {useNavigate} from 'react-router-dom'
import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

function HotelAdmin() {
  const backgroundStyle = {
    backgroundImage: `url(https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const navigate=useNavigate()
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async () => {
    const data = {
      fullName,
      email,
      password,
      username: email,
      isAdmin: true,
      adminType: "hotelAdmin",
    };
    console.log(data);
    const config = {
      method: "post",
      url: "http://localhost:3000/api/v1/admin/registerAdmin",
      data: data,
      withCredentials: true,
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        toast.success(response.data.message);
      })
      .catch(function (error) {
        console.log(error);
        const statusCode = error.toJSON().status;
        if (statusCode === 401) {
          toast.error("Admin with email already exists !");
        } else if (statusCode === 402) {
          toast.error("Invalid user credentials !");
        }
      });
  };
  function handleLogin(){
    const data = {
      username:email,
      password,
    };
    const config = {
      method: "post",
      url: `${import.meta.env.VITE_BACKEND_BASE_URL}/admin/login`,
      data: data,
      withCredentials: true,
      maxBodyLength: Infinity,
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        toast.success(response.data.message);
        navigate("/addHotel")
      })
      .catch(function (error) {
        console.log(error);
        const statusCode = error.toJSON().status;
        if (statusCode === 401) {
          toast.error("User does not exist !");
        } else if (statusCode === 402) {
          toast.error("Invalid user credentials !");
        }
      });
  }

  return (
    <div>
      <div className="h-[700px] w-full" style={backgroundStyle}>
        <div className="flex space-x-8 justify-between p-2 ">
          <div>
            <img
              src="..\src\assets\logo4.png"
              className=" w-30 h-20 rounded-xl"
            ></img>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            <div className="flex mt-8 space-x-6 mr-6">
              <div className="w-72">
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                  labelProps={{
                    className: "hidden",
                  }}
                  containerProps={{ className: "min-w-[100px]" }}
                  onChange={(e)=>{setEmail(e.target.value)}}
                />
              </div>
              <div className="w-72">
                <Input
                  type="password"
                  placeholder="password"
                  className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                  labelProps={{
                    className: "hidden",
                  }}
                  containerProps={{ className: "min-w-[100px]" }}
                  onChange={(e)=>{setPassword(e.target.value)}}

                />
              </div>
              <Button color="blue" type="submit">
                logIn
              </Button>
            </div>
          </form>
        </div>
        <h1 className="p-36 text-5xl text-white font-bold">
          List your property for free with journeyCraft and maximize online
          bookings <br />
          <span className="text-3xl font-medium">
            Hotel, Villa, Resort, Lodge, Guest house, Serviced Apts, Hostel,
            Homestay, Cottage & BnB
          </span>
        </h1>
      </div>
      <img
        className=" "
        src="https://in.goibibo.com/newextranet/lean_app/assets/signup_flow.8dbf3b1e.png"
        alt=""
      />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className="text-center space-y-6">
          <h1 className="mt-[70px] text-[32px] text-[#2c3e50] font-medium mb-[30px]">
            It's Free. Sign up now & get started!
          </h1>
          <div className="space-y-6 text-center pl-[570px]">
            <div className="w-72">
              <Input
                label="fullName"
                type="text"
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
              />
            </div>
            <div className="w-72">
              <Input
                label="Email"
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="w-72">
              <Input
                label="password"
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
          </div>
          <Button type="submit" color="blue" className="w-72">
            Register now
          </Button>
        </div>
      </form>
    </div>
  );
}

export default HotelAdmin;
