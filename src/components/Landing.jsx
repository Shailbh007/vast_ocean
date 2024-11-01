import React from "react";
import Navbar from "./Navbar";
import Typewriter from "typewriter-effect";
const Landing = () => {
  return (
    <div className="flex  bg-gradient-to-b from-black to-red-800">
      {/* Navbar  */}
      <div>
        <Navbar name="Get Started" path_name="/home" />
      </div>

      {/* Landing Left  */}
      <div className="flex flex-col h-screen justify-evenly pt-20 text-black font-bold w-full  sm:flex-col md:flex-row">
        <div className="flex w-full flex-col justify-center items-center md:flex-1 sm:flex-1">
          <div className="flex flex-wrap text-4xl p-4  flex-col justify-center   font-sans bg-gradient-to-b from-red-500 to-slate-300 text-transparent bg-clip-text md:text-6xl lg:text-6xl ">
            <span className="text-4xl first-letter:text-8xl text-white md:text-6xl md:first-letter:text-8xl lg:text-7xl lg:first-letter:text-7xl">
              Welcome
            </span>
            to Commounity post Where We
          </div>
          <div className="flex w-full text-4xl justify-center items-center  text-slate-300 font-sans md:text-5xl lg:text-5xl ">
            <Typewriter
              options={{
                strings: ["Explore", "Develop", "Create", "Share"],
                autoStart: true,
                loop: true,
                cursorStyle:'_'

              }}
            />
          </div>
        </div>
        <div className="flex flex-1  shadow-gray-900 shadow-xl  drop-shadow-xl relative overflow-hidden md:justify-center items-center">
        <img
          src="./images/male_landing_music.png"
          className=" object-contain absolute left-0 top-0 z-10 md:object-contain md:py-20"
          alt=""
          srcset=""
        />
        <img
          src="./images/anime1.png"
          className=" object-contain absolute right-0 opacity-40 md:object-contain md:py-20"
          alt=""
          srcset=""
        />
      </div>  
      </div>
      {/* Right Image  */}
          
    
    </div>
  );
};
export default Landing;
