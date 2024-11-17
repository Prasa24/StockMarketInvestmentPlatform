import React from 'react';
import { Link,useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login validation or API request here
    // If login is successful, navigate to the dashboard
    navigate('/dashboard');
  };
  return (
    <div className='w-full h-screen flex items-center justify-center tracking-wider'>
      <div className='w-11/12 sm:w-5/12 md:w-3/12 text-sm glass'>
      <div className='w-full text-center my-3'>
            <h2 className='text-2xl text-black font-medium'>Safe Crypto Stocks</h2>
            <h2 className='text-2xl text-black '>Login</h2>
            <div>
                <form className="my-2" onSubmit={handleLogin}>
        
                  <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">
                    <input type="email" className="w-11/12 bg-transparent outline-none placeholder-black" placeholder='Email Id' required/>
                    <div className="w-2/12 flex items-center justify-center">
                      <i class="fa-solid fa-envelope text-xl"></i>
                    </div>   
                  </div>

                  <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">
                    <input type="password" className="w-11/12 bg-transparent outline-none placeholder-black" placeholder='Password' required/>
                    <div className="w-2/12 flex items-center justify-center">
                    <i class="fa-solid fa-lock text-xl"></i>
                    </div>   
                  </div>
                  <div className='mx-5 flex items-cemter justify-end cursor-pointer tracking-wider text-xs'>
                    <p><Link to='/forgotpassword'> Forgot Password </Link></p>
                  </div>
                  <div className="mx-5 my-7 py-2">
                        <button   className="bg-black w-full h-[35px] rounded-sm text-white">
                          Login

                        </button>
                  </div>
                  <div className="mx-5 my-5 py-2 flex items-center justify-center">
                    <p className="text-sm"> Don't have an account? <Link to='/register'> Register</Link></p>
                  </div>
                </form>
            </div>
      </div>
    </div>
    </div>
   
  )
}
