"use client";

import { motion, Variants } from "framer-motion";
import { useState, ReactNode } from "react";

interface ExpertiseItem {
  number: string;
  title: string;
  description: string;
  video: string;
  color: string;
  link: string;
}

const expertiseData: ExpertiseItem[] = [
  {
    number: "01",
    title: "Social strategy",
    description:
      "Slimme strategie. Sterke start. We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken.",
    video: "https://gethyped.b-cdn.net/MD/MD%20Loop%20Schaken.mp4",
    color: "from-blue-500 to-blue-600",
    link: "/expertises/social-strategie",
  },
  {
    number: "02",
    title: "Content creation",
    description:
      "Content die opvalt en raakt. We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt. Creatief, snel en energiek. Altijd met het doel voor ogen.",
    video: "https://gethyped.b-cdn.net/Expertises/Loop%20BTS%20comp.mp4",
    color: "from-pink-500 to-pink-600",
    link: "/expertises/content-creatie",
  },
  {
    number: "03",
    title: "Activation",
    description:
      "Zichtbaar waar en wanneer het telt. De juiste content verdient het om gezien te worden. We verspreiden de content waar jouw doelgroep is. Zo raakt jouw merk de juiste mensen.",
    video: "https://gethyped.b-cdn.net/Over%20de%20Top/overdetop-loop.mp4",
    color: "from-green-500 to-green-600",
    link: "/expertises/activatie",
  },
  {
    number: "04",
    title: "Data",
    description:
      "Inzichten die impact maken. We duiken in de cijfers om te snappen wat écht werkt. En sturen jouw content scherp bij.",
    video: "https://gethyped.b-cdn.net/Expertises/Data%20comp.mp4",
    color: "from-blue-500 to-cyan-600",
    link: "/expertises/data",
  },
];

export default function Expertise(): ReactNode {
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

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      id="expertises"
      className="py-24 px-6 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold">Expertise</h2>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {expertiseData.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative bg-gray-100 rounded-xl p-6 cursor-pointer overflow-hidden"
            >
              {/* Card Background - Top Border */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`}
              />

              {/* Content */}
              <div className="relative z-10">
                <motion.div
                  animate={{ opacity: hoveredIndex === index ? 0 : 1 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <h3 className="text-4xl font-bold text-pink-500">
                    {item.number}
                  </h3>
                  <h4 className="text-2xl font-bold text-gray-900">
                    {item.title}
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  <motion.a
                    whileHover={{ x: 5 }}
                    href={item.link}
                    className="inline-flex items-center gap-1 text-pink-500 font-semibold text-sm hover:gap-2 transition-all"
                  >
                    Meer over {item.title.toLowerCase()}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </motion.a>
                </motion.div>

                {/* Video on Hover */}
                <motion.div
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    src={item.video}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
