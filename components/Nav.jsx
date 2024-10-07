"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggle = () => setIsOpen((prevState) => !prevState);

  const activeLink =
    "border-r-2 pr-20 md:pr-0 md:pb-9 md:border-r-0  md:border-b-2";
  const inactiveLink =
    "hover:border-r-2 hover:pr-20 md:hover:pr-0 md:hover:border-r-0  md:hover:border-b-2 hover:border-gray-400 md:hover:pb-9";

  const isLinkActive = (href) => pathname === href;

  return (
    <nav className="flex items-center justify-between p-5 fixed w-full top-0 md:pr-0 font-barlow z-50">
      <Link href="/" className="w-10 h-10 bg-white rounded-full">
        <Image src="/assets/logo.svg" alt="logo" width={40} height={40} />
      </Link>

      <div className="hidden h-[1px] w-[400px] relative left-12 z-20 bg-white lg:flex"></div>

      {/*Mobile Navigation*/}
      <div className="md:hidden">
        <button type="button" onClick={toggle} className="text-2xl text-white">
          <FontAwesomeIcon icon={faBars} />
        </button>
        <ul
          className={`${
            isOpen
              ? "translate-x-0  duration-300 ease-in"
              : "translate-x-[100%] duration-500 ease-out"
          } flex flex-col items-start gap-12 fixed h-screen w-[70%] top-0 right-0 pt-32 p-5 nav_background nav_text`}
        >
          <button
            type="button"
            onClick={toggle}
            className="text-2xl fixed top-10 right-10"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <li className={isLinkActive("/") ? activeLink : inactiveLink}>
            <Link href="/">
              <span className="nav_bold">00</span> Home
            </Link>
          </li>
          <li
            className={isLinkActive("/Destination") ? activeLink : inactiveLink}
          >
            <Link href="/Destination">
              <span className="nav_bold">01</span> Destination
            </Link>
          </li>
          <li className={isLinkActive("/Crew") ? activeLink : inactiveLink}>
            <Link href="/Crew">
              <span className="nav_bold">02</span> Crew
            </Link>
          </li>
          <li
            className={isLinkActive("/Technology") ? activeLink : inactiveLink}
          >
            <Link href="/Technology">
              <span className="nav_bold">03</span> Technology
            </Link>
          </li>
        </ul>
      </div>

      {/*Desktop Navigation*/}
      <ul className="hidden md:flex items-center justify-evenly nav_background nav_text md:w-[450px] lg:w-[830px] h-[96px]">
        <li>
          <Link
            href="/"
            className={isLinkActive("/") ? activeLink : inactiveLink}
          >
            <span className="nav_bold nav_display">00</span> Home
          </Link>
        </li>
        <li>
          <Link
            href="/Destination"
            className={isLinkActive("/Destination") ? activeLink : inactiveLink}
          >
            <span className="nav_bold nav_display">01</span> Destination
          </Link>
        </li>
        <li>
          <Link
            href="/Crew"
            className={isLinkActive("/Crew") ? activeLink : inactiveLink}
          >
            <span className="nav_bold nav_display">02</span> Crew
          </Link>
        </li>
        <li>
          <Link
            href="/Technology"
            className={isLinkActive("/Technology") ? activeLink : inactiveLink}
          >
            <span className="nav_bold nav_display">03</span> Technology
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
