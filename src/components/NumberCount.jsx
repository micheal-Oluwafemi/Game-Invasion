import React, { useState } from 'react';
import {
  Camera,
  CollectionPlay,
  EmojiSmile,
  ListStars,
  People,
  PeopleFill,
  Reception3,
  Star,
  Steam,
  Twitch,
} from 'react-bootstrap-icons';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

// const CallToAction = () => {
//   const [countOn, setCountOn] = useState(false);

const NumberCount = () => {
  const [countOn, setCountOn] = useState(false);

  return (
    <section className='sm:px-16 px-6'>
      <ScrollTrigger
        onEnter={() => setCountOn(true)}
        onExit={() => setCountOn(false)}
      >
        <div className='flex flex-wrap gap-5 md:gap-0 md:flex-row justify-center items-center pt-5'>
          <div className='w-fit py-3 flex px-4 items-center flex-col justify-center self-center mx-auto '>
            <div className='pb-1'>
              <Twitch size={35} color='#211e35' />
            </div>
            <h1 className='text-3xl text-amber-500 font-bold'>
              {countOn && (
                <CountUp start={0} end={1330} duration={1.5} delay={0} />
              )}
              +
            </h1>
            <p className='text-sm font-semibold text-gray-200'>
              Twitch Streams
            </p>
          </div>

          <div className='w-fit py-3 flex px-4 items-center flex-col justify-center self-center mx-auto'>
            <div className='pb-1'>
              <PeopleFill size={35} color='#211e35' />
            </div>
            <h1 className='text-2xl  text-amber-500 font-bold'>
              {countOn && (
                <CountUp start={0} end={12000} duration={1.5} delay={0} />
              )}
              +
            </h1>
            <p className='text-sm font-semibold text-gray-200'>Our Members</p>
          </div>

          <div className=' w-fit py-3 flex px-5 items-center flex-col justify-center self-center mx-auto'>
            <div className='pb-1'>
              <Reception3 size={35} color='#211e35' />
            </div>
            <h1 className='text-2xl  text-amber-500 font-bold'>
              {countOn && (
                <CountUp start={0} end={1590} duration={1.5} delay={0} />
              )}
              +
            </h1>
            <p className='text-sm font-semibold text-gray-200'>Subscribers</p>
          </div>

          <div className=' w-fit py-3 mx-auto flex px-4 items-center flex-col justify-center self-center'>
            <div className='self-center'>
              <CollectionPlay size={35} color='#211e35' />
            </div>
            <h1 className='text-2xl  text-amber-500 font-bold'>
              {countOn && (
                <CountUp start={0} end={900} duration={1.5} delay={0} />
              )}
              +
            </h1>
            <p className='text-sm font-semibold text-gray-200'>Games</p>
          </div>
        </div>
      </ScrollTrigger>
    </section>
  );
};

export default NumberCount;
