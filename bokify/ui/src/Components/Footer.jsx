import React from "react";
import book1 from '../assets/design.png'
import book2 from '../assets/young.png'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        
        <div>
  <h3 className="text-lg font-bold mb-3">Contact</h3>
  <p className="text-sm">4965 Graystone Lakes, Milledgevi, New York.</p>
  <p className="text-sm mt-2">info@bokifysitemail.com</p>
  <p className="text-sm mt-1">+00 123 456 789</p>
  <div className="flex space-x-4 mt-3">
    <a href="#" className="text-gray-400 hover:text-white">
      <i className="fab fa-facebook-f"></i>
    </a>
    <a href="#" className="text-gray-400 hover:text-white">
      <i className="fab fa-twitter"></i>
    </a>
    <a href="#" className="text-gray-400 hover:text-white">
      <i className="fab fa-instagram"></i>
    </a>
    <a href="#" className="text-gray-400 hover:text-white">
      <i className="fab fa-skype"></i>
    </a>
  </div>
</div>


        
        <div>
          <h3 className="text-lg font-bold mb-3">Main Page</h3>
          <ul className="text-sm space-y-2">
            <li><a href="/home" className="hover:text-gray-300">Home Page</a></li>
            <li><a href="/aboutus" className="hover:text-gray-300">About Us</a></li>
            <li><a href="viewbook" className="hover:text-gray-300">Viewbook</a></li>
            <li><a href="/book/:id" className="hover:text-gray-300">Shop</a></li>
            <li><a href="contactus" className="hover:text-gray-300">Contact Us</a></li>
            
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-bold mb-3">Utility Pages</h3>
          <ul className="text-sm space-y-2">
            <li><a href="signup" className="hover:text-gray-300">Signup</a></li>
            <li><a href="login" className="hover:text-gray-300">Login</a></li>
            <li><a href="#" className="hover:text-gray-300">FAQ</a></li>
            <li><a href="nof" className="hover:text-gray-300">404 Not Found</a></li>
           
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-bold mb-3">Best Sellers</h3>
          <div className="flex items-center space-x-3 mb-3">
            <img src={book1} alt="Book1" className="w-14 h-20 object-cover rounded"/>
            <div>
              <p className="text-sm">Soldier by Olivia Wilson</p>
              <p className="text-sm font-bold">$29.00 USD</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <img src={book2} alt="Book2" className="w-14 h-20 object-cover rounded"/>
            <div>
              <p className="text-sm">Echoes of Your Soul</p>
              <p className="text-sm font-bold">$32.00 USD</p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="text-center text-gray-400 text-sm mt-10 border-t border-gray-700 pt-4">
        Copyright © Bokify | Designed by <span className="text-white">Brandbes</span> - Powered by <span className="text-white">Webflow</span>
      </div>
    </footer>
  );
};

export default Footer;
