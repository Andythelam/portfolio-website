import React from 'react';

export const CarouselItem = ({card}) => {
  return (
    <div className='snap-center shrink-0 first:ml-5 last:mr-5 w-80 h-[30rem] mx-2 my-4 bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden'>
      {/* Image container with fixed height */}
      <div className='h-1/2'>
        <img
          src={card.picture}
          alt={card.title}
          className='w-full h-full object-cover'
        />
      </div>

      {/* Content container*/}
      <div className='flex-grow flex flex-col p-6'>
        {/* Title section*/}
        <div className='h-6'>
          <h2 className='font-bold text-lg truncate'>{card.title}</h2>
        </div>

        {/* Tags section  */}
        <div className='h-14 flex flex-wrap gap-1 my-2 overflow-hidden'>
          {card.tags.map((tag, index) => (
            <span
              key={index}
              className='bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded'
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description section*/}
        <div className='h-20 overflow-hidden'>
          <p className='text-gray-600 text-sm'>{card.description}</p>
        </div>

        {/* Buttons section */}
        <div className='flex gap-2 mt-2'>
          {card.codeLink && (
            <a
              href={card.codeLink}
              target='_blank'
              rel='noopener noreferrer'
              className='flex-shrink-0 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold text-xs px-4 py-2 rounded'
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
    </div>
  );
};
