import React from 'react';
import {motion} from 'framer-motion';

export const CarouselItem = ({card}) => {
  return (
    <motion.div
      whileHover={{scale: 1.06}}
      className='snap-center shrink-0 first:ml-5 last:mr-5 w-80 h-[32rem] mx-2 my-4 bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden'
      transition={{duration: 0.2}} 
    >
        {/* Image container with fixed height */}
        <div className='h-1/2 p-3 rounded'>
          <img
            src={card.picture}
            alt={card.title}
            className='w-full h-full object-cover rounded'
          />
        </div>

        {/* Content container*/}
        <div className='flex-grow flex flex-col p-2'>
          {/* Title section*/}
          <div>
            <h2 className='font-bold text-lg truncate text-center'>
              {card.title}
            </h2>
          </div>

          {/* Tags section  */}
          <div className='flex flex-wrap gap-1 my-2 overflow-hidden'>
            {card.tags.map((tag, index) => (
              <span
                key={index}
                className='bg-blue-100 text-blue-800 text-xs font-semibold px-1.5 py-0.5 rounded'
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Description section*/}
          <div className='h-28 overflow-hidden p-2 py-4'>
            <p className='text-gray-600 text-sm'>{card.description}</p>
          </div>

          {/* Buttons section */}
          <div className='flex justify-center gap-2 mt-4'>
            {card.codeLink && (
              <a
                href={card.codeLink}
                target='_blank'
                rel='noopener noreferrer'
                className='flex-shrink-0 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold text-xs px-4 py-2 rounded'
              >
                Code
              </a>
            )}
            {card.siteLink && (
              <a
                href={card.siteLink}
                target='_blank'
                rel='noopener noreferrer'
                className='flex-shrink-0 bg-green-500 hover:bg-green-600 text-white font-semibold text-xs px-4 py-2 rounded'
              >
                Live View
              </a>
            )}
          </div>
        </div>
    </motion.div>
  );
};
