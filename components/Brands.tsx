"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface Brand {
  name: string;
  id: number;
}

const brands: Brand[] = [
  { name: "Bullit Digital", id: 1 },
  { name: "Morssinkhof", id: 2 },
  { name: "Salontopper", id: 3 },
  { name: "Seesing", id: 4 },
  { name: "Graafschap College", id: 5 },
  { name: "Fides", id: 6 },
  { name: "SRHK", id: 7 },
  { name: "KNLTB", id: 8 },
  { name: "THO", id: 9 },
  { name: "De Talententuin", id: 10 },
  { name: "ZCLV", id: 11 },
];

export default function Brands(): ReactNode {
  // Duplicate brands for seamless loop
  const displayBrands: Brand[] = [...brands, ...brands];

  return (
    <section className="py-24 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            These brands got hyped.
          </h2>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: [0, -50 * brands.length] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-12 py-8"
          >
            {displayBrands.map((brand, index) => (
              <motion.div
                key={`${brand.id}-${index}`}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0 h-20 flex items-center justify-center px-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                <span className="font-semibold text-gray-700 whitespace-nowrap text-sm md:text-base">
                  {brand.name}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-100 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-100 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
