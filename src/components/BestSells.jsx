import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { BestSellers } from '../constants';
import 'swiper/css';
import {
  ChevronLeft,
  ChevronRight,
  Code,
  Download,
} from 'react-bootstrap-icons';

const SliderButton = () => {
  const swiper = useSwiper();

  return (
    <div className='r-button flex justify-end space-x-4 pt-1'>
      <ChevronLeft
        size={14}
        onClick={() => swiper.slidePrev()}
        className='cursor-pointer font-bold'
      />

      <ChevronRight
        size={14}
        onClick={() => swiper.slideNext()}
        className='cursor-pointer font-bold'
      />
    </div>
  );
};

const BestSells = () => {
  return (
    <section
      id='catalog'
      className='sm:px-10 px-6 max-w-7xl mx-auto w-full z-50'
    >
      <div className='pt-5'>
        <div className='flex space-x-2 items-center py-3'>
          <h1 className='text-xl font-bold '>
            <span
              className='bg-gradient-to-r from-amber-400 to-pink-400 inline-block text-transparent bg-clip-text
            '
            >
              Best
            </span>{' '}
            Sellers
          </h1>
          <div className='font-bold'>
            <ChevronRight
              size={13}
              color='rgb(107 114 128)'
              className='font-bold'
            />
          </div>
        </div>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          // centeredSlides={true}
          // loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          className=''
        >
          <SliderButton />
          {BestSellers.map((card) => (
            <SwiperSlide
              key={card.id}
              className='w-[8.6rem] p-2 hover:border hover:border-amber-500 hover:rounded-md'
            >
              <div className='r-card '>
                <img
                  src={card.img}
                  alt=''
                  className='w-32 h-32 object-cover rounded-sm mx-auto'
                />
                <div className='flex justify-between items-center'>
                  <div>
                    <h1 className='text-[13px] pt-1'>{card.name}</h1>
                    <p className='text-[9px] text-gray-400'>{card.genre}</p>
                  </div>

                  <div onClick={() => window.open(card.link, '_blank')}>
                    <Download size={13} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BestSells;
