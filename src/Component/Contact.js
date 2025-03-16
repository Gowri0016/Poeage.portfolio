import React, { useRef } from 'react';
import { motion } from 'framer-motion';

export default function Define() {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const onDefin = (e) => {
    e.preventDefault();
    alert("Submitted successfully...!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-10 bg-white p-6 md:p-12">
      {/* Header Section */}
      <motion.div 
        className="text-center max-w-2xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-extralight hover:text-blue-500 transition">Contact</h1>
        <p className="mt-6 text-lg md:text-xl">
          Fill out the form below for further communication. Let's collaborate on your upcoming projects!
        </p>
      </motion.div>

      {/* Contact Form */}
      <motion.div 
        className="bg-white bg-opacity-10 backdrop-blur-md p-8 mt-10 rounded-2xl shadow-xl border border-gray-700 max-w-md md:max-w-lg w-full"
        whileHover={{ scale: 1.02 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">Get in Touch</h2>
        <form onSubmit={onDefin}>
          <div className="mb-4">
            <label className="block font-medium">Name:</label>
            <input type="text" ref={nameRef} className="w-full p-3 bg-white border border-gray-600 rounded-lg focus:ring focus:ring-blue-500"/>
          </div>

          <div className="mb-4">
            <label className="block font-medium">Email:</label>
            <input type="email" ref={emailRef} className="w-full p-3 bg-white border border-gray-600 rounded-lg focus:ring focus:ring-blue-500"/>
          </div>

          <div className="mb-4">
            <label className="block font-medium">Message:</label>
            <textarea ref={messageRef} className="w-full p-3 bg-white border border-gray-600 rounded-lg focus:ring focus:ring-blue-500" rows="4"></textarea>
          </div>

          <motion.button 
            type="submit" 
            className="w-full py-3 text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transform transition-all hover:scale-105"
            whileHover={{ y: -3 }}
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}