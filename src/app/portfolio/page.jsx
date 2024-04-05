'use client';
import {motion, useScroll, useTransform} from 'framer-motion';
import Image from 'next/image';
import {useRef} from 'react';
import {Carousel} from '@/components/carousel';

const cards = [
  {
    id: '1',
    title: 'FlexWise',
    tags: ['JavaScript', 'SQL', 'JWT', 'Testing', 'Password Hashing'],
    description:
      'Save money on health expenses by calculating your optimal FSA contribution!',
    picture: '/flexwise.png',
    codeLink: 'https://github.com/Danger-Noodless/FSA',
    siteLink: 'https://flexwise.vercel.app/',
  },
  {
    id: '2',
    title: 'Rendez View',
    tags: ['JavaScript', 'API', 'SQL', 'React', 'Material UI'],
    description:
      "Find everyone's availabilities without having to create an account",
    picture: '/rendezview.png',
    codeLink: 'https://github.com/RendezView/RendezView',
    siteLink: 'https://rendezview.vercel.app/',
  },
  {
    id: '3',
    title: 'Feo Fig',
    tags: ['Typescript', 'React', 'AWS', 'Docker', 'Puppeteer'],
    description:
      'Optimize your frontend with fast, easy, and reusable configurations',
    picture: '/feofig.png',
    codeLink: 'https://github.com/oslabs-beta/feofig',
    siteLink: 'http://feofig.com',
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  return (
    <motion.div
      className='h-full'
      initial={{y: '-200vh'}}
      animate={{y: '0%'}}
      transition={{duration: 1}}
    >
      <div className='flex justify-center items-center mx-auto px-4' ref={ref}>
        <div className='w-screen h-[calc(100vh-6rem)] text-5xl text-center'>
          Some things I've worked on
          <Carousel cards={cards} />
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
