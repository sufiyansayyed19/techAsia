import React from 'react';
import heroBgImage from '../../assets/hero.png';

const Hero = () => {
  return (
    <section
      className="relative w-full  bg-cover bg-center bg-no-repeat h-[33rem] md:h-[42rem] clip-ellipse-md lg:clip-ellipse-lg"
      style={{
        backgroundImage: `url(${heroBgImage})`,
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50 clip-ellipse-md lg:clip-ellipse-lg "></div>

      {/* Content Container */}
      {/* On mobile: Use padding to create space (py-28). */}
      {/* On desktop: Center content vertically inside the fixed height container (md:h-full md:justify-center). */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 h-full flex flex-col items-center text-center py-28 md:py-0 md:justify-center">
        
        {/* Established Badge */}
        {/* On mobile: Smaller bottom margin (mb-4). */}
        {/* On desktop: Larger bottom margin (md:mb-6). */}
        <div className="inline-flex items-center space-x-2 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full border border-yellow-400 mb-4 md:mb-6">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-yellow-400 text-[0.7rem] lg:text-sm font-medium">Established 2016</span>
        </div>

        {/* Main Headline */}
        {/* On mobile: Smaller text (text-4xl), smaller top margin on the second line (mt-2). */}
        {/* On desktop: Larger text (md:text-6xl), larger top margin (md:mt-4). */}
        <h1 className="mt-4 text-[1.6rem] md:text-[3.5rem] font-extrabold text-white leading-tight">
          Empowering Innovation
          <br />
          <span className="text-yellow-400 inline-block mt-2 md:mt-4">
            in Electronics & Automation
          </span>
        </h1>

        {/* Subheading */}
        {/* On mobile: Smaller text (text-base), smaller margin (mt-4). */}
        {/* On desktop: Larger text (md:text-lg), larger margin (md:mt-6). */}
        <p className="mt-4 md:mt-6 max-w-3xl text-[1rem] md:text-lg text-gray-300">
          Cutting-edge solutions for manufacturing, process control, and industrial automation that help businesses increase productivity and reduce operational costs.
        </p>

        {/* Action Buttons */}
        {/* On mobile: Smaller margin (mt-6). */}
        {/* On desktop: Larger margin (md:mt-8). flex-wrap is already making them stack on small screens, which is perfect. */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="bg-black/50 backdrop-blur-md text-white font-bold py-3 px-8 rounded-full border-2 border-transparent hover:bg-white hover:text-black transition-all duration-300">
            Explore
          </button>
          <button className="bg-transparent border-2 border-gray-400 text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-black transition-all duration-300">
            Contact
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;