import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ({ to, pageName }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? 'bg-green-700 rounded-md text-white mx-2' : 'mx-2'
      }
    >
      <li className='hover:text-gray-400 px-4 py-2 text-center rounded-md hover:bg-green-700 cursor-pointer'>
        {pageName}
      </li>
    </NavLink>
  );
};

export default NavItem;
