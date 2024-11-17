import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    phone: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear the error for this field
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, phone, password } = formData;
    let hasError = false;
    let newErrors = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email address.';
      hasError = true;
    }

    // Phone number validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      newErrors.phone = 'Phone number must be 10 digits.';
      hasError = true;
    }

    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      newErrors.password =
        'Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character.';
      hasError = true;
    }

    setErrors(newErrors);

    if (!hasError) {
      // If all validations pass, navigate to the login page
      alert('Registration successful!');
      navigate('/'); // Redirect to the login page
    }
  };

  return (
    <div className='w-full h-screen flex items-center justify-center tracking-wider'>
      <div className='w-11/12 sm:w-5/12 md:w-3/12 text-sm glass'>
        <div className='w-full text-center my-3'>
          <h2 className='text-2xl text-black font-medium'>Safe Crypto Stocks</h2>
          <h2 className='text-2xl text-black'>Register</h2>
          <div>
            <form className='my-2' onSubmit={handleSubmit}>
              <div className='flex border-b-black border-b-2 mx-5 my-7 py-1'>
                <input
                  type='text'
                  className='w-11/12 bg-transparent outline-none placeholder-black'
                  placeholder='First Name'
                  name='firstName'
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <div className='w-2/12 flex items-center justify-center'>
                  <i className='fa-solid fa-user text-xl'></i>
                </div>
              </div>
              <div className='flex border-b-black border-b-2 mx-5 my-7 py-1'>
                <input
                  type='text'
                  className='w-11/12 bg-transparent outline-none placeholder-black'
                  placeholder='Last Name'
                  name='lastName'
                  value={formData.lastName}
                  onChange={handleChange}
                />
                <div className='w-2/12 flex items-center justify-center'>
                  <i className='fa-solid fa-user text-xl'></i>
                </div>
              </div>
              <div className='flex flex-col mx-5 my-7'>
                <div className='flex border-b-black border-b-2 py-1'>
                  <input
                    type='email'
                    className='w-11/12 bg-transparent outline-none placeholder-black'
                    placeholder='Email Id'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <div className='w-2/12 flex items-center justify-center'>
                    <i className='fa-solid fa-envelope text-xl'></i>
                  </div>
                </div>
                {errors.email && (
                  <p className='text-red-500 text-xs mt-1 text-left'>{errors.email}</p>
                )}
              </div>
              <div className='flex flex-col mx-5 my-7'>
                <div className='flex border-b-black border-b-2 py-1'>
                  <input
                    type='tel'
                    className='w-11/12 bg-transparent outline-none placeholder-black'
                    placeholder='Phone Number'
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  <div className='w-2/12 flex items-center justify-center'>
                    <i className='fa-solid fa-phone text-xl'></i>
                  </div>
                </div>
                {errors.phone && (
                  <p className='text-red-500 text-xs mt-1 text-left'>{errors.phone}</p>
                )}
              </div>
              <div className='flex flex-col mx-5 my-7'>
                <div className='flex border-b-black border-b-2 py-1'>
                  <input
                    type='password'
                    className='w-11/12 bg-transparent outline-none placeholder-black'
                    placeholder='Password'
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <div className='w-2/12 flex items-center justify-center'>
                    <i className='fa-solid fa-lock text-xl'></i>
                  </div>
                </div>
                {errors.password && (
                  <p className='text-red-500 text-xs mt-1 text-left'>{errors.password}</p>
                )}
              </div>
              <div className='mx-5 my-7 py-2'>
                <button className='bg-black w-full h-[35px] rounded-sm text-white'>
                  Register
                </button>
              </div>
              <div className='mx-5 my-5 py-2 flex items-center justify-center'>
                <p className='text-sm'>
                  Already have an account?<Link to='/'> Login</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
