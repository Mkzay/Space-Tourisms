"use client";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import crewMembers from "@/public/assets/data/crew";

const Crew = () => {
  console.log(crewMembers);
  return (
    <section className="font-barlow flex flex-col gap-8 pt-24 pb-10 min-h-screen sm:pt-44 bg-[url(/assets/crew/background-crew-mobile.jpg)] sm:bg-[url(/assets/crew/background-crew-tablet.jpg)] lg:px-36 lg:bg-[url(/assets/crew/background-crew-desktop.jpg)] bg-no-repeat bg-cover lg:bg-auto">
      <div className="flex items-center justify-center lg:justify-start">
        <h1 className="pages_h1">
          <span className="pages_span">02 </span>
          Meet your crew
        </h1>
      </div>

      <Carousel
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        infiniteLoop={true}
        showArrows={false}
        className="flex items-center justify-center"
        aria-label="Crew member profiles"
      >
        {crewMembers.map((member, index) => (
          <div
            key={index}
            className="w-full flex flex-col lg:flex-row-reverse items-center justify-center lg:justify-between lg:px-0 lg:gap-10"
          >
            <div className="w-full max-w-xs items-center justify-center flex">
              <Image
                src={member.image}
                alt={`${member.name} - ${member.role}`}
                width={400}
                height={400}
                className="w-full h-auto lg:"
              />
            </div>
            <div className="w-full lg:w-1/2 text-center lg:text-left space-y-8">
              <p className="text-base text-gray-400 font-bellefair md:text-2xl lg:text-2xl">
                {member.role}
              </p>
              <h2 className="text-white text-2xl sm:text-4xl font-bellefair md:text-[40px] lg:text-[56px]">
                {member.name}
              </h2>
              <p className="text-[15px] md:text-base lg:text-xl text-blue max-w-prose mx-auto lg:mx-0">
                {member.bio}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Crew;
