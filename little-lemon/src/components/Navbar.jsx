import React, { useState } from 'react';
import Logo from '../assets/Logo.svg';
import Hamburger from '../assets/hamburger.svg';
import Close from '../assets/x-mark.svg';

const Navbar = () => {
  const [showMenu, setMenu] = useState(true);

  const clickMenu = () => {
    setMenu(!showMenu);
  };
  return (
    <div className='flex justify-between items-center p-4 max-w-[1240px] mx-auto h-24 text-1'>
      <img src={Logo} alt='logo' />

      <ul className='md:flex hidden font-semibold text-gray-700'>
        <li className='px-4 py-2 text-center  rounded-md hover:bg-green-700 cursor-pointer'>
          Home
        </li>
        <li className='px-4 py-2 text-center  rounded-md hover:bg-green-700 cursor-pointer'>
          About
        </li>
        <li className='px-4 py-2 text-center  rounded-md hover:bg-green-700 hover:text-white cursor-pointer'>
          Menu
        </li>
        <li className='px-4 py-2 text-center  rounded-md hover:bg-green-700 cursor-pointer'>
          Reservations
        </li>
        <li className='px-4 py-2 text-center  rounded-md hover:bg-green-700 cursor-pointer'>
          Login
        </li>
      </ul>

      <div className='block md:hidden' onClick={clickMenu}>
        {showMenu ? (
          <img className='w-6 h-6' src={Close} alt='menu' />
        ) : (
          <img className='w-6 h-6' src={Hamburger} alt='menu' />
        )}
      </div>

      <div
        className={
          showMenu
            ? 'fixed h-full left-0 top-0 w-[50%] border-r font-semibold text-gray-300 p-4 bg-[#108f54] ease-in-out duration-500'
            : 'fixed left-[-100%]'
        }
      >
        <img src={Logo} alt='logo' className='m-4' />

        <ul className='p-8'>
          <li className='p-2'>Home</li>
          <li className='p-2'>About</li>
          <li className='p-2'>Menu</li>
          <li className='p-2'>Reservations</li>
          <li className='p-2'>Login</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
