"use client";

import { useState } from "react";
import Image from "next/image";
import technologyInfo from "@/public/assets/data/technology";

const Technology = () => {
  const [selectedTechnology, setselectedTechnology] = useState(1);

  const handleTechnologyChange = (technology) => {
    setselectedTechnology(technology);
  };

  const currentTechnology = technologyInfo[selectedTechnology];

  return (
    <section className="lg:items-start font-barlow flex flex-col pt-24 pb-10 sm:pt-44 bg-[url(/assets/technology/background-technology-mobile.jpg)] sm:bg-[url(/assets/technology/background-technology-tablet.jpg)] lg:pl-36 lg:pr-0 lg:gap-10 h-screen lg:bg-[url(/assets/technology/background-technology-desktop.jpg)] bg-no-repeat bg-cover lg:bg-auto">
      <div className="flex flex-col items-center justify-center lg:justify-start mb-8">
        <h1 className="pages_h1">
          <span className="pages_span">03</span> Pick your technology
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row-reverse lg:justify-between lg:items-center lg:gap-32">
        {/* Image Section */}
        <div className="w-full lg:max-w-lg">
          <Image
            src={`/assets/technology/image-${selectedTechnology}.jpg`}
            alt={currentTechnology.id}
            width={1000}
            height={1000}
            className="w-full h-auto lg:w-11/12 lg:h-[300px]"
          />
        </div>

        {/* Text and Button Section */}
        <div className="flex flex-col items-center lg:items-start text-white mt-8 lg:mt-0 lg:max-w-lg lg:flex-row lg:gap-8">
          {/* Button Group */}
          <div className="flex items-center justify-center lg:justify-start space-x-5 mb-8 lg:space-x-0 lg:space-y-6 lg:flex-col">
            {Object.keys(technologyInfo).map((technology) => (
              <button
                key={technology}
                onClick={() => handleTechnologyChange(technology)}
                className={`uppercase text-base tracking-widest font-bellefair border border-white rounded-full w-10 h-10 flex items-center justify-center sm:text-base lg:w-14 lg:h-14 ${
                  selectedTechnology === parseInt(technology)
                    ? "bg-white text-black"
                    : "hover:border-white/50 text-white"
                }`}
              >
                {technologyInfo[technology].id}
              </button>
            ))}
          </div>

          {/* Technology Details */}
          <div className="flex items-center justify-center flex-col lg:items-start">
            <h1 className="text-sm md:text-base text-blue">THE TERMINOLOGY…</h1>
            <h2 className="font-bellefair text-2xl md:text-[40px] md:pt-2 lg:text-5xl uppercase mb-4">
              {currentTechnology.title}
            </h2>
            <p className="pages_p text-center lg:text-left">
              {currentTechnology.information}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
