'use client';
import {motion, useScroll, useTransform} from 'framer-motion';
import {useRef} from 'react';
import {CarouselItem} from '@/components/CarouselItem';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


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

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: {max: 4000, min: 2000},
    items: 4,
  },
  desktop: {
    breakpoint: {max: 2000, min: 1250},
    items: 3,
  },
  tablet: {
    breakpoint: {max: 1250, min: 900},
    items: 2,
  },
  mobile: {
    breakpoint: {max: 900, min: 0},
    items: 1,
  },
};

const PortfolioPage = () => {
  const ref = useRef();

  return (
    <motion.div
      className='h-full'
      initial={{y: '-200vh'}}
      animate={{y: '0%'}}
      transition={{duration: 1}}
    >
      <div className='flex justify-center items-center mx-auto px-6' ref={ref}>
        <div className=''>
          {/* Title */}
          <div className='text-5xl text-center py-4'>Projects</div>
          {/* Carousel */}
          <div className='grid w-5/6 mx-auto'>
            <Carousel
              swipeable={true}
              draggable={false}
              showDots={true}
              infinite={true}
              responsive={responsive}
              // ssr={true}
              keyBoardControl={true}
              customTransition='all .5'
              transitionDuration={500}
              // autoPlay={true}
              // autoPlaySpeed={1000}
              // centerMode={true}
              // containerClass="relative"
              // removeArrowOnDeviceType={['tablet', 'mobile']}
              // sliderClass='mx-auto'
              dotListClass='custom-dot-list-style'
              // itemClass='carousel-item-padding-40-px'
              renderDotsOutside={true}
              // focusOnSelect={true}
            >
              {cards.map((card) => (
                <CarouselItem card={card} key={card.id} />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
