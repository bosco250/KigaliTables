import { Button } from "@mui/material";
import myImage from "../../assets/devices.png";
const JoinKigal = () => {
  return (
    <div className="w-full  overflow-hidden relative sm:px-14 pb-10 overflow-hidden">
      <div className="w-full rounded-[10px] h-full bg-gradient-to-r from-purple-900 via-pink-600 to-orange-500  flex flex-col md:flex-row">
        <div className="md:w-1/2 z-10 flex justify-center py-3 flex-col px-5">
          <h2 className="text-2xl font-bold text-gray-200 mb-6 leading-tight bitter">
            Restaurateurs: Join Kigali's Premier Restaurant Reservation Platform
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="!px-6 !py-3 !bg-orange-500 hover:!bg-orange-600 !capitalize !text-gray-200 rounded-lg !transition-colors !font-medium">
              Learn more
            </Button>
            <Button
              variant="outlined"
              className="!px-6 !text-gray-100 !py-3 !border !border-gray-200 !rounded-lg !transition-colors !capitalize !font-medium"
              style={{ color: "", borderColor: "#E5E7EB" }}
            >
              View plan and pricing
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-end">
          <img src={myImage} alt="" />
        </div>
      </div>
      <div className="w-full text-center mt-3">
        <span className="">
          Favorite restaurant not yet on KigaliTable?{" "}
          <span className="text-orange-500 hover:cursor-pointer">
            Suggest Restaurant?
          </span>
        </span>
      </div>
    </div>
  );
};

export default JoinKigal;
