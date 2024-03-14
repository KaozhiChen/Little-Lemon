import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Reservations = () => {
  const [guests, setGuests] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guestsError, setGuestsError] = useState('');
  const [dateError, setDateError] = useState('');
  const [timeError, setTimeError] = useState('');

  const dispatch = useDispatch();

  const handleGuestsChange = (e) => {
    const inputValue = e.target.value;
    setGuests(inputValue);

    if (
      inputValue === '' ||
      isNaN(inputValue) ||
      inputValue < 1 ||
      inputValue > 8
    ) {
      setGuestsError('Please enter a valid number of guests (1-8).');
    } else {
      setGuestsError('');
    }
  };

  const handleDateChange = (e) => {
    const inputValue = e.target.value;
    setDate(inputValue);
    if (inputValue === '') {
      setDateError('Please enter a valid date.');
    } else {
      setDateError('');
    }
  };

  const handleTimeChange = (e) => {
    const inputValue = e.target.value;
    setTime(inputValue);
    if (inputValue === '') {
      setTimeError('Please enter a valid time.');
    } else {
      setTimeError('');
    }
  };

  const isFormValid =
    guests !== '' &&
    date !== '' &&
    time !== '' &&
    !guestsError &&
    !dateError &&
    !timeError;

  const handleNext = () => {
    if (!isFormValid) {
      alert('Please fill in all fields correctly.');
      return;
    }

    // 将数据存储到 Redux store 中
    dispatch({ type: 'SET_GUESTS', payload: guests });
    dispatch({ type: 'SET_DATE', payload: date });
    dispatch({ type: 'SET_TIME', payload: time });
  };

  return (
    <>
      <div className='max-w-md mx-auto rounded-lg sm:my-20'>
        <form className='bg-white shadow-md rounded px-8 pt-6 pb-8'>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='guests'
            >
              Guests
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                guestsError ? 'border-red-500' : ''
              }`}
              id='guests'
              type='number'
              placeholder='Number of guests'
              value={guests}
              onChange={handleGuestsChange}
            />
            {guestsError && (
              <p className='text-red-500 text-xs italic'>{guestsError}</p>
            )}
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='date'
            >
              Date
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                dateError ? 'border-red-500' : ''
              }`}
              id='date'
              type='date'
              value={date}
              onChange={handleDateChange}
            />
            {dateError && (
              <p className='text-red-500 text-xs italic'>{dateError}</p>
            )}
          </div>
          <div className='mb-6'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='time'
            >
              Time
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                timeError ? 'border-red-500' : ''
              }`}
              id='time'
              type='time'
              value={time}
              onChange={handleTimeChange}
            />
            {timeError && (
              <p className='text-red-500 text-xs italic'>{timeError}</p>
            )}
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
            <Link to='/reservation-confirm'>
              <button
                className={
                  isFormValid
                    ? 'rounded-3xl font-bold text-gray-600 py-2 px-4 bg-yellow-300'
                    : 'rounded-3xl font-bold text-gray-600 py-2 px-4 bg-gray-400'
                }
                style={{ minWidth: '120px' }}
                onClick={handleNext}
                disabled={!isFormValid}
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
