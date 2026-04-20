"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Logo } from "@/images/logo";
import { ArrowBigDown } from "lucide-react";
import { Stickar } from "@/images/stickar";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { LiaLinkedin, LiaLinkedinIn } from "react-icons/lia";
import { BsLinkedin } from "react-icons/bs";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  return (
    <>
      <div className="relative mx-8!">
        {/* Background shape with clipPath only */}
        <div
          className="absolute inset-0 rounded-t-3xl! bg-[#eae4d8] -z-10"
          style={{
            clipPath: "polygon(-1608px 571px, 100% -2%, 100% 100%, 0% 100%)",
          }}
        />

        {/* Stickar */}
        <Stickar className="w-25 h-25 absolute! right-30! bottom-66! z-[100]!" />

        {/* Content wrapper - no clipPath */}
        <footer
          id="contact"
          ref={footerRef}
          className="relative! text-black min-h-80"
        >
          <Logo className="h-27 absolute bottom-0 left-2" />

          {/* Main Footer Content */}
          <div className="absolute bottom-0 right-2 px-18! z-[100]!">
            <div className="">
              <div className="flex justify-end">
                <div className="flex gap-12!">
                  <div className="flex flex-col justify-evenly">
                    <div className="flex gap-2! items-center rounded-lg p-1!">
                      {["Expertises", "Work", "About", "Contact"].map(
                        (item) => (
                          <Link
                            key={item}
                            href="#"
                            className="relative px-3! py-1.5! bg-white text-sm font-medium rounded-md overflow-hidden group"
                          >
                            {/* Orange gradient - slides up first */}
                            <span className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 rounded-md transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />

                            {/* Black - slides up second (delayed) */}
                            <span className="absolute inset-0 bg-gray-900 rounded-md transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out delay-75" />

                            {/* Text */}
                            <span className="relative z-10 text-[12px] text-[#161616]! font-bold group-hover:text-white! transition-colors animate-bounce duration-200">
                              {item}
                            </span>
                          </Link>
                        ),
                      )}
                    </div>
                    <div className="flex gap-2 items-center">
                      <span className="text-xs font-semibold"> Follow Us</span>
                      <span className="bg-white p-2! rounded-full">
                        <LiaLinkedinIn className="w-4 h-4" />
                      </span>
                      <span className="bg-white p-2! rounded-full">
                        <FaTiktok className="w-4 h-4" />
                      </span>
                      <span className="bg-white p-2! rounded-full">
                        <FaInstagram className="w-4 h-4" />
                      </span>
                      <span className="bg-white p-2! rounded-full">
                        <FaYoutube className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="opacity-100!">
                      <h3 className="text-sm font-bold">Contact</h3>
                      <div className="space-y-3 text-xs mb-4!">
                        <p className="text-[#161616]">info@gethyped.nl</p>
                        <p className="text-[#161616]">+31 6 1533 7496</p>
                      </div>
                    </div>
                    {/* Adres */}
                    <div>
                      <h3 className="text-sm font-bold">Adres</h3>
                      <p className="text-[#161616] text-xs">
                        Beltrumsestraat 6,
                        <br />
                        7141 AL Groenlo
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end py-5!">
                <div className="text-xs text-gray-500 flex items-center gap-20">
                  <p>© 2025 Get Hyped</p>
                  <p className="hover:text-[#fa5424] cursor-pointer">
                    Design by Dylan
                  </p>
                  <p className="hover:text-[#fa5424] cursor-pointer">
                    Privacyvoorwaarden
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
