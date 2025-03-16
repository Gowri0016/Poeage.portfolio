import React from 'react';
import GU from '../Asset/GU Datalogic.jpeg'
// import Lux from '../Asset/Luxurya.jpeg'

export default function Details() {
  const projects = [ 
    {
      title: 'GU Datalogic',
      image: GU,
      description: 'This is a one of Stsrtup Company in Sakthiyamanglam.',
    },
  ];
  return (
    <div>

    <div className="text-1.5xl h-auto md:h-80 mx-4 md:mx-64 mt-28 z-10">
      <h1 className="text-3xl md:text-8xl font-extralight hover:text-blue-700 mt-6">Projects</h1>
      <p className="mt-6 md:mt-16 text-sm md:text-base">
        Hi, I hope you're doing well. I am <span className="text-blue-600">Gowri Shankar</span> and I’m a web developer
        and <span className="text-blue-600">I run a company and have successfully completed two projects.</span> I help businesses
        create engaging visuals, user-friendly websites, etc. to stand out and connect with their audience. I'd love the opportunity
        to collaborate with you on your upcoming projects. If you have any design needs or ideas you'd like to explore, feel free to reach out.
      </p>
    </div>

    <div className="container mx-auto p-1 transition duration-300 transform hover:scale-105"></div>

       <h1 className="text-3xl font-bold text-center mb-6 hover:text-blue-600">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">

        {projects.map((project,index) => (

          <div key={index} className="w-full md:w-full text-black bg-white font-semibold text-center p-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">

            <img src={project.image} alt={project.image} className="w-full h-48 object-cover" />

            <div className="p-4">

              <h2 className="text-xl font-semibold">{project.title}</h2>

              <p className="text-gray-700">{project.description}</p>

              <a className="text-xl font-semibold cursor-pointer" href="#">{project.link}</a>

            </div>

            </div>
            
           
))}

      </div>

    </div>

);

}