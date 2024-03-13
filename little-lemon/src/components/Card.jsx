import React from 'react';
import Burchetta from '../assets/bruchetta.svg';

const Card = () => {
  return (
    <>
      <div className='flex flex-col bg-gray-200 max-w-80 rounded-2xl overflow-hidden m-6 shadow-xl'>
        <img className='w-full' src={Burchetta} alt='special' />
        <div className='flex justify-between align-center p-4 font-semibold '>
          <h3>Greel salad</h3>
          <span className='text-yellow-500 '>$12.99</span>
        </div>
        <p className='text-base p-4 text-gray-700'>
          Our Bruschetta is made from grilled bread that has been smeared with
          garlic and seasoned with salt and olive oil.
        </p>
        <button className='bg-yellow-300 hover:bg-yellow-400 hover:text-gray-600 rounded-3xl font-bold text-gray-600 py-2 px-4 '>
          Order Now
        </button>
      </div>
    </>
  );
};

export default Card;
