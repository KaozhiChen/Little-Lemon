import React from 'react';
import Logo from '../assets/Logo.svg';
import Hamburger from '../assets/hamburger.svg';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-4'>
      <img src={Logo} alt='logo' />

      <ul className='md:flex hidden'>
        <li className='p-2'>Home</li>
        <li className='p-2'>About</li>
        <li className='p-2'>Menu</li>
        <li className='p-2'>Reservations</li>
        <li className='p-2'>Login</li>
      </ul>

      <div className='block md:hidden'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          stroke='currentColor'
          class='w-6 h-6'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
          />
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
