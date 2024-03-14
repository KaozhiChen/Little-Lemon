import React from 'react';
import Logo from '../assets/Logo.svg';
import Envelope from '../assets/envelope.svg';
import Phone from '../assets/phone.svg';
import Home from '../assets/home.svg';

const Footer = () => {
  return (
    <>
      <div className='bg-green-700 flex flex-col py-20 mt-20 space-y-10'>
        <div className=''>
          <img
            src={Logo}
            alt='logo'
            className='mx-auto px-6 py-4 mt-10 rounded-xl bg-gray-200'
          />
        </div>
        <div className='flex flex-col items-center justify-start sm:flex-row space-y-6 sm:space-y-0 sm:justify-center  text-gray-200 sm:space-x-4 py-8 '>
          <div className='flex items-center justify-center px-4 space-x-1 sm:border-r-2'>
            <img src={Home} alt='' className='w-6 h-6 text-gray-200' />
            <span className='  border-gray-200'>Atlanta, Georgia</span>
          </div>
          <div className='flex items-center justify-center px-4 sm:border-r-2 space-x-1'>
            <img src={Phone} alt='' className='w-6 h-6 text-gray-200' />
            <span className='  border-gray-200 '>Phone: +1(404)12345678 </span>
          </div>
          <div className='flex items-center justify-center  px-4 space-x-1'>
            <img src={Envelope} alt='' className='w-6 h-6 text-gray-200' />
            <span>Email: littlelemon@restaurant.com </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
