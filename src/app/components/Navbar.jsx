"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import {motion} from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
// import {SunIcon,MoonIcon} from "./icons"
import Image from "next/image";
import SunIcon  from '../../../public/svgs/Sun.svg';
import MoonIcon from '../../../public/svgs/Moon.svg';


const MotionLink= motion(Link);

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
  {
    title: "Articles",
    path: "/articles"
  }
];

const Navbar = () => {
  const [mode,setMode]= useThemeSwitcher();
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto bg-slate-400 border border-[#33353F] top-0 left-0 right-0 z-10 dark:bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
        {/*  Below is code for centerd logo... */}
        <div className="absolute left-[50%] translate-x-[-50%]"> 
        <MotionLink
          href={"/"}
          className="text-2xl md:text-5xl text-white font-bold w-14 h-14 bg-[#708090] flex items-center justify-center rounded-full"
          whileHover={{
            // scale:1.2,
            backgroundColor:["#708090","#EA4335","#FBBC05","#34A853","#4285F4"],
            transition:{duration:1,repeat:Infinity}
          }}
        >
            <img src="/images/logo.png" />
        </MotionLink>
        </div>
        <button onClick={()=>setMode(mode==="dark" ? "light" : "dark")} 
        className={`text-2xl md:text-5xl text-white font-bold w-14 h-14 bg-slate-500 flex items-center justify-center rounded-full
        ${mode==="light" ? "bg-slate-500 text-white" : "bg-slate-500 text-black"}`}
        >
              {mode==="dark" ? <Image src={MoonIcon} alt="Sun Icon" className={"fill-black"}/> : <Image src={SunIcon} alt="Moon Icon" className={"fill-black"}/>  }
        </button>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
