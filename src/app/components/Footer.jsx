import React from "react";
import {motion} from "framer-motion";
import Link from "next/link";

const MotionLink= motion(Link);

const Footer = () => {
  return (
    <footer className="footer border border-[#33353F] z-10 border-t-[#33353F] border-l-transparent border-r-transparent">
      <div className="flex lg:py-8 md:py-8 container flex-wrap items-center justify-between mx-auto px-4 py-2">
        <p className="text-white">	&#169; 2024 All rights reserved.</p>
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
    </footer>
  );
};
// 5
export default Footer;
