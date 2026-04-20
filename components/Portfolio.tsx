"use client";

import { motion } from "framer-motion";
import { useState, ReactNode, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PortfolioData } from "@/data/portfolio";

export default function Portfolio(): ReactNode {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});

  const handleHover = (id: number, isEntering: boolean) => {
    setHoveredId(isEntering ? id : null);
    const video = videoRefs.current[id];
    if (video) {
      if (isEntering) {
        video.play();
      } else {
        video.pause();
        video.currentTime = 0;
      }
    }
  };

  return (
    <section className="py-20! px-6! lg:px-12!">
      <div className="max-w-5xl! mx-auto!">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 "
        >
          <h2 className="text-5xl  max-w-90 md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4! tracking-tight">
            Content dat scoort.
          </h2>
          <p className="text-base  md:text-lg text-[#161616] max-w-75 leading-6 font-bold mb-4!">
            Wij vertellen jouw verhaal. Op een manier die écht past bij jouw
            doelgroep. Met creatieve content die werkt en het verschil maakt.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05, rotate: -2 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center max-w-37 gap-0.5! px-0.5! py-0.5! border border-gray-900 rounded-md group hover:bg-gray-50 transition-colors "
        >
          <span className="text-sm font-semibold text-gray-900">
            Leer ons kennen
          </span>
          <span className="p-1.5! bg-gray-900 text-white rounded">
            <ArrowRight className="w-4 h-4" />
          </span>
        </motion.div>

        {/* Cards Container */}
        <div className="relative w-full h-[500px] perspective">
          <div className="absolute inset-0 flex items-end justify-center lg:justify-start gap-6 lg:gap-12">
            {PortfolioData.map((data, index) => (
              <motion.div
                key={data.id}
                onHoverStart={() => handleHover(data.id, true)}
                onHoverEnd={() => handleHover(data.id, false)}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative flex-shrink-0 w-64 md:w-72 lg:w-80 group cursor-pointer"
                style={{
                  marginBottom: `${index * 70}px`,
                }}
              >
                <Link href={data.link}>
                  {/* Card with border */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: -2 }}
                    className={`
                      relative h-110 rounded-4xl overflow-hidden
                      shadow-lg border-4 transition-all duration-300
                      ${
                        index === 0
                          ? "border-[#fa5424]!"
                          : index === 1
                            ? "border-[#0d8dff]!"
                            : "border-[#33c791]!"
                      }
                      group-hover:shadow-2xl
                    `}
                  >
                    {/* Image Background */}
                    <motion.div
                      animate={{
                        opacity: hoveredId === data.id ? 0 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={data.imageUrl}
                        alt={data.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>

                    {/* Video Overlay */}
                    <motion.video
                      ref={(el) => {
                        if (el) videoRefs.current[data.id] = el;
                      }}
                      src={data.videoUrl}
                      muted
                      loop
                      playsInline
                      animate={{
                        opacity: hoveredId === data.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Content Overlay */}
                    <div
                      className={`flex justify-end h-20  bg-gradient-to-t  rounded-tr-3xl absolute bottom-23.5  p-1! left-[16px] right-[16px] ${
                        index === 0
                          ? "from-[#fa5424] to-[#fa5424]"
                          : index === 1
                            ? "from-[#0d8dff] to-[#0d8dff]"
                            : "from-[#33c791] to-[#33c791]"
                      }`}
                      style={{
                        clipPath: "polygon(552% 367%, 93% -4%, 8% 64%)",
                      }}
                    >
                      {" "}
                      <motion.div
                        className=" w-12! h-12! bg-white rounded-full flex items-center justify-center shadow-lg"
                        whileHover={{ scale: 1.1 }}
                      >
                        <ArrowRight className="w-5 h-5 text-gray-900 -rotate-45" />
                      </motion.div>
                    </div>
                    <motion.div
                      className={`
                        absolute bottom-0 left-0 right-0 
                        bg-gradient-to-t
                        ${
                          index === 0
                            ? "from-[#fa5424] to-[#fa5424]"
                            : index === 1
                              ? "from-[#0d8dff] to-[#0d8dff]"
                              : "from-[#33c791] to-[#33c791]"
                        }
                        rounded-3xl m-4! px-6! pb-6! shadow-lg
                      `}
                    >
                      <div className="">
                        <h3 className="text-white max-w-40 font-bold text-lg md:text-xl mb-2! leading-tight line-clamp-2">
                          {data.title}
                        </h3>
                        <div className="flex items-center gap-2">
                          <span className="text-white text-xs font-bold bg-white/40 bg-opacity-30 px-3! py-1! rounded-full">
                            {data.brand}
                          </span>
                        </div>

                        {/* Arrow Icon */}
                      </div>
                    </motion.div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
