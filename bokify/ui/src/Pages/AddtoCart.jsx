import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";

const AddtoCart = () => {
  const location = useLocation();
  const book = location.state || {};

  const [quantity, setQuantity] = useState(1);

  if (!book._id) {
    return (
      <>
        <Navbar />
        <div className="text-center mt-10">
          <h2 className="text-red-600 font-bold text-2xl">Book not found!</h2>
        </div>
      </>
    );
  }

  const handleAddToCart = () => {
    alert(`Added ${quantity} item(s) of "${book.bookname}" to the cart.`);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6">
        <div className="flex flex-col md:flex-row items-center gap-8">
          
          <div className="w-full md:w-1/3">
          <img
                src={`http://localhost:8080/getBookImage/${encodeURIComponent(book.bookname)}`}
                alt={book.bookname}
                className="w-full h-auto aspect-[3/4] object-cover rounded-md mb-3"
              />
          </div>

          
          <div className="w-full md:w-2/3">
            <h2 className="text-4xl font-bold text-black font-serif">{book.bookname}</h2>
            <p className="text-xl text-gray-600 my-2">
              <span className="line-through text-red-500">${(book.price * 1.5).toFixed(2)}</span> 
              <span className="text-green-600 font-semibold"> {book.price}</span>
            </p>
            <p className="text-gray-800 text-xl font-serif">{book.description}</p>
            <p className="text-blue-600 font-semibold mt-2"> In Stock</p>

            
            <div className="mt-4 space-y-1 text-gray-700 font-serif">
              <p><strong>Book Type:</strong> {book.booktype}</p>
              <p><strong>Language:</strong> {book.language || "English"}</p>
              <p><strong>ISBN:</strong> {book.isbn || "N/A"}</p>
            </div>

           
            <div className="flex items-center mt-6">
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="border border-gray-400 rounded p-3 w-18 mr-4"
              />
              <button
                onClick={handleAddToCart}
                className="bg-blue-600 text-white px-6 py-3 rounded shadow-md hover:bg-blue-700"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddtoCart;
