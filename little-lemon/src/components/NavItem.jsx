import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ({ type, to, pageName }) => {
  if (type === 'side') {
    return (
      <NavLink to={to}>
        <li className='p-2 hover:bg-gray-400 hover:text-white'>{pageName}</li>
      </NavLink>
    );
  } else {
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? 'bg-primary  rounded-md text-white mx-2 ' : 'mx-2'
        }
      >
        <li className='hover:text-gray-300 active:bg-primary px-4 py-2 text-center rounded-md hover:bg-green-600 cursor-pointer'>
          {pageName}
        </li>
      </NavLink>
    );
  }
};

export default NavItem;
