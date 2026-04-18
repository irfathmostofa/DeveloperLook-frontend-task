"use client";

import { useState, ReactNode } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

export default function Navigation(): ReactNode {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const menuVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const menuItemVariants: Variants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
  };

  const navItems: string[] = ["Expertises", "Work", "About", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 h-20 bg-white/95 backdrop-blur-md z-50 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold">
          <div className="w-3 h-3 bg-gradient-to-br from-pink-500 via-orange-500 to-cyan-500 rounded-sm" />
          Get Hyped
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium hover:opacity-60 transition-opacity relative group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
          <button className="px-7 py-3 bg-gradient-to-r from-pink-500 via-orange-500 to-pink-500 text-white rounded-full text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
            Get Results
          </button>
        </div>

        {/* Hamburger Menu */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 w-8 h-6 justify-center items-center"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="w-full h-0.5 bg-black"
          />
          <motion.span
            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-full h-0.5 bg-black"
          />
          <motion.span
            animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="w-full h-0.5 bg-black"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial="hidden"
        animate={isMenuOpen ? "visible" : "hidden"}
        variants={menuVariants}
        className={`absolute top-20 left-0 right-0 bg-white border-b border-black/5 md:hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          {navItems.map((item, i) => (
            <motion.div
              key={item}
              custom={i}
              variants={menuItemVariants}
              initial="hidden"
              animate="visible"
            >
              <Link
                href={`#${item.toLowerCase()}`}
                className="text-lg font-medium block py-2 border-b border-black/10 last:border-b-0"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            </motion.div>
          ))}
          <button className="w-full px-7 py-3 bg-gradient-to-r from-pink-500 via-orange-500 to-pink-500 text-white rounded-full text-sm font-semibold mt-4">
            Get Results
          </button>
        </div>
      </motion.div>
    </nav>
  );
}
