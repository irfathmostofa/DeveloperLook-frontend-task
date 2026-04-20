"use client";
import { ArrowRight, Flame, Link, Mail } from "lucide-react";
import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";
export default function CTA(): ReactNode {
  return (
    <section className=" pt-36! pb-5! px-6! overflow-hidden">
      {/* Animated background elements */}

      <div className="max-w-full mx-auto text-center z-10">
        {/* Main Heading */}
        <h2 className="text-[80px]! md:text-6xl font-bold text-[#161616] mb-6! ">
          Let's Get Hyped!
        </h2>

        <div className="inline-block mr-3!">
          <motion.div
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-4 px-1! py-1! border border-gray-900 rounded-md group  transition-colors"
          >
            <span className="text-sm font-semibold text-gray-900">
              Mail Ons direct
            </span>
            <span className="p-1.5! bg-gray-900 text-white rounded">
              <Mail className="w-4 h-4" />
            </span>
          </motion.div>
        </div>
        <div className="inline-block ">
          <motion.div
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-4 px-1! py-1!  bg-[#fa5424]  rounded-md group transition-colors"
          >
            <span className="text-sm font-semibold text-[#FFFFFF]">
              Get Results
            </span>
            <span className=" w-7 h-7 bg-[#FFFFFF] text-[#fa5424] rounded-md">
              🔥
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
