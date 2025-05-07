import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <motion.footer
      className="relative z-10 bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white pt-20 pb-12 px-6 mt-24 rounded-t-[3rem] overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.6)]"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Starfield background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute animate-pulse w-[200%] h-[200%] bg-[radial-gradient(#3b82f633_1px,transparent_1px)] bg-[length:20px_20px] opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 text-center space-y-12 px-4">
        {/* Glowing Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-light tracking-wide text-white drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]"
          whileHover={{ scale: 1.05 }}
        >
          Together, We Craft Digital Futures
        </motion.h2>

        {/* Mini bio with border-glass */}
        <motion.div
          className="max-w-2xl mx-auto p-6 md:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md text-gray-300 shadow-inner shadow-blue-500/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-md leading-relaxed">
            I'm Gowrishankar, a full-stack enthusiast who believes in meaningful design and intentional code. Let's build products that people not only use—but love.
          </p>
        </motion.div>

        {/* Pulsating CTA ring */}
        <motion.div
          className="flex justify-center items-center relative"
          animate={{
            boxShadow: [
              '0 0 0px rgba(59,130,246, 0.5)',
              '0 0 25px rgba(59,130,246, 0.8)',
              '0 0 0px rgba(59,130,246, 0.5)',
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <span
            className="relative z-10 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full font-medium transition duration-300 shadow-lg cursor-pointer"
            onClick={openModal}
          >
            Let’s Talk
          </span>
        </motion.div>

        {/* Socials with icons */}
        <div className="flex justify-center gap-10 mt-10 flex-wrap">
          {[
            {
              icon: <FaWhatsapp size={24} />,
              name: 'WhatsApp',
              href: 'https://wa.me/917358039616',
            },
            {
              icon: <FaLinkedin size={24} />,
              name: 'LinkedIn',
              href: 'https://www.linkedin.com/in/poeage/',
            },
            {
              icon: <FaInstagram size={24} />,
              name: 'Instagram',
              href: 'https://www.instagram.com/poeage_com?igsh=a3lncmZoZ21lZXVl',
            },
          ].map((item, idx) => (
            <motion.a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 text-blue-300 hover:text-white bg-white/5 border border-blue-400/20 rounded-2xl transition-all duration-300 hover:bg-blue-500/10 shadow-lg hover:shadow-blue-600/40"
              whileHover={{ scale: 1.1, rotateY: 15 }}
              style={{
                textShadow: '0 0 10px rgba(59,130,246,0.7)',
              }}
            >
              {item.icon} <span>{item.name}</span>
            </motion.a>
          ))}
        </div>

        {/* Footer bottom */}
        <p className="text-xs text-gray-500 mt-12 tracking-wide">
          &copy; {new Date().getFullYear()} Gowrishankar — Designed & developed with curiosity & caffeine.
        </p>
      </div>

      {/* Contact Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <motion.div
            className="bg-white text-black p-8 rounded-lg max-w-lg w-full shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-semibold text-center mb-4">Get in Touch</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  className="w-full p-3 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full p-3 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Message</label>
                <textarea
                  className="w-full p-3 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  rows="4"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                >
                  Send Message
                </button>
              </div>
            </form>
            <button
              className="absolute top-2 right-2 text-gray-500"
              onClick={closeModal}
            >
              ×
            </button>
          </motion.div>
        </div>
      )}
    </motion.footer>
  );
}
