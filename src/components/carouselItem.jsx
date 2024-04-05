import React from 'react';

export const CarouselItem = () => {
  const cards = [
    {
      id: '1',
      title: 'FlexWise',
      tags: ['JavaScript', 'SQL', 'JWT', 'Password Hashing', 'Testing'],
      description:
        'Save money on health expenses by calculating your optimal FSA contribution!',
      picture: '/flexwise.png',
      codeLink: 
      siteLink: 
    },
    {
      id: '2',
      title: 'Rendez View',
      tags: ['JavaScript', 'API', 'SQL', 'React', 'Material UI'],
      description:
        "Find everyone's availabilities without having to create an account",
      picture: '/rendezview.png',
    },
    {
      id: '3',
      title: 'Feo Fig',
      tags: ['Typescript', 'React', 'AWS', 'Docker', 'Puppeteer'],
      description:
        'Optimize your frontend with fast, easy, and reusable configurations',
      picture: '/feofig.png',
    },
  ];

  return (
    <div className='carousel flex overflow-x-auto snap-x snap-mandatory'>
      {cards.map((card) => (
        <div
          key={card.id}
          className='snap-center shrink-0 first:ml-5 last:mr-5 w-96 h-[30rem] mx-2 my-4 bg-white rounded-lg shadow-md flex flex-col'
        >
          <div className='h-2/5 p-3'>
            <img
              src={card.picture}
              alt={card.title}
              className='w-full h-full object-cover rounded-t-lg'
            />
          </div>
          <div className='flex-grow p-4 flex flex-col justify-between'>
            <div>
              <h2 className='font-bold text-xl mb-2'>{card.title}</h2>
              <p className='text-gray-800 text-sm'>{card.description}</p>
            </div>
            <div className='flex flex-wrap gap-2'>
              {card.tags.map((tag, index) => (
                <span
                  key={index}
                  className='bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800'
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className='flex gap-4'>
              <button className='bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-l'>
                Code
              </button>
              <button className='bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-r'>
                Live View
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
