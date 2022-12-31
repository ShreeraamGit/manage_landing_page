'use client';

import React from 'react';
import Image from 'next/image';
import formTwoMobile from '../public/Rectangle_15_mobile.svg';
import formTwoDesktop from '../public/Rectangle_12_desktop.svg';

const ImageComponentTwo = () => (
  <div className="absolute top-[18%] tablet:top-[48%] right-0 tablet:left-0 -z-50">
    <Image
      className="block tablet:hidden"
      src={formTwoMobile}
      alt="logo"
      priority
      // width={500} automatically provided
      // height={500} automatically provided
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />
    <Image
      className="hidden tablet:block"
      src={formTwoDesktop}
      alt="logo"
      priority
      // width={500} automatically provided
      // height={500} automatically provided
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />
  </div>
);

export default ImageComponentTwo;
