"use client";

import { useState, ReactNode, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Logo } from "@/images/logo";

export default function Navigation(): ReactNode {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
          className="fixed top-0 left-0 px-10 right-0 z-50"
        >
          <div className="max-w-full px-7! mx-auto h-21 flex items-center justify-between">
            {/* Logo */}
            <Logo className="h-14 z-50!" />

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
              <div className="flex gap-0.5! items-center bg-white rounded-lg p-1!">
                {["Expertises", "Work", "About", "Contact"].map((item) => (
                  <Link
                    key={item}
                    href="#"
                    className="relative px-3! py-1.5! text-sm font-medium rounded-md overflow-hidden group"
                  >
                    {/* Orange gradient - slides up first */}
                    <span className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 rounded-md transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />

                    {/* Black - slides up second (delayed) */}
                    <span className="absolute inset-0 bg-gray-900 rounded-md transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out delay-75" />

                    {/* Text */}
                    <span className="relative z-10 text-[12px] text-[#161616]! font-semibold group-hover:text-white! transition-colors duration-200">
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
                className="group relative px-5 rounded-md bg-[#fcb8fa] transition-all duration-300 hover:-rotate-5"
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
              className={`md:hidden flex flex-col z-50! gap-1.5 w-8 h-6 ${isMenuOpen ? "bg-white" : "bg-[#fcb8fa]"} rounded p-2! justify-center items-center`}
              aria-label="Toggle menu"
            >
              <motion.span
                animate={
                  isMenuOpen ? { rotate: 40, y: 6 } : { rotate: 0, y: 0 }
                }
                className="w-5 h-0.5 bg-gray-900 rounded-full transition-colors"
              />

              <motion.span
                animate={
                  isMenuOpen ? { rotate: -40, y: -6 } : { rotate: 0, y: 0 }
                }
                className="w-5 h-0.5 bg-gray-900 rounded-full transition-colors"
              />
            </button>
          </div>

          {/* Mobile Menu - Full Screen */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="md:hidden fixed inset-0 top-2! mx-2! rounded bg-[#fcb8fa] z-40! flex flex-col items-center justify-between p-8 pt-16"
              >
                {/* Navigation Items */}
                <div className="flex flex-col gap-4 mt-30! items-center w-full">
                  {["Expertises", "Work", "About", "Contact"].map((item) => (
                    <Link
                      key={item}
                      href="#"
                      className="relative px-3! bg-white py-1.5! text-sm font-medium rounded-md overflow-hidden group"
                    >
                      {/* Orange gradient - slides up first */}
                      <span className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 rounded-md transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />

                      {/* Black - slides up second (delayed) */}
                      <span className="absolute inset-0 bg-gray-900 rounded-md transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out delay-75" />

                      {/* Text */}
                      <span className="relative z-10 text-[20px] text-[#161616]! font-semibold group-hover:text-white! transition-colors duration-200">
                        {item}
                      </span>
                    </Link>
                  ))}
                </div>

                {/* Get Results Button */}
                <Link
                  href="#"
                  className="group relative px-5 bg-[#161616] rounded-md  transition-all duration-300 hover:-rotate-5"
                >
                  <div className="flex items-center gap-2 p-1.5!">
                    <span className="text-sm font-semibold text-white">
                      Get Results
                    </span>
                    <span className="text-sm px-2! py-1! bg-white rounded-md">
                      🔥
                    </span>
                  </div>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
