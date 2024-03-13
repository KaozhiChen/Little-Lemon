import React from 'react';
import Man from '../assets/man.png';

const TestCard = () => {
  return (
    <>
      <div className='flex flex-col bg-gray-200 max-w-80 p-8 rounded-2xl'>
        <h1 className='font-semibold py-4 mb-4 text-2xl'>Rating</h1>
        <div className='flex items-center'>
          <img src={Man} alt='Img' className='max-w-24 mr-6' />
          <span className='font-semibold'>Name</span>
        </div>
        <p className='text-base mt-8'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
          laudantium quam totam, pariatur porro labore cupiditate a quae earum
          quos nihil saepe voluptates et exercitationem ut sint, consectetur
          itaque aliquam.
        </p>
      </div>
    </>
  );
};

export default TestCard;
