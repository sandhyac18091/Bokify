import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    
    fetch(`http://localhost:8080/books/${categoryName}`)

      .then((res) => res.json())
      .then((data) => {
        
        const filteredBooks = data.filter(
          (book) => book.category.toLowerCase() === categoryName.toLowerCase()
        );
        setBooks(filteredBooks);
      })
      .catch((err) => console.error("Error fetching books:", err));
  }, [categoryName]);

  return (
    <div className="bg-gray-100 py-10 px-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        {categoryName} Books
      </h2>

      {books.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {books.map((book) => (
            <div key={book.id} className="bg-white shadow-md rounded-lg p-4">
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-60 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-700">
                {book.title}
              </h3>
              <p className="text-gray-600">{book.author}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No books found in this category.</p>
      )}
    </div>
  );
};

export default CategoryPage;
