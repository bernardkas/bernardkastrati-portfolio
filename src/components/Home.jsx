import React, { useEffect, useRef, useState } from 'react';
import HeroImage from '../assets/heroImage.jpg';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import './global.css';

import EarthCanvas from './planet/Earth';
import { TypeAnimation } from 'react-type-animation';

const Home = ({ links }) => {
  const test = useRef(el => el.getBoundingClientRect().height, []);

  const goToTop = () => {
    window.scrollTo({
      top: 997,
      behavior: 'smooth',
    });
  };

  const [typedText, setTypedText] = useState('');
  const fullText = 'Developer.';
  useEffect(() => {
    let currentIndex = 0;

    const typeText = () => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeText, 100); // Adjust the typing speed here (in milliseconds)
      }
    };

    typeText();
  }, []);

  return (
    <div
      name='home'
      className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'
      id='home'
      ref={test}>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-2 md:flex-row'>
        <div className='flex flex-col justify-center h-full mr-7'>
          <div className=' flex flex-col justify-center flex-nowrap'>
            <h2 className='text-3xl md:text-6xl font-bold text-white  flex-col items-start gap-3 flex'>
              I'm <span className='frontSpan'> Software</span>{' '}
              <span className=''>
                <TypeAnimation
                  sequence={[
                    'Dev',
                    1000,
                    'Develop',
                    1000,
                    'Devel',
                    1000,
                    'Developer',
                    1000,
                  ]}
                  wrapper='span'
                  speed={50}
                  style={{ fontSize: '60px', display: 'inline-block' }}
                  repeat={Infinity}
                />
              </span>
            </h2>
          </div>
          <p className='text-gray-500 py-4 max-w-md'>
            I'am Bernard Kastrati passionned in Programming
          </p>

          <div>
            <button
              onClick={goToTop}
              className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>
              Explore
              <span className='group-hover:rotate-90 duration-300'>
                <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
              </span>
            </button>

            {/* <span className="explore">
              Expolore
              <MdOutlineKeyboardArrowDown size={25} className="ml-1" />
            </span> */}
          </div>
        </div>

        <div className='flex flex-col justify-center h-2/3 w-auto md:w-3/4 mr-7'>
          {/* <img
            src={HeroImage}
            alt="My profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full image"
          /> */}
          <EarthCanvas />
        </div>
      </div>
    </div>
  );
};

export default Home;
