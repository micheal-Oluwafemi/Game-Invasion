import React from 'react';
import { Cli1, Cli2, Cli4, Cli5, Cli6 } from '../assets';

const Clients = () => {
  return (
    <section className='sm:px-16 px-6'>
      <div
        className='pt-4 flex flex-wrap flex-row justify-center items-center gap-2
       md:gap-10'
      >
        <img src={Cli1} alt='' className='w-24 grayscale opacity-60' />
        <img src={Cli2} alt='' className='w-20  grayscale opacity-60' />
        <img src={Cli4} alt='' className='w-20 grayscale opacity-60' />
        <img src={Cli5} alt='' className='w-20 grayscale opacity-60' />
        <img src={Cli6} alt='' className='w-20 grayscale opacity-60' />
      </div>
    </section>
  );
};

export default Clients;
