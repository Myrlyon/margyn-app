import React from "react";
const Hero = () => {
  return (
    <div className="flex flex-col h-screen text-center md:py-44 justify-center items-center relative bg-red-500">
      <h1 className="text-4xl font-semibold text-white ">Palace</h1>
      <h1 className="text-1xl font-medium text-white ">of the Great</h1>

      <div className="flex flex-row">
        <h1 className="text-5xl font-semibold text-white ">
          Marlen the Magician
        </h1>
      </div>
    </div>
  );
};

export default Hero;
