import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import Special from '../components/Special';
const Homepage = () => {
  return (
    <>
      <Hero />
      <Special />
      <Testimonials />
      <div className='mt-8 text-center'>
        <h1 className='text-yellow-400 font-bold text-8xl '>Little Lemon</h1>
        <h2 className='font-semibold text-4xl my-4'>Georgia</h2>
        <p className='py-4 leading-8 text-lg max-w-[1024px] mx-auto font-serif font-semibold text-gray-600'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          iusto numquam nesciunt, necessitatibus aliquid temporibus nulla
          impedit ipsa voluptatum distinctio magni ducimus quibusdam laborum
          accusantium fugit expedita, incidunt eligendi architecto?
        </p>
      </div>
    </>
  );
};

export default Homepage;
