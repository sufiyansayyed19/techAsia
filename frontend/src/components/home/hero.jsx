import React from 'react';
// Make sure you have a hero image in your src/assets/ folder
import heroBgImage from '../../assets/hero.png'; 

const Hero = () => {
  return (
    // bg image container
    <section 
      className="relative w-full h-[38rem]  bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBgImage})`,clipPath: 'ellipse(85% 100% at 50% 0%)' }}
    
    >
      {/* Dark overlay to make the text more readable */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
        
        {/* Established Badge */}
        <div className="relative z-10 flex justify-center mb-10 mt-5 ">
            <div className="inline-flex items-center space-x-2 bg-black bg-opacity-50 backdrop-blur-sm px-4 py-2 rounded-full border border-yellow-400">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-yellow-400 text-sm font-medium">Established 2016</span>
            </div>
        </div>

        {/* Main Headline */}
        <h1 className="m-5 text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
          Empowering Innovation
          <br />
          <span className="text-yellow-400 inline-block mt-5">in Electronics & Automation</span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 max-w-3xl text-lg text-gray-300">
          Cutting-edge solutions for manufacturing, process control, and industrial automation that help businesses increase productivity and reduce operational costs.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button className="bg-black bg-opacity-50 backdrop-blur-md text-white font-bold py-3 px-8 rounded-full border-2 border-transparent hover:bg-white hover:text-black transition-all duration-300">
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