"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Logo } from "@/images/logo";
import { Stickar } from "@/images/stickar";
import { FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative bg-[#eae4d8] pt-32 pb-10 overflow-hidden"
    >
      {/* 1. The Slanted Background Shape */}
      <div
        className="absolute bottom-0 right-0 w-[70%] h-full bg-[#faf4ec] z-0"
        style={{
          clipPath: "polygon(100% 0, 100% 100%, 0% 100%, 15% 30%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10">
          {/* 2. Large Bottom-Left Logo */}
          <div className="w-1/3">
            <Logo className="w-full max-w-[300px] h-auto opacity-90" />
          </div>

          {/* 3. Navigation and Contact Info */}
          <div className="flex flex-col gap-12 items-end">
            {/* Spinning Sticker */}
            <Stickar className="w-24 h-24 absolute -top-20 right-10 animate-spin-slow" />

            <div className="flex gap-16 text-left">
              {/* Links & Socials Column */}
              <div className="flex flex-col gap-8">
                <div className="flex gap-2 bg-white p-1.5 rounded-xl shadow-sm">
                  {["Expertises", "Work", "About", "Contact"].map((item) => (
                    <Link
                      key={item}
                      href="#"
                      className="px-4 py-2 text-[13px] font-bold text-[#161616] hover:bg-black hover:text-white rounded-lg transition-all"
                    >
                      {item}
                    </Link>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <span className="font-bold text-sm">Follow us</span>
                  <div className="flex gap-2">
                    {[FaLinkedin, FaTiktok, FaInstagram, FaYoutube].map(
                      (Icon, i) => (
                        <div
                          key={i}
                          className="bg-white p-2 rounded-full shadow-sm cursor-pointer hover:scale-110 transition-transform"
                        >
                          <Icon size={18} />
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>

              {/* Address & Contact Column */}
              <div className="flex gap-12">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Contact</h3>
                  <p className="text-sm text-gray-700">info@gethyped.nl</p>
                  <p className="text-sm text-gray-700">+31 6 1533 7496</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Adres</h3>
                  <p className="text-sm text-gray-700">
                    Beltrumsestraat 6,
                    <br />
                    7141 AL Groenlo
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Bottom Bar */}
            <div className="w-full flex justify-between pt-10 text-[11px] text-gray-500 font-medium">
              <p>© 2025 Get Hyped</p>
              <div className="flex gap-8">
                <p className="hover:text-orange-600 cursor-pointer">
                  Design by Dylan
                </p>
                <p className="hover:text-orange-600 cursor-pointer">
                  Privacyvoorwaarden
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
