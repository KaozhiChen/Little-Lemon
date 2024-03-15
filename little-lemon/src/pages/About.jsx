import React from 'react';
import Mario from '../assets/Mario and Adrian A.jpg';
import MarioB from '../assets/Mario and Adrian b.jpg';
import Chef from '../assets/restaurant chef B.jpg';

const About = () => {
  return (
    <>
      <div className='mt-8 text-center'>
        <h1 className='text-primary2 font-bold text-8xl '>Little Lemon</h1>
        <h2 className='font-semibold text-4xl my-4'>Georgia</h2>
        <p className='py-4 leading-8 text-lg max-w-[1024px] mx-auto font-serif font-semibold text-gray-600'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          iusto numquam nesciunt, necessitatibus aliquid temporibus nulla
          impedit ipsa voluptatum distinctio magni ducimus quibusdam laborum
          accusantium fugit expedita, incidunt eligendi architecto?
        </p>
      </div>
      <div>
        <img src={Mario} alt='' />
        <img src={MarioB} alt='' />
        <img src={Chef} alt='' />
      </div>
    </>
  );
};

export default About;
