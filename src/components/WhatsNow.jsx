import React from 'react';
import {
  Forward,
  GooglePlay,
  Playstation,
  Windows,
  Xbox,
} from 'react-bootstrap-icons';
import { FortniteNew, GOT, destinyNew, warzone } from '../assets';

const WhatsNow = () => {
  return (
    <section className='sm:px-10 px-6 max-w-7xl mx-auto w-full'>
      <div className='pt-4'>
        <div className='flex flex-row justify-between items-center py-3'>
          <div>
            <h1 className='text-lg md:text-xl font-semibold'>
              <span className='bg-gradient-to-r from-amber-400 to-pink-400 inline-block text-transparent bg-clip-text'>
                What's
              </span>{' '}
              New
            </h1>
          </div>

          <div className='flex flex-row items-center justify-center md:space-x-4 space-x-2'>
            <div className='flex item-center space-x-1.5'>
              <Windows size={13} color='#fff' />
              <Playstation size={13} color='#fff' />
              <GooglePlay size={13} color='#fff' />
              <Xbox size={13} color='#fff' />
            </div>

            <div className='px-3 md:px-[1.3rem] cursor-pointer py-[.4rem] md:py-[.3rem] text-[10px] md:text-sm rounded-lg bg-tertiary'>
              Explore
            </div>
          </div>
        </div>

        <div>
          <div className=' flex flex-row flex-wrap md:gap-3 gap-7'>
            <div className='md:w-[49%] flex flex-row space-x-3'>
              <img
                src={destinyNew}
                alt=''
                className='w-38 rounded-xl h-40 object-cover'
              />
              <div>
                <div className='flex space-x-1.5  bg-[#1c192f] rounded-[5px] py-[.3rem] w-fit px-2'>
                  <Windows size={12} color='#fff' />
                  <h6 className='text-[8px] font-semibold'>PC</h6>
                </div>

                <h1 className='font-semibold text-[.76rem] md:pt-4 pt-2.5'>
                  Two Destiny 2 Exotics Disabled Due To Exploits--Again
                </h1>
                <p className='text-[10px] text-gray-500 py-2 md:py-4'>
                  Increase in Melee damages and certain Snipers.
                </p>

                <div className='flex flex-row items-center space-x-1'>
                  <div className='w-[1.9rem] h-[1.9rem]  flex justify-center items-center text-center bg-gradient-to-tr from-pink-500 to-amber-500 rounded-tl-xl rounded-tr-xl rounded-br-xl '>
                    <h1 className='text-[10px] font-semibold'>KO</h1>
                  </div>

                  <div>
                    <h2 className='text-[10px] font-semibold'>KOTAKU</h2>
                    <p className='text-[9px] font-semibold text-gray-400'>
                      1 HOUR AGO
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='md:w-[49%] flex flex-row space-x-3'>
              <img
                src={FortniteNew}
                alt=''
                className='w-38 rounded-xl h-40 object-cover'
              />
              <div>
                <div className='flex space-x-1.5  bg-[#1c192f] rounded-[5px] py-[.3rem] w-fit px-2'>
                  <Windows size={12} color='#fff' />
                  <h6 className='text-[8px] font-semibold'>PC</h6>
                </div>

                <h1 className='font-semibold text-[.76rem] md:pt-4 pt-2.5'>
                  Fornite Chapter 2: Season 5 Extended Until July
                </h1>
                <p className='text-[10px] text-gray-500 py-2 md:py-4'>
                  Epic has announced that Fortnite has been extended until July.
                </p>

                <div className='flex flex-row items-center space-x-1'>
                  <div className='w-[1.9rem] h-[1.9rem]  flex justify-center items-center text-center bg-gradient-to-tr  from-fuchsia-500 to-sky-500  rounded-tl-xl rounded-tr-xl rounded-br-xl '>
                    <h1 className='text-[10px] font-semibold'>IG</h1>
                  </div>

                  <div>
                    <h2 className='text-[10px] font-semibold'>IGN</h2>
                    <p className='text-[9px] font-semibold text-gray-400'>
                      3 HOUR AGO
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='md:w-[49%] flex flex-row space-x-3'>
              <img
                src={GOT}
                alt=''
                className='w-38 rounded-xl h-40 object-cover'
              />
              <div>
                <div className='flex space-x-1.5  bg-[#1c192f] rounded-[5px] py-[.3rem] w-fit px-2'>
                  <Playstation size={12} color='#fff' />
                  <h6 className='text-[8px] font-semibold'>Playstore</h6>
                </div>

                <h1 className='font-semibold text-[.76rem] md:pt-4 pt-2.5'>
                  Ghost of Tsushima Won't Have Waypoints
                </h1>
                <p className='text-[10px] text-gray-500 py-2 md:py-4'>
                  So many Tricks have been Updated recently; You're just gonna
                  have to figure it out
                </p>

                <div className='flex flex-row items-center space-x-1 '>
                  <div className='w-[1.9rem] h-[1.9rem]  flex justify-center items-center text-center bg-gradient-to-tr  from-blue-500 to-black  rounded-tl-xl rounded-tr-xl rounded-br-xl '>
                    <h1 className='text-[10px] font-semibold'>USG</h1>
                  </div>

                  <div>
                    <h2 className='text-[10px] font-semibold'>USGAMER</h2>
                    <p className='text-[9px] font-semibold text-gray-400'>
                      8 HOUR AGO
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='md:w-[49%] flex flex-row space-x-3'>
              <img
                src={warzone}
                alt=''
                className='w-38 rounded-xl h-40 object-cover'
              />
              <div>
                <div className='flex space-x-1.5  bg-[#1c192f] rounded-[5px] py-[.3rem] w-fit px-2'>
                  <Windows size={12} color='#fff' />
                  <h6 className='text-[8px] font-semibold'>PC</h6>
                </div>

                <h1 className='font-semibold text-[.76rem] md:pt-4 pt-1'>
                  Infinity Wards Cracks Down On Cheaters In Modern Warfare And
                  Warzone
                </h1>
                <p className='text-[10px] text-gray-500 py-1  md:py-4'>
                  Hackers will now bw going head-to-head in Call of Duty.
                </p>

                <div className='flex flex-row items-center space-x-1'>
                  <div className='w-[1.9rem] h-[1.9rem]  flex justify-center items-center text-center bg-gradient-to-tr  from-rose-500 to-blue-500  rounded-tl-xl rounded-tr-xl rounded-br-xl '>
                    <h1 className='text-[10px] font-semibold'>DT</h1>
                  </div>

                  <div>
                    <h2 className='text-[10px] font-semibold'>DESTRUCTROID</h2>
                    <p className='text-[9px] font-semibold text-gray-400'>
                      8 HOUR AGO
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsNow;
