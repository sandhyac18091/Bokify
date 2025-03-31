import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../assets/logo1.svg";

const Nav = () => {
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

     
      
    </div>
  );
};

export default Nav;
