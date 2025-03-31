import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:8080/Login', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          
          Email: email,
          Password: password,
        }),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.msg || 'Signup failed');
      }

      navigate('/home');
    } catch (err) {
      setError(err.message || 'Login failed: Please try again!');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-yellow-600">Login</h2>
        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
        <form onSubmit={handleLogin} className="mt-6">
         
        <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 text-lg text-white bg-yellow-600 rounded-lg hover:bg-yellow-700 transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-center text-gray-700">
          Don't have an account?{' '}
          <Link to="/signup" className="text-yellow-600 hover:underline">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;