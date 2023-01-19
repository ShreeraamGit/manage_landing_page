'use cilent';

import React from 'react';
import Image from 'next/image';
import styles from '../styles';
import Logo from '../public/logo.svg';
import { RiFacebookBoxFill } from 'react-icons/ri';
import { AiFillYoutube } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsPinterest } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';

const Footer = () => (
  <div className={`bg-black h-fit text-white`}>
    <div
      className={`h-full flex flex-col ${styles.paddings} gap-14 tablet:hidden`}
    >
      <div className="flex gap-5 items-center mt-10">
        <div className=" bg-white text-gray-500 p-4 w-[75%] rounded-full flex justify-start">
          Updates in your box
        </div>
        <div className=" bg-orange-500 p-4 px-8 rounded-full">Go</div>
      </div>
      <div className="flex justify-between p-2">
        <div className="">
          <ul className="flex flex-col gap-5">
            <li>Home</li>
            <li>Pricing</li>
            <li>Products</li>
            <li>About Us</li>
          </ul>
        </div>
        <div className="">
          <ul className="flex flex-col gap-5">
            <li>Careers</li>
            <li>Community</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-around items-center">
        <RiFacebookBoxFill className="w-[2.5rem] h-[2.5rem]" />
        <AiFillYoutube className="w-[2.5rem] h-[2.5rem]" />
        <AiOutlineTwitter className="w-[2.5rem] h-[2.5rem]" />
        <BsInstagram className="w-[2.5rem] h-[2.5rem]" />
        <BsPinterest className="w-[2.5rem] h-[2.5rem]" />
      </div>
      <div className="flex justify-center items-center mb-10">
        <Image
          src={Logo}
          alt="logo"
          priority
          style={{ filter: 'invert(100%)' }}
          // width={500} automatically provided
          // height={500} automatically provided
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
      </div>
    </div>
    <div className={`hidden tablet:block ${styles.paddings}`}>
      <div className="flex justify-between my-14 h-[11rem]">
        <div className="flex-col justify-between flex">
          <div className="">
            <Image
              src={Logo}
              alt="logo"
              priority
              style={{ filter: 'invert(100%)' }}
              width={250}
              height={250}
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
          </div>
          <div className="flex justify-around">
            <RiFacebookBoxFill className="w-[2.5rem] h-[2.5rem]" />
            <AiFillYoutube className="w-[2.5rem] h-[2.5rem]" />
            <AiOutlineTwitter className="w-[2.5rem] h-[2.5rem]" />
            <BsInstagram className="w-[2.5rem] h-[2.5rem]" />
            <BsPinterest className="w-[2.5rem] h-[2.5rem]" />
          </div>
        </div>
        <div className="flex gap-[8rem]">
          <div className="">
            <ul className="flex flex-col justify-between h-full">
              <li>Home</li>
              <li>Pricing</li>
              <li>Products</li>
              <li>About Us</li>
            </ul>
          </div>
          <div className="">
            <ul className="flex flex-col gap-6">
              <li>Careers</li>
              <li>Community</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div className="">
          <div className="flex gap-5 items-center">
            <div className=" bg-white text-gray-500 rounded-full flex justify-start py-4 pl-5 pr-24">
              Updates in your box.....
            </div>
            <div className=" bg-orange-500 p-4 px-8 rounded-full">Go</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
