'use client';

import React from 'react';
import Image from 'next/image';
import { AiOutlineMenu } from 'react-icons/ai';
import Logo from '../public/logo.svg';
import styles from '../styles';

const Navbar = () => (
  <div className={`flex justify-between items-center ${styles.paddings}`}>
    <div className="">
      <Image
        src={Logo}
        alt="logo"
        priority
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
    </div>
    <div className="hidden tablet:flex justify-center items-center gap-5 tablet:gap-7 laptop:gap-9 desktop:gap-11">
      <span className="text-[#1d1e25]">Pricing</span>
      <span className="text-[#1d1e25]">About Us</span>
      <span className="text-[#1d1e25]">Careers</span>
      <span className="text-[#1d1e25]">Community</span>
    </div>
    <div className="hidden tablet:flex">
      <span className="border p-4 rounded-full bg-orange-500">Get Started</span>
    </div>
    <div className="block tablet:hidden">
      {' '}
      <AiOutlineMenu className="w-[2rem] h-[2rem]" />
    </div>
  </div>
);

export default Navbar;
