import React from 'react';
import GUData from '../Asset/GU Datalogic.jpeg';
import Luxurya from '../Asset/Luxurya.png';
import Weather from '../Asset/Weather.png';
import Crowid from '../Asset/Crowd.png';
import Ase from '../Asset/Ase.png';
import Arivu from '../Asset/Arivukalam.png';
import Uzhavan from '../Asset/Uzhavan.png';
import Poeage from '../Asset/Poeagehub.png';

import Port from '../Asset/Portfolio.png';

export default function Project() {
  const projects = [
    {
      id: 1,
      title: 'GU Datalogic',
      description: 'GU Datalogic delivers cutting-edge analytics and secure data solutions with real-time performance and reliability.',
      imgSrc: GUData,
      gitLink: 'https://gudatalogic.com',
      role: 'Data Intelligence Partner'
    },
    {
      id: 2,
      title: 'Luxurya',
      description: 'Your gateway to curated travel — domestic, international, educational, corporate, leisure & spiritual journeys.',
      imgSrc: Luxurya,
      gitLink: 'https://luxurya-tours.vercel.app/',
      role: 'Travel & Tour Solutions'
    },
    {
      id: 3,
      title: 'Weather App',
      description: 'Get real-time weather updates with a sleek UI, minimal clutter, and fast location-based forecasts.',
      imgSrc: Weather,
      gitLink: 'https://weather-ashy-one-76.vercel.app/',
      role: 'Live Weather Interface'
    },
    {
      id: 4,
      title: 'Crowid',
      description: 'Crowdfunding made easy — connect, contribute, and create change through a secure, transparent platform.',
      imgSrc: Crowid,
      gitLink: 'https://crowdfunding-iota-beryl.vercel.app/',
      role: 'Funding Community Hub'
    },
    {
      id: 5,
      title: 'ASE Security',
      description: 'ASE is a robust surveillance and security solution, integrating AI cameras and alert systems for institutions.',
      imgSrc: Ase,
      gitLink: 'https://www.aseprotact.com/',
      role: 'Smart Surveillance System'
    },
    {
      id: 6,
      title: 'Arivukalam',
      description: 'A complete digital education hub providing school solutions, online content, live classes and attendance tracking.',
      imgSrc: Arivu,
      gitLink: 'https://smart-ten-jet.vercel.app/',
      role: 'E-Learning Platform'
    },
    {
      id: 7,
      title: 'Uzhavan',
      description: 'A tech-driven platform connecting farmers with resources, pricing tools, weather alerts and crop analytics.',
      imgSrc: Uzhavan,
      gitLink: 'http://uzhavan-omega.vercel.app/',
      role: 'Agri-Tech Innovation'
    },
    {
      id: 8,
      title: 'Poeage Hub',
      description: 'Centralized control for Poeage solutions: manage projects, monitor analytics, and streamline operations.',
      imgSrc: Poeage,
      gitLink: 'https://poeagehub.vercel.app/',
      role: 'Enterprise Control Panel'
    },
    {
      id: 9,
      title: 'Portfolio',
      description: 'This portfolio showcases skills, animations, and responsive design with modern technologies and unique layout.',
      imgSrc: Port,
      gitLink: 'https://dassportfolio.vercel.app/',
      role: 'Personal Portfolio'
    }
  ];

  return (
    <div className="px-6 md:px-12 lg:px-20 py-20 bg-white min-h-screen">
      <h1 className="text-4xl md:text-5xl font-extralight text-black text-center mt-14 mb-16">
        Explore Our <span className="text-blue-600 font-semibold">Showcase</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative p-6 rounded-3xl bg-gradient-to-br from-white to-blue-50 shadow-2xl border border-gray-100 min-h-[540px] flex flex-col justify-between"
          >
            <img
              src={project.imgSrc}
              alt={project.title}
              className="w-full h-56 object-cover rounded-xl shadow-lg"
            />

            <div className="mt-4 flex-grow">
              <h2 className="text-2xl font-bold text-blue-900">{project.title}</h2>
              <p className="text-gray-700 mt-2 text-sm">{project.description}</p>
              <p className="mt-3 text-sm font-medium text-blue-500">
                Role: {project.role}
              </p>
            </div>

            <a
              href={project.gitLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-40 text-center mx-auto mt-6 px-5 py-2 text-white bg-gradient-to-r from-cyan-400 to-blue-800 rounded-full shadow-md transition-all duration-300 hover:scale-105"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
