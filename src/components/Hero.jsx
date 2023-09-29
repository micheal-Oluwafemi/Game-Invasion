import React from 'react';
import { img1, img2, img3 } from '../assets';
import { TrophyFill } from 'react-bootstrap-icons';

const Hero = () => {
  return (
    <section
      id='home'
      className=' w-full h-1/3 md:h-[27rem] mx-auto max-w-7xl '
    >
      <div className='flex md:flex-row flex-col justify-between px-5'>
        <div className='md:pt-32 pt-20'>
          <h1 className='text-[2.2rem] heading font-bold'>
            <span className='bg-gradient-to-r from-amber-400 to-pink-400 inline-block text-transparent bg-clip-text'>
              Best Sales
            </span>{' '}
            For Games in{' '}
            <span className='bg-gradient-to-r from-amber-400 to-pink-400 inline-block text-transparent bg-clip-text'>
              All Internet!
            </span>
          </h1>
          <p className='text-[11px] pt-2'>
            Welcome to our Website! Here you can download and buy a lot of
            different games, enjoy
          </p>

          <div className='flex space-x-3 pt-4'>
            <button className='border-amber-300 border text-sm px-6 py-1.5 rounded-md'>
              Best Sales
            </button>
            <button className='bg-gradient-to-r from-amber-300 to bg-pink-400 text-sm px-6 py-1.5 rounded-md'>
              All Games
            </button>
          </div>
        </div>

        <div className='w-[100%] pt-5 md:pt-0'>
          <img src={img1} alt='' className='w-[100%]' />
        </div>

        <div className='pt-32 hidden md:block'>
          <h1 className='font-bold text- bg-gradient-to-r from-amber-400 to-pink-400  text-transparent bg-clip-text'>
            01
          </h1>
          <h1 className='text-lg font-semibold'>
            Games with idea & memorable design
          </h1>
          <h4 className='text-sm pt-7 font-bold bg-gradient-to-r from-amber-400 to-pink-400 inline-block text-transparent bg-clip-text'>
            GAME RANKING
          </h4>
          <div className='flex text-[13px] items-center space-x-1'>
            <h1 className='text-xl font-bold'>38k+</h1>
            <h3>reviews</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
