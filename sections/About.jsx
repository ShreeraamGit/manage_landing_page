'use client';

import React from 'react';
import styles from '../styles';

const About = () => (
  <div
    className={`${styles.topPaddings} ${styles.paddings} grid tablet:grid-cols-2 grid-cols-1 gap-10`}
  >
    <div
      className={`box-1 flex flex-col gap-3 desktop:gap-6 justify-center tablet:justify-start items-center tablet:items-start flex-grow ${styles.mobileHeroBoxSize} tablet:max-h-[28rem]`}
    >
      <h1 className="text-[#1d1e25] text-[35px] laptop:text-[40px] desktop:text-[45px] font-extrabold text-center tablet:text-left">
        What's different about Manage
      </h1>
      <p className="text-center tablet:text-left text-[#9c9aa6]">
        Manage provides all the functionality your team needs, without the
        complexity. Our software is tailor-made for modern digital product teams
      </p>
    </div>
    <div className="box-2 flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <div className="flex bg-[#FFF0EC] justify-start items-center gap-6 tablet:hidden text-[#1d1e25] rounded-full font-bold ">
          <span className=" bg-orange-500 rounded-full py-2 px-5">01</span>
          <span className="">Track company-wide progress</span>
        </div>
        <div className="hidden tablet:block text-[#1d1e25] font-extrabold">
          Track company-wide progress
        </div>
        <p className="text-[#9c9aa6]">
          See how your day-to-day tasks fit into the wider vision. Go from
          tracking progress at the milestone level all the way done to the
          smallest of details. Never lose sight of the bigger picture again.
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex bg-[#FFF0EC] justify-start items-center gap-6 tablet:hidden text-[#1d1e25] rounded-full font-bold ">
          <span className=" bg-orange-500 rounded-full py-2 px-5">02</span>
          <span className="">Advance Built-in Reports</span>
        </div>
        <div className="hidden tablet:block text-[#1d1e25] font-extrabold ">
          Advance Built-in Reports
        </div>
        <p className="text-[#9c9aa6]">
          Set internal delivery estimates and track progress toward company
          goals. Our customisable dashboard helps you build out the reports you
          need to keep key stakeholders informed.
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex bg-[#FFF0EC] justify-start items-center gap-6 tablet:hidden text-[#1d1e25] rounded-full font-bold ">
          <span className=" bg-orange-500 rounded-full py-2 px-5">03</span>
          <span className="">Everything you need in one place</span>
        </div>
        <div className="hidden tablet:block text-[#1d1e25] font-extrabold ">
          Everything you need in one place
        </div>
        <p className="text-[#9c9aa6]">
          Stop jumping from one service to another to communicate, store files,
          track tasks and share documents. Manage offers an all-in-one team
          productivity solution.
        </p>
      </div>
    </div>
  </div>
);

export default About;
