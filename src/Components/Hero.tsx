import QuickReservation from "./QuickReservation";


function Hero() {
  return (
    <div className="hero-section w-screen sm:h-[340px] flex justify-end items-center sm:pt-20 pt-5 flex-col gap-4 sm:pb-10 pb-2">
      <h1 className="md:text-4xl text-2xl uppercase text-gray-300 font-bold">
        Kigali restaurents
      </h1>
      <h1 className="md:text-3xl text-xl text-center text-gray-300 font-bold mb-10">
        Make a reservation for free in Kigali restaurent online
      </h1>
      <QuickReservation/>
    </div>
  );
}

export default Hero;
