'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { CarouselProps } from '@/interfaces/components/ui/carousel';
import wordings from '@/wordings';

const Carousel = ({ pictures }: CarouselProps) => {
  const { carousel } = wordings;
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((!currentIndex ? pictures.length - 1 : currentIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === pictures.length - 1 ? 0 :currentIndex + 1);
  };

  return (
    <div className="relative 2xl:h-800 lg:h-600 md:h-96 h-64">
      <div className="relative h-full">
        <Image
          fill={true}
          className="object-fill w-full h-full transition-transform duration-700 ease-in-out transform"
          src={pictures[currentIndex].url}
          alt={pictures[currentIndex].title}
        />
      </div>
      <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <FiChevronLeft className="text-white text-2xl" />
        <span className="hidden">{carousel.prev}</span>
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <FiChevronRight className="text-white text-2xl" />
        <span className="hidden">{carousel.next}</span>
      </button>
    </div>
  );
};

export default Carousel;
