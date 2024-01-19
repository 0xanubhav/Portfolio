"use client";

import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -20,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        // viewport={{ once:true }}
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-fc5b1.appspot.com/o/WhatsApp%20Image%202024-01-09%20at%2018.52.39_ec1ef55f.jpg?alt=media&token=b5b2174f-c9f8-4c80-83c6-3ca5c7c45f90"
        className="-mb-20 md:mb-0 w-54 h-54 flex-shrink-0 rounded-full object-cover md:rounded-lg mid:w-56 mid:h-96 xl:w-[450px] xl:h-[550px]"
      />
      {/* image in about */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duartion: 1.6,
        }}
        className="space-y-10 px-0 md:px-10"
      >
        <h4 className=" mt-20 text-4xl font-mono font-semi-bold">
          {" "}
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className=" md:text-md lg:text-lg text-base px-10 sm:text-sm">
          Hello there! I am a passionate individual with a pursuit of personal
          and professional growth.Embracing a growth mindset has been a
          cornerstone of my journey, propelling me to continually seek new
          challenges and expand my horizons.I thrive on turning knowledge into
          action. Learning is not just about accumulating information for
          me—it&apos;s about applying that knowledge to create positive change.
          As a proactive problem solver, I approach challenges with a strategic
          mindset, breaking down complex issues into manageable components and
          developing innovative solutions. I understand that calculated risks
          are essential for growth, and I am not afraid to step outside my
          comfort zone to explore new opportunities.Overall, I am a dynamic
          individual who thrives on challenges. My blend of a growth mindset,
          proactive problem-solving, out-of-the-box thinking, risk-taking, and
          tech-savviness positions me as someone who can make a meaningful
          impact in any endeavor I undertake.
        </p>
      </motion.div>
    </div>
  );
}
