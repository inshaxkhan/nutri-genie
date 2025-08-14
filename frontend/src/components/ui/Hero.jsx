import React from "react";

const Hero = () => {
  return (
    <section className="pt-24 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">
      {/* Left Text */}
      <div className="max-w-lg">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          We Create Personalized Recipes For Your <span className="text-green-500">Health</span>
        </h1>
        <p className="mt-4 text-gray-600">
          Get meal ideas based on your preferences & ingredients with detailed nutritional analysis.
        </p>
        <button className="mt-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600">
          Get Started
        </button>
      </div>

      {/* Right Image */}
      <div className="mt-8 md:mt-0 md:w-1/2">
        <img
          src="/homepg.png"
          alt="Healthy food"
          className="rounded-md shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
