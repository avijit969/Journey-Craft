import React, { useState } from "react";
import { Input, Select, Option, Checkbox } from "@material-tailwind/react";
import { FaInfoCircle } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";

function AddHotel() {
  // State variables to store data
  const [basicInfo, setBasicInfo] = useState({
    propertyName: "",
    starRating: "",
    builtYear: "",
    phoneNumber: "",
    description: "",
    emailAddress: "",
    houseNo: "",
    locality: "",
    pinCode: "",
    country: "India",
    state: "",
    city: "",
    agreeTerms: false,
  });

  const [rooms, setRooms] = useState({
    roomType: "",
    numOfRooms: "",
    pricePerNight: "",
    capacity: 2,
  });

  const [amenities, setAmenities] = useState({
    swimmingPool: false,
    freeWifi: false,
    parking: false,
    gym: false,
  });

  const [image, setImage] = useState([]);

  // Handler functions to update state
  const handleBasicInfoChange = (e) => {
    const { name, value, checked } = e.target;
    setBasicInfo((prevBasicInfo) => ({
      ...prevBasicInfo,
      [name]: name === "agreeTerms" ? checked : value,
    }));
  };

  const handleRoomsChange = (e) => {
    const { name, value } = e.target;
    setRooms((prevRooms) => ({
      ...prevRooms,
      [name]: value,
    }));
  };

  const handleAmenitiesChange = (e) => {
    const { name, checked } = e.target;
    setAmenities((prevAmenities) => ({
      ...prevAmenities,
      [name]: checked,
    }));
  };

  const handleRoomPhotosChange = (e) => {
    const files = e.target.files[0];
    setImage(files);
  };
  const uploadRoomImage = (_id) => {
    const formData = new FormData();
    formData.append("image", image);
    let config = {
      method: "patch",
      maxBodyLength: Infinity,
      url: `${import.meta.env.VITE_BACKEND_BASE_URL}/hotelImage/${_id}`,
      data: formData,
      withCredentials: true,
    };
    console.log(_id);
    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Function to handle form submission
  const handleSubmit = async () => {
    try {
      const data = {
        name: basicInfo.propertyName,
        location: basicInfo.locality,
        image: "https://www.example.com/hotelimg.jpg",
        description: basicInfo.description,
        rating: 4.5,
        facilities: [
          amenities.freeWifi ? "freeWifi" : "",
          amenities.gym ? "gym" : "",
          amenities.parking ? "parking" : "",
          amenities.swimmingPool ? "swimmingPoll" : "",
        ],
        roomTypes: [
          {
            type: rooms.roomType,
            price: rooms.pricePerNight,
            capacity: `${rooms.capacity} adults`,
            amenities: ["Air conditioning", "Balcony", "TV"],
            available: true,
          },
        ],
      };

      const config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${import.meta.env.VITE_BACKEND_BASE_URL}/hotels/createHotel`,
        data: data,
        withCredentials: true,
      };

      const response = await axios(config);
      console.log("API Response:", response.data);
      uploadRoomImage(response.data.data._id);
      // Handle success (e.g., show success message)
      toast.success("Hotel added successfully");
    } catch (error) {
      console.error("API Error:", error);
      const statusCode = error.toJSON().status;
      if (statusCode === 409) {
        toast.error("Hotel name already exists, please try another name");
      } else if (statusCode === 400) {
        toast.error("Name, location, and description fields are required ");
      } else {
        toast.error("Something went wrong !");
      }
    }
    console.log("Submitted Data:", {
      basicInfo,
      rooms,
      amenities,
      image,
    });
  };

  return (
    <div className="bg-gray-200">
      <h1 className="text-center font-bold text-4xl text-gray-800">
        Add Your hotel
      </h1>
      <div className="px-16">
        {/* Basic Information */}
        <div className="text-3xl font-bold">Basic Information</div>
        <div className="text-sm font-normal">
          Please fill in details of your property.
        </div>
        <form
          onSubmit={(e) => {
            handleSubmit();
            e.preventDefault();
          }}
        >
          <div className="w-1/2 mt-6 space-y-4 h-[200px] bg-white p-8 rounded-md">
            {/* Property Name */}
            <div className="w-72">
              <Input
                color="indigo"
                label="Property Name"
                placeholder="Enter your Property"
                name="propertyName"
                value={basicInfo.propertyName}
                onChange={handleBasicInfoChange}
              />
            </div>
            {/* Hotel Star Rating */}
            <div className="w-72">
              <Select
                variant="outlined"
                color="indigo"
                label="Hotel Star Rating"
                name="starRating"
                value={basicInfo.starRating}
                onChange={handleBasicInfoChange}
              >
                <Option>1</Option>
                <Option>2</Option>
                <Option>3</Option>
                <Option>4</Option>
                <Option>5</Option>
              </Select>
            </div>
            {/* Property Built Year */}
            <div className="w-72">
              <Select
                variant="outlined"
                color="indigo"
                label="When was this property built"
                name="builtYear"
                value={basicInfo.builtYear}
                onChange={handleBasicInfoChange}
              >
                {Array.from({ length: 2025 - 1990 }, (_, index) => (
                  <Option key={1990 + index}>{1990 + index}</Option>
                ))}
              </Select>
            </div>
          </div>

          {/* Contact Details */}
          <div className="w-1/2 mt-6 space-y-4 h-[200px] bg-white p-8 rounded-md">
            <div className="flex space-x-3 text-center">
              <h3>Contact Detail</h3>
              <FaInfoCircle color="grey" />
            </div>
            <div className="w-72">
              <Input
                label="Phone Number"
                name="phoneNumber"
                value={basicInfo.phoneNumber}
                onChange={handleBasicInfoChange}
              />
            </div>
            <div className="w-72">
              <Input
                label="Email Address"
                name="emailAddress"
                value={basicInfo.emailAddress}
                onChange={handleBasicInfoChange}
              />
            </div>
          </div>

          {/* Property Location Details */}
          <div className="text-3xl font-bold mt-6">
            Property Location Details
          </div>
          <div className="text-sm font-normal">
            Please fill in the location details of your property.
          </div>
          <div className="w-[60%] mt-6 space-y-4 h-[350px] bg-white p-8 rounded-md">
            <div className="w-72">
              <Input
                label="House/Building/Apartment No."
                placeholder="Please add details"
                name="houseNo"
                value={basicInfo.houseNo}
                onChange={handleBasicInfoChange}
              />
            </div>
            <div className="w-72">
              <Input
                label="Locality/Area/Street/Sector"
                placeholder="Please add details"
                name="locality"
                value={basicInfo.locality}
                onChange={handleBasicInfoChange}
              />
            </div>
            <div className="flex space-x-4">
              <div className="w-72">
                <Input
                  label="PinCode"
                  placeholder="Please add details"
                  name="pinCode"
                  value={basicInfo.pinCode}
                  onChange={handleBasicInfoChange}
                />
              </div>
              <div className="w-72">
                <Input label="Country" value={basicInfo.country} readOnly />
              </div>
            </div>
            <div className="w-72">
              <Input
                label="State"
                placeholder="Please add state"
                name="state"
                value={basicInfo.state}
                onChange={handleBasicInfoChange}
              />
            </div>
            <div className="w-72">
              <Input
                label="City"
                placeholder="Please add city"
                name="city"
                value={basicInfo.city}
                onChange={handleBasicInfoChange}
              />
            </div>
            <Checkbox
              label="I agree to the terms and conditions and confirm the address provided here is as per the registration or lease document."
              name="agreeTerms"
              checked={basicInfo.agreeTerms}
              onChange={handleBasicInfoChange}
            />
          </div>

          {/* Rooms */}
          <div className="text-3xl font-bold mt-6">Rooms</div>
          <div className="mt-6 space-y-4">
            <Input
              label="Room Type"
              name="roomType"
              value={rooms.roomType}
              onChange={handleRoomsChange}
            />
            <Input
              label="Number of Rooms"
              type="number"
              name="numOfRooms"
              value={rooms.numOfRooms}
              onChange={handleRoomsChange}
            />
            <Input
              label="Price per Night"
              type="number"
              name="pricePerNight"
              value={rooms.pricePerNight}
              onChange={handleRoomsChange}
            />
            <Input
              label="capacity"
              type="number"
              name="capacity"
              value={rooms.capacity}
              onChange={handleRoomsChange}
            />
          </div>

          {/* Property Amenities */}
          <div className="text-3xl font-bold mt-6">Property Amenities</div>
          <div className="mt-6 space-y-4">
            <Checkbox
              label="Swimming Pool"
              name="swimmingPool"
              checked={amenities.swimmingPool}
              onChange={handleAmenitiesChange}
            />
            <Checkbox
              label="Free Wi-Fi"
              name="freeWifi"
              checked={amenities.freeWifi}
              onChange={handleAmenitiesChange}
            />
            <Checkbox
              label="Parking"
              name="parking"
              checked={amenities.parking}
              onChange={handleAmenitiesChange}
            />
            <Checkbox
              label="Gym"
              name="gym"
              checked={amenities.gym}
              onChange={handleAmenitiesChange}
            />
            {/* Add more amenities as needed */}
          </div>
          <div className="text-3xl font-bold mt-6">Property description</div>
          <div className="mt-6 space-y-4">
            <Input
              type="text"
              label="Property description"
              name="description" // Ensure this is set to "description"
              value={basicInfo.description}
              onChange={handleBasicInfoChange}
            />
          </div>
          {/* Rooms Photos */}
          <div className="text-3xl font-bold mt-6">Rooms Photos</div>
          <div className="mt-6 space-y-4">
            <input
              type="file"
              accept="image/*"
              onChange={handleRoomPhotosChange}
            />
            {/* You can implement image upload functionality here */}
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <button
              type="submit"
              className="bg-indigo-500 text-white py-2 px-4 rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddHotel;
