import React, { useState } from "react";
import logo from '../Asset/logo.png';
import { motion } from "framer-motion";
import { FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <motion.footer
      className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white pt-20 pb-12 px-6 mt-24 rounded-t-[3rem] overflow-hidden"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-full h-full bg-[radial-gradient(#3b82f633_1px,transparent_1px)] bg-[length:20px_20px] opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center space-y-12 px-4 relative z-10">
        <motion.h2 className="text-4xl font-bold drop-shadow-md">Together, We Craft Digital Futures</motion.h2>

        <motion.div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md">
          <img src={logo} alt="Poeage Corporation" className="h-20 w-56 mx-auto mb-4" />
          <h2 className="text-3xl font-bold">Poeage Corporation Pvt. Ltd.</h2>
          <p className="text-gray-400 mt-2">Leading IT solutions for your business growth.</p>
        </motion.div>

        <div className="flex justify-center gap-10 mt-10">
          {[{icon: <FaWhatsapp />, name: "WhatsApp", href: "https://wa.me/917358039616"}, {icon: <FaLinkedin />, name: "LinkedIn", href: "https://www.linkedin.com/in/poeage/"}, {icon: <FaInstagram />, name: "Instagram", href: "https://www.instagram.com/poeage_com?igsh=a3lncmZoZ21lZXVl"}].map((item, idx) => (
            <motion.a key={idx} href={item.href} className="flex items-center gap-2 text-blue-300 hover:text-white">
              {item.icon} <span>{item.name}</span>
            </motion.a>
          ))}
        </div>

        <p className="text-xs text-gray-500 mt-12">&copy; {new Date().getFullYear()} Poeage Corporation Pvt. Ltd. All rights reserved.</p>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <motion.div className="bg-white text-black p-8 rounded-lg max-w-lg">
            <h2 className="text-2xl font-semibold text-center mb-4">Get in Touch</h2>
            <form>
              <input type="text" placeholder="Name" className="w-full mb-3 p-3 border rounded" />
              <input type="email" placeholder="Email" className="w-full mb-3 p-3 border rounded" />
              <textarea placeholder="Message" className="w-full mb-3 p-3 border rounded"></textarea>
              <button className="bg-blue-600 text-white px-6 py-2 rounded">Send Message</button>
            </form>
            <button className="absolute top-2 right-2" onClick={closeModal}>×</button>
          </motion.div>
        </div>
      )}
    </motion.footer>
  );
};

export default Footer;