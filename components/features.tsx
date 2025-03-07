"use client";

import { useState } from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import Particles from "./particles";
import Illustration from "@/public/images/glow-top.svg";

const consultants = [
  {
    name: "Holly Alsop",
    position: "Grant Writing",
    summary:
      "A grant-writing expert and founder of <strong>OneClickGrants.com</strong>, Holly has over 20 years of experience of working with volunteers and serving on volunteer board, and securing funding for nonprofits. Her expertise in organizational growth and impact evaluation will be critical in crafting MESC’s roadmap.",
    img: "/images/holly-alsop.webp",
  },
  {
    name: "Wendie Veloz",
    position: "Strategic Planning",
    summary:
      "Founder of Idea Surgery Consulting, Wendie specializes in strategic planning for nonprofits and social enterprises. Her proven Idea Surgery technique empowers organizations to dissect complex challenges and develop actionable, data-driven solutions that ensure sustainability and impact.",
    img: "/images/wendie-veloz.webp",
  },
  {
    name: "Steve Galindo",
    position: "Cultural Equity",
    summary:
      "F44ounder of <strong>THESTYLEGUYDE</strong>, Steve is an artist, curator, and community advocate with a deep commitment to <strong>cultural equity and inclusivity</strong>. His experience in community engagement and advocacy will ensure that MESC’s plan is <strong>equitable and representative</strong> of its diverse membership.",
    img: "/images/steve-galindo.webp",
  },
];

export default function Features() {
  // Changed initial state to 0 so that it corresponds to the first consultant in the array
  const [tab, setTab] = useState<number>(0);

  return (
    <section>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Illustration */}
        <div
          className="absolute inset-0 -z-10 -mx-28 rounded-t-[3rem] pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10">
            <Image
              src={Illustration}
              className="max-w-none"
              width={1404}
              height={658}
              alt="Features Illustration"
            />
          </div>
        </div>

        <div className="pt-16 pb-12 md:pt-52 md:pb-20" id="consultants">
          <div>
            {/* Section content */}
            <div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-8 space-y-reverse md:space-y-0">
              {/* Content */}
              <div
                className="md:w-7/12 lg:w-1/2 order-1 md:order-none max-md:text-center"
                data-aos="fade-down"
              >
                {/* Header and description */}
                <div>
                  <div className="inline-flex font-medium bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-purple-200 pb-3">
                    Meet Our Consultants
                  </div>
                </div>
                <h3 className="h3 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-3">
                  Experts in Strategy, Funding, and Community Impact
                </h3>
                <p className="text-lg text-slate-400 mb-8">
                  Our consultants are here to help you build a security-first
                  platform while driving growth and impact. From strategic
                  planning to funding and community engagement, they bring the
                  expertise you need to succeed.
                </p>
                {/* Consultant buttons */}
                <div className="mt-8 max-w-xs max-md:mx-auto space-y-2">
                  {consultants.map((consultant, index) => (
                    <button
                      key={index}
                      onClick={() => setTab(index)}
                      className={`flex items-center text-sm font-medium text-slate-50 rounded-sm border bg-slate-800/25 w-full px-3 py-2 transition duration-150 ease-in-out hover:opacity-100 italic ${tab !== index
                        ? "border-slate-700 opacity-50"
                        : "border-purple-700 shadow-sm shadow-purple-500/25"
                        }`}
                    >
                      <span>{consultant.name} - {consultant.position}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Consultant details display */}
              <div
                className="md:w-5/12 lg:w-1/2"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="relative py-12 -mt-12">
                  {/* Particles animation */}
                  <Particles
                    className="absolute inset-0 -z-10"
                    quantity={8}
                    staticity={30}
                  />
                  <div className="flex items-center justify-center">
                    <div className="relative h-72 w-120 flex flex-col items-center text-left">
                      {/* Transition for first consultant */}
                      {consultants.map((consultant, index) => (
                        <Transition
                          key={index}
                          as="div"
                          show={tab === index}
                          className="transform transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] data-closed:absolute data-enter:data-closed:-rotate-[60deg] data-leave:data-closed:rotate-[60deg] data-closed:opacity-0 duration-700"
                          unmount={false}
                          appear={true}
                        >
                          <div>
                            <div className="w-full mb-4">
                              <img src={consultant.img} alt="" />
                            </div>
                            <div className="flex w-full gap-3 items-end">
                              <h3 className="text-3xl font-semibold text-slate-200">
                                {consultant.name}
                              </h3>
                              <h4 className="text-xl italic text-slate-200 pb-0.5">
                                {consultant.position}
                              </h4>
                            </div>
                            <p
                              className="mt-2 text-slate-400"
                              dangerouslySetInnerHTML={{
                                __html: consultant.summary,
                              }}
                            ></p>
                          </div>
                        </Transition>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* End of consultant details display */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
