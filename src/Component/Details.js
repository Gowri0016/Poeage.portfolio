import React from 'react';
import GU from '../Asset/GU Datalogic.jpeg'
import Lux from '../Asset/Luxurya.jpeg'

export default function Details() {
  const projects = [ 
    {
      title: 'GU Datalogic',
      image: GU,
      description: 'This is a one of Stsrtup Company in Sakthiyamanglam.',
    },
    {
      title:'Luxyrya Tours',
      image:Lux,
      description:'This is one of tuors Pakeage.',
      link:''
    }
  ];
  return (
    <div className="container mx-auto p-4">

<h1 className="text-3xl font-bold text-center mb-6 hover:text-blue-600">Porojects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">

        {projects.map((project,index) => (

          <div key={index} className="border rounded-lg overflow-hidden shadow-lg">

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