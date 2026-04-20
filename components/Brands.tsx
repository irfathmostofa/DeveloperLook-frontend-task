"use client";

import { Brand, brands } from "@/data/Brand";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function Brands(): ReactNode {
  // Triplicate brands for even smoother loop
  const displayBrands: Brand[] = [...brands, ...brands, ...brands];

  return (
    <section className="py-15! ">
      <div className="max-w-full! mx-auto!">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12!"
        >
          <h2 className="text-4xl md:text-5xl max-w-100 text-[#161616] font-bold px-8!">
            These brands got hyped.
          </h2>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: [0, -33.33 * brands.length] }}
            transition={{
              duration: 5, // Changed from 20 to 12 for faster speed
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
            className="flex gap-4! py-5!"
            style={{ width: "max-content" }}
          >
            {displayBrands.map((brand, index) => (
              <motion.div
                key={`${brand.id}-${index}`}
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0 h-70 w-70 border border-gray-400 flex items-center justify-center px-6 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer"
                onMouseEnter={(e) => {
                  // Pause animation on hover
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    parent.style.animationPlayState = "paused";
                  }
                }}
                onMouseLeave={(e) => {
                  // Resume animation on hover leave
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    parent.style.animationPlayState = "running";
                  }
                }}
              >
                <img
                  src={brand.logoUrl}
                  alt={`${brand.name} logo`}
                  className="max-h-100 max-w-full object-contain transition-all duration-300"
                  loading="lazy"
                  draggable={false}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Fade Edges */}
        </div>
        <hr className=" mx-8! text-gray-300 mt-20! mb-40!" />
      </div>
    </section>
  );
}
