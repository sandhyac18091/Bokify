import React, { useState } from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
   
  };

  return (
    <>
    <Nav/>
    <section className="bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg sans-serif">
        <h2 className="text-3xl font-semibold text-center text-blue-700 mb-6 sans-serif">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mb-8 sans-serif">
          Have any questions or feedback? We would love to hear from you!
        </p>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 mb-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-700 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-700 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-gray-700 font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500 h-40"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-600 text-lg font-bold"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
    <Footer/>
    </>
   
  );
};

export default ContactUs;
