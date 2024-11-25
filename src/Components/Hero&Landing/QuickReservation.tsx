import { Button } from "@mui/material";
import { Calendar, ChevronDown, Clock, Search, User } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

function QuickReservation() {
  const [showDateMenu, setShowDateMenu] = useState(false);
  const [showTimeMenu, setShowTimeMenu] = useState(false);
  const [showPeopleMenu, setShowPeopleMenu] = useState(false);

  const [selectedDate, setSelectedDate] = useState("Nov 25, 2024");
  const [selectedTime, setSelectedTime] = useState("12:00 AM");
  const [selectedPeople, setSelectedPeople] = useState("3 People");

  const menuVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1 },
  };

  return (
    <div className="flex sm:flex-row flex-col sm:gap-5 gap-1 items-center">
      <div className="flex items-center sm:gap-5 gap-2 bg-gray-200 text-gray-800 p-4 rounded-md relative">
        {/* Date Selection */}
        <div className="flex items-center sm:gap-5 gap-3 relative ">
          <div
            className="flex items-center sm:gap-2 gap-1 cursor-pointer"
            onClick={() => setShowDateMenu(!showDateMenu)}
          >
            <Calendar className="sm:block hidden" />
            <span className="sm:text-xl text-[14px]">{selectedDate}</span>
            <ChevronDown />
          </div>
          {showDateMenu && (
            <motion.ul
              className="absolute bottom-full mt-1 left-0 w-full bg-white shadow-md rounded-md p-3 text-sm text-gray-800 z-10 border border-gray-400"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <li
                className="py-1 cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  setSelectedDate("Nov 24, 2024");
                  setShowDateMenu(false);
                }}
              >
                Nov 24, 2024
              </li>
              <li
                className="py-1 cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  setSelectedDate("Nov 26, 2024");
                  setShowDateMenu(false);
                }}
              >
                Nov 26, 2024
              </li>
              <li
                className="py-1 cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  setSelectedDate("Nov 27, 2024");
                  setShowDateMenu(false);
                }}
              >
                Nov 27, 2024
              </li>
            </motion.ul>
          )}
        </div>

        {/* Time Selection */}
        <div className="flex items-center sm:gap-5 gap-3 relative ">
          <div
            className="flex items-center gap-2 cursor-pointer "
            onClick={() => setShowTimeMenu(!showTimeMenu)}
          >
            <Clock className="sm:block hidden" />
            <span className="md:text-xl text-[14px]">{selectedTime}</span>
            <ChevronDown />
          </div>
          {showTimeMenu && (
            <motion.ul
              className="absolute bottom-full mt-1 left-0 w-full bg-white shadow-md rounded-md p-3 text-sm text-gray-800 z-10 border border-gray-400"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <li
                className="py-1 cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  setSelectedTime("12:30 AM");
                  setShowTimeMenu(false);
                }}
              >
                12:30 AM
              </li>
              <li
                className="py-1 cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  setSelectedTime("1:00 AM");
                  setShowTimeMenu(false);
                }}
              >
                1:00 AM
              </li>
              <li
                className="py-1 cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  setSelectedTime("1:30 AM");
                  setShowTimeMenu(false);
                }}
              >
                1:30 AM
              </li>
            </motion.ul>
          )}
        </div>

        {/* People Selection */}
        <div className="flex items-center sm:gap-5 gap-3 relative">
          <div
            className="flex sm:gap-2 gap-1 cursor-pointer"
            onClick={() => setShowPeopleMenu(!showPeopleMenu)}
          >
            <User className="sm:block hidden" />
            <span className="sm:text-xl text-[14px]">{selectedPeople}</span>
            <ChevronDown />
          </div>
          {showPeopleMenu && (
            <motion.ul
              className="absolute bottom-full mt-1 left-0 w-full bg-white shadow-md rounded-md p-3 text-sm text-gray-800 z-10 border border-gray-400"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <li
                className="py-1 cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  setSelectedPeople("1 Person");
                  setShowPeopleMenu(false);
                }}
              >
                1 Person
              </li>
              <li
                className="py-1 cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  setSelectedPeople("2 People");
                  setShowPeopleMenu(false);
                }}
              >
                2 People
              </li>
              <li
                className="py-1 cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  setSelectedPeople("4 People");
                  setShowPeopleMenu(false);
                }}
              >
                4 People
              </li>
            </motion.ul>
          )}
        </div>
      </div>

      {/* Location Input */}
      <div className="flex items-center gap-5 bg-gray-200 text-gray-800 p-4 rounded-md relative">
        <input
          type="text"
          placeholder="Location, or Restaurant"
          className="h-6 ml-4 px-4"
        />
        <Search className="absolute left-1 top-4" />
      </div>

      {/* Submit Button */}
      <Button
        variant="contained"
        className="!flex !items-center !bg-[#DF7117] !text-gray-200 !capitalize !py-[14px] !px-5"
      >
        Let's Go
      </Button>
    </div>
  );
}

export default QuickReservation;
