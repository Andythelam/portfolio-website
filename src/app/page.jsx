'use client';

import Image from 'next/image';
import {motion} from 'framer-motion';
import {Canvas} from '@react-three/fiber';
import {Experience} from '@/components/Experience';
import { Skills } from '@/components/Skills';

const Homepage = () => {
  return (
    <motion.div
      className='h-full'
      initial={{y: '-200vh'}}
      animate={{y: '0%'}}
      transition={{duration: 1}}
    >
      <div className='h-full xlg:w-3/4 mx-auto flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
        {/* IMAGE CONTAINER */}
        <div className='h-1/2 lg:h-full lg:w-1/2'>
          {/* <Image src='/anime-pic.png' alt='' fill className='object-contain' /> */}
          <Canvas
            shadows
            camera={{position: [0, 2, 5], fov: 21}}
            gl={{alpha: true}}
          >
            {/* Adds color to the background */}
            {/* <color attach='background' args={['#ececec']} /> */}
            <Experience />
          </Canvas>
        </div>
        {/* TEXT CONTAINER */}
        <div className='h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center'>
          {/* TITLE */}
          <h1 className='text-4xl md:text-6xl font-bold lg:pt-0 md:pt-16 pt-60'>

            Hi, I'm Andy
          </h1>
          {/* DESC */}
          <p className='md:text-xl'>
            I'm a software engineer who gets fired up by tough challenges and loves finding clean and innovative solutions!
          </p>
          <Skills />
          {/* BUTTONS */}
          {/* <div className="w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View My Work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              Contact Me
            </button>
          </div> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
