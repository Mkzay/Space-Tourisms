import Link from "next/link";

const Home = () => {
  return (
    <section className="flex flex-col justify-between h-screen pt-36 pb-16 sm:pt-44 sm:pb-10 md:pb-14 bg-[url(/assets/home/background-home-mobile.jpg)] sm:bg-[url(/assets/home/background-home-tablet.jpg)] lg:flex-row lg:px-36 lg:bg-[url(/assets/home/background-home-desktop.jpg)] bg-no-repeat bg-cover lg:bg-auto">
      <div className="font-normal text-center text-blue flex flex-col items-center justify-center gap-5 sm:gap-0 lg:items-start">
        <h1 className="font-barlow text-base sm:text-xl uppercase">
          So, you want to travel
        </h1>
        <h2 className="font-bellefair text-[80px] sm:text-[150px] text-white uppercase ">
          Space
        </h2>
        <p className="font-barlow text-[15px] sm:text-base tracking-widest w-[327px] sm:w-[444px] lg:text-lg lg:text-left">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <div className="flex items-center justify-center">
        <Link
          href="/Destination"
          className="flex items-center justify-center w-[150px] h-[150px] sm:w-[242px] sm:h-[242px] bg-white rounded-full font-bellefair font-normal text-xl text-black uppercase hover:ring-[2rem] md:hover:ring-[2.5rem] lg:hover:ring-[3rem] hover:ring-blue hover:ring-opacity-10 hover:duration-700"
        >
          Explore
        </Link>
      </div>
    </section>
  );
};

export default Home;
