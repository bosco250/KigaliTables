import { MapPin, Search } from 'lucide-react';
import Logo from '../../assets/Logo.png';
import { Button } from '@mui/material';
import { useState } from 'react';
import { motion } from 'framer-motion';

function Header() {
  const [isInput, setIsInput] = useState(false);

  return (
    <div className="w-screen h-28 top-0 left-0 bg-gray-100 z-40 overflow-hidden">
      <div className="hidden w-full md:flex justify-end md:gap-[20%] h-[20%] text-sm bg-[#151F3E] text-[#DF7117] px-10">
        <span>Call: +250786 888 888</span>
        <span>Email: support@kigalitable.com</span>
      </div>
      <div className="w-full h-[80%] flex justify-center items-center md:px-10">
        <div className="flex w-full h-full justify-between items-center">
          <div className="flex items-center gap-5">
            <div className="flex items-center">
              <img src={Logo} alt="" className="sm:w-20 w-14 rounded-2xl" />
              <h1 className="sm:text-3xl text-xl font-bold text-[#DF7117]">KigaliTables</h1>
            </div>
            <div className="sm:flex hidden text-gray-700 gap-1">
              <MapPin />
              <span className="text-gray-700">Kigali</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="contained"
              className="!bg-[#151F3E] !text-gray-100 !capitalize"
            >
              Login
            </Button>
            <div className="flex items-center">
              <motion.input
                type="search"
                className="h-8 rounded-md border border-gray-700 px-2"
                initial={{ width: 0, opacity: 0 }}
                animate={{
                  width: isInput ? '200px' : 0,
                  opacity: isInput ? 1 : 0,
                }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              />
              <Search
                onClick={() => setIsInput(!isInput)}
                className="w-6 h-6 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
