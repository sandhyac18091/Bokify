import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

const ViewBook = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:8080/getbooks", { credentials: "include" });
        if (!response.ok) throw new Error("Failed to fetch books");
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };
    fetchBooks();
  }, []);


  const handleBookClick = (book) => {
    navigate(`/book/${book._id}`, { state: book });
  };

  return (
    <>
      <Nav />
      <div className="container mx-auto mt-10">
        <h2 className="text-3xl text-center font-serif font-bold text-indigo-900 mb-6">Available Books</h2>
        <div className="grid grid-cols-3 gap-6">
          {books.map((book) => (
            <div
              key={book._id}
              className="bg-purple-100 p-4 rounded-md shadow-md cursor-pointer hover:shadow-lg"
              onClick={() => handleBookClick(book)}
            >
              <img
                src={`http://localhost:8080/getBookImage/${encodeURIComponent(book.bookname)}`}
                alt={book.bookname}
                className="w-full h-auto aspect-[3/4] object-cover rounded-md mb-3"
              />

              <h3 className="text-xl font-semibold text-purple-900">{book.bookname}</h3>
              <p className="text-purple-800">{book.booktype}</p>
              <p className="text-gray-700">{book.description}</p>
              <p className="text-purple-900 font-bold mt-2">Price: {book.price}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ViewBook;
