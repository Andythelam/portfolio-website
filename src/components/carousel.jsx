import React from 'react';
import { CarouselItem } from './CarouselItem';

export const Carousel = ({ cards }) => {
  return (
    <div className='flex justify-center overflow-x-auto snap-x snap-mandatory gap-4'>
      {cards.map((card) => (
        <CarouselItem key={card.id} card={card} />
      ))}
    </div>
  );
};
