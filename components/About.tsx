"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { ReactNode } from "react";

export default function About(): ReactNode {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Main Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-12 max-w-4xl mx-auto"
          >
            Wij maken content die opvalt. Die blijft hangen. Die jouw doelgroep
            raakt en jouw merk in beweging brengt. Snel, krachtig en energiek.
          </motion.h2>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <motion.div variants={itemVariants} className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/6894757aa6dd3f84f6e463a2_Anniek%20Bril.webp"
                  alt="Team member"
                  width={500}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              {/* Animated background elements */}
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-full blur-3xl -z-10"
              />
            </motion.div>

            {/* Right Side - Text */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                We stoppen niet bij mooie plaatjes en vette beelden. We maken
                het meetbaar. Zo weet je precies wat werkt en wat niet. Nooit
                meer content zonder strategie. Nooit meer content zonder
                resultaat.
              </p>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 25px rgba(236, 72, 153, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-900 text-gray-900 font-semibold rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300"
              >
                Leer ons kennen
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
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
