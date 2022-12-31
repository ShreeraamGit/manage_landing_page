'use client';

import React from 'react';
import Image from 'next/image';
import HeroImage from '../public/illustration-intro.svg';
import styles from '../styles';

const Hero = () => (
  <div
    className={`grid tablet:grid-cols-2 grid-cols-1 ${styles.paddings} gap-10 mt-0 tablet:mt-14`}
  >
    <div
      className={`box-1 flex justify-center items-center object-cover tablet:order-last flex-grow tablet:max-h-[28rem]`}
    >
      <Image
        src={HeroImage}
        alt="logo"
        priority
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
    </div>
    <div
      className={`box-2 flex flex-col gap-3 desktop:gap-6 justify-center items-center tablet:items-start flex-grow ${styles.mobileHeroBoxSize} tablet:max-h-[28rem]`}
    >
      <h1 className="text-[#1d1e25] text-[40px] laptop:text-[45px] desktop:text-[50px] font-extrabold text-center tablet:text-left">
        Bring Everyone together to build better Products
      </h1>
      <p className="text-center tablet:text-left text-[#9c9aa6]">
        Manage makes it simple for software teams to plan day to day tasks while
        keeping the alrger team goals in view
      </p>
      <button className="border mt-10 tablet:mt-5 py-3 px-[3rem] rounded-full bg-orange-500 max-w-fit">
        Get Started
      </button>
    </div>
  </div>
);

export default Hero;
