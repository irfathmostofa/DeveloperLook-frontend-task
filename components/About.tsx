"use client";

import { motion, Variants, easeInOut } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import Link from "next/link";
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

  const arrowVariants: Variants = {
    initial: { y: 0, opacity: 1 },
    hover: {
      y: [0, 25, -25, 0],
      opacity: [1, 0, 0, 1],
      transition: {
        duration: 0.6,
        times: [0, 0.33, 0.66, 1],
        ease: easeInOut,
      },
    },
  };

  return (
    <section className="py-12! px-4! mb-30!">
      <div className="md:max-w-6xl! mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Main Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-[30px]! md:text-[50px]! text-[#161616] font-bold! text-justify mb-14! md:pl-28! md:pr-52! mx-auto! tracking-tighter md:tracking-normal! leading-12"
          >
            Wij maken content die opvalt. Die blijft hangen. Die jouw doelgroep
            raakt en jouw merk in beweging brengt. Snel, krachtig en energiek.
          </motion.h2>

          {/* Content Grid */}
        </motion.div>
      </div>{" "}
      <div className="flex flex-col md:flex-row justify-between gap-12 mt-16 items-start max-w-full!">
        {/* Left Side - Image */}
        <motion.img
          variants={itemVariants}
          src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/6894757aa6dd3f84f6e463a2_Anniek%20Bril.webp"
          alt="Team member"
          className="w-[118px]! h-[181px]!  md:w-[218px]! md:h-[281px]! object-cover rounded-lg shadow-xl"
        />

        {/* Right Side - Text */}
        <motion.div
          variants={itemVariants}
          className="md:flex-1 space-y-4! ml-40! mt-20!"
        >
          <p className="text-[22px] text-gray-900 font-bold leading-[29px]!">
            We stoppen niet bij mooie plaatjes en
            <br /> vette beelden. We maken het meetbaar.
            <br /> Zo weet je precies wat werkt en wat niet.
            <br /> Nooit meer content zonder strategie.
            <br /> Nooit meer content zonder resultaat.
          </p>

          <Link href="/contact" className="inline-block">
            <motion.div
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-4 px-3! py-1.5! border border-gray-900 rounded-md group hover:bg-gray-50 transition-colors"
            >
              <span className="text-sm font-semibold text-gray-900">
                Leer ons kennen
              </span>
              <span className="p-1 bg-gray-900 text-white rounded">
                <ArrowRight className="w-4 h-4" />
              </span>
            </motion.div>
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="hidden lg:flex items-end h-[281px] mr-20!">
          <div className="p-2!  border border-gray-900 rounded-lg text-[#FA5424] cursor-pointer overflow-hidden">
            <motion.div
              initial="initial"
              whileHover="hover"
              variants={arrowVariants}
            >
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
