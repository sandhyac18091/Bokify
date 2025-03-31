import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Addbook from "./Pages/Addbook";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import ViewBook from "./Pages/Viewbook";
import AddtoCart from "./Pages/AddtoCart";
import CategoryPage from "./Pages/Category";
import NotFoundPage from "./Pages/Notfound";


const App = () => {
  return (
    
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/addbook" element={<Addbook />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/viewbook" element={<ViewBook />} />
          <Route path="/book/:id" element={<AddtoCart />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/nof" element={<NotFoundPage />} />
        </Routes>
      </Router>
    
  );
};

export default App;
