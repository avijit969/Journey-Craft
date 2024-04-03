import React, { Component } from 'react'
import Hotels from "../../components/hotel/Hotels";
import Search from "../../components/search/Search";
import Filter from "../../components/filter/Filter"; 


export class HotelPage extends Component {
  static propTypes = {}

  render() {
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
            <Hotels name="Avijit's hotel" freeWifi={true} location='Puri' image="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
            <Hotels name="Balraj's hotel" image='https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
            <Hotels name="Komal's hotel" image='https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
            <Hotels image='https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
          </div>
        </div>
    )
  }
}

export default HotelPage