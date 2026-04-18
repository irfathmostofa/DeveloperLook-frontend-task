"use client";

import { useState, ReactNode, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Logo } from "@/images/logo";

export default function Navigation(): ReactNode {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = ["Expertises", "Work", "About", "Contact"];

  // Hide navbar on scroll down
  useEffect(() => {
    const controlNavigation = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavigation);
    return () => window.removeEventListener("scroll", controlNavigation);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 px-10 right-0 z-50  "
        >
          <div className="max-w-full !px-6  mx-auto  lg:px-8 h-16 flex items-center justify-between">
            {/* Logo */}

            <Logo />

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
              <div className="flex gap-1  items-center bg-white rounded-md px-2">
                {navItems.map((item) => (
                  <Link
                    key={item}
                    href="#"
                    className="relative px-3! py-1!  text-sm font-medium rounded-md overflow-hidden group"
                  >
                    {/* Orange top border */}

                    {/* Orange gradient - slides up first */}
                    <span className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 rounded-md transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />

                    {/* Black - slides up second (delayed) */}
                    <span className="absolute inset-0 bg-gray-900 rounded-md transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out delay-75" />

                    {/* Text */}
                    <span className="relative z-10 text-gray-700 group-hover:text-white transition-colors duration-200">
                      {item}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Button - Get Results CTA */}
            <div className="hidden md:flex items-center shrink-0">
              <Link
                href="#"
                className="group relative px-5  rounded-md bg-[#fcb8fa]  transition-all duration-300 hover:-rotate-5 "
              >
                <div className="flex items-center gap-2 p-1.5!">
                  <span className="text-sm font-semibold text-gray-900">
                    Get Results
                  </span>
                  <span className="text-sm px-2! py-1! bg-white rounded-md">
                    🔥
                  </span>
                </div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex flex-col gap-1.5 w-8 h-6 justify-center items-center"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={isMenuOpen ? { rotate: 45, y: 6 } : {}}
                className="w-5 h-0.5 bg-gray-900 rounded-full transition-colors"
              />
              <motion.span
                animate={isMenuOpen ? { opacity: 0 } : {}}
                className="w-5 h-0.5 bg-gray-900 rounded-full transition-colors"
              />
              <motion.span
                animate={isMenuOpen ? { rotate: -45, y: -6 } : {}}
                className="w-5 h-0.5 bg-gray-900 rounded-full transition-colors"
              />
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="md:hidden absolute top-16 left-4 right-4 bg-white rounded-2xl shadow-xl border border-gray-100"
              >
                <div className="p-4 flex flex-col gap-1">
                  {navItems.map((item) => (
                    <Link
                      key={item}
                      href="#"
                      onClick={() => setIsMenuOpen(false)}
                      className="py-3 px-4 rounded-xl text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200 font-medium"
                    >
                      {item}
                    </Link>
                  ))}

                  <div className="h-px bg-gray-100 my-2" />

                  <Link
                    href="#"
                    onClick={() => setIsMenuOpen(false)}
                    className="mt-1 px-4 py-3 bg-[#fcb8fa] rounded-xl font-semibold flex justify-between items-center text-white"
                  >
                    Get Results <span>🔥</span>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
