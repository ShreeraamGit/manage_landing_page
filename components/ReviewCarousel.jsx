'use client';

import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import { reviews } from '../constants';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ReviewCarousel = () => {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 2,
    speed: 500,
  };

  return (
    <div className="relative overflow-hidden h-[26rem]">
      <Slider {...settings}>
        {reviews.map((items) => (
          <div key={items.name} className="h-[30rem] w-[70rem] p-14">
            <div className="border bg-slate-50 rounded-md flex gap-0 flex-col justify-center items-center">
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
              <div className="">
                <h1 className="text-center text-[20px] font-extrabold">
                  {items.name}
                </h1>
                <p className="text-center text-[#9c9aa6] font-light p-10">
                  {items.review}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewCarousel;
