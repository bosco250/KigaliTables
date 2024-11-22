import QuickReservation from "./QuickReservation";


function Hero() {
  return (
    <div className="hero-section w-screen h-[340px] flex justify-end items-center pt-20 flex-col gap-4 pb-10">
      <h1 className="text-4xl uppercase text-gray-300 font-bold">
        Kigali restaurents
      </h1>
      <h1 className="text-3xl  text-gray-300 font-bold mb-10">
        Make a reservation for free in Kigali restaurent online
      </h1>
      <QuickReservation/>
    </div>
  );
}

export default Hero;
