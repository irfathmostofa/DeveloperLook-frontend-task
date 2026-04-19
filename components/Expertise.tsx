"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ExpertiseItem {
  number: string;
  title: string;
  short_description: string;
  description: string;
  video: string;
  tagline: string;
  button: string;
  btn_bg_color: string;
  card_bg_color: string;
  color: string;
  icon_bg: string;
  icon_text: string;
}

const expertiseData: ExpertiseItem[] = [
  {
    number: "01",
    title: "Social strategy",
    short_description: "Slimme strategie. Sterke start.",
    description:
      "We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt.",
    video: "https://gethyped.b-cdn.net/MD/MD%20Loop%20Schaken.mp4",
    tagline: "Expertise",
    btn_bg_color: "#fa5424",
    card_bg_color: "#FFFFFF",
    color: "#FFFFFF",
    icon_bg: "#FFFFFF",
    icon_text: "#161616",
    button: "Meer over social strategie",
  },
  {
    number: "02",
    title: "Content Creation",
    short_description: "Content die opvalt en raakt.",
    description:
      " We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt. Creatief, snel en energiek. Altijd met het doel voor ogen.",
    video: "https://gethyped.b-cdn.net/Expertises/Loop%20BTS%20comp.mp4",
    btn_bg_color: "#FFFFFF",
    card_bg_color: "#fcb8fa",
    color: "#161616",
    icon_bg: "#161616",
    icon_text: "#FFFFFF",
    tagline: "Creative Production",
    button: "Meer over Content Creation",
  },
  {
    number: "03",
    title: "Activation",
    short_description: "Zichtbaar waar en wanneer het telt.",
    description:
      "De juiste content verdient het om gezien te worden. We verspreiden de content waar jouw doelgroep is. Zo raakt jouw merk de juiste mensen.",
    video: "https://gethyped.b-cdn.net/Over%20de%20Top/overdetop-loop.mp4",
    btn_bg_color: "#FFFFFF",
    card_bg_color: "#33C791",
    color: "#161616",
    icon_bg: "#161616",
    icon_text: "#FFFFFF",
    tagline: "Multi-channel Distribution",
    button: "Meer over activation",
  },
  {
    number: "04",
    title: "Data & Insights",
    short_description: "Inzichten die impact maken.",
    description:
      "We duiken in de cijfers om te snappen wat écht werkt. En sturen jouw content scherp bij.",
    video: "https://gethyped.b-cdn.net/Expertises/Data%20comp.mp4",
    btn_bg_color: "#FFFFFF",
    card_bg_color: "#0D8DFF",
    color: "#161616",
    icon_bg: "#161616",
    icon_text: "#FFFFFF",
    tagline: "Analytics & Optimization",
    button: "Meer over data",
  },
];

export default function Expertise(): ReactNode {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const cards = cardsRef.current.filter((card) => card !== null);
    if (cards.length === 0) return;

    const lastCardST = ScrollTrigger.create({
      trigger: cards[cards.length - 1],
      start: "center center",
    });

    cards.forEach((card, index) => {
      const isLast = index === cards.length - 1;
      const scaleDown = gsap.to(card, {
        scale: isLast ? 1 : 0.9,
        duration: 0.5,
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: card,
        start: "top 5%",
        end: () => lastCardST.start,
        pin: true,
        pinSpacing: false,
        scrub: true,
        animation: scaleDown,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} id="expertises" className="py-20 px-4">
      <div className="max-w-full mx-auto space-y-12">
        {expertiseData.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            className="relative rounded-[40px]  overflow-hidden min-h-[500px] max-w-full flex flex-col justify-center"
            style={{ backgroundColor: item.card_bg_color }}
          >
            {/* Number Background */}
            <div className="absolute top-8 right-12 select-none">
              <span className="text-[80px] font-bold leading-none opacity-20">
                {item.number}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8! p-12! lg:p-20 relative z-10">
              {/* Left Side: Text Content */}
              <div className="lg:col-span-7 flex flex-col justify-center items-start">
                <span
                  style={{
                    backgroundColor:
                      item.btn_bg_color === "#fa5424" ? "#FAF4EC" : "#FFFFFF",
                  }}
                  className="px-3! py-1! rounded bg-white text-md font-medium mb-6! inline-block"
                >
                  {item.tagline}
                </span>

                <h2 className="text-6xl! text-[#161616]! font-bold mb-30! tracking-tight">
                  {item.title}
                </h2>

                <div className="max-w-[310px]">
                  <h3 className="text-[18px]! font-bold mb-4! text-[#161616]!">
                    {item.short_description}
                  </h3>
                  <p className="text-[16px]! leading-normal mb-4! text-[#161616]!">
                    {item.description}
                  </p>

                  <Link href="#" className="inline-block">
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-3 pl-2! pr-1! py-1! rounded-md transition-all duration-300"
                      style={{
                        backgroundColor: item.btn_bg_color,
                        color:
                          item.btn_bg_color === "#fa5424"
                            ? "#FFFFFF"
                            : item.color,
                      }}
                    >
                      <span className="font-bold text-sm">{item.button}</span>
                      <div
                        className="rounded-md p-2! transition-colors duration-300"
                        style={{
                          backgroundColor: item.icon_bg,
                          color: item.icon_text,
                        }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </motion.div>
                  </Link>
                </div>
              </div>

              {/* Right Side: Media Card */}
              <div className="lg:col-span-5 flex justify-end items-center">
                <div
                  className="relative w-full mt-40! max-w-[250px]! aspect-[3/4]! rounded-[30px]! border-[5px]! overflow-hidden "
                  style={{
                    borderColor:
                      item.btn_bg_color === "#fa5424"
                        ? "#fa5424"
                        : item.card_bg_color === "#FFFFFF"
                          ? "#FF5722"
                          : item.card_bg_color === "#33C791"
                            ? "#FFFFFF"
                            : "#FFFFFF",
                    transform: "rotate(2deg)",
                  }}
                >
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    src={item.video}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
