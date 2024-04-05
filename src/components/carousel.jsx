import React from 'react';
import { CarouselItem } from './CarouselItem';

export const Carousel = ({ cards }) => {
  return (
    <div className='carousel flex overflow-x-auto snap-x snap-mandatory'>
      {cards.map((card) => (
        <CarouselItem key={card.id} card={card} />
      ))}
    </div>
  );
};
