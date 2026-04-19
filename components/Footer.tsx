"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Logo } from "@/images/logo";
import { ArrowBigDown } from "lucide-react";
import { Stickar } from "@/images/stickar";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  return (
    <footer
      id="contact"
      ref={footerRef}
      className="relative! rounded  text-black pt-0! bg-[#eae4d8]"
    >
      <div
        className=" mx-20! h-20! bg-[#eae4d8]"
        // style={{ clipPath: "polygon(0 0, 100% 0, 100% -20%, 0% 100%)" }}
      />
      <Logo className="h-25 absolute bottom-0 left-5" />
      {/* 2. Logo positioned on the slope */}
      <div className="relative z-10! max-w-7xl! mx-auto! px-6! ">
        {/* Main Footer Content - Changed text to black to match the screenshot */}
        <Stickar className="w-20 h-20 absolute right-30 bottom-70 animate-spin duration-100" />
        <div>
          <div className="flex justify-end ">
            {/* ... Your existing contactRef, addressRef, linksRef, etc. sections ... */}

            <div className="flex  gap-12!">
              <div className="flex flex-col justify-evenly">
                {" "}
                <div className="flex gap-0.5! items-center  rounded-lg p-1!   ">
                  {["Expertises", "Work", "About", "Contact"].map((item) => (
                    <Link
                      key={item}
                      href="#"
                      className="relative px-3! py-1.5! bg-white text-sm font-medium rounded-md overflow-hidden group"
                    >
                      {/* Orange top border */}

                      {/* Orange gradient - slides up first */}
                      <span className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 rounded-md transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />

                      {/* Black - slides up second (delayed) */}
                      <span className="absolute inset-0 bg-gray-900 rounded-md transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out delay-75" />

                      {/* Text */}
                      <span className="relative z-10 text-[12px] text-[#161616]! font-bold group-hover:text-white! transition-colors animate-bounce duration-200">
                        {item}
                      </span>
                    </Link>
                  ))}
                </div>
                <div className="flex gap-2 items-center">
                  <span>Follow Us</span>
                  <span className="bg-white p-2! rounded-full">
                    <ArrowBigDown className="w-5 h-5" />
                  </span>
                  <span className="bg-white p-2! rounded-full">
                    <ArrowBigDown className="w-5 h-5" />
                  </span>
                  <span className="bg-white p-2! rounded-full">
                    <ArrowBigDown className="w-5 h-5" />
                  </span>
                  <span className="bg-white p-2! rounded-full">
                    <ArrowBigDown className="w-5 h-5" />
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                {" "}
                {/* Note: Ensure you change text-gray-400 to text-gray-600 for better visibility on white/beige */}
                <div className="opacity-100!">
                  {" "}
                  {/* Simplified for example */}
                  <h3 className="text-lg font-bold mb-6!">Contact</h3>
                  <div className="space-y-3">
                    <p className="text-gray-600">info@gethyped.nl</p>
                    <p className="text-gray-600">+31 6 1533 7496</p>
                  </div>
                </div>
                {/* Adres */}
                <div>
                  <h3 className="text-lg font-bold ">Adres</h3>
                  <p className="text-gray-600">
                    Beltrumsestraat 6,
                    <br />
                    7141 AL Groenlo
                  </p>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="flex  justify-end  py-5!">
            {" "}
            <div className="text-xs text-gray-500 flex items-center gap-20  ">
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
  );
}
