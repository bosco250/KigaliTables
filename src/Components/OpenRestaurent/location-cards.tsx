import React, { useState } from 'react';
import { ChevronDown, MapPin } from 'lucide-react';
import { Menu, MenuItem } from '@mui/material';
import { motion } from 'framer-motion'; // Import Framer Motion
import image1 from '../../assets/3.png';

const RestaurantCard = () => (<>
  <div className="bg-white p-3 flex gap-4 mb-3 hover:bg-gray-50">
    <img 
      src={image1}
      alt="Restaurant" 
      className="w-24 h-24 object-cover rounded-md"
    />
    <div className="flex-1">
      <h3 className="font-medium text-gray-800 text-sm">Umucyo Restauraunt</h3>
      <div className="flex items-center text-gray-600 text-sm mt-1">
        <MapPin className="w-4 h-4 mr-1" />
        <span>Kg 05 Street</span>
      </div>
      <button className="mt-2 bg-[#DF7117] text-white px-4 py-2 rounded-md text-sm hover:bg-orange-600 transition-colors">
        Explore More
      </button>
    </div>
  </div>
  </>
);

const LocationGrid = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const locations = Array(9).fill({
    location: "Nyambirambo - Nyarugenge",
    restaurantCount: 10,
  });

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {locations.map((loc, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 cursor-pointer hover:shadow-md transition-shadow"
            onClick={handleClick}
          >
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="text-gray-800 font-medium">{loc.location}</h3>
                <p className="text-gray-600 text-sm">{loc.restaurantCount} Open restaurants</p>
              </div>
              <ChevronDown className="text-gray-400 w-5 h-5" />
            </div>
          </div>
        ))}
      </div>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: '350px',
            maxHeight: '500px',
            padding: '10px',
          },
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <MenuItem
          onClick={(e) => e.stopPropagation()}
          disableRipple
          style={{ padding: 0 }}
        >
          <motion.div
            className="w-full"
            initial={{ height: 0 }} // Initial height
            animate={{ height: 'auto' }} // Final height
            exit={{ height: 0 }} // Height when exiting
            transition={{ duration: 0.5 }} // Duration of animation
          >
            <h1 className="text-[15px] text-gray-800 w-full text-center font-semibold">Restaurents in Nyamirambo</h1>
            {Array(4).fill(null).map((_, idx) => (
              <RestaurantCard key={idx} />
            ))}
          </motion.div>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default LocationGrid;
