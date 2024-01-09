'use client';


import { motion } from 'framer-motion';
import React from 'react'
import ExperienceCard from '../components/ExperienceCard';


type Props = {}

function Experience({}: Props) {
  return (
    <motion.div
    initial={{
      opacity:0
    }}
    whileInView={{
      opacity:1
    }}
    transition={{
      duartion:1.6,
    }}   
    className='flex flex-col relative h-screen overflow-hidden text-center text-lft  md:text-left md:flex-row px-10 justify-evenly max-w-full mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Work Experience
        </h3>


        <div className=''>
          {/* /* tailwind used for cards w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 */}
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
          </div>
      </motion.div>
  )
}

export default Experience