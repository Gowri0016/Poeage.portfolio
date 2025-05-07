import React from 'react';
import { FaBrain, FaCogs, FaUserFriends, FaClock, FaHandshake } from 'react-icons/fa';
import { MdOutlineSmartToy, MdQueryStats, MdOutlineDesignServices } from 'react-icons/md';
import { BsGraphUpArrow, BsSpeedometer2 } from 'react-icons/bs';
import { RiInstagramLine } from 'react-icons/ri';

export default function Intro() {
  const features = [
    {
      icon: <FaBrain className="text-blue-700 text-3xl" />,
      title: 'Deep Experience',
      desc: 'With a strong foundation in web technologies and real-world project success, I bring technical expertise and practical insight to every collaboration.',
    },
    {
      icon: <FaCogs className="text-blue-700 text-3xl" />,
      title: 'Tailored Digital Tools',
      desc: 'I build smart, scalable digital products that align with your goals — whether it’s an app, platform, or internal tool to boost productivity.',
    },
    {
      icon: <FaUserFriends className="text-blue-700 text-3xl" />,
      title: 'Human-Centered Approach',
      desc: 'Every project starts with listening. I design and develop with empathy, ensuring the final product serves real users effectively.',
    },
    {
      icon: <FaClock className="text-blue-700 text-3xl" />,
      title: 'Precision & Timeliness',
      desc: 'Time is valuable. I follow a structured workflow that ensures on-time delivery without compromising detail or performance.',
    },
    {
      icon: <FaHandshake className="text-blue-700 text-3xl" />,
      title: 'Long-Term Partnership',
      desc: 'My support doesn’t end at launch. I’m here for ongoing improvements, tech advice, and scaling your project as your needs evolve.',
    },
  ];

  const services = [
    {
      icon: <MdOutlineSmartToy className="text-blue-600 text-4xl mb-4 mx-auto" />,
      title: 'AI Integration & Automation',
      desc: 'Empower your business with machine learning models and custom automation that save time and drive smarter decisions.',
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
      icon: <MdOutlineDesignServices className="text-blue-600 text-4xl mb-4 mx-auto" />,
      title: 'Logo Design & Branding',
      desc: 'Craft visually striking, meaningful logos that reflect your brand’s story and make a lasting first impression across platforms.',
    },
    {
      icon: <RiInstagramLine className="text-blue-600 text-4xl mb-4 mx-auto" />,
      title: 'Social Media Growth',
      desc: 'Build and manage engaging social campaigns that speak your brand’s voice and connect with the right audience.',
    },
  ];

  return (
    <div className="bg-gradient-to-br from-white to-blue-50 py-20 px-4 md:px-32">
      {/* Intro Section */}
      <div className="text-center max-w-4xl mx-auto mb-20">
        <h1 className="text-4xl mt-20 md:text-6xl font-light text-gray-900 hover:text-blue-700 transition duration-300">
          Let's Build Something Great Together
        </h1>
        <p className="mt-6 text-base md:text-lg text-gray-700 leading-relaxed">
          I’m <span className="text-blue-600 font-semibold">Gowrishankar</span>, a creative developer and founder with a passion for turning bold ideas into impactful digital experiences.
        </p>
      </div>

      {/* Why Me Section */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-light text-gray-900 hover:text-blue-700 transition duration-300">
          What Sets Me Apart
        </h2>
        <p className="mt-4 text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
          Every client has a unique vision. My role is to bring it to life — through thoughtful design, clean development, and unwavering support.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10 mb-24 justify-items-center">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="bg-white w-full max-w-xs rounded-3xl shadow-xl text-center p-6 transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold text-blue-700 mb-2">{item.title}</h3>
            <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Services Section */}
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
          <div
            key={index}
            className={`relative bg-white text-blue-800 text-center w-full max-w-xs p-6 rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 ${
              service.isUnique
                ? 'transform perspective-1000 rotate-x-2 rotate-y-2 border-2 border-blue-600 shadow-[0_20px_50px_rgba(30,64,175,0.3)] before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-blue-100 before:to-transparent before:opacity-70 before:blur-lg'
                : ''
            }`}
          >
            {service.isUnique && (
              <span className="absolute top-2 right-2 bg-blue-700 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-sm">
                3D Featured
              </span>
            )}
            {service.icon}
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-sm text-gray-700">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
