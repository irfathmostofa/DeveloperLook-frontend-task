"use client";

import { cards } from "@/data/hero";
import { motion, Variants } from "framer-motion";
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

  // Card rotation angles for each card (reduced to prevent edge clipping)
  const cardRotations = [4, 4, -2, -2]; // Reduced rotation degrees for better visibility

  // Define the 4 cards as per your specification
 

  return (
    <section className="pt-32! pb-18! px-4 sm:px-6 lg:px-8 relative overflow-x-clip overflow-y-visible min-h-screen flex items-center">
      {/* Background decorative elements */}

      <div className="max-w-full mx-auto relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[90px] lg:leading-[86px] font-bold mb-6! tracking-tight  sm:text-left text-[#161616]"
          >
            Get Hyped. Get
            <br />
            Noticed. Get Results.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl font-bold text-gray-900 max-w-2xl mt-5 mb-12! md:mb-16 sm:text-left"
          >
            Klaar met gokken op content <br /> die niets oplevert?
          </motion.p>

          {/* Container for the overlapping card effect */}
          <motion.div
            variants={itemVariants}
            className="flex flex-nowrap justify-center items-center w-full max-w-full mx-auto py-5! px-4! group/container"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                custom={index}
                variants={cardVariants}
                // className="relative w-[280px] md:w-[320px] shrink-0 transition-all duration-500 ease-out"
                style={{
                  rotate: cardRotations[index],
                  zIndex: index,
                  // Using negative margin for initial overlap
                  marginLeft: index === 0 ? 0 : "-40px",
                }}
                // This is the secret sauce:
                // When the PARENT is hovered, we shift individual cards
                whileHover={{
                  scale: 1.05,
                  rotate: 0,
                  zIndex: 50,
                  x: 0, // Reset any translation on the active card
                  marginLeft: "40px",
                  marginRight: "80px",
                  transition: { duration: 0.1 },
                }}
                // Moves cards slightly left/right when the container is hovered to "expand" the stack
                animate={{
                  x: isVisible ? 0 : 10,
                }}
                // Use Tailwind's group-hover on the container to adjust margins
                className={`relative w-[280px] md:w-[320px] shrink-0 transition-all duration-200  
        ${index !== 0 ? "group-hover/container:ml-4" : ""} 
      `}
              >
                {card.type === "content" ? (
                  <div
                    className={`${card.color} h-[400px] md:h-[450px] rounded-[40px] p-8! flex flex-col justify-between border border-white/10`}
                  >
                    <div className="text-6xl md:text-7xl font-bold text-black tracking-tighter">
                      {card.number}
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-black mb-2">
                        {card.title}
                      </h3>
                      <div className="h-[1.5px] bg-black/80 mb-3 w-full" />
                      <p className="text-black/80 text-sm md:text-base font-medium">
                        {card.subtitle}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="relative h-[400px] md:h-[450px] rounded-[40px] overflow-hidden bg-gray-200">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      src={card.video || ""}
                      className="w-full h-full object-cover"
                    />
                    {/* Subtle vignette for the video cards to match the aesthetic */}
                    <div className="absolute inset-0 bg-black/5 pointer-events-none" />
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
