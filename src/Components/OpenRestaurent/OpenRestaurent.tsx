import  { useState } from "react";
import LocationGrid from "./location-cards";

function OpenRestaurent() {
  const [activeDiv, setActiveDiv] = useState("locations"); 

  return (
    <div className="sm:px-14 px-5 mb-5 sm:pt-5">
      <h1 className="text-2xl font-bold text-gray-800 md:mb-5 bitter">
        Explore Open Restaurent in Kigali
      </h1>
      <div className="flex w-full">
        <div
          className={`w-full flex items-center justify-center mb-10 text-gray-800 relative cursor-pointer hover:text-[#DF7117]
            ${activeDiv === "locations" ? "popular1" : ""}`}
          onClick={() => setActiveDiv("locations")}
        >
          Popular Locations
        </div>
        <div
          className={`w-full flex items-center justify-center mb-10 text-gray-800 relative cursor-pointer  hover:text-[#DF7117]
            ${activeDiv === "restaurants" ? "popular1" : ""}`}
          onClick={() => setActiveDiv("restaurants")}
        >
          Most Popular Restaurents
        </div>
      </div>
      <div className="w-full flex">
       {activeDiv==="locations" && <LocationGrid/>}
      </div>
    </div>
  );
}

export default OpenRestaurent;
