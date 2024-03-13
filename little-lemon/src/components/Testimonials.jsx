import React from 'react';
import TestCard from './TestCard';

const Testimonials = () => {
  return (
    <div className='bg-[#108f54]'>
      <h1 className=' text-gray-200 font-semibold text-3xl text-center p-4'>
        Testimonials
      </h1>
      <div className='flex justify-center flex-wrap align-center'>
        <TestCard />
        <TestCard />
        <TestCard />
        <TestCard />
      </div>
    </div>
  );
};

export default Testimonials;
