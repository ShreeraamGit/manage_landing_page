'use client';

import React from 'react';
import Image from 'next/image';
import formOneMobile from '../public/Rectangle_13_mobile.svg';
import formTwoMobile from '../public/Rectangle_15_mobile.svg';
import formOneDesktop from '../public/RectangleDesktop.svg';
import formTwoDesktop from '../public/Rectangle_12_desktop.svg';

const ImageComponent = () => (
  <div className="absolute top-0 right-0 -z-50">
    <Image
      className="block tablet:hidden"
      src={formOneMobile}
      alt="logo"
      priority
      // width={500} automatically provided
      // height={500} automatically provided
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />
    <Image
      className="hidden tablet:block"
      src={formOneDesktop}
      alt="logo"
      priority
      // width={500} automatically provided
      // height={500} automatically provided
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />
  </div>
);

export default ImageComponent;
