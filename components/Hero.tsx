"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

export default function Hero(): ReactNode {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, rotate: 5 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        delay: 0.4 + i * 0.15,
        ease: "easeOut",
      },
    }),
  };

  const statCards: Array<{
    number: string;
    title: string;
    subtitle: string;
    video: string;
    bgColor: string;
  }> = [
    {
      number: "10M+",
      title: "Organische views",
      subtitle: "Groei door slimme content",
      video: "https://gethyped.b-cdn.net/Salontopper/Loop%20Salontopper.mp4",
      bgColor: "from-blue-400 to-blue-500",
    },
    {
      number: "30+",
      title: "Merken geholpen",
      subtitle: "Van start-up tot multinational",
      video: "https://gethyped.b-cdn.net/Petrol%20Head/petrolhead-loop.mp4",
      bgColor: "from-green-400 to-green-500",
    },
  ];

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-pink-500/20 to-orange-500/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Get{" "}
            <span className="bg-gradient-to-r from-pink-500 via-orange-500 to-pink-500 bg-clip-text text-transparent">
              Hyped
            </span>
            . Get{" "}
            <span className="bg-gradient-to-r from-pink-500 via-orange-500 to-pink-500 bg-clip-text text-transparent">
              Noticed
            </span>
            . Get{" "}
            <span className="bg-gradient-to-r from-pink-500 via-orange-500 to-pink-500 bg-clip-text text-transparent">
              Results
            </span>
            .
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-12"
          >
            Klaar met gokken op content <br />
            die niets oplevert?
          </motion.p>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 md:mt-24"
          >
            {statCards.map((card, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div
                  className={`absolute top-4 right-4 w-16 h-16 bg-gradient-to-br ${card.bgColor} rounded-lg opacity-20`}
                />
                <div className="relative">
                  <div className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent mb-2">
                    {card.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {card.title}
                  </h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full mb-3" />
                  <p className="text-gray-600">{card.subtitle}</p>
                </div>

                {/* Video Overlay */}
                <motion.div className="mt-6 rounded-lg overflow-hidden h-40 bg-gray-100">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    src={card.video}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
