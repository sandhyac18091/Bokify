import React from "react";
import aboutus from "../assets/library.jpg";

const About = () => {
  return (
    <section className="flex justify-center items-center py-12 bg-gray-200">
      <div className="w-full max-w-[90rem] bg-white shadow-lg flex flex-col lg:flex-row overflow-hidden mt-10 lg:min-h-[800px] rounded-lg">
        
        <div className="w-full lg:w-1/2 h-[250px] sm:h-[400px] lg:h-auto">
          <img src={aboutus} alt="About Us" className="w-full h-full object-cover" />
        </div>

        <div className="w-full lg:w-1/2 p-6 sm:p-12 lg:p-16 flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-800 font-serif text-center lg:text-left">
            About Us
          </h2>
          <p className="text-gray-600 mt-4 sm:mt-6 text-lg sm:text-xl leading-relaxed font-mono text-center lg:text-left">
            Welcome to <span className="text-blue-600 font-semibold">Bokify</span>, your one-stop digital library platform. Our system allows admins to efficiently manage book collections while giving users an intuitive experience to explore, search, and purchase books.
          </p>
          <p className="text-gray-600 mt-4 text-lg sm:text-xl leading-relaxed font-mono text-center lg:text-left">
          Whether you're an avid reader or a casual explorer, Library Hub ensures a seamless journey from browsing books to making a purchase. Join us in revolutionizing the way books are managed and enjoyed!
          more 
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;