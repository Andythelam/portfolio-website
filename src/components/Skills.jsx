import React from 'react';
import {motion, useInView} from 'framer-motion';
import {useRef} from 'react';

export const Skills = () => {

  const skills = [
    'JavaScript',
    'TypeScript',
    'Python',
    'Pandas',
    'React.js',
    'Three.js',
    'Next.js',
    'Redux',
    'SCSS',
    'Tailwind CSS',
    'MongoDB',
    'PostgreSQL',
    'Node.js',
    'Express.js',
    'Webpack',
    'Docker',
    'AWS',
    'Git',
    'Github',
    'Jest',
    'Puppeteer',
  ];

  return (
    <div className='flex flex-col gap-12 justify-center mt-8'>
      {/* SKILL TITLE */}
      {/* <motion.h1
        initial={{x: '-300px'}}
        animate={isSkillRefInView ? {x: 0} : {}}
        transition={{delay: 0.2}}
        className='font-bold text-2xl'
      >
        SKILLS
      </motion.h1> */}
      {/* SKILL LIST */}
      <div className='flex gap-4 flex-wrap'
      >
        {skills.map((skill) => (
          <div
            key={skill}
            className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};
