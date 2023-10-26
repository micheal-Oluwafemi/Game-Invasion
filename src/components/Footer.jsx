import React, { useEffect, useState } from 'react';
import {
  ArrowRight,
  Controller,
  Linkedin,
  Twitter,
  Whatsapp,
} from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';

const Footer = () => {
  const [scrolled, setScrolled] = useState(false);
  const [address, setAddress] = useState('');
  const [active, setActive] = useState('');
  const date = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id='contact' className='sm:px-7 px-6 py-6'>
      <div>
        <div className='flex md:flex-row flex-col md:items-center md:space-x-5 space-y-6 md:space-y-0 justify-between pb-5'>
          <div className='md:w-1/4'>
            <Link
              to='/'
              className='flex items-center gap-2 w-fit'
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <Controller color='rgb(245 158 1)' size={18} />
              <p className='text-white text-lg md:text-[14px] lg:text-2xl font-bold cursor-pointer flex'>
                Connect{' '}
                <span className='bg-gradient-to-r from-amber-400 to-pink-400 inline-block text-transparent bg-clip-text'>
                  {' '}
                  with us
                </span>
              </p>
            </Link>
            <form
              action=''
              className='pt-1'
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type='email'
                placeholder='Enter your email'
                required
                className='bg-transparent border border-r-transparent  text-[11px] border-l-transparent border-t-transparent border-b-gray-400 w-[70%] outline-none'
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />

              <div className='flex items-center space-x-2 pt-2'>
                <ArrowRight size={11} color='white' />

                <button
                  onClick={() => {
                    setAddress('');
                    alert('Thanks for Subscribing');
                  }}
                  type='submit'
                  className='text-sm w-fit'
                >
                  Subscribe
                </button>
              </div>

              <p className='text-[10px] pt-2'>
                Thank you for been a part of our gaming family.{' '}
              </p>
            </form>
          </div>

          <div className='md:w-1/4'>
            <h1 className='text-[.9rem] font-semibold'>About Us</h1>
            <p className='text-[10px] text-gray-500'>
              We believe in fostering a safe and inclusive environment, where
              players of all backgrounds can come together to celebrate their
              love for gaming.Our commitment to fair play and respect is at the
              heart of everything we do.
            </p>
          </div>
          <div className='md:w-1/4'>
            <p className='text-gray-500 text-[10px]'>Phone</p>
            <h4 className='text-[11px]'>+234 8132 766 914</h4>
            <p className='text-gray-500 text-[10px]'>Address</p>
            <h4 className='text-[11px]'>
              88 ROAD, BROKLYN STREET NEW YORK, USA
            </h4>
            <p className='text-gray-500 text-[10px]'>Email Address</p>
            <h2 className='text-[11px]'>RAYT3CH@gameinvasion.em</h2>
          </div>

          <div className='md:w-1/4 text-start'>
            <h1 className='text-[.9rem] font-semibold'>Quick Links</h1>
            <ul className='list-none underline text-gray-500 flex-col gap-2'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`${
                    active === nav.title ? 'text-white' : 'text-secondary'
                  } hover:text-white text-[12px] font-medium cursor-pointer lg:text-xl `}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='flex justify-center items-center self-center text-center'>
          <div className='bg-gray-600 h-[.1px] w-[95%] '></div>
        </div>

        <div className='flex md:flex-row flex-col justify-between items-center md:px-5 pt-3'>
          <h1 className='text-[10px] font-light text-gray-400'>
            &copy; {date}, Developed by{' '}
            <span
              onClick={() =>
                window.open('https://rayt3ch.vercel.app', '_blank')
              }
              className='font-semibold cursor-pointer'
            >
              @RayT3ch
            </span>{' '}
            | Privacy policy
          </h1>
          <p className='text-[10px] font-light text-gray-400 pt-2 md:pt-0'>
            All Rights Reserved.
          </p>
        </div>

        <div className='flex flex-row items-center justify-center space-x-3 pt-4'>
          <div
            onClick={() =>
              window.open('https://wa.me/message/FOHLE6MHV7BRM1', '_blank')
            }
            className='cursor-pointer'
          >
            <Whatsapp />
          </div>
          <div
            onClick={() =>
              window.open(
                'https://twitter.com/ray_T3ch?t=2KvjmKXu6T6nUUEKrgY_XQ&s=09',
                '_blank'
              )
            }
            className='cursor-pointer'
          >
            <Twitter />
          </div>
          <div
            onClick={() =>
              window.open(
                'https://www.linkedin.com/in/micheal-oluwafemi-06916a261',
                '_blank'
              )
            }
            className='cursor-pointer'
          >
            <Linkedin />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
