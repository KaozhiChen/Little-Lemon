import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ReservationConfirm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [request, setRequest] = useState('');
  const guests = useSelector((state) => state.guests);
  const date = useSelector((state) => state.date);
  const time = useSelector((state) => state.time);
  const handle = () => {
    console.log(date, time);
  };

  return (
    <>
      <button onClick={handle}>dianji</button>
      <div className='bg-green-600 py-4'>
        <h1 className='text-center font-semibold text-xl text-gray-100'>
          Reservation Details
        </h1>
      </div>
      <div className='px-4'>
        <div className='bg-green-600 my-4 rounded-lg px-4 py-8 flex items-center justify-between'>
          <div className='flex flex-col items-center px-8 py-4 bg-yellow-300 text-gray-100 font-bold rounded-lg'>
            <span>{date}</span>
            <span>{time}</span>
          </div>
          <div className='text-gray-200 font-semibold ml-2'>
            <h2 className='text-2xl'>Little Lemon</h2>
            <p>
              <span>{date}</span> <span>{time}</span>
            </p>
            <div>
              <span className='mr-2'>{guests}</span>customers
            </div>
          </div>
        </div>
        <div>
          <h1 className='text-gray-500 font-semibold text-2xl mb-2'>
            Contact Details
          </h1>
          <div className='max-w-md mx-auto rounded-lg'>
            <form className='bg-white shadow-md rounded px-8 pt-6 pb-8'>
              <div className='mb-4 flex items-center justify-between'>
                <input
                  className='shadow appearance-none border rounded w-[48%]  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='firstName'
                  type='text'
                  placeholder='First Name'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  className='shadow appearance-none border rounded w-[48%]  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='lastName'
                  type='text'
                  placeholder='Last Name'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className='mb-4'>
                <input
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='date'
                  type='text'
                  placeholder='Phone Number'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className='mb-6'>
                <input
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='email'
                  type='text'
                  value={email}
                  placeholder='Email Address'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='mb-6'>
                <textarea
                  className='shadow h-40 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='request'
                  type='text'
                  value={request}
                  placeholder='Add special request...'
                  onChange={(e) => setRequest(e.target.value)}
                />
              </div>

              <div className='flex justify-between items-center'>
                <Link
                  className='flex-grow flex items-center justify-center'
                  to='/'
                >
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
        </div>
      </div>
    </>
  );
};

export default ReservationConfirm;
