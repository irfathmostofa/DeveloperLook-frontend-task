"use client";

import { motion, Variants } from "framer-motion";
import { useState, ReactNode } from "react";

interface PortfolioItem {
  title: string;
  brand: string;
  description: string;
  video: string;
  bgColor: string;
  link: string;
}

const portfolioData: PortfolioItem[] = [
  {
    title: "Van nul naar vol, binnen 3 weken",
    brand: "Bullit",
    description:
      "Voor Bullit vertaalden we cultuur en energie naar social-first shorts met resultaat.",
    video: "https://gethyped.b-cdn.net/Bullit/Bullit%20%7C%20Loop.mp4",
    bgColor: "from-red-500 to-red-600",
    link: "/work/bullit",
  },
  {
    title: "Zacht in smaak, sterk in beeld",
    brand: "Roasta",
    description:
      "Met to-the-point visuals brengen we de pure smaak van Jamaica over.",
    video: "https://gethyped.b-cdn.net/Roasta/roasta-loop.mp4",
    bgColor: "from-blue-500 to-blue-600",
    link: "/work/roasta",
  },
  {
    title: "Content die écht smaakt (en raakt)",
    brand: "Loco",
    description: "Voor Loco vertaalden we sfeer naar shorts die werken.",
    video: "https://gethyped.b-cdn.net/Loco/loco-bites-loop.mp4",
    bgColor: "from-orange-500 to-pink-500",
    link: "/work/loco-loco",
  },
];

export default function Portfolio(): ReactNode {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="work" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <strong>Content dat scoort.</strong>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Wij vertellen jouw verhaal. Op een manier die écht past bij jouw
            doelgroep. Met creatieve content die werkt en het verschil maakt.
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#work"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 border-2 border-gray-900 text-gray-900 font-semibold rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            Bekijk al ons werk
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 22 21"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11.283 20.918L9.145 18.8L15.549 12.396H-0.009V9.303h15.549L9.145 2.91l2.138-2.128L21.351 10.85z"
              />
            </svg>
          </motion.a>
        </motion.div>

        {/* Portfolio Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {portfolioData.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-square"
            >
              {/* Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.bgColor}`}
              />

              {/* Video - Shows on hover */}
              <motion.video
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                autoPlay
                muted
                loop
                playsInline
                src={item.video}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Content Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-8">
                <motion.div
                  animate={{
                    y: hoveredIndex === index ? 0 : 20,
                    opacity: hoveredIndex === index ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.brand}
                  </div>
                </motion.div>
              </div>

              {/* Arrow Icon */}
              <motion.div
                animate={{
                  rotate: hoveredIndex === index ? 0 : -45,
                  opacity: hoveredIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16l-4-4m0 0l4-4m-4 4h18"
                  />
                </svg>
              </motion.div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
