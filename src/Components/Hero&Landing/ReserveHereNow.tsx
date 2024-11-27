import RestaurantCard from "./RestaurantCard";
import Image1 from "../../assets/2.png";
import { ChevronRight } from "lucide-react";
import OpenRestaurent from "../OpenRestaurent/OpenRestaurent";

function ReserveHereNow() {
  const restaurantData = {
    name: "Restaurant Nyamirambo",
    image: Image1,
    location: "Nyamirambo Kg 05 Street",
    rating: 5,
    reviews: 40,
    timeSlots: [
      { time: "12:58 AM" },
      { time: "12:58 AM" },
      { time: "12:58 AM" },
    ],
  };

  const getMealType = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours();

    if (hours >= 6 && hours < 11) {
      return "Breakfast";
    } else if (hours >= 11 && hours < 17) {
      return "Lunch";
    } else {
      return "Dinner";
    }
  };

  const mealType = getMealType();

  return (
    <>
      <div className="sm:px-14 px-3 pt-10 w-screen md:mb-8 ">
        <div className="flex justify-between mb-8">
          <h1 className="sm:text-2xl text-xl font-bold text-gray-800 bitter">
            Book {mealType} in Kigali now
          </h1>
          <span className="text-sm text-[#DF7117] flex items-center">
            View all <ChevronRight />
          </span>
        </div>
        <div className="flex flex-wrap justify-between sm:flex-nowrap gap-5">
          <RestaurantCard {...restaurantData} />
          <RestaurantCard {...restaurantData} />
          <RestaurantCard {...restaurantData} />
          <RestaurantCard {...restaurantData} />
        </div>
      </div>
      <OpenRestaurent />
    </>
  );
}

export default ReserveHereNow;
