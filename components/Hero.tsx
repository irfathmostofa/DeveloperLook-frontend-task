"use client";

import { color, motion, Variants } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

export default function Hero(): ReactNode {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.3 + i * 0.1,
        ease: "easeOut",
      },
    }),
  };

  // Define the 4 cards as per your specification
  const cards = [
    {
      id: 1,
      type: "content",
      number: "10M+",
      title: "Organische views",
      subtitle: "Groei door slimme content",
      video: null,
      color: "bg-[#0d8dff]",
    },
    {
      id: 2,
      type: "video",
      number: null,
      title: null,
      subtitle: null,
      video: "https://gethyped.b-cdn.net/Salontopper/Loop%20Salontopper.mp4",
      color: null,
    },
    {
      id: 3,
      type: "content",
      number: "30+",
      title: "Merken geholpen",
      subtitle: "Van start-up tot multinational",
      video: null,
      color: "bg-[#33c791]",
    },
    {
      id: 4,
      type: "video",
      number: null,
      title: null,
      subtitle: null,
      video: "https://gethyped.b-cdn.net/Petrol%20Head/petrolhead-loop.mp4",
      color: null,
    },
  ];

  return (
    <section className="!mt-30 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000" />
      </div>

      <div className="max-w-full mx-auto relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 tracking-tight text-center sm:text-left"
          >
            Get Hyped . Get
            <br />
            Noticed . Get Results .
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 max-w-2xl mb-12! md:mb-16 text-center sm:text-left"
          >
            Klaar met gokken op content <br /> die niets oplevert?
          </motion.p>

          {/* 2x2 Grid for 4 Cards */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 mt-10 lg:grid-cols-4 gap-6 md:gap-8 max-w-full mx-auto"
          >
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                custom={index}
                variants={cardVariants}
                className="group"
              >
                {card.type === "content" ? (
                  // Content Card (Text only) - height 300px
                  <div
                    className={`
                  ${card.color}
                   backdrop-blur-sm h-[400px] rounded-2xl p-6 md:p-8 text-left shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/20 flex flex-col justify-center
                  relative 
                  `}
                  >
                    <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 absolute top-6 left-6 ">
                      {card.number}
                    </div>
                    <div className="absolute bottom-6 left-6">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1  ">
                        {card.title}
                      </h3>
                      <hr />
                      <p className="text-gray-900 text-sm">{card.subtitle}</p>
                    </div>
                  </div>
                ) : (
                  // Video Card - height 300px, no controls
                  <div className="relative h-[400px] rounded-2xl overflow-hidden bg-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      disablePictureInPicture
                      controlsList="nodownload noplaybackrate nofullscreen"
                      src={card.video || undefined}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      style={{ pointerEvents: "none" }}
                    />
                    {/* Play indicator overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center backdrop-blur-sm">
                        <div className="w-0 h-0 border-t-8 border-t-transparent border-l-14 border-l-black border-b-8 border-b-transparent ml-1" />
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
