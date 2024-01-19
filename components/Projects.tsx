"use client";

import { motion } from "framer-motion";
import React from "react";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2];
  const proname = ["LinkedIn Clone", "Algorithm Visualizer"];
  const desc = [
    "Developed a functional LinkedIn clone using React and Redux, demonstrating strong expertise in modern web development technologies.Tools & technologies used:HTML , CSS , JAVASCRIPT , REACT , REDUX ,Google FIREBASE .Proficient in React and Redux for state management, enabling seamless user interactions and data handling. Implemented responsive design for optimal user experience across various devices.",
    "Developed an interactive algorithm visualizer, demonstrating a strong understanding of algorithms and data structures.Tools & technologies used: HTML,CSS,Javascipt.Created dynamic visual representations of various algorithms, making complex concepts easily understandable.Designed the visualizer as an educational tool to help students and professionals grasp algorithmic concepts effectively.",
  ];
  const imgurl = [
    "https://cdn3.f-cdn.com//files/download/135379179/linkedin1.png?width=780&height=401&fit=crop",
    "https://ryanleung.ca/src/img/sorting-visualizer.gif",
  ];
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col relative h-screen text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center overflow-hidden z-0 "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center justify-center h-screen flex flex-col space-y-5 items-center p-20 md:p-44"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1.2,
              }}
              src={imgurl[i]}
              alt=""
              className="max-h-xl max-w-xl rounded-md my-17"
            />
            <div className="space-y-50 px-0 md:px-10 max-w-6xl my-20">
              <motion.h4
                initial={{
                  x: -300,
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 1.2,
                }}
                className="font-semibold font-mono text-3xl"
              >
                <span className="sm:text-md">
                  Project {i + 1} of {projects.length} : {proname[i]}
                </span>
              </motion.h4>

              <p> {desc[i]}</p>
               
              
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[300px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
