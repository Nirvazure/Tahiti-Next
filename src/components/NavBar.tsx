"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideBottom } from "@/util";

const NavbarLinks = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Studio",
    link: "studio",
  },
  {
    id: 3,
    title: "Label",
    link: "label",
  },
  {
    id: 4,
    title: "Team",
    link: "team",
  },
  {
    id: 5,
    title: "Shop",
    link: "shop",
  },
];
const Navbar = () => {
  return (
    <div className="py-5 flex justify-between items-center mx-8">
      <motion.div
        variants={slideBottom(0.2)}
        // initial="initial"
        animate="animate"
        className="py-8 container flex justify-between items-center"
      >
        <div className="flex items-center gap-1 ">
          <img
            src="https://yqymons-bank.oss-cn-beijing.aliyuncs.com/crafts/Logo.png"
            alt=""
            className="w-[60px] rounded-full p-1"
          />
          <p className="font-bold text-2xl">Nirvazure</p>
        </div>

        <div className="hidden md:block">
          <ul className="flex gap-3 xl:gap-7">
            {NavbarLinks.map((link) => {
              return (
                <li key={link.id}>
                  <a
                    className="hover:text-lime-600 uppercase text-sm xl:text-base"
                    href={link.link}
                  >
                    {link.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <button className="primary-btn">了解更多</button>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
