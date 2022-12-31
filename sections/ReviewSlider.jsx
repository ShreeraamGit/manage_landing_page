'use client';

import React from 'react';

import { MobileSlider, ReviewCarousel } from '../components';
import styles from '../styles';

const ReviewSlider = () => (
  <div className="">
    <div
      className={`${styles.topPaddings} ${styles.paddings} flex flex-col gap-5 relative overflow-hidden`}
    >
      <h1 className="text-[#1d1e25] text-[35px] laptop:text-[40px] desktop:text-[45px] font-extrabold text-center">
        What they've said
      </h1>
      <MobileSlider />
    </div>
    <div className="hidden relative tablet:overflow-hidden tablet:block">
      <ReviewCarousel />
    </div>
    <div className={`${styles.paddings} flex justify-center items-center`}>
      <button
        className="border mt-10 tablet:mt-5 py-3 px-[3rem] rounded-full bg-orange-500 max-w-fit"
        aria-label="getStarted button"
        type="button"
      >
        Get Started
      </button>
    </div>
  </div>
);

export default ReviewSlider;
