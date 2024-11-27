import React from 'react';

interface CardProps {
  title: string;
  location: string;
  rating: number;
  stars: number;
  image: string;
}

const RestCard: React.FC<CardProps> = ({ title, location, rating, stars, image }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md flex items-center">
      <img src={image} alt="Umucyo Restaurant" className="w-24 h-24 rounded-sm object-cover mr-4" />
      <div>
        <h3 className="text-lg font-medium text-gray-800">{title}</h3>
        <p className="text-gray-400 mt-2">{location}</p>
        <div className="flex items-center mt-4">
          {[...Array(stars)].map((_, i) => (
            <span key={i} className="text-yellow-500 mr-1">★</span>
          ))}
          <span className="text-gray-200 ml-2">{rating.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
};

export default RestCard;