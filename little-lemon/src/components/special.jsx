import React from 'react';
import Burchetta from '../assets/bruchetta.svg';

const special = () => {
  return (
    <div className='mx-auto  max-w-[1240px] '>
      <div className='flex align-center px-4 py-16 justify-between '>
        <h1 className='text-3xl font-semibold'>Special</h1>
        <button className='bg-yellow-300 rounded-3xl font-bold text-gray-600 py-2 px-4 '>
          Online Menu
        </button>
      </div>
      <div>
        <div className='flex flex-col bg-gray-200 max-w-sm rounded-2xl overflow-hidden m-6 shadow-xl'>
          <img className='w-full' src={Burchetta} alt='special' />
          <div className='flex justify-between align-center p-4 font-semibold '>
            <h3>Greel salad</h3>
            <span className='text-yellow-500 '>$12.99</span>
          </div>
          <p className='text-base p-4 text-gray-700'>
            The famous greek salad of crispy lettuce, peppers, olives, and our
            Chichago style feta cheese, garnished with crunchy garlic and
            rosemary croutons.
          </p>
          <button className='bg-yellow-300 rounded-3xl font-bold text-gray-600 py-2 px-4 '>
            Order Now
          </button>
        </div>

        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default special;
