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
    <section className="font-barlow flex flex-col justify-between pt-24 pb-10 sm:pt-44 bg-[url(/assets/technology/background-technology-mobile.jpg)] sm:bg-[url(/assets/technology/background-technology-tablet.jpg)] lg:flex-row lg:px-36 lg:h-screen lg:bg-[url(/assets/technology/background-technology-desktop.jpg)] bg-no-repeat bg-cover lg:bg-auto">
      <div className="flex flex-col items-center justify-center gap-8">
        <h1 className="pages_h1">
          <span className="pages_span">03</span> Pick your technology
        </h1>
        <div className="w-full lg:mr-10">
          <Image
            src={`/assets/technology/image-${selectedTechnology}.jpg`}
            alt={currentTechnology.id}
            width={1000}
            height={1000}
            className="w-full h-full"
          />
        </div>
      </div>

      <div className="flex flex-col items-center lg:items-start text-white mt-8 lg:mt-0">
        <div className="flex items-center justify-center space-x-5 mb-8">
          {Object.keys(technologyInfo).map((technology) => (
            <button
              key={technology}
              onClick={() => handleTechnologyChange(technology)}
              className={`uppercase text-base tracking-widest font-bellefair border border-white rounded-full w-10 h-10 flex items-center justify-center sm:text-base ${
                selectedTechnology === technology
                  ? "bg-white text-black"
                  : "hover:border-white/50"
              }`}
            >
              {technologyInfo[technology].id}
            </button>
          ))}
        </div>
        <h1 className="text-sm md:text-base text-blue">THE TERMINOLOGY…</h1>
        <h2 className="font-bellefair text-2xl md:text-[40px] md:pt-2 lg:text-6xl uppercase mb-4">
          {currentTechnology.title}
        </h2>
        <p className="pages_p">{currentTechnology.information}</p>
      </div>
    </section>
  );
};

export default Technology;
