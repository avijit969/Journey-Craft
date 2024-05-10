import React, { useEffect, useState} from 'react'
import Hotels from "../../components/hotel/Hotels";
import Search from "../../components/search/Search";
import Filter from "../../components/filter/Filter"; 
import { useDispatch,useSelector } from 'react-redux';
import axios from "axios";
import { addHotel } from '../../store/hotelSclice';

function HotelPage() {
//add all hotels from db
const dispatch =useDispatch()
const hotelData = useSelector((state) => state.hotel.hotelData);
const [hotels,setHotels]=useState([])
useEffect(() => {
  var config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${import.meta.env.VITE_BACKEND_BASE_URL}/hotels/allHotel`,
    withCredentials: true,
  };
  axios(config)
    .then(function (response) {
      console.log(response.data.data);
      setHotels(response.data.data)
      // dispatch(addHotel(response.data.data));
      console.log(hotels)
    })
    .catch(function (error) {
      console.log(error);
    });
}, []);


  return (
    <div className="flex mt-4">
    <div className=" flex flex-col space-y-6 w-1/4 ml-10">
    <h5 className=" font-bold">HOTEL NAME</h5>

      <Search />
      <div>
      <h5 className=" font-bold">PRICE FOR ONE NIGHT</h5>
      <Filter from="1000" to="2000"/>
      <Filter from="2000" to="3000"/>
      <Filter from="4000" to="5000"/>
      <Filter from="5000" to="6000"/>
      <Filter from="6000" to="7000"/>
      </div>
      </div>
      <div className=" flex flex-col space-y-6">
        {hotels.map((hotel) => (
        <Hotels key={hotel._id} name={hotel.name} image={hotel.image} price={hotel.roomTypes[0].price} freeWifi={hotel.facilities[0]} location={hotel.location} freeBreakfast={hotel.facilities[1]}/>
      ))}
      </div>
    </div>
)
}

export default HotelPage
