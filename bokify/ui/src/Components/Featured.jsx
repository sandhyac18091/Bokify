import React from "react";
import { Link } from "react-router-dom";
import Fiction from "../assets/fiction.png";
import Science from "../assets/young.png";
import Prose from "../assets/prose.png";
import Design from "../assets/design.png";
import Stories from "../assets/stories.png";
import History from "../assets/his.webp";

const categories = [
  { id: 1, name: "Fiction", image: Fiction, path: "/category/fiction" },
  { id: 2, name: "Science", image: Science, path: "/category/science" },
  { id: 3, name: "Poetry & Prose", image: Prose, path: "/category/Prose" },
  { id: 4, name: "Art & Design", image: Design, path: "/category/Design" },
  { id: 5, name: "Love Stories", image: Stories, path: "/category/Stories" },
  { id: 6, name: "History", image: History, path: "/category/History" },
];

const Featured = () => {
  return (
    <div className="bg-gray-100 py-16 px-8">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Featured Categories
      </h2>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {categories.map((category) => (
          <Link
            to={category.path}
            key={category.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-transform transform hover:scale-105 flex flex-col items-center"
          >
            
            <div className="w-full h-56 flex justify-center items-center">
              <img src={category.image} alt={category.name} className="max-h-full max-w-full object-contain" />
            </div>
            
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-gray-700">{category.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Featured;
