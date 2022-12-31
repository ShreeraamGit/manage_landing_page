'use client';

import React from 'react';
import Image from 'next/image';
import { reviews } from '../constants';

const MobileSlider = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };
  return (
    <div>
      <div className="mt-20 block relative overflow-hidden h-[23rem] tablet:hidden">
        <div className="flex">
          {reviews.map((items, index) => (
            <div
              key={items.name}
              className={`absolute w-full h-full top-[10%] left-0 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              } transition duration-300`}
            >
              <div className="h-[20rem] rounded-md bg-gray-100 text-center flex flex-col justify-start items-center gap-3">
                <Image
                  src={items.img}
                  alt="logo"
                  priority
                  width={100}
                  height={100}
                  className="-translate-y-10"
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />
                <div className="flex flex-col gap-7">
                  <h1 className="font-extrabold text-[20px]">{items.name}</h1>
                  <p className="text-[#9c9aa6] font-light">{items.review}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-3 justify-center items-center tablet:hidden">
        {reviews.map((items, index) => (
          <button
            key={index}
            aria-label={items.name}
            type="button"
            onClick={() => {
              handleDotClick(index);
            }}
            className={`border-orange-500 border rounded-full h-3 w-3 ${
              index === currentSlide ? 'bg-orange-500' : 'bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileSlider;
