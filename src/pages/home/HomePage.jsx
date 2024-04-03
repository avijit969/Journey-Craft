import React from "react";
import backgroundImage from "./bg3.jpg"; // Import the local image
import Pbtn from "../../components/btn/Pbtn";
import Date1 from "../../components/date/Date";
import { SelectBar } from "../../components/selectbar/SelectBar";
import PCard from "../../components/packageCard/PCard";

function HomePage() {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <>
      <div
        className=" bg-contain bg-center h-[600px] rounded-3xl mx-20 mt-3 "
        style={backgroundStyle}
      >
        <h1 className=" text-7xl font-bold font-serif  text-slate-100 pl-32 pt-48">
          Explore The World With Us
        </h1>
        <div className="px-[340px] py-[240px]">
          <div className=" flex space-x-8 bg-white w-[520px] h-20  rounded-md justify-center  space-y-3">
            <div className="pt-3">
              <SelectBar name="location" items={["Puri", "Kanark", "Goa"]} />
            </div>
            <div className=" w-[170px]">
              <span className="ml-3">Date</span>
              <Date1 />
            </div>
            <div className="">
              <SelectBar name="Guest" items={[1, 2, 3, 4]} />
            </div>
            <div>
              <Pbtn name="Explore Now" className="" />
            </div>
          </div>
        </div>
      </div>
      {/* package cards */}
      <div className="my-14 flex  space-x-16   ml-14">
      <PCard/>
      <PCard/>
      <PCard/>
      </div>
    </>
  );
}

export default HomePage;
