import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Reservations = () => {
  const [guests, setGuests] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const dispatch = useDispatch();
  const handleNext = () => {
    // 将数据存储到Redux store中
    dispatch({ type: 'SET_GUESTS', payload: guests });
    dispatch({ type: 'SET_DATE', payload: date });
    dispatch({ type: 'SET_TIME', payload: time });
  };

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
              onClick={handleNext}
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
