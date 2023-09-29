import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { navLinks } from '../constants';
import { Controller, TextRight, X } from 'react-bootstrap-icons';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    <nav
      className={`sm:px-16 px-6 w-full flex items-center py-3 lg:py-4 md:py-2 fixed top-0 z-20 ${
        scrolled ? 'bg-primary' : 'bg-transparent'
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <Controller color='rgb(245 158 1)' size={18} />
          <p className='text-white text-lg md:text-[14px] lg:text-2xl font-bold cursor-pointer flex'>
            Game
            <span className='bg-gradient-to-r from-amber-400 to-pink-400 inline-block text-transparent bg-clip-text'>
              Invasion
            </span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row md:gap-9 lg:gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? 'text-white' : 'text-secondary'
              } hover:text-white text-[14px] font-medium cursor-pointer lg:text-xl`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <div onClick={() => setToggle(!toggle)}>
            <h1>
              {toggle ? (
                <X size={30} color='#f6f6f6' />
              ) : (
                <TextRight size={30} color='#f6f6f6' />
              )}
            </h1>
          </div>

          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 bg-tertiary absolute top-14 right-0 mx-4 my-2 min-w-[160px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? 'text-white' : 'text-secondary'
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
