import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Resetpassword() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to reset the password (API call or validation)
    alert('Password Changed successfully :)'); // Optional: Success feedback
    navigate('/'); // Redirect to login page
  };

  return (
    <div className='w-full h-screen flex items-center justify-center tracking-wider'>
      <div className='w-11/12 sm:w-5/12 md:w-3/12 text-sm glass'>
        <div className='w-full text-center my-3'>
          <h2 className='text-2xl text-black font-medium'>Safe Crypto Stocks</h2>
          <h2 className='text-2xl text-black'>Reset Password</h2>
          <div>
            <form className='my-2' onSubmit={handleSubmit}>
              <div className='flex border-b-black border-b-2 mx-5 my-7 py-1'>
                <input
                  type='password'
                  className='w-11/12 bg-transparent outline-none placeholder-black'
                  placeholder='Enter Password'
                  required
                />
                <div className='w-2/12 flex items-center justify-center'>
                  <i className='fa-solid fa-lock text-xl'></i>
                </div>
              </div>

              <div className='flex border-b-black border-b-2 mx-5 my-7 py-1'>
                <input
                  type='password'
                  className='w-11/12 bg-transparent outline-none placeholder-black'
                  placeholder='Confirm Password'
                  required
                />
                <div className='w-2/12 flex items-center justify-center'>
                  <i className='fa-solid fa-lock text-xl'></i>
                </div>
              </div>

              <div className='mx-5 my-7 py-2'>
                <button className='bg-black w-full h-[35px] rounded-sm text-white'>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
