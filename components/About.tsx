"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, MoveRight } from "lucide-react";
import Image from "next/image";
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

  return (
    <section className="py-24! px-2! ">
      <div className="max-w-5xl! mx-auto!">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Main Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-justify mb-12 max-w-4xl mx-auto"
          >
            Wij maken content die opvalt. Die blijft hangen. Die jouw doelgroep
            raakt en jouw merk in beweging brengt. Snel, krachtig en energiek.
          </motion.h2>

          {/* Content Grid */}
        </motion.div>
      </div>
      <div className="flex justify-between gap-30  mt-10!">
        {/* Left Side - Image */}
        <img
          src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/6894757aa6dd3f84f6e463a2_Anniek%20Bril.webp"
          alt="Team member"
          className="w-60! h-80! object-cover rounded-lg"
        />

        {/* Right Side - Text */}
        <motion.div variants={itemVariants} className="space-y-6! ">
          <p className="text-2xl text-gray-900 font-bold leading-relaxed mt-18!">
            We stoppen niet bij mooie plaatjes en
            <br /> vette beelden. We maken het meetbaar.
            <br /> Zo weet je precies wat werkt en wat niet.
            <br /> Nooit meer content zonder strategie.
            <br /> Nooit meer content zonder resultaat.
          </p>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 25px rgba(236, 72, 153, 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 border-1 transition-all duration-300 hover:-rotate-5 border-gray-900 text-gray-900 font-semibold rounded-md "
          >
            <div className="hidden md:flex items-center shrink-0">
              <Link href="#" className="group relative px-5  rounded-md   ">
                <div className="flex items-center gap-2 p-1.5!">
                  <span className="text-sm font-semibold text-gray-900">
                    Leer ons kennen
                  </span>
                  <span className="text-sm px-2! py-1! bg-gray-900 text-white rounded-md">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </div>
          </motion.button>
        </motion.div>
        <button>arrow down</button>
      </div>
    </section>
  );
}
