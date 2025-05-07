import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Notfound() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-100 to-blue-50 flex flex-col justify-center items-center text-center px-6 overflow-hidden">
      
      {/* Background decorative icon */}
      <div className="absolute text-indigo-200 text-[200px] opacity-10 animate-pulse z-0">
        <FaExclamationTriangle />
      </div>

      <div className="relative z-10 bg-white/70 backdrop-blur-xl shadow-2xl rounded-3xl p-10 max-w-xl w-full border border-blue-100">
        <div className="text-indigo-500 text-7xl mb-4 drop-shadow-md animate-bounce">
          <FaExclamationTriangle />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 tracking-tight">
          404 — Page Not Found
        </h1>
        <p className="text-gray-600 mb-6 text-lg">
          Oops! We couldn't find the page you're looking for.
        </p>
        <Link
          to="/"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition duration-300 shadow-lg font-medium"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
