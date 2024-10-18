import React from "react";
import Navbar from "./Navbar";
const Landing = () => {
  const style = {
    animation: "shake 5s ease-in-out infinite",
  };

  return (
    <div className="flex size-full flex-col bg-gradient-to-b from-black to-red-500 ">
      <Navbar path_name="/home" name="Get Started" logo={true} />
      <div className="flex h-full m-10 relative flex-col text-white  items-center sm:flex-row ">
        <div className="flex flex-1 absolute  bottom-20 right-0 md:right-0 justify-center items-center">
          <img
            src="./image/anime1.png"
            style={style}
            alt="anime"
            className="image z-10"
          />
        </div>
        <div className="flex flex-1  absolute flex-col justify-center items-center ">
          <h1 className="text-4xl  md:text-[5rem]  ">Entertainment at peak !</h1>
          <div className="text-2xl text-slate-400">
            Adhere the presence to the Comic World
          </div>
        </div>
      </div>
    </div>
  );
};
export default Landing;
