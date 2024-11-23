import { Button } from "@mui/material";
import { Calendar, ChevronDown, Clock, Search, User } from "lucide-react";

function QuickReservation() {
  return (
    
    <div className="flex sm:flex-row flex-col sm:gap-5 gap-1 items-center">
    <div className="flex items-center sm:gap-5 gap-2 bg-gray-200 text-gray-800 p-4 rounded-md">
      <div className="flex items-center sm:gap-5 gap-3">
        <div className="flex items-center sm:gap-2 gap-1">
          <Calendar />
          <span className="sm:text-xl text-sm">Nov 25, 2024</span>
        </div>
        <ChevronDown />
      </div>
      <div className="flex items-center sm:gap-5 gap-3">
        <div className="flex items-center gap-2">
          <Clock />
          <span className="md:text-xl text-sm"> 12:00 AM</span>
        </div>
        <ChevronDown />
      </div>
      <div className="flex items-center sm:gap-5 gap-3">
        <div className="flex  sm:gap-2 gap-1">
          <User />
          <span className="sm:text-xl text-sm">3 People</span>
        </div>
        <ChevronDown />
      </div>
    </div>
    <div className="flex items-center gap-5 bg-gray-200 text-gray-800 p-4 rounded-md relative">
      <input type="text" placeholder="Location, or Restaurent" className=" h-6 ml-4 px-4"/>
      <Search className=" absolute left-1 top-4"/>
    </div>
    <Button variant="contained" className="!flex !items-center !bg-[#DF7117] !text-gray-200 !capitalize !py-[14px] !px-5">Let's Go</Button>       
  </div>
  )
}

export default QuickReservation
