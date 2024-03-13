import React from 'react';
import HeroImg from '../assets/restaurant.jpg';

const Hero = () => {
  return (
    <div className='bg-green-800'>
      <div className='flex flex-col sm:flex-row justify-between align-center mx-auto max-w-[1240px]'>
        <div className='p-4 font-serif flex flex-col align-center justify-center space-y-12'>
          <h1 className='text-yellow-300 font-bold  text-5xl'>Little Lemon</h1>
          <h3 className='text-gray-100 text-3xl '>Georgia</h3>
          <p className='text-gray-100'>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button className='bg-yellow-300 rounded-3xl font-bold text-gray-600 py-2 px-4 '>
            Reserve a table
          </button>
        </div>
        <div>
          <img src={HeroImg} alt='HeroImg' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
