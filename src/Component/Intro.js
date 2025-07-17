import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaCogs, FaUserFriends, FaClock, FaHandshake } from 'react-icons/fa';

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

  const testimonials = [
    {
      name: 'ShankarMahadev',
      role: 'Luxurya Tours',
      feedback: 'Partnering with Poeage transformed our digital presence. Their team understood our vision perfectly and delivered a solution that was both elegant and effective. From design to deployment, every step was smooth and professional. We now have a platform that truly reflects the Luxurya experience — premium, reliable, and customer-first.',
    },
    {
      name: 'Preethika',
      role: 'Student Team, Sri Krishna College of Engineering',
      feedback: 'Collaborating with Poeage on our weather web application project was an incredible learning experience. Their deep technical expertise and creative guidance helped us build a solution that was not only functional but also user-friendly and visually appealing. Thanks to their support, our project stood out and performed flawlessly — beyond what we imagined possible.',
    },
    {
      name: 'Shreenithy',
      role: 'Student Team, Sri Krishna College of Engineering',
      feedback: 'As part of our college project at Sri Krishanka College of Engineering, we needed a fully functional crowdfunding application — and Poeage delivered beyond expectations. Their technical expertise and creative input helped us build a scalable, user-friendly platform that impressed both our faculty and peers. It turned our academic idea into a real-world solution.',
    },
  ];

  return (
    <div className="bg-white px-4 md:px-32">
      {/* Intro Section */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl mt-20 md:text-5xl font-light text-gray-900 hover:text-blue-700 transition duration-300">
          Let's Build Something Great Together
        </h1>
        <p className="mt-6 text-base md:text-lg text-gray-700 leading-relaxed">
          Welcome to <span className="text-blue-600 font-semibold">Poeage</span> — your launchpad for digital innovation.
        </p>
      </motion.div>

      {/* Why Me Section */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-light text-gray-900 hover:text-blue-700 transition duration-300">
          What Sets Me Apart
        </h2>
        <p className="mt-4 text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
          Every client has a unique vision. My role is to bring it to life — through thoughtful design, clean development, and unwavering support.
        </p>
      </motion.div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 mb-24 justify-items-center">
        {features.map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-white w-full max-w-xs rounded-3xl shadow-xl text-center p-6"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold text-blue-700 mb-2">{item.title}</h3>
            <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Innovation Focus Section */}
      <motion.div
        className="max-w-3xl mx-auto text-center px-6 mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 hover:text-blue-700 transition duration-300">
          Driving Innovation — Always One Step Ahead
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 italic">
          In a world where technology never stands still, neither do we.
        </p>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed font-semibold">
          Join forces with us to unlock fresh possibilities, future-proof your digital assets, and spark transformation that lasts.
        </p>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div
        className="max-w-6xl mx-auto mb-24 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-light text-gray-900 text-center mb-12 hover:text-blue-700 transition duration-300">
          What Our Clients Say
        </h2>

        <div className="overflow-x-auto md:overflow-visible">
          <div className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 md:w-full w-max">
            {testimonials.map(({ name, role, feedback }, idx) => (
              <motion.div
                key={idx}
                className="min-w-[280px] md:min-w-0 bg-white rounded-2xl p-6 shadow-md border border-blue-100 flex-shrink-0"
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-700 italic mb-4">"{feedback}"</p>
                <h4 className="text-blue-700 font-semibold">{name}</h4>
                <p className="text-gray-500 text-sm">{role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>


      {/* Call to Action Section */}
      <motion.div
        className="bg-gradient-to-r from-cyan-400 to-blue-800 py-16 text-white text-center rounded-xl max-w-4xl mx-auto px-6 mb-20"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-semibold mb-6">Ready to Elevate Your Digital Presence?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Contact us today and let’s start crafting your next big success story.
        </p>
        <a
          href="Contact"
          className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
        >
          Get in Touch
        </a>
      </motion.div>
    </div>
  );
}
