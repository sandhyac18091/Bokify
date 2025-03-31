import React, { useState } from "react";
import Nav from "../Components/Nav";

const AddBook = () => {
  const [bookname, setBookname] = useState("");
  const [booktype, setBooktype] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [bookImage, setBookImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("Bookname", bookname);
      formData.append("Booktype", booktype);
      formData.append("Description", description);
      formData.append("Price", price);

      if (bookImage) {
        formData.append("bookImage", bookImage);
      }

      const response = await fetch("http://localhost:8080/addbook", {
        method: "POST",
        credentials: "include",
        body: formData,
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(text || "Unknown error occurred");
      }

      alert("Book added successfully!"); 

      
      setBookname("");
      setBooktype("");
      setDescription("");
      setPrice("");
      setBookImage(null);
      document.getElementById("bookImageInput").value = "";
    } catch (error) {
      console.error("Error:", error.message);
      alert("Something went wrong: " + error.message); 
    }
  };

  return (
    <>
      <Nav/>
      <div className="w-5/12 p-8 bg-purple-100 rounded-md mt-24 shadow-md shadow-slate-500 mx-auto">
        <p className="text-2xl text-center font-serif font-bold text-indigo-900">Add Book</p><br />

        <form onSubmit={handleSubmit} className="space-y-5">
         
          <div>
            <label className="ml-7 text-xl font-serif text-purple-950">Book Title</label>
            <input
              type="text"
              className="w-11/12 bg-white p-3 ml-7 border border-gray-300 rounded-md"
              value={bookname}
              onChange={(e) => setBookname(e.target.value)}
              required
            />
          </div>

          
          <div>
            <label className="ml-7 text-xl font-serif text-purple-950">Book Type</label>
            <select
              className="ml-7 w-11/12 h-11 bg-white font-serif text-lg text-purple-950 border border-gray-300 rounded-md"
              value={booktype}
              onChange={(e) => setBooktype(e.target.value)}
              required
            >
              <option value="" disabled>Select Book Type</option>
              <option>Poetry & Prose</option>
              <option>Science Fiction</option>
              <option>Art & Design</option>
              <option>Love Stories</option>
              <option>Young & Adult</option>
            </select>
          </div>

          
          <div>
            <label className="ml-7 text-xl font-serif text-purple-950">Description</label>
            <textarea
              className="w-11/12 h-24 ml-7 p-3 bg-white border border-gray-300 rounded-md"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="5"
              required
            ></textarea>
          </div>

          
          <div>
            <label className="ml-7 text-xl font-serif text-purple-950">Upload Book</label>
            <input
              id="bookImageInput"
              type="file"
              accept="image/*"
              className="w-11/12 bg-white p-3 ml-7 border border-gray-300 rounded-md cursor-pointer"
              onChange={(e) => setBookImage(e.target.files[0])}
              required
            />
          </div>

          
          <div>
            <label className="ml-7 text-xl font-serif text-purple-950">Price</label>
            <select
              className="ml-7 w-11/12 h-11 bg-white font-serif text-lg text-purple-950 border border-gray-300 rounded-md"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            >
              <option value="" disabled>Select Price</option>
              <option>3000/-</option>
              <option>2500/-</option>
              <option>4000/-</option>
              <option>3500/-</option>
            </select>
          </div>

          
          <button
            type="submit"
            className="ml-7 w-11/12 h-11 bg-purple-400 rounded-2xl text-lg text-white font-semibold hover:bg-purple-500 transition-all duration-300"
          >
            Add Book
          </button>
        </form>
      </div>
    </>
  );
};

export default AddBook;
