import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../assets/logo1.svg";

const Navbar = () => {
  return (
    <div className="bg-blue-100 w-full flex items-center px-8 py-4 shadow-md">
      
      <img src={logo1} alt="logo" className="h-8 mt-11" />

      
      <div className="flex gap-x-10 ml-10 mt-11">
        <Link to="/" className="text-black font-medium text-2xl font-sans hover:text-blue-600">
          Home
        </Link>
        <Link to="/login" className="text-black font-medium text-2xl font-sans hover:text-blue-600">
          Login
        </Link>
        <Link to="/addbook" className="text-black font-medium text-2xl font-sans hover:text-blue-600">
          Add Book
        </Link>
        <Link to="/viewbook" className="text-black font-medium text-2xl font-sans hover:text-blue-600">
          View Book
        </Link>
        <Link to="/logout" className="text-black font-medium text-2xl font-sans hover:text-blue-600">
          Logout
        </Link>
        
           
      </div>

     
      <div className="ml-auto flex items-center">
        <input
          type="text"
          placeholder="Search for books..."
          className="border border-gray-300 rounded-lg px-4 py-2 w-96 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white mt-11"
        />
        <button className="ml-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 mt-11">
          Search
        </button>
      </div>
    </div>
  );
};

export default Navbar;
