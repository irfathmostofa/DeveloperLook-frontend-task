"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

export default function CTA(): ReactNode {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-r from-pink-500 via-orange-500 to-pink-500 overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        animate={{ y: [0, 30, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, -30, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-10 right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"
      />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-white mb-6"
        >
          Let's Get Hyped!
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xl text-white/90 mb-12"
        >
          Ben jij klaar om jouw merk te laten groeien?
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          {/* Email Button */}
          <motion.a
            href="mailto:info@gethyped.nl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-pink-500 font-semibold rounded-full hover:shadow-xl transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 22 17"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.788 16.596c-.571 0-1.059-.203-1.465-.609-.416-.406-.619-.895-.62-1.466V2.077c0-.571.203-1.059.609-1.465.407-.406.895-.609 1.465-.609h16.593c.57 0 1.058.203 1.465.609.406.406.609.895.609 1.465v12.444c0 .571-.203 1.059-.609 1.466-.406.406-.895.609-1.465.609H2.788zm8.297-7.341c.087 0 .178-.013.273-.04.095-.026.185-.065.271-.114l7.337-4.589c.138-.086.242-.194.311-.324.069-.13.104-.267.104-.411 0-.347-.147-.604-.44-.776-.293-.172-.596-.165-.907.022l-6.948 4.356-5.947-4.343c-.31-.206-.613-.198-.908.025-.293.182-.44.437-.44.765 0 .176.035.328.105.458.07.13.173.239.311.323l7.337 4.589c.086.049.176.088.27.115.094.026.185.04.302.04z"
              />
            </svg>
            Mail ons direct
          </motion.a>

          {/* Get Results Button */}
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#ffffff" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white hover:bg-white hover:text-pink-500 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 20 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.49 11.04c-.3-.41-.66-.77-1-.97-1.065-.921-2.059-.483-2.896.295-2.452 2.09-2.883 5.24-1.64 7.662.051.13.103.26.103.43 0 .288-.196.55-.457.654-.3.131-.614.053-.862-.164-.076-.066-.138-.151-.185-.24-1.478-1.865-1.714-4.55-.719-6.695-2.185 1.779-3.375 4.787-3.205 7.625.078.656.156 1.31.378 1.964.183.78.536 1.566.928 2.259 1.412 2.262 3.857 3.884 6.485 4.211 2.799.353 5.793-.055 7.938-1.99 2.393-1.782 3.231-5.264 1.999-8.254-.22-.556-.437-.977-.604-1.37-.273-.617-1.005-1.663-1.005-1.663z"
              />
            </svg>
            Get Results
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
