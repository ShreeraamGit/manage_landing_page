'use client';

import React from 'react';
import styles from '../styles';

const Simplfy = () => (
  <div
    className={`${styles.topPaddings} bg-orange-500 h-[25rem] tablet:h-[13rem] w-full flex justify-center items-center tablet:justify-start`}
  >
    <div className="flex tablet:hidden">
      {' '}
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-white max-w-[450px] p-5 text-[30px] text-center font-extrabold flex justify-center items-center">
          Simplfy how your team works today
        </h1>
        <button
          aria-label="getStarted button"
          type="button"
          className="border text-orange-500 font-extrabold mt-10 tablet:mt-5 py-3 px-[3rem] rounded-full bg-white max-w-fit"
        >
          Get Started
        </button>
      </div>
    </div>
    <div className="hidden tablet:flex w-full">
      <div
        className={`${styles.paddings} w-full flex justify-between items-center`}
      >
        <h1 className="text-white tablet:max-w-[400px] desktop:max-w-[550px]  tablet:text-[40px] font-extrabold text-center tablet:text-left">
          Simplfy how your team works today
        </h1>
        <button
          aria-label="getStarted button"
          type="button"
          className="border text-orange-500 font-extrabold mt-10 tablet:mt-5 py-3 px-[3rem] rounded-full bg-white max-w-fit"
        >
          Get Started
        </button>
      </div>
    </div>
  </div>
);

export default Simplfy;
