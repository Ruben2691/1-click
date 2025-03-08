"use client";

import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Particles from "./particles";
import Highlighter, { HighlighterItem } from "./highlighter";

import CarouselImg01 from "@/public/images/carousel-icon-01.svg";
import CarouselImg02 from "@/public/images/carousel-icon-02.svg";
import CarouselImg03 from "@/public/images/carousel-icon-03.svg";
import CarouselImg04 from "@/public/images/carousel-icon-04.svg";

import Swiper, { Navigation } from "swiper";
import "swiper/swiper.min.css";
Swiper.use([Navigation]);

const phases = [
  {
    title: "Phase 1: Assessment & Stakeholder Engagement",
    description: [
      "Facilitate Idea Surgery brainstorming sessions to develop creative solutions.",
      "Conduct a SWOT analysis to evaluate strengths, weaknesses, opportunities, and threats.",
      "Conduct focus groups and targeted surveys with board members, members, and key stakeholders.",
      "Identify critical membership needs and growth opportunities.",
    ],
    img: CarouselImg01,
  },
  {
    title: "Phase 2: Strategic Framework Development",
    description: [
      "Define 1, 3, and 5-year strategic priorities aligned with your mission and goals.",
      "Develop implementation plans to expand and diversify your audience.",
      "Establish measurable success indicators to track progress over time.",
      "Strengthen engagement strategy, ensuring admins and contributors have clear roles, responsibilities, and opportunities for leadership development.",
    ],
    img: CarouselImg02,
  },
  {
    title: "Phase 3: Implementation Planning",
    description: [
      "Create workable action plans with measurable milestones and performance indicators.",
      "Develop membership engagement strategies to strengthen participation and retention.",
      "Integrate a capacity-building framework to ensure the plan remains effective as you evolve.",
      "Provide a detailed timeline and budget for implementation.",
    ],
    img: CarouselImg03,
  },
  {
    title: "Phase 4: Evaluation & Sustainability",
    description: [
      "Establish a performance measurement framework to track impact and outcomes.",
      "Integrate ongoing assessment tools for long-term adaptability that includes feedback from the stakeholders.",
      "Provide a resource sustainability plan to ensure continued growth and financial stability.",
    ],
    img: CarouselImg04,
  },
];

// Subcomponent for each phase card with show more/less functionality and smooth transitions
interface Phase {
  title: string;
  description: string[];
  img: StaticImageData;
}

const PhaseCard = ({ phase, swiperInitialized }: { phase: Phase; swiperInitialized: boolean }) => {
  const [expanded, setExpanded] = useState(false);

  // Adjust these values as needed for your design:
  const closedMinHeight = "min-h-[210px]";
  const expandedMinHeight = "min-h-[520px]";

  return (
    <HighlighterItem className="swiper-slide h-auto group/slide">
      <div
        className={`relative h-full ${
          expanded ? expandedMinHeight : closedMinHeight
        } bg-slate-900 rounded-[inherit] z-20 overflow-hidden p-6`}
      >
        <Particles
          className="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out"
          quantity={3}
          refresh={swiperInitialized}
        />
        <div className="flex flex-col h-full">
          <Image
            className="mb-3"
            src={phase.img}
            width={56}
            height={56}
            alt={phase.title}
          />
          <div className="font-bold text-lg mb-2 text-white">{phase.title}</div>
          {/* Description container with smooth transitions */}
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              expanded ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
            }`}
          >
            <ul className="text-slate-400 space-y-2 list-disc list-inside">
              {phase.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
        {/* Absolute positioning for the button */}
        <div className="absolute bottom-6 right-6">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-sm font-medium text-slate-300 hover:text-white transition duration-150 ease-in-out"
          >
            {expanded ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </HighlighterItem>
  );
};


export default function StrategicCarousel() {
  const [swiperInitialized, setSwiperInitialized] = useState(false);

  useEffect(() => {
    new Swiper(".stellar-carousel", {
      breakpoints: {
        320: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
      grabCursor: true,
      loop: false,
      centeredSlides: false,
      initialSlide: 0,
      spaceBetween: 24,
      navigation: {
        nextEl: ".carousel-next",
        prevEl: ".carousel-prev",
      },
    });
    setSwiperInitialized(true);
  }, []);

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20 text-center">
          <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
            Approach to Strategic Planning
          </h2>
          <h3 className="h4 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
            Traditional Strategic Planning → Vision-Driven Evolution
          </h3>
          <p className="text-lg text-slate-400">
            Instead of rigid five-year plans:
            Create space for insights and innovation to emerge.
            Move from hierarchical decision-making to collective intelligence.
            Allow big-picture ideas to unfold rather than forcing outcomes.
          </p>
        </div>

        {/* Center the carousel under the header */}
        <div className="relative mt-8">
          <div className="stellar-carousel swiper-container group flex justify-center">
            <Highlighter
              className="swiper-wrapper mx-auto"
              refresh={swiperInitialized}
            >
              {phases.map((phase, index) => (
                <PhaseCard
                  key={index}
                  phase={phase}
                  swiperInitialized={swiperInitialized}
                />
              ))}
            </Highlighter>
          </div>
        </div>

        {/* Carousel navigation arrows */}
        <div className="flex mt-8 justify-center">
          <button className="carousel-prev relative z-20 w-12 h-12 flex items-center justify-center group">
            <span className="sr-only">Previous</span>
            <svg
              className="w-4 h-4 fill-slate-500 group-hover:fill-purple-500 transition duration-150 ease-in-out"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
            </svg>
          </button>
          <button className="carousel-next relative z-20 w-12 h-12 flex items-center justify-center group">
            <span className="sr-only">Next</span>
            <svg
              className="w-4 h-4 fill-slate-500 group-hover:fill-purple-500 transition duration-150 ease-in-out"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
