import React from 'react';

const CTA = () => {
  return (
    <div className='CTA w-full h-40 p-1 mt-10 flex flex-col justify-center items-center'>
      <h1 className='text-3xl font-bold text-center pt-3'>Welcome!</h1>
      <h5 className='text-center text-[14px]'>
        Play your Way to Victory, Start your Gaming Odyssey Today!
      </h5>
      <button className='text-sm border px-3 py-1.5 mt-5 rounded-md mb-3'>
        Get Started
      </button>
    </div>
  );
};

export default CTA;
