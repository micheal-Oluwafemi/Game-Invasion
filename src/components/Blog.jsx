import React from 'react';
import { fortniteSmall, game11, valorentBg, valorentSmall } from '../assets';

const Blog = () => {
  return (
    <section className='sm:px-10 px-6 pt-3 max-w-7xl mx-auto w-full' id='blog'>
      <h1 className='text-xl font-bold pt-6 pb-2'>
        <span
          className='bg-gradient-to-r from-amber-400 to-pink-400 inline-block text-transparent bg-clip-text
            '
        >
          Recommended
        </span>{' '}
        Articles
      </h1>
      <div className='flex gap-5 flex-col md:flex-row'>
        {/* Group 1 */}
        <div className='article1 md:w-1/2 h-[20.7rem] relative rounded-xl'>
          <div className='flex flex-row m-5 items-center space-x-1'>
            <div className='w-9 h-9  flex justify-center items-center rounded-tl-2xl rounded-tr-2xl rounded-br-2xl text-center bg-gradient-to-tr from-pink-400 to-amber-500'>
              <h1 className=''>k</h1>
            </div>

            <div>
              <h2 className='text-[11px] font-semibold'>KOTAKU</h2>
              <p className='text-[10px] font-medium text-gray-200'>
                24.04.2023
              </p>
            </div>
          </div>
          <div className='absolute bottom-0'>
            <div
              className='flex flex-row items-center space-x-2 md:space-x-3
            '
            >
              <img
                src={fortniteSmall}
                alt=''
                className='w-[5.4rem] rounded-tr-xl'
              />

              <div>
                <h1 className='font-semibold text-lg leading-[23px]'>
                  Fort Frills, Features, And <br className='md:flex hidden' />{' '}
                  Facilities
                </h1>
                <p className='text-[12px] text-gray-300'>
                  <span className='font-semibold text-white'>Update:</span> It
                  is been said that Season 5 will be launching on 27th July,
                  2023.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Group 2 */}
        <div className='flex flex-col md:w-[45%] gap-3'>
          <div className='article2 h-40  relative rounded-xl'>
            <div className='flex flex-row m-3 items-center space-x-1'>
              <div className='w-7 h-7 flex justify-center items-center rounded-bl-2xl rounded-tr-2xl rounded-br-2xl text-center bg-gradient-to-tr from-blue-500 to-purple-500'>
                <h1 className=''>
                  S<sup className='text-[9px]'>th</sup>
                </h1>
              </div>

              <div>
                <h2 className='text-[11px] font-semibold'>STEAM</h2>
                <p className='text-[10px] font-medium text-gray-200'>
                  22.04.2023
                </p>
              </div>
            </div>

            <div className='absolute bottom-0'>
              <div
                className='flex flex-row items-center space-x-3
            '
              >
                <img
                  src={valorentSmall}
                  alt=''
                  className='w-[3.2rem] rounded-tr-xl rounded-bl-xl'
                />

                <div>
                  <h1 className='text-[11px] md:text-[12px] font-semibold'>
                    Valorant Twitch Streamers Are Gaming The System with 24/7
                    Streams That Rack Up Viewers Desperate For Beta Keys
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className='article3 h-40 relative rounded-xl'>
            <div className='flex flex-row m-3 items-center space-x-1'>
              <div className='w-8 h-8  flex justify-center items-center text-center bg-gradient-to-tr from-indigo-500 to-cyan-500 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl '>
                <h1 className='text-[10px]'>USG</h1>
              </div>

              <div>
                <h2 className='text-[11px] font-semibold'>USGAMER</h2>
                <p className='text-[10px] font-medium text-gray-200'>
                  22.04.2023
                </p>
              </div>
            </div>

            <div className='absolute bottom-0'>
              <div
                className='flex flex-row items-center space-x-3
            '
              >
                <img
                  src={game11}
                  alt=''
                  className='w-[3.2rem] rounded-tr-xl rounded-bl-xl'
                />

                <div>
                  <h1 className='text-[11px] font-semibold'>
                    <span className='font-semibold text-white'>Update:</span>{' '}
                    New Gun Skins, AK47 Unlocked, Maddox Unlocked, Cold Blooded
                    peak Unlocked....
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
