import React from 'react';
import { motion } from 'framer-motion';
import { 
  MdOutlineSmartToy, MdQueryStats, MdOutlineDesignServices, MdWeb,
  MdMobileFriendly,
} from 'react-icons/md';
import { BsGraphUpArrow, BsSpeedometer2 } from 'react-icons/bs';
import { RiInstagramLine, RiLightbulbFlashLine } from 'react-icons/ri';
import { FaRobot, FaShoppingCart } from 'react-icons/fa';

const services = [
  {
    icon: <MdOutlineSmartToy className="text-blue-600 text-4xl mb-4 mx-auto" />,
    title: 'AI Integration & Automation',
    desc: 'Empower your business with machine learning models and custom automation that save time and drive smarter decisions.',
    isUnique: true,
  },
  {
    icon: <FaRobot className="text-blue-600 text-4xl mb-4 mx-auto" />,
    title: 'AI Customized App & Web Solutions',
    desc: 'Tailored AI-powered applications and web platforms designed to boost efficiency and personalize user experiences.',
    isUnique: true,
  },
  {
    icon: <MdWeb className="text-blue-600 text-4xl mb-4 mx-auto" />,
    title: 'Modern Web Development',
    desc: 'Crafting responsive, fast, and scalable websites using the latest technologies and best practices.',
    isUnique: true,
  },
  {
    icon: <MdMobileFriendly className="text-blue-600 text-4xl mb-4 mx-auto" />,
    title: 'Mobile & Web App Development',
    desc: 'Design and build sleek, user-friendly mobile and web applications tailored to your business needs.',
    isUnique: true,
  },
  {
    icon: <MdOutlineDesignServices className="text-blue-600 text-4xl mb-4 mx-auto" />,
    title: 'Logo Design & Branding',
    desc: 'Craft visually striking, meaningful logos that reflect your brand’s story and make a lasting first impression across platforms.',
    isUnique: true,
  },
  {
    icon: <FaShoppingCart className="text-blue-600 text-4xl mb-4 mx-auto" />,
    title: 'E-commerce Development',
    desc: 'Build scalable and secure online stores with seamless shopping experiences and payment integrations.',
    isUnique: true,
  },
  {
    icon: <RiLightbulbFlashLine className="text-blue-600 text-4xl mb-4 mx-auto" />,
    title: 'Creative & Innovative Projects',
    desc: 'Bring your visionary ideas to life with cutting-edge solutions crafted to disrupt and inspire your industry.',
    isUnique: true,
  },
  {
    icon: <MdQueryStats className="text-blue-600 text-4xl mb-4 mx-auto" />,
    title: 'Data-Driven Intelligence',
    desc: 'Unlock powerful insights from your data with tailored dashboards, analytics pipelines, and predictive algorithms.',
  },
  {
    icon: <BsGraphUpArrow className="text-blue-600 text-4xl mb-4 mx-auto" />,
    title: 'Performance Marketing',
    desc: 'Run results-oriented campaigns that focus on ROI — from Google Ads to influencer outreach and email funnels.',
  },
  {
    icon: <MdOutlineDesignServices className="text-blue-600 text-4xl mb-4 mx-auto" />,
    title: 'UX-Centric Design',
    desc: 'Design interfaces that are not only beautiful but also functional, fast, and user-first — across all platforms.',
  },
  {
    icon: <BsSpeedometer2 className="text-blue-600 text-4xl mb-4 mx-auto" />,
    title: 'SEO & Web Optimization',
    desc: 'Climb search rankings with a smart combination of keyword strategy, technical audits, and speed optimization.',
  },
  {
    icon: <RiInstagramLine className="text-blue-600 text-4xl mb-4 mx-auto" />,
    title: 'Social Media Growth',
    desc: 'Build and manage engaging social campaigns that speak your brand’s voice and connect with the right audience.',
  },
];

// Animation variants for the card
const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: { 
    y: 0, 
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.8
    }
  }
};

// Pulse animation for the badge
const pulse = {
  animate: {
    scale: [1, 1.1, 1],
    transition: { repeat: Infinity, duration: 2, ease: "easeInOut" }
  }
};

export default function Services() {
  return (
    <section className="bg-gradient-to-br from-white to-blue-50 py-20 px-4 md:px-32">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-light text-gray-900 hover:text-blue-700 transition duration-300">
          Expert Services Tailored to You
        </h2>
        <p className="mt-4 text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
          From intelligent systems to compelling design, I offer comprehensive solutions that turn ideas into digital products with lasting value.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`relative bg-white text-blue-800 text-center w-full max-w-xs p-6 rounded-2xl shadow-md hover:shadow-xl cursor-pointer
              transition-transform duration-300 hover:scale-105
              ${service.isUnique ? 
                "transform perspective-1000 rotate-x-2 rotate-y-2 border-2 border-blue-600 shadow-[0_20px_50px_rgba(30,64,175,0.3)] before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-blue-100 before:to-transparent before:opacity-70 before:blur-lg" 
                : ""
              }`}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
            whileHover={{ rotateX: 5, rotateY: 5 }}
          >
            {service.isUnique && (
              <motion.span
                className="absolute top-2 right-2 bg-blue-700 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-sm select-none"
                animate="animate"
                variants={pulse}
              >
                3D Featured
              </motion.span>
            )}
            {service.icon}
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-sm text-gray-700">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}