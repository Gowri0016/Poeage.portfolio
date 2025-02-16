import React from 'react'

export default function Contact() {
 
    return (
      <div>

      <div className="flex items-center justify-center min-h-screen bg-white shadow-lg -mt-62">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-96">
          <h2 className="text-blue-500 text-lg font-bold mb-4">Contact Us</h2>
          <div className="">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name"/> </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your Email"/></div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"id="message"placeholder="Your Message"rows="4"/></div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Send</button>
          </div>
        </form>
      </div>
      </div>
    );
  };
