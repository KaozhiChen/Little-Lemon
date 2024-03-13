import React from 'react';
import Card from './Card';

const special = () => {
  return (
    <div className='mx-auto  max-w-[1240px] '>
      <div className='flex align-center px-4 py-16 justify-between '>
        <h1 className='text-3xl font-semibold'>Special</h1>
        <button className='bg-yellow-300 rounded-3xl font-bold text-gray-600 py-2 px-4 '>
          Online Menu
        </button>
      </div>
      <div className='flex flex-wrap align-center justify-center'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default special;
