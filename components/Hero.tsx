"use client";

import React, { useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi ! The name is Anubhav Bajpai",
      "Guy-who-loves-Coffee.tsx",
      "<But-Loves-To-Code-More />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-x-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-fc5b1.appspot.com/o/WhatsApp%20Image%202024-01-09%20at%2018.52.39_ec1ef55f.jpg?alt=media&token=b5b2174f-c9f8-4c80-83c6-3ca5c7c45f90"
        alt=""
      />
      {/* image of heroooo         ///////////////////////////// */}
      <div className="z-20 ">
        <h2 className="text-sm uppercase text-gray-400 pb-2 tracking-[15px]">
          software engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-BlinkMacSystemFont font-semibold scroll-px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="herobutton">About</button>
          </Link>

          <Link href="#experience">
            <button className="herobutton">Experience</button>
          </Link>

          <Link href="#skills">
            <button className="herobutton">Skills</button>
          </Link>

          <Link href="#projects">
            <button className="herobutton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
