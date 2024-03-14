import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Reservations = () => {
  const [guests, setGuests] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  return (
    <>
      <div className='max-w-md mx-auto rounded-lg'>
        <form className='bg-white shadow-md rounded px-8 pt-6 pb-8'>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='guests'
            >
              Guests
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='guests'
              type='text'
              placeholder='Number of guests'
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='date'
            >
              Date
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='date'
              type='date'
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className='mb-6'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='time'
            >
              Time
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='time'
              type='time'
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          <div className='flex justify-between items-center'>
            <Link className='flex-grow flex items-center justify-center' to='/'>
              <button
                className='bg-yellow-300 rounded-3xl font-bold text-gray-600 py-2 px-4 mr-4'
                style={{ minWidth: '120px' }}
              >
                Cancel
              </button>
            </Link>
            <Link
              className='flex-grow flex items-center justify-center'
              to='/reservation-confirm'
            >
              <button
                className='bg-yellow-300 rounded-3xl font-bold text-gray-600 py-2 px-4'
                style={{ minWidth: '120px' }}
              >
                Next
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Reservations;
