import React from "react";
import HS2 from "../assets/HS2.png";

const HeroSection = () => {
  return (
    <div>
      

      {/* Hero section */}
      <div
        className="w-full h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${HS2})` }}
      >
       
        <div className="h-full flex items-center justify-center bg-black/50">
        <h1 className="text-4xl font-bold">
        <span className="inline-block text-white animate-typing overflow-hidden border-r-4 pr-1">WELCOME</span>
      </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
