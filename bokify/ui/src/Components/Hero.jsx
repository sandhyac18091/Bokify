import React from "react";
import library1 from "../assets/library1.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-blue-100 min-h-screen flex items-center">
      <div className="mt-44 ml-52 flex items-center">
        <div className="mr-10">
          <h1 className="font-bold text-8xl font-sans leading-tight mb-11">
            Peak 30 Books <br /> To Make It A <br /> Great Year
          </h1>
          <button className="w-44 h-16 bg-blue-500 mt-5 ml-32 text-2xl text-white font-sans rounded-lg font-bold hover:bg-blue-600">
            <Link to="/viewbook" className="w-full h-full flex justify-center items-center">
              Explore
            </Link>
          </button>
        </div>
        <div>
          <img src={library1} alt="library" className="w-auto h-auto ml-52 mb-22" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
