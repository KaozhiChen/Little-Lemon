import React, { useState } from 'react';
import Logo from '../assets/Logo.svg';
import Hamburger from '../assets/hamburger.svg';
import Close from '../assets/x-mark.svg';
import NavItem from './NavItem';

const Navbar = () => {
  const [showMenu, setMenu] = useState(false);
  const clickMenu = () => {
    setMenu(!showMenu);
  };
  return (
    <div className='flex justify-between items-center p-4 max-w-[1240px] mx-auto h-24 text-1'>
      <img src={Logo} alt='logo' />
      <ul className='md:flex hidden font-semibold text-gray-700'>
        <NavItem to='/' pageName='Home'></NavItem>
        <NavItem to='/about' pageName='About'></NavItem>
        <NavItem to='/menu' pageName='Menu'></NavItem>
        <NavItem to='/reservation' pageName='Reservations'></NavItem>
        <NavItem to='/login' pageName='Login'></NavItem>
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
          <NavItem type='side' to='/' pageName='Home'></NavItem>
          <NavItem type='side' to='/about' pageName='About'></NavItem>
          <NavItem type='side' to='/menu' pageName='Menu'></NavItem>
          <NavItem
            type='side'
            to='/reservations'
            pageName='Reservations'
          ></NavItem>
          <NavItem type='side' to='/login' pageName='Login'></NavItem>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
