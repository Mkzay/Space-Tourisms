"use client";

import { useState } from "react";
import Image from "next/image";
import destinationInfo from "@/public/assets/data/destinations";

const Destination = () => {
  const [selectedDestination, setSelectedDestination] = useState("moon");

  const handleDestinationChange = (destination) => {
    setSelectedDestination(destination);
  };

  const currentDestination = destinationInfo[selectedDestination];

  return (
    <section className="font-barlow flex flex-col justify-between pt-24 pb-10 sm:pt-44 bg-[url(/assets/destination/background-destination-mobile.jpg)] sm:bg-[url(/assets/destination/background-destination-tablet.jpg)] lg:flex-row lg:px-36 lg:h-screen lg:bg-[url(/assets/destination/background-destination-desktop.jpg)] bg-no-repeat bg-cover lg:bg-auto">
      <div className="flex flex-col items-center justify-center gap-8">
        <h1 className="pages_h1">
          <span className="pages_span">01</span> Pick your destination
        </h1>
        <div className="rotating-globe">
          <Image
            src={`/assets/destination/image-${selectedDestination}.webp`}
            alt={currentDestination.title}
            width={200}
            height={200}
            className="w-[170px] h-[170px] md:w-[300px] md:h-[300px] "
          />
        </div>
      </div>

      <div className="flex flex-col items-center lg:items-start text-white mt-8 lg:mt-0">
        <div className="flex space-x-4 mb-8">
          {Object.keys(destinationInfo).map((destination) => (
            <button
              key={destination}
              onClick={() => handleDestinationChange(destination)}
              className={`uppercase text-sm tracking-widest pb-2 border-b-2 sm:text-base ${
                selectedDestination === destination
                  ? "border-white"
                  : "border-transparent hover:border-white/50"
              }`}
            >
              {destinationInfo[destination].title}
            </button>
          ))}
        </div>

        <h2 className="font-bellefair text-[56px] md:text-[80px] lg:text-6xl uppercase mb-4">
          {currentDestination.title}
        </h2>
        <p className="pages_p">{currentDestination.information}</p>

        <div className="w-full h-[1px] bg-[#383B4B] mb-8"></div>

        <div className="flex flex-col sm:flex-row justify-between sm:justify-center sm:gap-20 lg:items-start lg:justify-start w-full">
          <div className="text-center sm:text-left mb-8 sm:mb-0">
            <p className="text-[#D0D6F9] text-sm mb-2">AVG. DISTANCE</p>
            <p className="text-[28px] uppercase">
              {currentDestination.distance}
            </p>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-[#D0D6F9] text-sm mb-2">EST. TRAVEL TIME</p>
            <p className="text-[28px] uppercase">{currentDestination.time}</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .rotating-globe {
          animation: rotate 20s linear infinite;
          transform-style: preserve-3d;
          transition: animation-duration 0.5s ease;
        }

        .rotating-globe:hover {
          animation-duration: 5s;
        }
      `}</style>
    </section>
  );
};

export default Destination;
