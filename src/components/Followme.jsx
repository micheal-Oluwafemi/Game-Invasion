import React from 'react';
import {
  showcaseImg1,
  showcaseImg2,
  showcaseImg3,
  showcaseImg4,
  showcaseImg5,
  showcaseImg6,
} from '../assets';

const Followme = () => {
  return (
    <section className='pt-10'>
      <h1 className='text-center text-3xl font-semibold'>
        Share with #Game
        <span className='bg-gradient-to-r from-amber-400 to-pink-400 inline-block text-transparent bg-clip-text'>
          Invasion
        </span>
      </h1>
      <p
        onClick={() =>
          window.open(
            'https://twitter.com/ray_T3ch?t=2KvjmKXu6T6nUUEKrgY_XQ&s=09',
            '_blank'
          )
        }
        className='text-center text-gray-600 cursor-pointer font-semibold'
      >
        @rayT3ch
      </p>

      <div className='flex flex-row flex-wrap justify-evenly pt-3'>
        <img src={showcaseImg1} alt='' className='w-1/5 object-cover' />
        <img src={showcaseImg2} alt='' className='w-1/5 object-cover' />
        <img src={showcaseImg3} alt='' className='w-1/5 object-cover' />
        <img src={showcaseImg4} alt='' className='w-1/5 object-cover' />
        <img src={showcaseImg5} alt='' className='w-1/5 object-cover' />
      </div>
    </section>
  );
};

export default Followme;
