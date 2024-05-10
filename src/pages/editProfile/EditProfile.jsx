import React, { useState } from "react";
import { Avatar, Input, Button } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import axios from "axios";

function EditProfile() {
  const data = useSelector((state) => state.auth.userData);
  const [avatar, setAvatar] = useState(null);
  const [formData, setFormData] = useState({
    username: data.user.username,
    email: data.user.email,
    fullName: data.user.fullName,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAvatarChange = (event) => {
    setAvatar(event.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("avatar", avatar);

    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/users/avatar`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    } catch (error) {
      console.error("Error uploading avatar:", error);
    }
  };

  return (
    <div className="h-screen bg-gray-100">
      <h1 className=" text-center bg-cyan-500 text-4xl font-bold">
        Update Your Account
      </h1>
      <div className="h-48 bg-cyan-500 flex flex-col justify-center">
        <div className="w-1/2 ml-80 ">
          <div className="pl-80 mt-96 relative">
            <Avatar
              src={formData.avatar ? formData.avatar : data?.user.avatar}
              alt="avatar"
              withBorder={true}
              className="p-0.5"
              size="xxl"
            />
            <label
              htmlFor="avatar"
              className="absolute ml-[329px] mt-[73px] h-[30px] w-[90px] top-0 left-0 right-0 bottom-0 flex items-center justify-center text-white cursor-pointer bg-black bg-opacity-50 hover:bg-opacity-75 rounded-b-[40px]"
            >
              Edit
            </label>
            <input
              id="avatar"
              type="file"
              accept="image/*"
              name="avatar"
              onChange={handleAvatarChange}
              className="hidden"
            />
          </div>
          <div className="space-y-8 mt-8">
            <form onSubmit={handleSubmit} className=" space-y-8">
              <Input
                type="text"
                label="Username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your username"
              />
              <Input
                type="email"
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
              <Input
                type="text"
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
              <div className="text-center">
                <Button
                  color="lightBlue"
                  type="submit"
                  ripple="light"
                  className="mt-8"
                >
                  Save Changes
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
