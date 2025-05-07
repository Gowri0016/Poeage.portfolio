import React from 'react';
import { motion } from 'framer-motion';
import GUData from '../Asset/GU Datalogic.jpeg'
import Luxurya from '../Asset/Luxurya.png';
import Weather from '../Asset/Weather.png';
import Crowid from '../Asset/Crowd.png';

export default function Project() {
  const projects = [
    {
      id: 1,
      title: 'GU Datalogic',
      description: 'GU Datalogic is a premier data solutions provider specializing in innovative data analytics, secure data management, and real-time data processing services.',
      imgSrc: GUData,
      gitLink: 'https://gudatalogic.com',
      role: 'Innovative Data Solutions Provider'
    },
    {
      id: 2,
      title: 'Luxurya',
      description: 'We are Proud to Introduce our Worthwhile Scheme "LUXURYA TOURS". Which is Situated in COIMBATORE, BENGALURU. Our Service Scheme Comprise for Domestic, International, Inbound and Outbound Tourism, Focus on Educational Tours, Corporate Tours, Leisure Tours and Pilgrimages.',
      imgSrc: Luxurya,
      gitLink: 'https://luxurya-tours.vercel.app/',
      role: 'College & Family Tours Enquiry'
    },
    {
      id: 3,
      title: 'Weather',
      description: 'For a weather app with minimal content, focus on a clean, uncluttered interface showing the current conditions, a simple forecast for the next few days, and perhaps a weather radar map, while prioritizing speed and ease of use.',
      imgSrc: Weather,
      gitLink: 'https://weather-ashy-one-76.vercel.app/',
      role: 'Weather Checker'
    },
    {
      id: 4,
      title: 'Crowid',
      description: 'A secure and transparent crowdfunding platform that connects fundraisers with donors. It ensures seamless transactions, progress tracking, and user engagement through an intuitive interface.',
      imgSrc: Crowid,
      gitLink: 'https://crowdfunding-iota-beryl.vercel.app/',
      role: 'Crowd-Funding'
    }
  ];

  return (
    <div className="px-6 md:px-12 lg:px-20 py-20 bg-white min-h-screen">
      <h1 className="text-4xl md:text-5xl font-extralight hover:text-blue-500 text-black text-center mt-14 mb-12">Explore Our Exceptional Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="relative bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-2xl shadow-xl overflow-hidden"
            whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img 
              src={project.imgSrc} 
              alt={project.title} 
              className="w-full h-56 object-cover rounded-lg shadow-lg"
              whileHover={{ scale: 1.1 }}
            />
            <h2 className="text-2xl font-bold text-black mt-4">{project.title}</h2>
            <p className="text-black mt-2">{project.description}</p>
            <motion.p 
              className="mt-2 text-sm text-black font-semibold"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Role: {project.role}
            </motion.p>
            <motion.a
              href={project.gitLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-6 py-3 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-700 transition-transform hover:scale-110 hover:shadow-lg"
            >
              View Project
            </motion.a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
