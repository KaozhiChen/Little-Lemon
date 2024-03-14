import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Dialog from '../components/Dialog';

const ReservationConfirm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [request, setRequest] = useState('');
  const [showDialog, setShowDialog] = useState(false);

  const dispatch = useDispatch();

  const guests = useSelector((state) => state.guests);
  const date = useSelector((state) => state.date);
  const time = useSelector((state) => state.time);

  const handleNext = () => {
    // 将所有信息存储到Redux store中
    dispatch({ type: 'SET_GUESTS', payload: guests });
    dispatch({ type: 'SET_DATE', payload: date });
    dispatch({ type: 'SET_TIME', payload: time });
    dispatch({ type: 'SET_FIRST_NAME', payload: firstName });
    dispatch({ type: 'SET_LAST_NAME', payload: lastName });
    dispatch({ type: 'SET_PHONE', payload: phone });
    dispatch({ type: 'SET_EMAIL', payload: email });
    dispatch({ type: 'SET_REQUEST', payload: request });
    setShowDialog(true);
  };
  const handleConfirm = () => {
    setShowDialog(false);
  };

  return (
    <>
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
        </div>
      </div>
      <Dialog isOpen={showDialog} onClose={() => setShowDialog(false)}>
        {/* 对话框内容 */}

        <div className=' max-w-[90%] space-y-1 flex flex-col items-start'>
          <h2>
            <span className='font-semibold mr-4'>Time:</span>
            {date + ' ' + time}
          </h2>
          <p>
            <span className='font-semibold mr-4'>First Name:</span> {firstName}
          </p>
          <p>
            <span className='font-semibold mr-4'>Last Name:</span> {lastName}
          </p>
          <p>
            <span className='font-semibold mr-4'>Phone:</span> {phone}
          </p>
          <p>
            <span className='font-semibold mr-4'>Email:</span> {email}
          </p>
          <div className=' whitespace-normal'>
            <span className='font-semibold mr-4 '>Special Request:</span>
            <p>{request}</p>
          </div>
        </div>

        {/* 其他需要显示的内容 */}
        {/* 在这里添加你想要在对话框中显示的信息 */}

        {/* 操作按钮 */}
        <div className='flex justify-center mt-6 '>
          <button
            onClick={handleConfirm}
            className='bg-yellow-300 rounded-3xl font-bold text-gray-600 py-2 px-4'
          >
            Confirm
          </button>
        </div>
      </Dialog>
    </>
  );
};

export default ReservationConfirm;