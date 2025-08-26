import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaChartLine, FaProjectDiagram, FaTasks, FaCogs } from 'react-icons/fa';

export default function Dashboard() {
  const stats = [
    {
      icon: <FaUsers className="text-blue-600 text-3xl" />,
      title: 'Clients',
      value: '120+',
      desc: 'Trusted partnerships built across industries.',
    },
    {
      icon: <FaChartLine className="text-green-600 text-3xl" />,
      title: 'Growth Rate',
      value: '85%',
      desc: 'Year-over-year success in scaling projects.',
    },
    {
      icon: <FaProjectDiagram className="text-purple-600 text-3xl" />,
      title: 'Projects',
      value: '50+',
      desc: 'Successful web, mobile & enterprise solutions delivered.',
    },
    {
      icon: <FaTasks className="text-orange-600 text-3xl" />,
      title: 'Ongoing Tasks',
      value: '18',
      desc: 'Active development, support & innovation projects.',
    },
    {
      icon: <FaCogs className="text-red-600 text-3xl" />,
      title: 'Tech Stack',
      value: 'Full-Stack',
      desc: 'MERN + modern frameworks & tools.',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen px-6 md:px-20 py-14">
      {/* Dashboard Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl mt-10 md:text-5xl font-bold text-gray-900 mb-4">
          Poeage Project Dashboard
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          A snapshot of progress, clients, and innovation powering our digital solutions.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {stats.map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-white w-full max-w-sm rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 flex justify-center">{item.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
            <p className="text-3xl font-bold text-blue-700 my-2">{item.value}</p>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        className="bg-gradient-to-r from-cyan-500 to-blue-700 py-12 mt-20 rounded-2xl text-center text-white"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold mb-4">Your Vision, Our Dashboard</h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          Monitor project progress, milestones, and outcomes in one place — designed for clarity and impact.
        </p>
        <a
          href="/Contact"
          className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition"
        >
          Connect with Us
        </a>
      </motion.div>
    </div>
  );
}