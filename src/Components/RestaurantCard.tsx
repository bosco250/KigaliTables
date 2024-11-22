import React from 'react';
import { Star, MapPin } from 'lucide-react';
import { Button } from '@mui/material';

interface TimeSlot {
  time: string;
}

interface RestaurantCardProps {
  name: string;
  image: string;
  location: string;
  rating: number;
  reviews: number;
  timeSlots: TimeSlot[];
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  name,
  image,
  location,
  rating,
  reviews,
  timeSlots
}) => {
  return (
    <div className="max-w-[20rem] rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="relative">
        <img 
          src={image}
          alt={name}
          className="w-full h-40 object-cover"
        />
      </div>
      
      <div className="px-4 py-3">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className={`w-5 h-5 ${index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className="ml-2 text-gray-600">{reviews} Reviews</span>
        </div>
        
        <div className="flex items-center mb-4">
          <MapPin className="w-5 h-5 text-gray-500 mr-2" />
          <span className="text-gray-600">{location}</span>
        </div>
        
        <div className="flex flex-wrap gap-[6px]">
          {timeSlots.map((slot, index) => (
            <Button
              key={index}
              variant="contained"
              className="!bg-[#DF7117] hover:!bg-[#DF7117]/90 !text-white !rounded-md !text-sm !px-[6px] !py-1 !h-auto"
            >
              {slot.time}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;