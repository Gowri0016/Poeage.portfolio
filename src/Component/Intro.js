import React from 'react'

import Exp from '../Asset/Expricence.png'
import Pro from '../Asset/products.png'
import Apo from '../Asset/Approch.png'
import Del from '../Asset/timing.png'
import Sup from '../Asset/support.png'

export default function Intro() {
  return (
    <div>

    <div className="text-1.5xl h-auto md:h-80 mx-4 md:mx-64 mt-28 z-10">
      <h1 className="text-3xl md:text-8xl font-extralight hover:text-blue-700 mt-6">Welcome to Portfolio</h1>
      <p className="mt-6 md:mt-16 text-sm md:text-base">
        Hi, I hope you're doing well. I am <span className="text-blue-600">Gowri Shankar</span> and I’m a web developer
        and <span className="text-blue-600">I run a company and have successfully completed two projects.</span> I help businesses
        create engaging visuals, user-friendly websites, etc. to stand out and connect with their audience. I'd love the opportunity
        to collaborate with you on your upcoming projects. If you have any design needs or ideas you'd like to explore, feel free to reach out.
      </p>
      </div>
    

    <div className="text-1.5xl h-auto md:h-80 mx-4 md:mx-64 mt-10">
      <h1 className=" flex justify-center relative bottom-5 font-extralight text-3xl md:text-4xl hover:text-blue-700 mt-6">Why Choose Us</h1>
    </div>
      <div className="relative z-10 bottom-2 md:bottom-44 m-2 flex flex-wrap justify-center gap-8 md:gap-14 px-4">

              <div className="w-full sm:w-64 md:w-72 lg:w-1/4 text-black bg-white font-semibold text-center p-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
              <img className="w-16 h-16 mx-auto mb-4" src={Exp} alt={Exp}></img>
                <p className="text-xl mb-2 text-blue-700">Experience</p>
                <p className="text-sm text-gray-700">Experience: With years of industry expertise, we deliver innovative IT solutions that empower businesses to grow. Our team has hands-on experience across various domains, ensuring the best outcomes.
                </p>
              </div>

              <div className="w-full sm:w-64 md:w-72 lg:w-1/4 text-black bg-white font-semibold text-center p-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
              <img className="w-16 h-16 mx-auto mb-4" src={Pro} alt={Pro} ></img>
                <p className="text-xl mb-2 text-blue-700">Products</p>
                <p className="text-sm text-gray-700"> Products: We offer cutting-edge products designed to streamline operations and enhance performance. From software solutions to cloud services, our products are tailored to meet unique business needs. </p>
              </div>

              <div className="w-full sm:w-64 md:w-72 lg:w-1/4 text-black bg-white font-semibold text-center p-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
              <img className="w-16 h-16 mx-auto mb-4" src={Apo} alt={Apo}></img>
                <p className="text-xl mb-2 text-blue-700">Approach</p>
                <p className="text-sm text-gray-700"> Approach: Our approach is customer-centric, focusing on understanding your challenges and providing personalized solutions. We prioritize collaboration and transparency to ensure success.</p>
              </div>
              
              <div className="w-full sm:w-64 md:w-72 lg:w-1/4 text-black bg-white font-semibold text-center p-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
              <img className="w-16 h-16 mx-auto mb-4" src={Del} alt={Del} ></img>
              <p className="text-xl mb-2 text-blue-700">Delivery</p>
                <p className="text-sm text-gray-700"> Delivery: Timely delivery is a key aspect of our services. We ensure your projects are completed on time with high-quality results, keeping your business ahead of the curve.</p>
              </div>
              
              <div className="w-full sm:w-64 md:w-72 lg:w-1/4 text-black bg-white font-semibold text-center p-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
                <img className="w-16 h-16 mx-auto mb-4" src={Sup} alt={Sup} ></img>
                <p className="text-xl mb-2 text-blue-700">Support</p>
                <p className="text-sm text-gray-700"> Support: Our dedicated support team is available 24/7, ensuring smooth operation and quick resolution of any issues. We stand by our customers at every stage of the journey. </p>
              </div>
</div>


    </div>

  )}
