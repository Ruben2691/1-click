"use client";

import { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Particles from "./particles";

export default function DEAICommitment() {
  const bulletPoints = [
    "Facilitate inclusive engagement by ensuring broad representation in decision-making.",
    "Develop equity-focused strategies to diversify MESC’s membership and leadership.",
    "Ensure accessible and inclusive planning materials and training resources.",
    "Use data-driven evaluation tools to measure DEAI impact over time.",
  ];

  const [active, setActive] = useState(0);
  const [autorotate, setAutorotate] = useState(true);
  const autorotateTiming = 7000;

  useEffect(() => {
    if (!autorotate) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % bulletPoints.length);
    }, autorotateTiming);
    return () => clearInterval(interval);
  }, [active, autorotate, bulletPoints.length]);

  const nextBullet = () => {
    setActive((prev) => (prev + 1) % bulletPoints.length);
    setAutorotate(false);
  };

  const prevBullet = () => {
    setActive((prev) => (prev - 1 + bulletPoints.length) % bulletPoints.length);
    setAutorotate(false);
  };

  return (
    <section className="relative py-12 md:py-20">
      <div className="absolute left-1/2 -translate-x-1/2 top-0 -mt-6 -z-10 w-80 h-80">
        <Particles
          className="absolute inset-0 -z-10"
          quantity={10}
          staticity={40}
        />
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        {/* Stationary Header & Subtext */}
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60">
          Diversity, Equity, Accessibility, and Inclusion (DEAI) Commitment
        </h2>
        <p className="mt-4 text-lg text-slate-400">
          Our approach prioritizes cultural equity and accessibility in every
          step of the planning process. We will:
        </p>

        {/* Cycling Bullet Points with Fade-In Transition */}
        <div className="relative h-16 mt-8">
          {bulletPoints.map((point, index) => (
            <Transition
              key={index}
              as="div"
              show={active === index}
              enter="transition-opacity duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-600"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              unmount={false}
              appear={true}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="text-lg text-slate-400">{point}</div>
            </Transition>
          ))}
        </div>

        {/* Navigation Arrows (Back & Next) */}
        <div className="mt-4 flex justify-center gap-6">
          <button
            onClick={prevBullet}
            className="relative z-20 w-12 h-12 flex items-center justify-center group"
          >
            <span className="sr-only">Previous</span>
            <svg
              className="w-4 h-4 fill-slate-500 group-hover:fill-purple-500 transition duration-150 ease-in-out"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.7 1.3L8.1 2.7 3.8 7H16v2H3.8l4.3 4.3-1.4 1.4L0 8z" />
            </svg>
          </button>

          <button
            onClick={nextBullet}
            className="relative z-20 w-12 h-12 flex items-center justify-center group"
          >
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
