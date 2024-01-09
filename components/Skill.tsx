"use client";

import { motion } from "framer-motion";
import React from "react";
type Props = {
  directionLeft?: boolean;
  url: string;
  per: number;
};

function Skill({ directionLeft, url, per }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? 200 : -200,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{ duration: 1 }}
        src={url}
        className="rounded-full border border-gray-500 object-cover w-24 h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-[#f5f5f5] h-24 w-24  rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl text-black opacity-100">{per}%</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
