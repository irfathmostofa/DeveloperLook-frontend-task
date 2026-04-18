"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

interface ExpertiseItem {
  number: string;
  title: string;
  description: string;
  video: string;
  gradient: string;
  tagline: string;
  ease?: string;
}

const expertiseData: ExpertiseItem[] = [
  {
    number: "01",
    title: "Social Strategy",
    description:
      "Slimme strategie. Sterke start. We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken.",
    video: "https://gethyped.b-cdn.net/MD/MD%20Loop%20Schaken.mp4",
    gradient: "from-blue-500 to-blue-600",
    tagline: "Strategic Planning",
  },
  {
    number: "02",
    title: "Content Creation",
    description:
      "Content die opvalt en raakt. We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt. Creatief, snel en energiek. Altijd met het doel voor ogen.",
    video: "https://gethyped.b-cdn.net/Expertises/Loop%20BTS%20comp.mp4",
    gradient: "from-pink-500 to-pink-600",
    tagline: "Creative Production",
  },
  {
    number: "03",
    title: "Activation",
    description:
      "Zichtbaar waar en wanneer het telt. De juiste content verdient het om gezien te worden. We verspreiden de content waar jouw doelgroep is. Zo raakt jouw merk de juiste mensen.",
    video: "https://gethyped.b-cdn.net/Over%20de%20Top/overdetop-loop.mp4",
    gradient: "from-green-500 to-green-600",
    tagline: "Multi-channel Distribution",
  },
  {
    number: "04",
    title: "Data & Insights",
    description:
      "Inzichten die impact maken. We duiken in de cijfers om te snappen wat écht werkt. En sturen jouw content scherp bij voor maximale resultaten.",
    video: "https://gethyped.b-cdn.net/Expertises/Data%20comp.mp4",
    gradient: "from-cyan-500 to-blue-600",
    tagline: "Analytics & Optimization",
  },
];

export default function Expertise(): ReactNode {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const spacerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = cardsRef.current.filter((card) => card !== null);
    if (cards.length === 0) return;

    const lastCardIndex = cards.length - 1;

    // Create ScrollTrigger references for first and last card
    const firstCardST = ScrollTrigger.create({
      trigger: cards[1],
      start: "center center",
    });

    const lastCardST = ScrollTrigger.create({
      trigger: cards[lastCardIndex],
      start: "center center",
    });

    // Iterate over each card
    cards.forEach((card, index) => {
      // Calculate scale based on card position (last card scale = 1, others = 0.5)
      const scale = index === lastCardIndex ? 1 : 0.85;

      const scaleDown = gsap.to(card, {
        scale: scale,
        duration: 0.5,
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: card,
        start: "top top",
        end: () => lastCardST.start,
        pin: true,
        pinSpacing: false,
        scrub: 0.5,
        animation: scaleDown,
        toggleActions: "restart none none reverse",
      });
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="expertises"
      className="relative!  overflow-hidden"
    >
      {/* Stacked Cards Container */}
      <div className="l-cards relative! z-10 max-w-7xl! mx-auto! pb-24">
        {expertiseData.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            className="c-card group relative mb-8 rounded-2xl overflow-hidden bg-white shadow-2xl"
            style={{
              transformOrigin: "center top",
              willChange: "transform",
            }}
          >
            {/* Card Content - Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] lg:min-h-[600px]">
              {/* Left Side - Description */}
              <div className="c-card__description p-8! lg:p-12 flex flex-col justify-center bg-white">
                <div className="c-card__tagline">
                  <span className="text-sm font-semibold uppercase tracking-wider text-pink-500">
                    {item.tagline}
                  </span>
                </div>

                <div className="c-card__number mt-6!">
                  <span className="text-6xl lg:text-7xl font-black bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
                    {item.number}
                  </span>
                </div>

                <h2 className="c-card__title text-3xl lg:text-4xl font-bold text-gray-900 mt-4">
                  {item.title}
                </h2>

                <p className="c-card__excerpt text-gray-600 text-base lg:text-lg leading-relaxed mt-4">
                  {item.description}
                </p>

                <div className="c-card__cta mt-8">
                  <a
                    href={`#`}
                    className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <span>Discover more</span>
                    <svg
                      className="w-5 h-5 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Right Side - Video/Media */}
              <figure className="c-card__figure relative overflow-hidden bg-gray-900 min-h-[300px] lg:min-h-full">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  src={item.video}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:bg-gradient-to-r" />

                {/* Play Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center backdrop-blur-sm">
                    <div className="w-0 h-0 border-t-12 border-t-transparent border-l-20 border-l-black border-b-12 border-b-transparent ml-1" />
                  </div>
                </div>
              </figure>
            </div>

            {/* Top Gradient Border */}
            <div
              className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            />
          </div>
        ))}
      </div>

      {/* Spacer for scroll effect */}
      <div ref={spacerRef} className="spacer h-24" />

      <style jsx>{`
        .c-card {
          position: relative;
          border-radius: 1rem;
          transform-origin: center top;
          margin-bottom: 2rem;
          margin-top: 2rem;
        }

        .c-card__figure video {
          object-fit: cover;
        }

        .spacer {
          width: 100%;
        }
      `}</style>
    </section>
  );
}
