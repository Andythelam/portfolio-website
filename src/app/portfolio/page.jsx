'use client';
import {motion, useScroll, useTransform} from 'framer-motion';
import {useRef} from 'react';
import {CarouselItem} from '@/components/CarouselItem';

const cards = [
  {
    id: '1',
    title: 'Feo Fig',
    tags: ['Typescript', 'React', 'AWS', 'Docker', 'Puppeteer'],
    description:
      'Optimize your frontend with fast, easy, and reusable configurations.',
    picture: '/images/feofig.png',
    codeLink: 'https://github.com/oslabs-beta/feofig',
    siteLink: 'http://feofig.com',
  },
  {
    id: '2',
    title: 'Rendez View',
    tags: ['JavaScript', 'API', 'SQL', 'React', 'Material UI'],
    description:
      "Find everyone's availabilities without having to create an account.",
    picture: '/images/rendezview.png',
    codeLink: 'https://github.com/RendezView/RendezView',
    siteLink: 'https://rendezview.vercel.app/',
  },
  {
    id: '3',
    title: 'FlexWise',
    tags: ['JavaScript', 'SQL', 'JWT', 'Testing', 'BCrypt'],
    description:
      'Save money on health expenses by calculating your optimal FSA contribution!',
    picture: '/images/flexwise.png',
    codeLink: 'https://github.com/Danger-Noodless/FSA',
    siteLink: 'https://flexwise.vercel.app/',
  },
  {
    id: '4',
    title: 'My Website',
    tags: ['JavaScript', 'Next.js', 'React', 'Three.js', 'Blender'],
    description: "This website that you're seeing right now",
    picture: '/images/portfolio.png',
    codeLink: 'https://github.com/Andythelam/portfolio-website',
    siteLink: 'https://andythelam.com/',
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
      <div className='flex justify-center items-center mx-auto px-6 w-full' ref={ref}>
        <div className='w-full'>
          {/* Title */}
          <div className='text-5xl text-center py-8'>Projects</div>
          {/* Carousel */}
          <div className='flex justify-center flex-wrap gap-x-10 gap-y-10 mx-auto'>
            {cards.map((card) => (
              <CarouselItem card={card} key={card.id} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
