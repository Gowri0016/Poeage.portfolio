import React, { useRef } from 'react';
import { motion } from 'framer-motion';

export default function Define() {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const message = messageRef.current.value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    // Optional: More complex email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Success feedback
    alert("Thank you, your message has been sent!");

    // Clear form
    nameRef.current.value = '';
    emailRef.current.value = '';
    messageRef.current.value = '';
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-10 bg-gradient-to-br from-white via-blue-50 to-white px-4 py-20">
      
      {/* Heading Section */}
      <motion.div
        className="text-center max-w-2xl"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl md:text-6xl font-light text-gray-900 hover:text-blue-600 transition">
          Let's Connect
        </h1>
        <p className="mt-5 text-md md:text-lg text-gray-700 leading-relaxed">
          Whether you have a project in mind or just want to say hello, I'm always open to new conversations. Drop your details and let’s start building something great together.
        </p>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        className="bg-white bg-opacity-80 backdrop-blur-lg p-8 mt-12 rounded-3xl shadow-2xl border border-gray-200 max-w-md md:max-w-lg w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        whileHover={{ scale: 1.02 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6 text-blue-800">
          Send Me a Message
        </h2>
        <form onSubmit={onSubmit}>
          <div className="mb-5">
            <label className="block mb-1 text-sm font-medium text-gray-800">Your Name</label>
            <input
              type="text"
              ref={nameRef}
              placeholder="Jane Doe"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block mb-1 text-sm font-medium text-gray-800">Email Address</label>
            <input
              type="email"
              ref={emailRef}
              placeholder="jane@example.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block mb-1 text-sm font-medium text-gray-800">Message</label>
            <textarea
              ref={messageRef}
              placeholder="Tell me about your project or idea..."
              rows="4"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
          </div>

          <motion.button
            type="submit"
            className="w-full py-3 text-white bg-blue-600 rounded-xl shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-300"
            whileHover={{ y: -2 }}
          >
            Submit Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
